//@ts-nocheck
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';
import HeroCharacters from '@/components/HeroCharacters';
import ScrollingCards from '../components/ScrollingCards';
import { div } from 'three/webgpu';

const features = [
  { id: 1, title: 'Play to Earn', description: 'Earn rewards and cryptocurrencies as you play.' },
  { id: 2, title: 'Own Your Assets', description: 'Complete ownership of in-game items as NFTs.' },
  { id: 3, title: 'Cross-Platform', description: 'Available on PC, mobile, and the metaverse.' },
  { id: 4, title: 'Community Driven', description: 'Influence the game’s development as part of the community.' },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      
      {/* Mapping through features array to render FeaturesSection components */}
      
      {features.map((item) => (
        <FeaturesSection key={item.id} title={item.title} description={item.description} />
      ))}
      
      
      <ScrollingCards />  {/* Add the scrolling cards component here */}
      
      <HeroCharacters />
      <RoadmapSection />
    </div>
  );
};

export default HomePage;
