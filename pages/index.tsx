// Modules
import React from 'react'
import dynamic from 'next/dynamic';

// Components Section
import EducationFocusedSection from '@sections/index/EducationFocusedSection';
import VisiMisiSection from '@sections/index/VisiMisiSection';
import KomunitasDefinitionSection from '@sections/index/KomunitasDefinitionSection';

export default function IndexPage() {
    // use dynamic to suppressed hydration error waning because it's client side rendering
    const Page = dynamic(() => import('@components/Page'));
    const Hero = dynamic(() => import('@components/Hero'));
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
