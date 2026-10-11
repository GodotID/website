import { memo } from 'react';

import 'styles/components/visimisi.css'

const MISI_ITEMS = [
	{
		title: 'Generasi muda proaktif',
		body: (
			<>
				Pengadaan peran dan peluang bagi generasi muda Indonesia<br className="br-desktop" />
				melalui program perlombaan dan sukarelawan.
			</>
		),
	},
	{
		title: 'Belajar terbuka',
		body: (
			<>
				Materi, tutorial, dan ruang diskusi kami sediakan dalam bahasa
				Indonesia dan tanpa biaya, karena hambatan bahasa seharusnya
				tidak pernah menjadi alasan seseorang berhenti belajar.
			</>
		),
	},
	{
		title: 'Karya yang tayang',
		body: (
			<>
				Kami mendorong setiap anggota menyelesaikan dan menerbitkan
				karyanya lewat game jam, panggung pameran, dan publikasi
				komunitas, sebab sebuah proyek baru benar-benar selesai ketika
				orang lain sudah bisa memainkannya.
			</>
		),
	},
	{
		title: 'Kolaborasi lintas disiplin',
		body: (
			<>
				Programmer, seniman, penulis, dan komposer kami pertemukan di
				satu ruang kerja yang sama, karena game yang utuh lahir dari
				tangan dengan keahlian yang berbeda-beda.
			</>
		),
	},
	{
		title: 'Jembatan industri',
		body: (
			<>
				Kami membuka jalan antara talenta lokal dan studio game
				nasional, supaya kemampuan yang sudah diasah di komunitas ini
				berujung pada pekerjaan dan karya yang lebih besar.
			</>
		),
	},
];

// Where each mission point lights up along the pinned travel, as a fraction of
// the track. Points light up one after another and stay lit, so scrolling back
// up walks the highlight backwards. Keep the window in sync with
// --vm-item-span in visimisi.css.
const HIGHLIGHT_START = 0.42;
const HIGHLIGHT_STEP = 0.106;

const Misi = () => {
	return (
		<>
			<h2 className="visimisi__header">
				Misi
			</h2>
			<ul className="visimisi__list">
				{MISI_ITEMS.map((item, index) => (
					<li
						className="visimisi__item"
						key={item.title}
						style={{ '--vm-item-start': String(HIGHLIGHT_START + index * HIGHLIGHT_STEP) }}
					>
						<b className="visimisi__itemTitle">{item.title}</b>
						<p className="visimisi__itemText">{item.body}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default memo(Misi);
