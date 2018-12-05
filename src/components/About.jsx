import React, { Component } from "react";
import styled from "styled-components";
import { Title, Body } from "../styles/Typography";
import me from "../images/kaminsky.jpg";

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Me>
          <AltTitle>Who I Am:</AltTitle>
          <Body>
            No argument here. Also Zoidberg. For one beautiful night I knew what
            it was like to be a grandmother. Subjugated, yet honored. Oh, I
            think we should just stay friends. I suppose I could part with 'one'
            and still be feared… Professor, make a woman out of me. Good man.
            Nixon's pro-war and pro-family. Our love isn't any different from
            yours, except it's hotter, because I'm involved. And remember, don't
            do anything that affects anything, unless it turns out you were
            supposed to, in which case, for the love of God, don't not do it!
          </Body>
        </Me>
        <Photo src={me} alt="just-me" />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex
  justify-content: space-between;
`;

const Me = styled.div`
  width: 45%;
  padding-right: 2%;
`;

const Photo = styled.img`
  display: block;
  box-sizing: border-box;
  width: 500px;
  height: 500px;
  box-shadow: 3px 3px 1px 1px lightgrey;
  border-radius: 125px;
`;

const AltTitle = styled(Title)`
  margin-top: 0;
`;

export default About;
