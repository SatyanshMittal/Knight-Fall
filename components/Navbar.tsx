import React from 'react';
import styles from '../styles/Navbar.module.css'; // Adjust the path as needed
import PlayButton from "@/components/buttons/playbutton"
import AnimatedButton from "@/components/buttons/animated"

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        
        <img src="/gif/knightfalls.gif" alt="Animated GIF" className={styles.navGif} />
        {/* <button className={styles.navButton}>How to Play</button> */}
        <AnimatedButton/>
      </div>
      <div className={styles.navCenter}>
        <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
      </div>
      <div className={` flex justify-center gap-10 items-center`}>
        {/* <button className={`${styles.navButton} ${styles.navButtonPrimary}`}>Play</button> */}
        <PlayButton/>
        <AnimatedButton/>
        {/* <AnimatedButton/> */}
        {/* <button className={styles.navButton}>Waitlist</button> */}
        
      </div>
      
    </nav>
  );
};

export default Navbar;