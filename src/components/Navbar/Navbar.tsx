import React, { useEffect, useState } from 'react';

import { Header, Logo, Nav, NavWrapper, StyledLink } from './Navbar.styles';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerScrollAnimation = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', headerScrollAnimation);

    return () => {
      window.removeEventListener('scroll', headerScrollAnimation);
    };
  }, []);

  return (
    <Header isScrolled={isScrolled}>
      <Logo>JavaReady.pl</Logo>
      <NavWrapper>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/play">Play</StyledLink>
          <StyledLink to="/checkResults">Results</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
