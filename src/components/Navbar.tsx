import React, { useState } from 'react';

import {
  Header,
  Nav,
  NavLink,
  NavMobileIcon,
  NavMobileLabel,
  NavWrapper,
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
          <NavLink>Home</NavLink>
          <NavLink>Play</NavLink>
          <NavLink>Results</NavLink>
          <NavLink>Linkedin</NavLink>
        </Nav>
      </NavWrapper>
    </Header>
  );
};
