import { useState } from 'react';

import 'styles/components/hero.css'
import 'styles/components/visimisi.css'

// TODO: Do not make it straightforward that we wanted to tell our vision and mission, use naratives
const Hero = () => {
	return (
		<div id="visi" className="visimisi__main">
			<h2 className="visimisi__header">
				Visi
			</h2>
			<p className="visimisi__text">
				{/* TODO: Fiksasi visi komunitas */}
				Menjadi pembimbing budaya penggunaan dan pembuatan<br />
				media hiburan virtual bagi generasi muda Indonesia<br />
				khususnya untuk perangkat lunak 'Godot Engine'.
			</p>
		</div>
	);
};

export default Hero;
