import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path as needed
import waves from "./WaveAnimation.svg";
import Image from 'next/image';
import { FloatingDockDemo } from './Socials';
import PlayButton from "@/components/buttons/playbutton"
// import Navbar from './Navbar';

const Home: React.FC = () => {
  return (
    <div className='relative h-screen'>
      <section
        className={`${styles.homePage} `}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgroundhome1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='w-[90%] absolute top-24 z-10'>
        <div className={`${styles.homeText} ${styles.vibrate} ${styles.shiftRight}`}>
  <h1 className={`font-[--font-nerko] ${styles.textBorder} `}>A New Era Multiplayer</h1>
  <p className={styles.textBorder}>On-Chain Adventure</p>
</div>

          <div className={styles.videoFrame}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            >
              <source src="/knightfalls.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <div className={styles.characters}>
            <img src="/character1.png" alt="Character 1" className={styles.character} />
            <img src="/character2.png" alt="Character 2" className={styles.character} />
            <img src="/character3.png" alt="Character 3" className={styles.character} />
          </div> */}
          <div className="absolute -bottom-[220px] right-0 z-10">
            <FloatingDockDemo/>
          </div>

<div className={`bottom-28 absolute right-[6%] scale-110 z-20 ${styles.wobble}`}>
  <PlayButton/>
</div>

          <Image height={1000} width={1000} alt='characters' className='absolute top-14 -right-[340px]' src={"./images/characterasset.svg"} />
          
        </div>
      </section>
      <Image
        alt='wave animation'
        width={1000}
        className='w-full absolute bottom-0 z-0'
        height={1000}
        src={waves}
      />
    </div>
  );
}

export default Home;
 