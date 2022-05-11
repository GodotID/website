// Modules
import React from 'react'
import Link from 'next/link'

// Components
import Page from '../components/Page'
import Hero from '../components/Hero'
import Flex from '../components/Primitives/Flex'


function EducationFocusedSection() {
	return (
		<Flex direction={1}>
			<font color="red"><small><b>Education focused community</b></small></font>
			<h2>
				Game development<br/>
				<font color="red">bukan hanya profit,</font><br/>
				kami percaya itu.
			</h2>
			<Flex gap={5}>
				<p>
					Konsep game development untuk profit sangatlah<br/>
					kuno, sistem pay-to-win didalam industri gaming<br/>
					sudah sangat terkenal sebagai sistem yang tidak baik.<br/>
					Bahkan, saat ini sudah mulai bermunculan permainan-permainan<br/>
					play-to-earn dengan adanya sistem NFT.
				</p>
				<p>

					Untuk membuat ekosistem yang berkelanjutan (sustainable),<br/>
					maka rakyat game developer Indonesia harus mengubah<br/>
					mindset profitnya menjadi menebar manfaat.<br/>
					Sulit memang, tapi kami bersedia memulainya.
				</p>
			</Flex>
		</Flex>
	)
}

export default function IndexPage() {
	return (
		<Page title="GodotID">
			<Hero />
			{/* Education Focused Community */}
			<EducationFocusedSection />
		</Page>
	)
}
