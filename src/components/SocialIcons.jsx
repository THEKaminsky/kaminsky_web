import React, { Component } from "react";
import styled from "styled-components";
import github from "./../images/github.svg";
import linkedin from "./../images/linkedin.svg";
import "../App.css";

class SocialIcons extends Component {
  render() {
    return (
      <IconsWrapper>
        <a href="http://www.github.com/thekaminsky">
          <img src={github} alt="Github Link" />
        </a>
        <a href="https://www.linkedin.com/in/rob-kaminsky-97510931/">
          <img src={linkedin} alt="LinkedIn Link" />
        </a>
      </IconsWrapper>
    );
  }
}

const IconsWrapper = styled.div`
  padding-top: 2.5rem;
  > * {
    padding-right: 1rem;
  }
`;

export default SocialIcons;
