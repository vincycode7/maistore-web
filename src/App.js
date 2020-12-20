import React, { Component } from "react";
// BrowserRouter,
import { Switch, Route } from "react-router-dom";

// screens
// import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Cart from "./screens/Cart/Cart";
import Default from "./screens/Default/Default";

// components
import NavBar from "./components/NavBar/NavBar";

// style
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//  browser-router :- hold info about all our routes
//  switch :- used for grouping routes
//  route :- display specific routes
//  link :- serve as anchor tag

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScreenLoaded: false,
      loggedIn: false,
      navOpen: false,
      animateNav: false,
    };
    this.setNavOpenstate = this.setNavOpenstate.bind(this);
    this.resetNavOpenstate = this.resetNavOpenstate.bind(this);
  }

  resetNavOpenstate() {
    const windowWidth = window.screen.availWidth;
    this.setState((currState) => ({
      navOpen: windowWidth >= 958 ? false : currState.navOpen,
    }));
  }

  setNavOpenstate() {
    this.setState((currState) => {
      return {
        navOpen: !currState.navOpen,
      };
    });
  }

  render() {
    window.addEventListener("resize", this.resetNavOpenstate);
    return (
      <React.Fragment>
        <div className="App-container">
          {/* <WelcomeScreen /> */}
          <NavBar
            navOpen={this.state.navOpen}
            loggedIn={this.state.loggedIn}
            setNavOpenstate={this.setNavOpenstate}
          />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
