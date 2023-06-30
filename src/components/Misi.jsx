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
				Misi
			</h2>
			<ul style={styles.text}>
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
