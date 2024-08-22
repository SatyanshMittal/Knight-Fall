import React from 'react';
import styles from '../styles/FeaturesSection.module.css'; // Adjust the import according to your file structure
const features = [
  { id: 1, title: 'Play to Earn', description: 'Earn rewards and cryptocurrencies as you play.' },
  { id: 2, title: 'Own Your Assets', description: 'Complete ownership of in-game items as NFTs.' },
  { id: 3, title: 'Cross-Platform', description: 'Available on PC, mobile, and the metaverse.' },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="styles.features">
      <h2 className="styles.section-title">Game Features</h2>
      <div className="styles.features-grid">
        {features.map(feature => (
          <div key={feature.id} className="styles.feature-item">
            <h3 className="styles.feature-title">{feature.title}</h3>
            <p className="styles.feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
