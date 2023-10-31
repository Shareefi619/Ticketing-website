'use client';
import Banner from '@/Sections/AboutPage/banner';
import ChooseSection from '@/Sections/AboutPage/chooseSection';
import CoverSection from '@/Sections/AboutPage/coverSection';
import Faq from '@/Sections/AboutPage/faq';
import FeaturePhoto from '@/Sections/AboutPage/featurePhoto';
import Team from '@/Sections/AboutPage/team';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react'

const page = () => {
    return (
        <main>
            <Header />
            <FeaturePhoto/>
            <ChooseSection/>
            <Faq/>
            <Banner/>
            <Team/>
            <CoverSection/>
            <Footer />
        </main>

    )
}

export default page;