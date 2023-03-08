import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  isbacklink?: string;
};

export const GoToLink = styled(NavLink)<Props>`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  transition: all 0.3s ease-in-out;

  span {
    font-weight: 900;
    margin-left: ${({ isbacklink }) => (isbacklink == 'true' ? '0' : '0.5rem')};
    margin-right: ${({ isbacklink }) => (isbacklink == 'true' ? '0.5rem' : '0')};
    transition: transform 0.3s ease-in-out;
  }

  :hover span {
    transform: ${({ isbacklink }) =>
      isbacklink == 'true' ? 'translateX(-0.6rem)' : 'translateX(0.6rem)'};
  }
`;
