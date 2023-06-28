import { useState } from 'react';

import { Mouse, MoveDown } from 'lucide-react';

import 'styles/components/sidebar.css'

const Sidebar = () => {
	let [progress, setProgress] = useState(0);
	
	return (
		<div className="sidebar__wrapper">
			<div className="sidebar__mouse">
				<MoveDown />
				<Mouse />
			</div>
			<div className="sidebar__progress" style={{ height: progress }}>
				
			</div>
		</div>
	);
};

export default Sidebar;
