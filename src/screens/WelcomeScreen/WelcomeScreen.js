import React from "react";

// import logo from "./logo-red.png";
import "./WelcomeScreen.css";
import MaiStoreLogo from "../../components/MaiStoreLogo/MaistoreLogo";

// import welcome_colors from "../config/colors";
// import welcome_fonts from "../config/fonts"

function WelcomeScreen() {
  return (
    <div className="WelcomeScreen-container">
      <p className="Welcome-to">Welcome to</p>
      <div className="Welcome-mswrapper">
        <p className="Welcome-maistore Welcome-mai">Mai</p>
        <p className="Welcome-maistore Welcome-store">Store</p>
      </div>

      {/* <img className="Welcome-logo" src={logo} /> */}
      <MaiStoreLogo
        logoStyle={{
          width: "90px",
          height: "90px",
          position: "relative",
          marginTop: "200px",
        }}
      />

      <p className="Welcome-intro">
        Anyone from anywhere can be a Buyer, a Seller or a Picker.{" "}
      </p>
    </div>
  );
}

export default WelcomeScreen;
