//@ts-nocheck
"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';
import HeroCharacters from '@/components/HeroCharacters';
import ScrollingCards from '../components/ScrollingCards';
import Footer from '../components/Footer';
import WaitlistForm from '@/components/WaitlistForm';
import RunningText from '@/components/RunningText';
import { div } from 'three/webgpu';

const HomePage: React.FC = () => {
  return (
    <div className='w-full overflow-hidden no-scrollbar relative data-scroll data-section '>
      <div className='fixed z-50 top-0 w-full'>
        <div className='w-full flex justify-center items-center'>
          <Navbar />
          </div>
      </div>
      <HeroSection />
      <div className='data-scroll data-scroll-section data-scroll-speed=""'>
        <RunningText />
        <FeaturesSection />
      </div>
      <ScrollingCards />  
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default HomePage;
