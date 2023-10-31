"use client"
import Banner from '@/Sections/HomePage/banner';
import Header from './../components/header';
import Packages from '@/Sections/HomePage/packages';
import VideoSection from '@/Sections/HomePage/videoSection';
import NewsLetter from '@/Sections/HomePage/newsLetter';
import Testimonials from '@/Sections/HomePage/testimonials';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Banner />
        <Packages />
        <VideoSection />
        <NewsLetter/>
        <Testimonials/>
        <Footer/>
      </main>
    </>
  )
}
