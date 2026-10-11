#!/usr/bin/env node
/**
 * Build the gallery dataset from the itch.io Nusantara Game Jam submissions.
 *
 * The four Nusantara Game Jam editions are the game jams this community has
 * hosted. This script walks each jam's submission page, then each submitted
 * game page, and produces two things:
 *
 *   1. src/misc/gallery.generated.json, the dataset the gallery page imports.
 *   2. public/gallery/<slug>.<ext>, the cover art, which Vite copies into
 *      dist/ and therefore onto the gh-pages branch on every deploy.
 *
 * It runs in CI before the build. Every failure mode is non fatal on purpose:
 * a single game that cannot be read falls back to its remote cover URL, and a
 * run that cannot read a jam at all exits 0 without touching the committed
 * snapshot, so the checked in JSON keeps the site working.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_JSON = path.join(ROOT, 'src', 'misc', 'gallery.generated.json');
const OUT_DIR = path.join(ROOT, 'public', 'gallery');

const JAMS = [
	{
		slug: 'nusantara-game-jam-perdana',
		name: 'Nusantara Game Jam: Perdana',
		url: 'https://itch.io/jam/nusantara-game-jam-perdana/entries',
	},
	{
		slug: 'nusantara-game-jam-spesial',
		name: 'Nusantara Game Jam: Spesial',
		url: 'https://itch.io/jam/nusantara-game-jam-spesial/entries',
	},
	{
		slug: 'nusantara-game-jam-3',
		name: 'Nusantara Game Jam 3',
		url: 'https://itch.io/jam/nusantara-game-jam-3/entries',
	},
	{
		slug: 'nusantara-game-jam-4',
		name: 'Nusantara Game Jam 4',
		url: 'https://itch.io/jam/nusantara-game-jam-4/entries',
	},
];

// Every submission on a jam page sits in a cell carrying this exact class list.
const CELL_MARK = 'class="game_cell index_game_cell_widget"';

const CONCURRENCY = 2;
const MAX_DESC = 200;
const RETRIES = 4;
const REQUEST_DELAY = 150;

const HEADERS = {
	'user-agent': 'GodotID-website-gallery-bot/1.0 (+https://github.com/GodotID/website)',
	'accept-language': 'en-US,en;q=0.9,id;q=0.8',
};

const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'gif', 'webp', 'avif']);

const log = (message) => console.log(`[gallery] ${message}`);
const warn = (message) => console.warn(`[gallery] ${message}`);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * itch.io rate limits bursts, so requests are spaced out and retried with
 * exponential backoff. A 4xx other than 429 is treated as final, because
 * retrying a genuinely missing page only wastes time.
 */
async function fetchWithRetry(url) {
	let lastError;

	for (let attempt = 0; attempt <= RETRIES; attempt += 1) {
		await sleep(REQUEST_DELAY * (attempt + 1));

		let res;
		try {
			res = await fetch(url, { headers: HEADERS, redirect: 'follow' });
		} catch (err) {
			lastError = err;
			continue;
		}

		if (res.ok) return res;

		lastError = new Error(`${res.status} ${res.statusText}`);
		if (res.status !== 429 && res.status < 500) break;
	}

	throw lastError;
}

async function fetchText(url) {
	const res = await fetchWithRetry(url);
	return res.text();
}

async function downloadImage(url, dest) {
	const res = await fetchWithRetry(url);
	const buffer = Buffer.from(await res.arrayBuffer());
	await writeFile(dest, buffer);
	return buffer;
}

/**
 * Read the intrinsic pixel size straight out of the file header, so the gallery
 * can reserve the exact box each cover needs before it finishes loading. Covers
 * come back as PNG or JPEG, GIF is cheap to support alongside them, and anything
 * else simply reports no size and the card falls back to the CSS default.
 */
function imageSize(buffer) {
	if (buffer.length >= 24 && buffer.toString('latin1', 1, 4) === 'PNG') {
		return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
	}

	if (buffer.length >= 10 && buffer.toString('latin1', 0, 3) === 'GIF') {
		return { width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
	}

	if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
		let offset = 2;

		while (offset + 9 <= buffer.length) {
			if (buffer[offset] !== 0xff) {
				offset += 1;
				continue;
			}

			const marker = buffer[offset + 1];
			const isStartOfFrame = marker >= 0xc0 && marker <= 0xcf
				&& marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

			if (isStartOfFrame) {
				return {
					width: buffer.readUInt16BE(offset + 7),
					height: buffer.readUInt16BE(offset + 5),
				};
			}

			offset += 2 + buffer.readUInt16BE(offset + 2);
		}
	}

	return null;
}

/** Read one attribute out of an already captured attribute string. */
function attr(attrs, name) {
	const quoted = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i').exec(attrs)
		|| new RegExp(`\\b${name}\\s*=\\s*'([^']*)'`, 'i').exec(attrs);
	return quoted ? quoted[1] : null;
}

function stripTags(value) {
	return value.replace(/<[^>]*>/g, '');
}

function decodeEntities(value) {
	return value
		.replace(/&nbsp;/g, ' ')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
		.replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
		.replace(/&amp;/g, '&');
}

function cleanText(value) {
	return decodeEntities(stripTags(value))
		.replace(/\s+/g, ' ')
		.replace(/\s*Play in (your |the )?browser\.?$/i, '')
		.trim();
}

function truncate(value, max) {
	return value.length > max ? `${value.slice(0, max - 3).trimEnd()}...` : value;
}

/** Pull a `<meta property|name="key" content="...">` value regardless of attribute order. */
function metaContent(html, key) {
	for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
		const name = attr(tag, 'property') || attr(tag, 'name');
		if (name && name.toLowerCase() === key.toLowerCase()) {
			return attr(tag, 'content');
		}
	}
	return null;
}

/**
 * itch.io has no description field of its own, so when a game ships without one
 * the og:description is synthesised from its tags or from the jam name. Those
 * values read as noise in a gallery card, so they are treated as missing and
 * the card simply renders without a description.
 */
function looksDegenerate(text) {
	if (!text) return true;
	if (/^play in (your |the )?browser\.?$/i.test(text)) return true;
	if (/^(#[^\s]+\s*)+$/.test(text)) return true;
	if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(text)) return true;
	if (/^nusantara game jam/i.test(text) && text.length < 40) return true;
	return false;
}

function slugify(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'game';
}

function slugFromUrl(gameUrl) {
	try {
		const segments = new URL(gameUrl).pathname.replace(/^\/+|\/+$/g, '').split('/');
		return slugify(segments[segments.length - 1] || gameUrl);
	} catch {
		return slugify(gameUrl);
	}
}

function extensionFromUrl(imageUrl) {
	try {
		const match = /\.([a-z0-9]+)$/i.exec(new URL(imageUrl).pathname);
		const ext = match && match[1].toLowerCase();
		if (ext && IMAGE_EXTENSIONS.has(ext)) return ext === 'jpeg' ? 'jpg' : ext;
	} catch {
		// Fall through to the default extension.
	}
	return 'png';
}

/** One submission cell, reduced to title, author and game URL. */
function parseCell(segment, jam) {
	const anchors = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;

	let url = null;
	let title = null;
	let author = null;
	let match;

	while ((match = anchors.exec(segment)) !== null) {
		const attrs = match[1];
		const classes = (attr(attrs, 'class') || '').split(/\s+/);
		const href = attr(attrs, 'href');
		const text = cleanText(match[2]);

		if (classes.includes('game_thumb') && href && !url) url = href;

		if (classes.includes('title') && text && !title) {
			title = text;
			if (!url && href) url = href;
		}

		if (classes.includes('user_link') && text && !author) author = text;
	}

	if (!title || !url) return null;

	return {
		title,
		author: author || 'Tanpa nama',
		url,
		jam: jam.name,
		jamSlug: jam.slug,
	};
}

function parseEntries(html, jam) {
	return html
		.split(CELL_MARK)
		.slice(1)
		.map((segment) => parseCell(segment, jam))
		.filter(Boolean);
}

async function mapLimit(items, limit, worker) {
	const results = new Array(items.length);
	let cursor = 0;

	const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
		while (cursor < items.length) {
			const index = cursor;
			cursor += 1;
			results[index] = await worker(items[index]);
		}
	});

	await Promise.all(runners);
	return results;
}

async function enrich(entry) {
	const slug = slugFromUrl(entry.url);

	let desc = '';
	let remoteCover = null;

	try {
		const html = await fetchText(entry.url);
		const summary = cleanText(metaContent(html, 'og:description') || '');
		desc = looksDegenerate(summary) ? '' : truncate(summary, MAX_DESC);
		remoteCover = metaContent(html, 'og:image') || metaContent(html, 'twitter:image');
	} catch (err) {
		warn(`could not read ${entry.url} (${err.message})`);
	}

	let cover = '';
	let size = null;

	if (remoteCover) {
		const filename = `${slug}.${extensionFromUrl(remoteCover)}`;
		try {
			const buffer = await downloadImage(remoteCover, path.join(OUT_DIR, filename));
			cover = `/gallery/${filename}`;
			size = imageSize(buffer);
		} catch (err) {
			warn(`cover download failed for ${slug} (${err.message}), using the remote url`);
			cover = remoteCover;
		}
	} else {
		warn(`no cover art found for ${slug}`);
	}

	return {
		title: entry.title,
		author: entry.author,
		url: entry.url,
		jam: entry.jam,
		jamSlug: entry.jamSlug,
		desc,
		img: cover,
		imgFallback: remoteCover || '',
		width: size ? size.width : null,
		height: size ? size.height : null,
	};
}

async function main() {
	await mkdir(OUT_DIR, { recursive: true });

	const submissions = [];

	for (const jam of JAMS) {
		const html = await fetchText(jam.url);
		const entries = parseEntries(html, jam);

		if (entries.length === 0) {
			throw new Error(`no submissions matched on ${jam.url}, the page markup may have changed`);
		}

		log(`${jam.name}: ${entries.length} submissions`);
		submissions.push(...entries);
	}

	const enriched = await mapLimit(submissions, CONCURRENCY, enrich);
	const localCovers = enriched.filter((entry) => entry.img.startsWith('/gallery/')).length;

	await writeFile(OUT_JSON, `${JSON.stringify(enriched, null, '\t')}\n`);
	log(`wrote ${enriched.length} entries (${localCovers} local covers) to ${path.relative(ROOT, OUT_JSON)}`);
}

main().catch((err) => {
	warn(`run aborted: ${err.message}`);
	warn('the committed snapshot at src/misc/gallery.generated.json is left untouched');
	process.exit(0);
});
