import 'styles/components/footer.css'

import GodotIDLogo from 'misc/imgs/logo.svg?react'

const COMMUNITY_LINKS = [
	{ label: 'Telegram', href: 'https://t.me/godot_indonesia' },
	{ label: 'Discord', href: 'https://discord.gg/8ERNFAdzfJ' },
	{ label: 'GitHub', href: 'https://github.com/GodotID' },
	{ label: 'itch.io', href: 'https://itch.io/jams/hosted-by-hanzceo' },
];

const LEARNING_LINKS = [
	{ label: 'Dokumentasi Godot', href: 'https://docs.godotengine.org' },
	{ label: 'Godot Asset Library', href: 'https://godotengine.org/asset-library/asset' },
	{ label: 'Arsip Game Jam', href: 'https://itch.io/jams/hosted-by-hanzceo' },
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer__footer">
			<div className="footer__columns">
				<div className="footer__column footer__brand">
					<div className="footer__logo">
						<GodotIDLogo style={{ fill: 'var(--primary-text)' }} />
					</div>
					<p className="footer__tagline">
						Platform sosial, sharing, dan pembelajaran bagi game developer
						Godot Engine Indonesia.
					</p>
					<p className="footer__credit">
						Godot Engine is courtesy of{' '}
						<a href="https://godotengine.org" target="_blank" rel="noopener noreferrer">
							Godot Core Team
						</a>.
					</p>
				</div>

				<nav className="footer__column" aria-label="Komunitas">
					<h3 className="footer__heading">Komunitas</h3>
					<ul className="footer__links">
						{COMMUNITY_LINKS.map((link) => (
							<li key={link.href}>
								<a href={link.href} target="_blank" rel="noopener noreferrer">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<nav className="footer__column" aria-label="Sumber belajar">
					<h3 className="footer__heading">Sumber Belajar</h3>
					<ul className="footer__links">
						{LEARNING_LINKS.map((link) => (
							<li key={link.href}>
								<a href={link.href} target="_blank" rel="noopener noreferrer">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="footer__bottom">
				<span>&copy; {year} Godot Indonesia</span>
				<a
					href="https://github.com/GodotID/website/blob/master/CONTRIBUTING.md"
					target="_blank"
					rel="noopener noreferrer"
				>
					Panduan Kontribusi
				</a>
			</div>
		</footer>
	);
};

export default Footer;
