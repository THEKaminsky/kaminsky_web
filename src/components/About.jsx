import React, { Component } from "react";
import { Title, Body } from "../styles/Typography";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Who I Am:</Title>
        <Body>Talk about things that make me, me.</Body>
      </React.Fragment>
    );
  }
}

export default About;
