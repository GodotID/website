import { useState } from 'react';

import 'styles/components/hero.css'

const styles = {
	main: {
		padding: "15% 6em",
		height: "100vh"
	},
	header: {
		backgroundImage: "var(--primary-header-text)",
		fontWeight: 700,
		fontSize: "10rem",
		margin: 0,
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent"
	},
	text: {
		color: "var(--primary-text)"
	}
};

const Hero = () => {
	return (
		<div style={styles.main}>
			<h2 style={styles.header}>
				Visi
			</h2>
			<p style={styles.text}>
				{/* TODO: Fiksasi visi komunitas */}
				Menjadi pembimbing budaya penggunaan dan pembuatan<br />
				media hiburan virtual bagi generasi muda Indonesia<br />
				khususnya untuk perangkat lunak 'Godot Engine'.
			</p>
		</div>
	);
};

export default Hero;
