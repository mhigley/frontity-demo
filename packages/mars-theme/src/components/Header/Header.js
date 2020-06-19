import React from "react";
import { connect } from "frontity";
import Nav from "../nav";
import MobileMenu from "../menu";

import Toggle from "../common/Toggle";
import { Container, Title, Description, StyledLink } from "./style"

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
        <Toggle />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
