'use client';
import ContactForm from '@/Sections/ContactPage/contactForm';
import ContactGrid from '@/Sections/ContactPage/contactGrid';
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

const page = () => {
  return (
    <main>
      <Header/>
      <ContactGrid/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}

export default page