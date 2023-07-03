import { useState } from 'react';

import 'styles/components/hero.css'
import 'styles/components/visimisi.css'

const Hero = () => {
	return (
		<div className="visimisi__main">
			<h2 className="visimisi__header">
				Misi
			</h2>
			<ul className="visimisi__text">
				<li>
					<b>Generasi muda proaktif</b>
					<p>
						Pengadaan peran dan peluang bagi generasi muda Indonesia<br/>
						melalui program perlombaan dan sukarelawan.
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Hero;
