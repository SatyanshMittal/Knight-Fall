import React from 'react';
import styles from '../styles/Navbar.module.css'; // Adjust the path as needed
import PlayButton from "@/components/buttons/playbutton"
import AnimatedButton from "@/components/buttons/animated"

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <AnimatedButton/>
      </div>
      <div className={styles.navCenter}>
        <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
      </div>
      <div className={styles.navRight}>
        <AnimatedButton/>
      </div>
      
    </nav>
  );
};

export default Navbar;