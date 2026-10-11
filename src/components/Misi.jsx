import { useState } from 'react';

import 'styles/components/hero.css'
import 'styles/components/visimisi.css'

const Hero = () => {
	return (
		<div id="misi" className="visimisi__main">
			<h2 className="visimisi__header">
				Misi
			</h2>
			<ul className="visimisi__text">
				<li>
					<b>Generasi muda proaktif</b>
					<p>
						Pengadaan peran dan peluang bagi generasi muda Indonesia<br className="br-desktop" />
						melalui program perlombaan dan sukarelawan.
					</p>
				</li>
				<li>
					<b>Belajar terbuka</b>
					<p>
						Materi, tutorial, dan ruang diskusi kami sediakan dalam bahasa
						Indonesia dan tanpa biaya, karena hambatan bahasa seharusnya
						tidak pernah menjadi alasan seseorang berhenti belajar.
					</p>
				</li>
				<li>
					<b>Karya yang tayang</b>
					<p>
						Kami mendorong setiap anggota menyelesaikan dan menerbitkan
						karyanya lewat game jam, panggung pameran, dan publikasi
						komunitas, sebab sebuah proyek baru benar-benar selesai ketika
						orang lain sudah bisa memainkannya.
					</p>
				</li>
				<li>
					<b>Kolaborasi lintas disiplin</b>
					<p>
						Programmer, seniman, penulis, dan komposer kami pertemukan di
						satu ruang kerja yang sama, karena game yang utuh lahir dari
						tangan dengan keahlian yang berbeda-beda.
					</p>
				</li>
				<li>
					<b>Jembatan industri</b>
					<p>
						Kami membuka jalan antara talenta lokal dan studio game
						nasional, supaya kemampuan yang sudah diasah di komunitas ini
						berujung pada pekerjaan dan karya yang lebih besar.
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Hero;
