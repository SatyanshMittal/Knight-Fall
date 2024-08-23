"use client"
import React, { Fragment , useEffect, useState } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";


const LoadingScreen = () => {
const [timeUp , setTimeUp] = useState(false);

useEffect(()=>{
    setTimeout(()=>setTimeUp(true),0);
},[])

  const { unityProvider , isLoaded , loadingProgression } = useUnityContext({
    loaderUrl: "/Game.loader.js",
    dataUrl: "/Game.data",
    frameworkUrl: "/Game.framework.js",
    codeUrl: "/Game.wasm",
  });

  return (
    <Fragment>
      {/* {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )} */}
      <Unity
        className="h-screen w-full transition-opacity"
        unityProvider={unityProvider}
        style={{ visibility: (isLoaded&&timeUp) ? 'visible' : 'hidden'  }}
      />
    </Fragment>
  );
};

export default LoadingScreen;


