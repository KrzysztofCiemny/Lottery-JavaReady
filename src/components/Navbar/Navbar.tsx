import React, { useEffect, useState } from 'react';

import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import {
  Header,
  Logo,
  LogoContainer,
  Nav,
  NavWrapper,
  StyledLink,
} from './Navbar.styles';

export const Navbar = ({ toggleTheme, theme }: any) => {
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
      <LogoContainer>
        <Logo>JavaReady</Logo>
        <ThemeToggler toggleTheme={toggleTheme} theme={theme} />
      </LogoContainer>
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
