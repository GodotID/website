import { useState } from 'react';

import 'styles/components/hero.css'
import 'styles/components/visimisi.css'

const Hero = () => {
	return (
		<div className="visimisi__main">
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
