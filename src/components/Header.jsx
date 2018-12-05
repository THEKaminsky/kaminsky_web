import React, { Component } from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <p>[The] Rob Kaminsky</p>
        <SocialIcons />
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #36454f;
  font-weight: 400;
  font-size: 2.5rem;
  padding-left: 1rem;
  border-bottom: solid 1px grey;
  background-color: #f8f8f8;
  box-shadow: 0 3px 1px 0px lightgrey;
  justify-content: space-between;
  z-index: 99;
`;

export default Header;
