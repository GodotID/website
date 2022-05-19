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
			{/* Change <span> to something that could color text */}
			<span><small><b>Education focused community</b></small></span>
			<h2>
				Game development<br/>
				<span>bukan hanya profit,</span><br/>
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

function VisiMisiSection() {
	// TODO: [45] Change this inline style into something
	// TODO: [47] Change <span> to something that could color text
	return (<React.Fragment>
		<div style={{marginTop: '5em'}}></div>
		<Flex direction={1}>
			<span><small><b>Visi dan misi terbentuknya GodotID</b></small></span>
			<Flex gap={10}>
				<div>
					<h3>
						Menggunakan game development<br/>
						sebagai <b>entry point</b> untuk<br/>
						masuk dunia programming.<br/>
					</h3>
					<h1>Visi</h1>
				</div>
				<div>
					<ul>
						<li>Mensosialisasikan komunitas ke orang tua atau wali</li>
						<li>Membuat webinar dan event-event menarik</li>
						<li>Membuka kesempatan untuk berkontribusi bagi anggota</li>
					</ul>
					<h1>Misi</h1>
				</div>
			</Flex>
		</Flex>
	</React.Fragment>)
}

function KomunitasDefinitionSection() {
	return (<React.Fragment>
		<div style={{marginTop: '5em'}}></div>
		<Flex gap={5}>
			<h1>
				Ko<br/>
				mu<br/>
				ni<br/>
				tas<br/>
			</h1>
			<Flex direction={1}>
				<h1>
					Siapakah mereka?
				</h1>
				<Flex gap={5}>
					<Flex direction={1}>
						<p small="">
							Komunitas bukanlah sebuah perusahaan, berbeda sekali.
						</p>
						<p small="">
							Komunitas adalah sekumpulan individu yang membuat
							ekosistem yang berkelanjutan, terus berputar dan
							menebar manfaat. Saling membantu satu sama lain.
						</p>
						<p small="">
							Apakah ada pemimpinnya?<br/>
							Jelas pasti ada.
						</p>
					</Flex>
					<h2><i>
						"Founder dan Co-Founder<br/>
						bukanlah orang yang<br/>
						membuat komunitas,<br/>
						tapi mereka hanyalah salah satu<br/>
						dari banyak orang yang<br/>
						menemukannya."
					</i></h2>
				</Flex>
			</Flex>
		</Flex>
	</React.Fragment>);
}

export default function IndexPage() {
	return (
		<Page title="GodotID">
			<Hero />
			{/* Education Focused Community */}
			<EducationFocusedSection />
			{/* Visi Misi */}
			<VisiMisiSection />
			{/* Komunitas, Siapakah Mereka? */}
			<KomunitasDefinitionSection />
		</Page>
	)
}
