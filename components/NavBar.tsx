// Modules
import React from 'react'

// Components
import Link from './Primitives/Link'
import Flex from './Primitives/Flex'

// Styles
import style from './NavBar.module.scss'

export default function NavBar() {
	return (
		<Flex className={style.NavBar} spacebetween="true" verticalcenter="true" width={-2}>
			<h3>GodotID</h3>
			<Flex gap={4}>
				<Link href="/">Home</Link>
				<Link href="/gallery">Gallery</Link>
				<Link href="/redirect?to=https://itch.io/jams/hosted-by-hanzhaxors">Game Jams</Link>
				<Link href="/budget">Budget</Link>
				<Link href="/team">Contributors</Link>
			</Flex>
			<Link href="https://t.me/godot_indonesia">
				Join Us
			</Link>
		</Flex>
	);
}
