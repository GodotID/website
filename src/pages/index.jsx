import { useRef, useState } from 'react';

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'
import Visi from 'components/Visi'

const Homepage = () => {
	return (
		<div className="homepage__homepage">
			<NavBar />
			<div className="homepage__content">
				<Sidebar />
				<div className="homepage__main">
					<Hero />
					<Visi />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
