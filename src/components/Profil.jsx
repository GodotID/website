import { useState } from 'react';

import 'styles/components/profil.css'
import godotidjpg from 'misc/imgs/godot_indonesia.jpg'

const Profil = () => {
	return (
		<div id="profil" className="profil__main">
			<div className="profil__left">
				<h2 className="profil__header">
					Profil Godot Indonesia
				</h2>
				<p className="profil__text">
					Berawal dari bulan Januari tahun 2021 sebagai sebuah group Telegram
					biasa. Kemudian pada bulan Maret 2021 menjadi komunitas yang
					memiliki komitmen untuk memajukan generasi muda bangsa Indonesia
					pada dunia teknik informasi.
				</p>
				<p className="profil__text">
					Komunitas Godot Indonesia mendukung kreatifitas anak muda Indonesia
					dengan menyediakan perlombaan, forum diskusi, dan berbagai kesempatan
					berkontribusi lainnya.
				</p>
			</div>
			<div className="profil__right">
				<img className="profil__right__image" src={godotidjpg}></img>
			</div>
		</div>
	);
};

export default Profil;
