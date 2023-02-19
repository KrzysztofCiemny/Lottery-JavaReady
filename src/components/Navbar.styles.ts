import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../Theme';

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${theme.primary};
  width: 100%;

  div {
    color: ${theme.secondary};
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    align-items: center;
    padding: 1.2rem 3rem;
  }
`;

export const NavWrapper = styled.nav<{ navOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: ${(p) => (p.navOpen ? 'translateY(0)' : 'translateY(-100vh)')};
  transition: all 0.5s ease-in-out;

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
  padding: 0 0 0 1.2rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${theme.darkContrast};
  padding: 0.5rem 0;
  font-size: 2.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    color: ${theme.secondary};
  }

  @media (min-width: 1024px) {
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: unset;
  }
`;

export const NavMobileLabel = styled.label`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavMobileIcon = styled.span<{ navOpen: boolean }>`
  position: relative;
  background-color: ${(props) => (props.navOpen ? 'transparent' : '#fff')};
  width: 1.4rem;
  height: 1px;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: #fff;
    width: 1.4rem;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &::before {
    top: ${(props) => (props.navOpen ? '0' : '-0.5rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.navOpen ? '0' : '0.5rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
