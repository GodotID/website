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
				<li>Memfasilitasi platform dan framework pembelajaran tanpa syarat usia.</li>
				<li>Membuat acara dengan target audiens pecandu game, dengan upaya terapi.</li>
				<li>Mendirikan ekosistem komunitas yang berkelanjutan dengan tidak bergantung pada donasi.</li>
				<li>Memfasilitasi adanya program magang dan sukarelawan.</li>
			</ul>
		</div>
	);
};

export default Hero;
