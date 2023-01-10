import React, { useState } from 'react';

import { Header, Nav, NavMobileIcon, NavMobileLabel } from './Navbar.styles';

export const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <Header>
      <h2>Lottery</h2>
      <Nav navOpen={navOpen}>
        <a href="/#">Home</a>
        <a href="/#">Play</a>
        <a href="/#">Results</a>
        <a href="/#">Linkedin</a>
      </Nav>
      <NavMobileLabel htmlFor="navi-toggle" onClick={() => setnavOpen(!navOpen)}>
        <NavMobileIcon navOpen={navOpen} />
      </NavMobileLabel>
    </Header>
  );
};
