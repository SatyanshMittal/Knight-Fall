"use client";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g1.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '150px', height: '150px' }} />
            <div className="name">Feature1</div>
            <br />
            <div className="name">MikeAndrewDesigner</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g2.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '150px', height: '150px' }} />
            <div className="name">Feature1</div>
            <br />
            <div className="name">MikeAndrewDesigner</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g3.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '150px', height: '150px' }} />
            <div className="name">Feature1</div>
            <br />
            <div className="name">MikeAndrewDesigner</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g4.png" alt="Icon" className="icon y-axis-movement" style={{ width: '150px', height: '150px' }} />
            <div className="name">Feature1</div>
            <br />
            <div className="name">MikeAndrewDesigner</div>
          </div>
        </div>
        <div className="e-card playing animate-card">
          <div className="image" />
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />
          <div className="infotop">
            <img src="images/g5.svg" alt="Icon" className="icon y-axis-movement" style={{ width: '150px', height: '150px' }} />
            <div className="name">Feature1</div>
            <br />
            <div className="name">MikeAndrewDesigner</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
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
    font-size: 16px; /* Increased font size */
    font-weight: 100;
    position: relative;
    top: -2em;
    text-transform: lowercase;
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