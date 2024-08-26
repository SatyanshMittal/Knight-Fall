"use client"
import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">How it Works? </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
  --button-accent: rgb(153, 0, 255);
  border: none;
  padding: 5px 20px;
  background: var(--button-accent);
  box-shadow: 0px 5px 0px 0px
      color-mix(in oklab, var(--button-accent) 80%, black),
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
/* If you want the button to pop up on hover as well */
/* .button:hover{
    box-shadow: 0px 10px 0px 2px rgb(159, 0, 0), 0px 10px 0px 5px rgb(0, 0, 0);
    transform: translateY(-5px);
} */
.button:active {
  box-shadow: 0px 0px 0px 0px color-mix(in oklab, var(--button-accent), black),
    0px 0px 0px 5px black;
  transform: translateY(5px);
}

`;

export default Button;