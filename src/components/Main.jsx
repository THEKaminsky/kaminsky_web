import React, { Component } from "react";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Interests from "./Interests";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <About />
        <Skills />
        <Work />
        <Interests />
      </div>
    );
  }
}

export default Main;
