// Modules
import React from 'react'
import Head from 'next/head'

// Components
import NavBar from './NavBar'
import Footer from './Footer'

interface PageProps {
	title?: string;
	children?: React.ReactNode;
}

export default function Page({ title = "", children }: PageProps) {
	return (
	<>
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" key="responsive" />
			<meta property="og:title" content={title} key="title" />
		</Head>
		<NavBar/>
		{children}
		<Footer />
	</>
	);
}
