import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../Theme';

type Props = {
  isbacklink?: string;
};

export const GoToLink = styled(NavLink)<Props>`
  display: flex;
  justify-content: center;
  color: ${theme.dark};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }

  span {
    margin-left: ${(Props) => (Props.isbacklink == 'true' ? '0' : '0.5rem')};
    margin-right: ${(Props) => (Props.isbacklink == 'true' ? '0.5rem' : '0')};
    transition: transform 0.3s ease-in-out;
  }

  :hover {
    transform: ${(Props) =>
      Props.isbacklink == 'true' ? 'translateX(-0.3rem)' : 'translateX(0.3rem)'};
  }

  :hover span {
    transform: ${(Props) =>
      Props.isbacklink == 'true' ? 'translateX(-0.6rem)' : 'translateX(0.6rem)'};
  }
`;
