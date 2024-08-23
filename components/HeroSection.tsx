import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path as needed
import waves from "./WaveAnimation.svg"
import Image from 'next/image';


const Home: React.FC = () => {
  return (
    <div className='relative h-screen'>
    <section className={`${styles.homePage}`}>
    <div className='w-[90%] absolute z-10 '>

      <div className={`${styles.homeText} `}>
        <h1>Your Eye-Catching Headline</h1>
        <p>Your subtext or additional information goes here.</p>
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
      <div className={styles.characters}>
        <img src="/character1.png" alt="Character 1" className={styles.character} />
        <img src="/character2.png" alt="Character 2" className={styles.character} />
        <img src="/character3.png" alt="Character 3" className={styles.character} />
      </div>
      </div>
    </section>
    <Image alt='wave animation' width={1000} className='w-full absolute bottom-0 z-0 ' height={1000} src={waves}/>
    </div>
  );
}

export default Home;
