import { useEffect, useState } from 'react';

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'
import Stats from 'components/Stats'
import Visi from 'components/Visi'
import Misi from 'components/Misi'
import Profil from 'components/Profil'
import Faq from 'components/Faq'
import Footer from 'components/Footer'

// Intended reading order of the homepage sections. A section that is not
// rendered yet is filtered out below, so the order here stays authoritative
// without ever pointing at a missing element.
const SECTION_ORDER = ['hero', 'stats', 'visi', 'misi', 'profil', 'faq'];

function availableSections() {
    return SECTION_ORDER.filter((id) => document.getElementById(id));
}

const Homepage = () => {
	let [progress, setProgress] = useState("0%");

	function handleScroll() {
        const scroller = document.scrollingElement || document.documentElement;
        const scrollable = scroller.scrollHeight - scroller.clientHeight;
        const scrollProgress = scrollable > 0
            ? (scroller.scrollTop / scrollable) * 100
            : 0;
		setProgress(scrollProgress + '%');
	}

    function scrollTo(sectionName) {
        let section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleHashes() {
        let hashval = window.location.hash.slice(1);
        let searchArray = [...hashval.split('?'), ''][1].split('&').map(x => x.split('=', 2));
        let search = {};
        for (let s of searchArray) {
            search[s[0]] = s[1];
        }
        if (!search['content']) search['content'] = 'hero';

        const known = availableSections();
        const target = known.includes(search['content']) ? search['content'] : 'hero';
        scrollTo(target);
    }

    useEffect(() => {
		if (window.location.hash.substring(1)) {
            handleHashes();
		}

        window.addEventListener('scroll', handleScroll);
		window.addEventListener('hashchange', handleHashes);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashes);
        };
	}, []);

	return (
		<div id="homepage" className="homepage__homepage">
			<NavBar/>
			<div className="homepage__content">
				<Sidebar progress={progress} />
				<div className="homepage__main">
					<Hero />
					<Stats />
					<Visi />
					<Misi />
					<Profil />
					<Faq />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
