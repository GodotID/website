// Modules
import React from 'react'

// Components
import Flex from '../components/Primitives/Flex'
import Link from '../components/Primitives/Link'

export default function TestPage() {
	return (
		<React.Fragment>
			<Flex direction={1}>
				<h2>Inline Elements</h2>
				<Link href="/test">Link</Link>
			</Flex>
		</React.Fragment>
	);
}
