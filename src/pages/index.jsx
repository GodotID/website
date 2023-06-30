import { useRef, useState } from 'react';
import PageScroll from 'react-page-scroll'

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'
import Visi from 'components/Visi'

const Homepage = () => {
	let [progress, setProgress] = useState("0%");
	function handleScroll({ targetIndex }) {
		// Excluding <Hero />
		// TODO: Algorithmically get sectionCount
		const sectionCount = 1;

		setProgress(Math.ceil(targetIndex/sectionCount*100) + '%');
	}

	return (
		<div className="homepage__homepage">
			<NavBar />
			<div className="homepage__content">
				<Sidebar progress={progress} />
				<PageScroll className="homepage__main" onScrollStart={handleScroll}>
					<Hero />
					<Visi />
				</PageScroll>
			</div>
		</div>
	);
};

export default Homepage;
