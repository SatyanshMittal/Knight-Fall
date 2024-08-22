import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />  {/* Include the Navbar at the top */}
      <HeroSection />
      <FeaturesSection />
      <RoadmapSection />
 
    </div>
  );
};

export default HomePage;
