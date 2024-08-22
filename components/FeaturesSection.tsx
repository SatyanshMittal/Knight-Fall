import React from 'react';
import styles from '../styles/FeaturesSection.module.css'; // Import the CSS module

const features = [
  { id: 1, title: 'Play to Earn', description: 'Earn rewards and cryptocurrencies as you play.' },
  { id: 2, title: 'Own Your Assets', description: 'Complete ownership of in-game items as NFTs.' },
  { id: 3, title: 'Cross-Platform', description: 'Available on PC, mobile, and the metaverse.' },
  { id: 4, title: 'Community Driven', description: 'Influence the game’s development as part of the community.' },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>Game Features</h2>
      <div className={styles.featuresGrid}>
        {features.map(feature => (
          <div key={feature.id} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
