import styled from 'styled-components';

import { theme } from '../Theme';

export const Header = styled.header`
  background-color: ${theme.primary};
  padding: 1em;
  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
    padding: 0;
    color: ${theme.secondary};
  }
`;

export const Nav = styled.nav<{ navOpen: boolean }>`
  /* transform: ${(p) => (p.navOpen ? 'translateX(0)' : 'translateX(100vw)')}; */
`;

export const NavMobileLabel = styled.label`
  z-index: 1000;
  text-align: center;
`;

export const NavMobileIcon = styled.span<{ navOpen: boolean }>`
  position: relative;
  background-color: ${theme.secondary};
  width: 1rem;
  height: 2px;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    background-color: ${theme.secondary};
    width: 1rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: ${(props) => (props.navOpen ? '0' : '-0.4rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.navOpen ? '0' : '0.4rem')};
    transform: ${(props) => (props.navOpen ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`;
