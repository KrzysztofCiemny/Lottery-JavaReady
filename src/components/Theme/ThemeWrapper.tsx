import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '../../composables/useDarkMode';
import { PageWrapper } from '../PageWrapper/PageWrapper';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './Theme';

interface Props {
  children: ReactNode;
}

export const ThemeWrapper = ({ children }: Props) => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <PageWrapper theme={theme} toggleTheme={toggleTheme}>
        {children}
      </PageWrapper>
    </ThemeProvider>
  );
};
