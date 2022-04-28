// Modules
import React from 'react'
import Head from 'next/head'

// Components
import NavBar from './NavBar'
import Footer from './Footer'

export default function Page(props) {
	return (
	<React.Fragment>
		<Head>
			<title>{props.title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" key="responsive" />
			<meta property="og:title" content={props.title} key="title" />
		</Head>
		<NavBar />
		{props.children}
		<Footer />
	</React.Fragment>
	);
}
