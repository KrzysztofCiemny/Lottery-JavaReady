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
  const [isNavOpen, isSetNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    isSetNavOpen(false);
  }, [pathname]);

  return (
    <Header>
      <div>JavaReady.pl</div>
      <NavMobileLabel onClick={() => isSetNavOpen(!isNavOpen)}>
        <NavMobileIcon navOpen={isNavOpen} />
      </NavMobileLabel>
      <NavWrapper navOpen={isNavOpen}>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/play">Play</StyledLink>
          <StyledLink to="/checkResults">Check results</StyledLink>
          <StyledLink to="/">Linkedin</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
