
"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Character from "./character1";
// import { OrbitControls } from "@react-three/drei";
// import { Suspense } from "react";
import Confetti from "react-confetti";
import styles from '../styles/Navbar.module.css';
interface WaitlistResponse {
  message: string;
}

const textStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  width: "15rem",
  textAlign: "center",
  fontWeight: "bold",
  color: "#fff",
  textShadow:
    "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00, 0 0 25px #00ff00, 0 0 30px #00ff00, 0 0 35px #00ff00",
  animation: "glow 1.5s infinite alternate",
  position: "relative",
  zIndex: 2,
};

const glowKeyframes = `
  @keyframes glow {
    from {
      text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00, 0 0 25px #00ff00, 0 0 30px #00ff00, 0 0 35px #00ff00;
    }
    to {
      text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00, 0 0 60px #00ff00, 0 0 70px #00ff00;
    }
  }
`;

export default function WaitlistForm() {
  const [email, setEmail] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<WaitlistResponse>(
        "https://stellarhunt-be/api/waitlist",
        { email, walletAddress }
      );
      setMessage(response.data.message);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 12000); // Show confetti for 12 seconds
    } catch (error) {
      setMessage("Error adding to the waitlist");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 12000);
    }
  };

  return (
    <div className="bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEicOwCW7fWeZ9xLNlLeabY6YZaSndKriwzi7evh6saDDipcRL4_3PjstCbRj-XX8D4T94t_9_R9I7tFVTfp7cUkLDQ-KsxGkuLcTO5o2YjSbhx4P_l-ejYi1S_MjsOv_YVTYwve1iMn6LsmZiinZFCxxCCXOyoOITRutiSjyNkBwDUAML9ZHMgsILPAzTo')] min-h-screen bg-no-repeat bg-cover">
      <style jsx>{glowKeyframes}</style>

      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-6xl font-extrabold text-white" style={textStyle}>
        <img src="/images/knightfallswaitlist.png" alt="Animated GIF" />

          <div className="h-4"></div> {/* Adjust height as needed */}
          <img src="/images/jointhewaitlist.png" alt="Animated GIF" />
        </h1>

        <div className="mt-1 text-center mb-1">
        <img src="/images/waitlisttext.png" alt="Animated GIF" />
        </div>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl glowing-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 text-xl text-white bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9fa00] focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-4 text-xl text-white bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9fa00] focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full p-4 text-2xl font-bold text-black bg-[#c9fa00] rounded-md hover:bg-[#00cc00] transition duration-300 ease-in-out"
            >
              Join Waitlist
            </button>
          </form>
          {message && <p className="mt-4 text-center text-white">{message}</p>}
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          
        </div>
      </main>
    </div>
  );
};

