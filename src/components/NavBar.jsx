import { useState } from 'react';
import { Link } from 'react-router-dom'

import 'styles/components/navbar.css'

import { ReactComponent as GodotIDLogo } from 'misc/imgs/logo.svg'
import { Menu, X } from 'lucide-react';

const NavBar = ({ color }) => {
    if (!color) color = 'primary';

    let [isClosed, setClose] = useState('navbar__closed');

	return (
		<div className={["navbar__navbar", color].join(' ')}>
			<div className="navbar__logoWrapper">
				<GodotIDLogo style={{ fill: "var(--primary-text)" }} />
			</div>
			<div className="navbar__spaceWrapper">
				<h3>Godot Indonesia</h3>
                <div className="navbar__mobile">
                    <Menu onClick={() => setClose('')}/>
                </div>
				<div className={"navbar__linksWrapper " + isClosed}>
                    <div className='navbar__mobile navbar__mobile__close'>
                        <X onClick={() => setClose('navbar__closed')} />
                    </div>
					<a href="#profil">Profil</a>
					<a href="https://itch.io/jams/hosted-by-hanzceo">Kompetisi</a>
					<Link to="/gallery">Galeri</Link>

					<button onClick={() => window.open("https://t.me/godot_indonesia", "_blank")}>
						Gabung
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
