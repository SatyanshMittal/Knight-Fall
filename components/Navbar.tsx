// import React, { useState, useEffect } from 'react';
// import styles from '../styles/Navbar.module.css';
// import AnimatedLeft from "@/components/buttons/animatedLeft";
// import AnimatedRight from "@/components/buttons/animatedRight";

// const Navbar: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
    
//     if (currentScrollY > lastScrollY) {
//       setIsVisible(false);
//     } else {
//       setIsVisible(true);
//     }
    
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   return (
//     <nav className={`${styles.navbar} ${isVisible ? styles.show : styles.hide}`}>
//       <div className={styles.navLeft}>
//         <AnimatedLeft />
//       </div>
//       <div className={styles.navCenter}>
//         <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
//       </div>
//       <div className={styles.navRight}>
//         <AnimatedRight />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import AnimatedLeft from "@/components/buttons/animatedLeft";
import AnimatedRight from "@/components/buttons/animatedRight";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
       setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex items-center justify-center px-4 py-2">

          <div className="navLeft">
            <AnimatedLeft />
          </div>

          <div className="navCenter">
            <img src="/images/logo.png" alt="App Logo" className="h-24 w-auto" />
          </div>

          <div className="navRight">
            <AnimatedRight />
          </div>

      </div>
    </nav>
  );
};

export default Navbar;
