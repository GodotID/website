// Modules
import React from 'react'
import Link from 'next/link'

// Components
import Page from '@components/Page'
import Hero from '@components/Hero'
// Components Section
import EducationFocusedSection from '@sections/index/EducationFocusedSection';
import VisiMisiSection from '@sections/index/VisiMisiSection';
import KomunitasDefinitionSection from '@sections/index/KomunitasDefinitionSection';




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
