# GodotID Website
[![Deploy GitHub Pages](https://github.com/GodotID/website/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/GodotID/website/actions/workflows/gh-pages.yml)

Situs komunitas Godot Indonesia.

## Pengembangan

```sh
pnpm install
pnpm dev
```

## Galeri

Halaman galeri menampilkan karya yang dikirim ke Nusantara Game Jam, yaitu
game jam yang diselenggarakan komunitas ini.

Datanya berasal dari itch.io. `scripts/fetch-gallery.mjs` membaca halaman
submission setiap edisi jam, lalu membuka halaman tiap game untuk mengambil
sampul dan deskripsinya. Hasilnya dua hal:

- `src/misc/gallery.generated.json`, dataset yang diimpor halaman galeri.
- `public/gallery/<slug>.<ext>`, berkas sampul, yang disalin Vite ke `dist/`
  sehingga ikut terunggah ke branch `gh-pages` setiap kali deploy.

Skrip ini berjalan di CI sebelum `pnpm build`. Seluruh kegagalannya sengaja
tidak fatal: satu game yang gagal dibaca hanya memakai URL sampul jarak jauh,
dan satu jam yang gagal dibaca membuat skrip berhenti dengan kode 0 tanpa
menyentuh snapshot yang sudah di-commit, sehingga situs tetap tampil.

Untuk memperbarui datanya secara manual:

```sh
pnpm gallery
```

Sampul yang diunduh masuk ke `public/gallery/` yang diabaikan git. Snapshot
JSON-nya di-commit, jadi `pnpm build` biasa tetap menghasilkan galeri yang
lengkap walaupun skripnya tidak dijalankan.
