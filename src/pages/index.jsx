import { useEffect, useState } from 'react';

import 'styles/homepage.css'

import NavBar from 'components/NavBar'
import Sidebar from 'components/Sidebar'
import Hero from 'components/Hero'
import Visi from 'components/Visi'
import Misi from 'components/Misi'
import Profil from 'components/Profil'

const Homepage = () => {
	let [progress, setProgress] = useState("0%");

	function handleScroll() {
        const homepage = document.getElementById('homepage');
        const scrollProgress = document.body.scrollTop / (homepage.scrollHeight - document.body.clientHeight) * 100;
		setProgress(scrollProgress + '%');
	}

    function scrollTo(sectionName) {
        let section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleHashes() {
        let hashval = window.location.hash.substr(1);
        let searchArray = [...hashval.split('?'), ''][1].split('&').map(x => x.split('=', 2));
        let search = {};
        for (let s of searchArray) {
            search[s[0]] = s[1];
        }
        console.log(search)
        if (!search['content']) search['content'] = 'hero';
        scrollTo(hashes.indexOf(search['content']));
    }
	
    useEffect(() => {
		if (window.location.hash.substring(1)) {
            handleHashes();
		}

        window.addEventListener('scroll', handleScroll);
		window.addEventListener('hashchange', handleHashes);
	}, []);

	return (
		<div id="homepage" className="homepage__homepage">
			<NavBar/>
			<div className="homepage__content">
				<Sidebar progress={progress} />
				<div className="homepage__main">
					<Hero />
					<Visi />
					<Misi />
					<Profil />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
