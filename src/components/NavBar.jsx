import { useState } from 'react';

import 'styles/components/navbar.css'

import { ReactComponent as GodotIDLogo } from 'misc/imgs/logo.svg'

const NavBar = () => {
	return (
		<div className="navbar__navbar">
			<div className="navbar__logoWrapper">
				<GodotIDLogo />
			</div>
			<div className="navbar__spaceWrapper">
				<h3>Godot Indonesia</h3>
				<div className="navbar__linksWrapper">
					<a href="#">Profil</a>
					<a href="#">Kompetisi</a>
					<a href="#">Galeri</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
