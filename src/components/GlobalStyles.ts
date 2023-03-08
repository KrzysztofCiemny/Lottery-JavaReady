import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../models/models';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }
`;
