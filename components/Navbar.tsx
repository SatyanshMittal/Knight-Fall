import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.navButton}>How to Play</button>
      </div>
      <div className={styles.navCenter}>
        <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
      </div>
      <div className={styles.navRight}>
        <button className={styles.navButton}>Waitlist</button>
        <button className={styles.navButtonPrimary}>Play</button>
      </div>
    </nav>
  );
};

export default Navbar;
