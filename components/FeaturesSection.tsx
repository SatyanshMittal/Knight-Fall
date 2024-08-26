"use client";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <video autoPlay loop muted playsInline className="background-video brightness-50">
        <source src="/backgroundmapvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-container">
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g1.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '220px', height: '220px',marginTop: '-160px',marginLeft: '-40px' }} />
            <div className="name" style={{ marginTop: '-60px', fontSize: '24px', fontWeight: 'bold',color: 'white' }}>Epic PvP Thrills</div>
            <br></br>
            <div className="name text-xl leading-5 " style={{ paddingLeft: '20px', paddingRight: '20px',color: 'white' }}>Battle in intense multiplayer showdowns with unique avatars.
            Outsmart and conquer your opponents to rise to the top.</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g2.svg" alt="Icon" className="icon y-axis-movement"style={{ width: '220px', height: '220px',marginTop: '-160px',marginLeft: '-40px' }} />
            <div className="name" style={{ marginTop: '-60px', fontSize: '24px', fontWeight: 'bold',color: 'white' }}>Exclusive NFT Rewards</div>
            <br></br>
            <div className="name text-xl leading-5" style={{ paddingLeft: '20px', paddingRight: '20px',color: 'white' }}>  Win exclusive NFTs that commemorate your victories. Collect and
            trade these digital assets to enhance your in-game legacy.</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g3.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '200px', height: '200px',marginTop: '-140px',marginLeft: '-40px' }} />
            <div className="name" style={{ marginTop: '-60px', fontSize: '24px', fontWeight: 'bold' ,color: 'white'}}>Blockchain Realism</div>
            <br></br>
            <div className="name text-xl leading-5" style={{ paddingLeft: '20px', paddingRight: '20px',color: 'white' }}>Enjoy seamless, lifelike gameplay powered by the Stellar chain.
              Every move is secure, transparent, and part of a stunning visual
              experience.</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g4.png" alt="Icon" className="icon y-axis-movement" style={{color: 'white', width: '200px', height: '200px',marginTop: '-140px',marginLeft: '-40px' }} />
            <div className="name" style={{ marginTop: '-60px', fontSize: '24px', fontWeight: 'bold' ,color: 'white'}}>Community-driven Evolution</div>
            <br></br>
            <div className="name text-xl leading-5" style={{ paddingLeft: '20px', paddingRight: '20px',color: 'white' }}> Influence game development and features through community input.
            Join events and collaborate with other players.</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g5.svg" alt="Icon" className="icon y-axis-movement" style={{ color: 'white',width: '220px', height: '220px',marginTop: '-160px',marginLeft: '-40px' }} />
            <div className="name" style={{ marginTop: '-60px', fontSize: '24px', fontWeight: 'bold',color: 'white' }}>Real-world </div>
            <br></br>
            <div className="name text-xl leading-5" style={{ paddingLeft: '20px', paddingRight: '20px' ,color: 'white'}}> Blend gaming with reality through AR missions and events. Earn
            real-world rewards linked to your in-game achievements.</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 33px 0px 33px 0px;

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;

  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .e-card {
    margin: 20px;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    width: 400px; /* Increased width */
    height: 300px; /* Increased height */
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 600px;
    height: 500px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  }

  .icon {
    width: 4em; /* Increased icon size */
    margin-top: -6em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 24px; /* Increased font size */
    position: absolute;
    top: 6em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }

  .name {
    font-size: 20px; /* Increased font size */
    font-weight: 100;
    position: relative;
    top: -2em;
    
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
    
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes yAxisMovement {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .y-axis-movement {
    animation: yAxisMovement 3s infinite ease-in-out;
  }

  @keyframes circularMotion {
    0% {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
    25% {
      transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
    }
    50% {
      transform: perspective(1000px) rotateX(0deg) rotateY(20deg);
    }
    75% {
      transform: perspective(1000px) rotateX(-10deg) rotateY(10deg);
    }
    100% {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
  }

  .animate-card {
    animation: circularMotion 5s infinite ease-in-out;
  }
`;

export default Card;