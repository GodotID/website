import { useRef, useState } from 'react';
import PageScroll from 'react-page-scroll'
import { redirect } from 'react-router-dom'

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'
import Visi from 'components/Visi'
import Misi from 'components/Misi'
import Profil from 'components/Profil'

const hashes = ['hero', 'visi', 'misi', 'profil'];

const Homepage = () => {
	let [progress, setProgress] = useState("0%");
	function handleScroll({ targetIndex }) {
		// Excluding <Hero />
		// TODO: Algorithmically get sectionCount
		const sectionCount = 3;

		setProgress(Math.ceil(targetIndex/sectionCount*100) + '%');
	}

	let scrollTo = undefined;
	function handleScrollInit({ scrollControl }) {
		scrollTo = scrollControl.scrollTo.bind(scrollControl);

		if (window.location.hash.substr(1)) {
            let hashval = window.location.hash.substr(1);
            if (hashval[0] == '/') {
                redirect(hashval);
            } else {
			    scrollTo(hashes.indexOf(window.location.hash.substr(1)));
            }
		}

		window.addEventListener('hashchange', () => {
			scrollTo(hashes.indexOf(window.location.hash.substr(1)));
		});
	}

	return (
		<div className="homepage__homepage">
			<NavBar/>
			<div className="homepage__content">
				<Sidebar progress={progress} />
				<PageScroll className="homepage__main" onScrollStart={handleScroll} onScrollInit={handleScrollInit}>
					<Hero />
					<Visi />
					<Misi />
					<Profil />
				</PageScroll>
			</div>
		</div>
	);
};

export default Homepage;
