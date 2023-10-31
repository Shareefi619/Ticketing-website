'use client';
import Destination from '@/Sections/ServicesPage/destination';
import Pricing from '@/Sections/ServicesPage/pricing';
import Slider from '@/Sections/ServicesPage/slider';
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const page = () => {
  return (
    <main>
        <Header/>
        <Destination/>
        <Slider/>
        <Pricing/>
        <Footer/>
    </main>
  )
}

export default page