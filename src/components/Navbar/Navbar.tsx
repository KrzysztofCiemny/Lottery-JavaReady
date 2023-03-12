import { t } from 'i18next';
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
        <Logo>{t('logoMessage')}</Logo>
        <ThemeToggler toggleTheme={toggleTheme} theme={theme} />
      </LogoContainer>
      <NavWrapper>
        <Nav>
          <StyledLink to="/">{t('homeMessage')}</StyledLink>
          <StyledLink to="/play">{t('playMessage')}</StyledLink>
          <StyledLink to="/checkResults">{t('resultsMessage')}</StyledLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
