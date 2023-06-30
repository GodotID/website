import { useState } from 'react';

import { Mouse, MoveDown } from 'lucide-react';

import 'styles/components/sidebar.css'
import 'styles/components/navbar.css'

import { ReactComponent as GodotIDLogo } from 'misc/imgs/logo.svg'

const Sidebar = ({ progress }) => {
	return (
		<div className="sidebar__wrapper">
			<div className="sidebar__mouse">
				<MoveDown />
				<Mouse />
			</div>
			<div className="sidebar__progress" style={{ height: progress }}>
				<div className="sidebar__mouse" style={{ color: "var(--secondary-text)" }}>
					<MoveDown />
					<Mouse />
				</div>
				<div className="navbar__logoWrapper" style={{ fill: "var(--secondary-text)" }}>
					<GodotIDLogo />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
