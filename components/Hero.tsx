// Modules
import React from 'react'

// Components
import Flex from './Primitives/Flex'
import Link from './Primitives/Link'

// Styles
import style from './Hero.module.scss'

const Hero = (props) => {
	return (
		<Flex className={style.Hero}>
			<Flex direction={1} width={1}>
				<h1>
					Komunitas Game Dev Godot <b>#1 di Indonesia</b>
				</h1>
				<p id="subtitle">
					Gabung bersama lebih dari 200 godotters Indonesia di komunitas GodotID. Ikuti banyak event menarik seperti Game Jam dan webinar yang diselenggarakan oleh komunitas!
				</p>
				<Link href="https://t.me/godot_indonesia">Join Us</Link>
			</Flex>
			<Flex width={1}></Flex>
			<style jsx>{`
				h1 { width: 18ch }
				#subtitle { width: 90% }
			`}</style>
		</Flex>
	);
}


export default Hero