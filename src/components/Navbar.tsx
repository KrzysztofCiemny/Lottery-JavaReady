import React, { useState } from 'react';

import {
  Header,
  Nav,
  NavMobileIcon,
  NavMobileLabel,
  NavWrapper,
  StyledLink,
} from './Navbar.styles';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Header>
      <h2>Lottery</h2>
      <NavMobileLabel htmlFor="navi-toggle" onClick={() => setNavOpen(!navOpen)}>
        <NavMobileIcon navOpen={navOpen} />
      </NavMobileLabel>
      <NavWrapper navOpen={navOpen}>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/play">Play</StyledLink>
          <StyledLink to="/results">Results</StyledLink>
          <StyledLink to="/">Linkedin</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
