import React from "react";
// import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";

function Burger(props) {
  return (
    <>
      {/* controls which icon to be displayed (either menu or close icon) */}
      <StyledBurger navOpen={props.navOpen} onClick={props.setOpen} on>
        {props.navOpen ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
      </StyledBurger>
    </>
  );
}

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 958px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    transition: all 0.5s ease-in-out;

    &:nth-child(2) {
      transform: ${({ navOpen }) =>
        navOpen ? "rotate(360deg)" : "rotate(0deg)"};
      color: ${({ navOpen }) => (navOpen ? "white" : "#060b26")};
    }
  }
`;

export default Burger;
