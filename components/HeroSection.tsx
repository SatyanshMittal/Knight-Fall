"use client"
import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path as needed
import waves from "./WaveAnimation.svg";
import Image from 'next/image';
import { FloatingDockDemo } from './Socials';
import PlayButton from "@/components/buttons/playbutton";

const Home: React.FC = () => {
  return (
    <div className='relative h-screen'>
      <section
        className={`${styles.homePage}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgroundhome1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='w-[90%] absolute top-24 z-10'>
          <div className={`${styles.homeText} shooter-game-ui`}>
            <h1 className='font-[--font-nerko]'>A New Era Multiplayer</h1>
            <p>On-Chain Adventure</p>
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

          <div className="absolute -bottom-[220px] right-0 z-10">
            <FloatingDockDemo />
          </div>

          <div className='bottom-28 absolute right-[6%] scale-110 z-20'>
            <PlayButton />
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
      <style jsx>{`
        @keyframes vibrate {
          0% {
            transform: translate(0);
          }
          25% {
            transform: translate(-2px, 2px);
          }
          50% {
            transform: translate(2px, -2px);
          }
          75% {
            transform: translate(-2px, -2px);
          }
          100% {
            transform: translate(2px, 2px);
          }
        }

        .shooter-game-ui {
          animation: vibrate 0.5s infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;
