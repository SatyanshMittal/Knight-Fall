//@ts-nocheck
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';
import HeroCharacters from '@/components/HeroCharacters';
import ScrollingCards from '../components/ScrollingCards';
import { div } from 'three/webgpu';


const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScrollingCards />  {/* Add the scrolling cards component here */}

      <HeroCharacters />
      <RoadmapSection />
    </div>
  );
};

export default HomePage;
