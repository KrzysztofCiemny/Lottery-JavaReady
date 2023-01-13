import styled from 'styled-components';

import { theme } from '../Theme';

export const HeroBanner = styled.div`
  background-color: ${theme.secondary};
  padding: 5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

export const ButtonsSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;
`;

export const RulesSection = styled.section`
  padding: 0 2em;
`;
