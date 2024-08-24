//@ts-nocheck
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';
import HeroCharacters from '@/components/HeroCharacters';
import ScrollingCards from '../components/ScrollingCards';
import Footer from '../components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import { div } from 'three/webgpu';


const HomePage: React.FC = () => {
  return (
    <div className='w-full overflow-hidden no-scrollbar relative'>
      <div className='fixed z-10 top-0'>
      <Navbar />
      </div>
      <HeroSection />
      <FeaturesSection />
      <ScrollingCards />  {/* Add the scrolling cards component here */}
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default HomePage;
