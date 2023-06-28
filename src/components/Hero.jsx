import { useState } from 'react';

import 'styles/components/hero.css'

const Hero = () => {
	return (
		<div className="hero__hero">
			<h1 className="hero__headline">
				Komunitas Developer Game<br/>
				Engine Godot #1 di Indonesia
			</h1>
			<p>
				Bergabung bersama lebih dari 200 godotters dan<br/>
				ikuti berbagai event menarik!
			</p>
		</div>
	);
};

export default Hero;
