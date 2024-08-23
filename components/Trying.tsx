"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Unity, useUnityContext } from "react-unity-webgl";
import Image from 'next/image';
import LoadingScreen from './LoadingScreen';


export default function Trying() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0);

  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/Game.loader.js",
  //   dataUrl: "/Game.data",
  //   frameworkUrl: "/Game.framework.js",
  //   codeUrl: "/Game.wasm",
  // });

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
      });
    }, 20); 

    return () => clearInterval(interval);
  }, []);

  return (

    
    <div className="relative h-screen w-full overflow-hidden">
      {isAnimating && (
        <div className='w-full h-screen flex justify-center items-center '>

        <motion.div
          className=" flex items-center justify-center rounded-xl "
          style={{ width: '80vw', height: '80vh' }}
          animate={{
            width: isLoaded ? '100vw' : '80vw',
            height: isLoaded ? '100vh' : '85vh', 
            transition: { duration: 0.8 },
          }}
          onAnimationComplete={() => {
            if (isLoaded) {
              setTimeout(() => setIsAnimating(false), 300);
            }
          }}
        >
          <div>
            <Image width={5000} height={5000} src={"/kids.gif"} alt='GIF' className=' top-0'/>
          </div>

        </motion.div>

        </div>

      )}

      {!isAnimating && (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >

          <div>
              <LoadingScreen />
          </div>
        </motion.div>
      )}
    </div>

  );
}
