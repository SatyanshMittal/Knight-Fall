"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    // Scroll to the waitlist section
    router.push("#waitlist"); // Assuming the waitlist section has an id="waitlist"
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={handleClick}>
        Waitlist
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --button-accent: rgb(153, 0, 255);
    border: none;
    padding: 5px 20px;
    background: var(--button-accent);
    box-shadow: 0px 5px 0px 0px color-mix(in oklab, var(--button-accent) 80%, black),
      0px 5px 0px 5px black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

  .button:active {
    box-shadow: 0px 0px 0px 0px color-mix(in oklab, var(--button-accent), black),
      0px 0px 0px 5px black;
    transform: translateY(5px);
  }
`;

export default Button;
