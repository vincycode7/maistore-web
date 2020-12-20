// react components
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//component
import MaistoreLogo from "../MaiStoreLogo/MaistoreLogo";
import MaistoreName from "../MaiStoreName/MaistoreName";
import Burger from "./Burger";
import SideNav from "./SideNav";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProp = { loggedIn: false };
  render() {
    return (
      <NavBarContainer>
        <Link to="/">
          <NavBarNameLogo>
            <NavBarLogo>
              <MaistoreLogo />
            </NavBarLogo>
            <NavBarName>
              <MaistoreName className="maistore-name" />
            </NavBarName>
          </NavBarNameLogo>
        </Link>
        <Burger
          navOpen={this.props.navOpen}
          setOpen={this.props.setNavOpenstate}
        />
        {/* controls what to display on the navbar */}
        <SideNav navOpen={this.props.navOpen} />
      </NavBarContainer>
    );
  }
}

// style
// import "./NavBar.css";
const NavBarContainer = styled.nav`
  min-width: 100%;
  min-height: 10%;
  width: 100%;
  height: 70px;
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  @media (max-width: 958px) {
    /* justify-content: center; */
    /* border: solid; */
  }
`;

const NavBarNameLogo = styled.div`
  flex: 1;

  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: solid; */
  @media (max-width: 958px) {
    align-self: flex-start;
  }
`;

const NavBarLogo = styled.div`
  flex: 1;
  width: 50px;
  height: 50px;
`;

const NavBarName = styled.div`
  flex: 1;
  margin-left: 6px;
  color: black;
  position: relative;
  align-self: flex-end;
  bottom: -15px;
  font-weight: bolder;
  font-size: larger;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export default NavBar;
