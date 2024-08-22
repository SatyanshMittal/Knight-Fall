import React from 'react';
import styles from '../styles/HeroSection.module.css'; // Adjust the import according to your file structure

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Enter the World of <span className={styles.highlight}>Blockchain Gaming</span></h1>
        <p className={styles.heroDescription}>Experience the ultimate Web3 adventure. Play, earn, and own your digital assets.</p>
        <button className={styles.ctaButton}>Start Playing</button>
      </div>
    </section>
  );
}

export default HeroSection;
