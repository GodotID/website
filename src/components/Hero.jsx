import { useState } from 'react';

import 'styles/components/hero.css'

const Hero = () => {
	return (
		<div id="hero" className="hero__hero">
			<h1 className="hero__headline">
				Komunitas Game Developer<br className="br-desktop"/>
				Godot Engine #1 di Indonesia
			</h1>
			<p>
				Bergabung bersama lebih dari 900 godotters dan<br className="br-desktop"/>
				ikuti berbagai event bersama!
			</p>
			<p className="hero__disclaimer">
				Godot Indonesia is <a href="https://godotengine.org/community/user-groups/">a recognized national community</a> for Godot enthusiasts in Indonesia.
			</p>
		</div>
	);
};

export default Hero;
