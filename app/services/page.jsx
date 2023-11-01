'use client';
import { g1, g2, g3, g4, g5, g6, g7, g8, g9 } from '@/public/assets/images';
import Destination from '@/Sections/ServicesPage/destination';
import Pricing from '@/Sections/ServicesPage/pricing';
import Slider from '@/Sections/ServicesPage/slider';
import Footer from '@/components/footer'
import Header from '@/components/header'

const destinations = [
  {
    name: 'Paris',
    imageUrl: g1,
  },
  {
    name: 'Bankok',
    imageUrl: g2,
  },
  {
    name: 'Maldives',
    imageUrl: g3,
  },
  {
    name: 'Greece',
    imageUrl: g4,
  },
  {
    name: 'London',
    imageUrl: g5,
  },
  {
    name: 'Julian Alps',
    imageUrl: g6,
  },
  {
    name: 'Thailand',
    imageUrl: g7,
  },
  {
    name: 'Singapore',
    imageUrl: g8,
  },
  {
    name: 'Egypt',
    imageUrl: g9,
  },
  // Add more destination objects here
];

const page = () => {
  return (
    <main>
        <Header/>
        <Destination destinations={destinations}/>
        <Slider/>
        <Pricing/>
        <Footer/>
    </main>
  )
}

export default page;