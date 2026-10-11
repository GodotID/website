import { memo } from 'react';

import 'styles/components/visimisi.css'

const Visi = () => {
	return (
		<>
			<h2 className="visimisi__header">
				Visi
			</h2>
			<p className="visimisi__text">
				Indonesia harus menjadi negara pemain dan pencipta video game.
				Selama ini posisi kita lebih sering berhenti sebagai penonton yang
				menghabiskan karya dari luar, padahal bakat untuk membangunnya sudah
				tersebar di banyak kota di negeri ini.<br className="br-desktop" />
				Yang belum lengkap bukan kemampuannya, melainkan wadah yang
				mempertemukan bakat itu dengan alat yang tepat dan orang-orang yang
				mau belajar bersama.
			</p>
			<p className="visimisi__text">
				Dari situlah Godot Indonesia tumbuh, dengan visi menjadi pembimbing
				budaya penggunaan dan pembuatan media hiburan virtual bagi generasi
				muda Indonesia,<br className="br-desktop" />
				khususnya lewat perangkat lunak Godot Engine.
			</p>
		</>
	);
};

export default memo(Visi);
