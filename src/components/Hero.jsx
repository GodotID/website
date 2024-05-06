import { useState } from 'react';

import 'styles/components/hero.css'

const Hero = () => {
	return (
		<div className="hero__hero">
			<h1 className="hero__headline">
				Komunitas Game Developer<br/>
				Godot Engine #1 di Indonesia
			</h1>
			<p>
				Bergabung bersama lebih dari 450 godotters dan<br/>
				ikuti berbagai event bersama!
			</p>
			<p className="hero__disclaimer">
				Godot Indonesia is <a href="https://godotengine.org/community/user-groups/">the unofficial national community</a> forum for Indonesia.<br/>
				Godot Engine is courtesy of <a href="https://godotengine.org">Godot Core Team</a>.
			</p>
		</div>
	);
};

export default Hero;
