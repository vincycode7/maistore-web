// react components
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//component
import MaistoreLogo from "../MaiStoreLogo/MaistoreLogo";
import MaistoreName from "../MaiStoreName/MaistoreName";

// style
// import "./NavBar.css";

const NavBarContainer = styled.nav`
  min-width: 100%;
  min-height: 10%;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f1f1f1;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
`;

const NavBarNameLogo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: solid; */
`;

const NavBarLogo = styled.div`
  width: 50px;
  height: 50px;
`;

const NavBarName = styled.div`
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

const NavBarnav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .nav-item {
    list-style-type: none;
    margin: 20px 20px 0px 0px;
  }
`;

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
              <MaistoreName />
            </NavBarName>
          </NavBarNameLogo>
        </Link>

        <NavBarnav>
          <li className="nav-item">
            <span className="fas fa-search"></span>
            <span> Discover </span>
          </li>

          <li
            className="nav-item"
            style={{
              display: `${!this.props.loggedIn ? "none" : "block"}`,
            }}
          >
            Transactions
          </li>

          <li
            className="nav-item"
            style={{
              display: `${this.props.loggedIn ? "none" : "block"}`,
            }}
          >
            Signin
          </li>

          <li
            className="nav-item"
            style={{
              display: `${this.props.loggedIn ? "none" : "block"}`,
            }}
          >
            Signup
          </li>

          <li
            className="nav-item"
            style={{
              display: `${!this.props.loggedIn ? "none" : "block"}`,
            }}
          >
            Wallet
          </li>

          <li
            className="nav-item"
            style={{
              display: `${!this.props.loggedIn ? "none" : "block"}`,
            }}
          >
            Signout
          </li>
        </NavBarnav>
        <Link to="/cart">
          <i className="fas fa-cart-plus"></i>
        </Link>
      </NavBarContainer>
    );
  }
}

export default NavBar;
