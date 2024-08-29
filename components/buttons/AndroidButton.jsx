"use client"
// import React from "react";
// import styled from "styled-components";

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button>
//         P L A Y
//         <div id="clip">
//           <div id="leftTop" className="corner" />
//           <div id="rightBottom" className="corner" />
//           <div id="rightTop" className="corner" />
//           <div id="leftBottom" className="corner" />
//         </div>
//         <span id="rightArrow" className="arrow" />
//         <span id="leftArrow" className="arrow" />
//       </button>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   button {
//   position: relative;
//   width: 11em;
//   height: 4em;
//   outline: none;
//   transition: 0.1s;
//   background-color: transparent;
//   border: none;
//   font-size: 13px;
//   font-weight: bold;
//   color: #ddebf0;
// }

// #clip {
//   --color: #2761c3;
//   position: absolute;
//   top: 0;
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
//   border: 5px double var(--color);
//   box-shadow: inset 0px 0px 15px #195480;
//   -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
// }

// .arrow {
//   position: absolute;
//   transition: 0.2s;
//   background-color: #2761c3;
//   top: 35%;
//   width: 11%;
//   height: 30%;
// }

// #leftArrow {
//   left: -13.5%;
//   -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
// }

// #rightArrow {
//   -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
//   left: 102%;
// }

// button:hover #rightArrow {
//   background-color: #27c39f;
//   left: -15%;
//   animation: 0.6s ease-in-out both infinite alternate rightArrow8;
// }

// button:hover #leftArrow {
//   background-color: #27c39f;
//   left: 103%;
//   animation: 0.6s ease-in-out both infinite alternate leftArrow8;
// }

// .corner {
//   position: absolute;
//   width: 4em;
//   height: 4em;
//   background-color: #2761c3;
//   box-shadow: inset 1px 1px 8px #2781c3;
//   transform: scale(1) rotate(45deg);
//   transition: 0.2s;
// }

// #rightTop {
//   top: -1.98em;
//   left: 91%;
// }

// #leftTop {
//   top: -1.96em;
//   left: -3.0em;
// }

// #leftBottom {
//   top: 2.10em;
//   left: -2.15em;
// }

// #rightBottom {
//   top: 45%;
//   left: 88%;
// }

// button:hover #leftTop {
//   animation: 0.1s ease-in-out 0.05s both changeColor8,
//   0.2s linear 0.4s both lightEffect8;
// }

// button:hover #rightTop {
//   animation: 0.1s ease-in-out 0.15s both changeColor8,
//   0.2s linear 0.4s both lightEffect8;
// }

// button:hover #rightBottom {
//   animation: 0.1s ease-in-out 0.25s both changeColor8,
//   0.2s linear 0.4s both lightEffect8;
// }

// button:hover #leftBottom {
//   animation: 0.1s ease-in-out 0.35s both changeColor8,
//   0.2s linear 0.4s both lightEffect8;
// }

// button:hover .corner {
//   transform: scale(1.25) rotate(45deg);
// }

// button:hover #clip {
//   animation: 0.2s ease-in-out 0.55s both greenLight8;
//   --color: #27c39f;
// }

// @keyframes changeColor8 {
//   from {
//     background-color: #2781c3;
//   }

//   to {
//     background-color: #27c39f;
//   }
// }

// @keyframes lightEffect8 {
//   from {
//     box-shadow: 1px 1px 5px #27c39f;
//   }

//   to {
//     box-shadow: 0 0 2px #27c39f;
//   }
// }

// @keyframes greenLight8 {
//   from {
//   }

//   to {
//     box-shadow: inset 0px 0px 32px #27c39f;
//   }
// }

// @keyframes leftArrow8 {
//   from {
//     transform: translate(0px);
//   }

//   to {
//     transform: translateX(10px);
//   }
// }

// @keyframes rightArrow8 {
//   from {
//     transform: translate(0px);
//   }

//   to {
//     transform: translateX(-10px);
//   }
// }



// `;

// export default Button;



import React from "react";
import styled from "styled-components";

const Button = () => {
    const handleDownload = () => {
        window.location.href = "./"; // Replace with the actual path to your APK file
      };
  return (
    <StyledWrapper>
      <button className="cta" onClick={handleDownload}>
        <span className="span">Download 📱</span>
        <span className="second">
          <svg
            xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 66 43"
            height="20px"
            width="50px"
          >
            <g
              fillRule="evenodd"
              fill="none"
              strokeWidth={1}
              stroke="none"
              id="arrow"
            >
              <path
                fill="#FFFFFF"
                d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                className="one"
              />
              <path
                fill="#FFFFFF"
                d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                className="two"
              />
              <path
                fill="#FFFFFF"
                d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                className="three"
              />
            </g>
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
  display: flex;
  padding: 11px 33px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  color: white;
  background: #6225e6;
  transition: 1s;
  box-shadow: 6px 6px 0 black;
  transform: skewX(-15deg);
  border: none;
  cursor: pointer;
}

.cta:focus {
  outline: none;
}

.cta:hover {
  transition: 0.5s;
  box-shadow: 10px 10px 0 #fbc638;
}

.cta .second {
  transition: 0.5s;
  margin-right: 0px;
}

.cta:hover .second {
  transition: 0.5s;
  margin-right: 45px;
}

.span {
  transform: skewX(15deg);
}

.second {
  width: 20px;
  margin-left: 30px;
  position: relative;
  top: 12%;
}

.one {
  transition: 0.4s;
  transform: translateX(-60%);
}

.two {
  transition: 0.5s;
  transform: translateX(-30%);
}

.cta:hover .three {
  animation: color_anim 1s infinite 0.2s;
}

.cta:hover .one {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.6s;
}

.cta:hover .two {
  transform: translateX(0%);
  animation: color_anim 1s infinite 0.4s;
}

@keyframes color_anim {
  0% {
    fill: white;
  }

  50% {
    fill: #fbc638;
  }

  100% {
    fill: white;
  }
}

`;

export default Button;