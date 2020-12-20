import React from "react";
import styled from "styled-components";
// import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
// import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function SideNav(props) {
  return (
    <>
      <SideNavCont>
        <PriUl>
          {/* for Primary Items in the Nav like Search, Cart */}
          {props.primaryNav.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </PriUl>

        <SecUl>
          {/* for secondary Items in the Nav that will be controlled by the hamburge */}
          {props.secondaryNav.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </SecUl>

        <SideUl navOpen={props.navOpen}>
          {/* for secondary Items in the Nav that will be controlled by the hamburge */}
          {props.secondaryNav.map((item, index) => {
            return (
              <li
                key={index}
                className={item.cName}
                onClick={props.SetSideBarOpenStat}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </SideUl>
      </SideNavCont>
    </>
  );
}

SideNav.defaultProps = {
  primaryNav: [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "pri-nav",
    },

    {
      title: "Discover",
      path: "/discover",
      icon: <Io5Icons.IoSearchCircleSharp />,
      cName: "pri-nav",
    },
    {
      title: "Cart",
      path: "/cart",
      icon: <IoIcons.IoMdCart />,
      cName: "pri-nav",
    },
  ],
  secondaryNav: [
    {
      title: "Transactions",
      path: "/transactions",
      icon: <IoIcons.IoIosPaper />,
      cName: "sec-nav",
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaProductHunt />,
      cName: "sec-nav",
    },
    {
      title: "Stores",
      path: "/stores",
      icon: <MdIcons.MdStore />,
      cName: "sec-nav",
    },
    {
      title: "SignIn",
      path: "/signin",
      icon: <RiIcons.RiUserReceived2Fill />,
      cName: "sec-nav",
    },
    {
      title: "SignUp",
      path: "/signup",
      icon: <ImIcons.ImUserPlus />,
      cName: "sec-nav",
    },
  ],
};

const SideNavCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Ul = styled.ul`
  display: block;
  min-width: fit-content;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  /* border: solid; */

  li {
    min-width: fit-content;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    position: relative;
    a {
      color: #000;
      min-width: fit-content;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      span {
        margin-left: 5px;
      }
      &:after {
        content: "";
        position: absolute;
        right: 10;
        width: 0%;
        height: 2px;
        bottom: -1px;
        background: #000;
        transition: width 0.5s ease-in-out;
      }

      &:hover:after {
        left: 0;
        right: 0;
        width: 100%;
      }
    }
  }
`;

const PriUl = styled(Ul)`
  .pri-nav {
    width: fit-content;
    padding: 3px 3px;
    margin-right: 5px;
    height: fit-content;

    a {
      text-decoration: none;
    }
  }
  @media (max-width: 958px) {
    margin-right: 30px;
    margin-left: 30px;
    flex-wrap: wrap;
  }
`;

const SecUl = styled(Ul)`
  .sec-nav {
    width: fit-content;
    padding: 3px 3px;
    margin-right: 5px;
    height: fit-content;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 958px) {
    display: none;
  }
`;

const SideUl = styled(SecUl)`
  display: none;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;

  @media (max-width: 958px) {
    display: block;
    transform: ${({ navOpen }) => navOpen && "translateX(0%)"};
    background-color: #060b26;
    flex-flow: column nowrap;
    justify-content: start;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 30%;
    align-items: center;
    padding-top: 70px;

    li {
      color: #f5f5f5;

      a {
        width: 100%;
        height: 100%;
        justify-content: flex-start;
        align-items: flex-start;
      }
      &:hover {
        border-bottom: none;
      }

      &::after {
        content: "";
        width: 0;
        height: 0px;
        background: #000;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 0;
        transition: width 0.3s;
      }
    }

    .sec-nav {
      width: 100%;
      height: 40px;
      justify-content: start;
      align-items: center;
      padding: 8px 0px 8px 16px;
      list-style: none;
      padding: 0 16px;
      border-radius: 4px;
      margin-bottom: 10px;

      span {
        margin-left: 16px;
      }

      a {
        color: #f5f5f5;
        font-size: 18px;
      }
      &:hover {
        background-color: #1a83ff;
      }
    }
  }

  @media screen and (max-width: 628px) {
    width: 35%;
  }

  @media screen and (max-width: 467px) {
    width: 40%;
  }

  @media screen and (max-width: 416px) {
    width: 50%;
  }
  @media screen and (max-width: 337px) {
    width: 60%;
  }
`;
export default SideNav;
