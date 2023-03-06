import styled from 'styled-components';

import { theme } from '../../Theme';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const Input = styled.input`
  margin-bottom: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;

export const WinningNumbersButton = styled.span`
  border-bottom: 1px solid;
  color: ${theme.secondary};
  cursor: pointer;
  font-weight: 700;
`;

export const NumbersDrawnMessage = styled.p`
  color: green;
  margin: 0;
  font-size: 0.8rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;
