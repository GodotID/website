import { useReducer, useState } from 'react';

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'

const Homepage = () => {
	return (
		<div className="homepage__homepage">
			<NavBar />
			<div className="homepage__content">
				<Sidebar />
				<div className="homepage__main">
					<Hero />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
