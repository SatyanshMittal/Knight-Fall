import React from 'react';
import styles from '../styles/Navbar.module.css'; // Adjust the path as needed
import AnimatedLeft from "@/components/buttons/animatedLeft"
import AnimatedRight from "@/components/buttons/animatedRight"

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <AnimatedLeft/>
      </div>
      <div className={styles.navCenter}>
        <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
      </div>
      <div className={styles.navRight}>
        <AnimatedRight/>
      </div>
      
    </nav>
  );
};

export default Navbar;