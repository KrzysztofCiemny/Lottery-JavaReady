import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../Theme';

export const Header = styled.header`
  background-color: ${theme.primary};
  padding: 1em;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  h2 {
    margin: 0;
    padding: 0;
    color: ${theme.secondary};
  }

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const NavWrapper = styled.nav<{ navOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: ${(p) => (p.navOpen ? 'translateY(0)' : 'translateY(-100vh)')};
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 100%;
    width: unset;
    position: unset;
    transform: unset;
    transition: unset;
  }
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${theme.secondary};
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 1024px) {
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: unset;
  }
`;

export const NavMobileLabel = styled.label`
  z-index: 1000;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavMobileIcon = styled.span<{ navOpen: boolean }>`
  position: relative;
  background-color: ${(props) => (props.navOpen ? 'transparent' : theme.secondary)};
  width: 1.4rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: ${theme.secondary};
    width: 1.4rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: ${(props) => (props.navOpen ? '0' : '-0.4rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.navOpen ? '0' : '0.4rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
