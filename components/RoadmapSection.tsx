import React from 'react';
import styles from '../styles/RoadmapSection.module.css'; // Adjust the import according to your file structure

//apply styles to the roadmap section

const RoadmapSection: React.FC = () => {
  return (
    <section className={styles.roadmap}>
      <h2 className={styles.sectionTitle}>Roadmap</h2>
      <div className={styles.roadmapGrid}>
        <div className={styles.roadmapItem}>
          <h3 className={styles.roadmapTitle}>Q1 2022</h3>
          <p className={styles.roadmapDescription}>Launch of the game on PC and mobile platforms.</p>
        </div>
        <div className={styles.roadmapItem}>
          <h3 className={styles.roadmapTitle}>Q2 2022</h3>
          <p className={styles.roadmapDescription}>Integration with blockchain technology for in-game assets.</p>
        </div>
        <div className={styles.roadmapItem}>
          <h3 className={styles.roadmapTitle}>Q3 2022</h3>
          <p className={styles.roadmapDescription}>Release of the game on the metaverse platform.</p>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
