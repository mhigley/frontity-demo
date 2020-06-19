import React from "react";
import { connect } from "frontity";
import { Container, StyledButton } from "./style";


const Toggle = ({actions, state}) => {
  const { setLightMode, setDarkMode } = actions.theme;
  const { mode } = state.theme;
  return (
    <Container>
      <StyledButton isSelected={ mode === "light" } onClick={ setLightMode }>Light</StyledButton>
      <StyledButton isSelected={ mode === "dark" } onClick={ setDarkMode }>Dark</StyledButton>
    </Container>
  )
}

export default connect(Toggle);

