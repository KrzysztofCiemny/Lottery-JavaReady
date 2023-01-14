import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

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
