import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './components/GlobalStyles';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { useDarkMode } from './composables/useDarkMode';
import { CheckResultsPage } from './pages/CheckResultsPage/CheckResultsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PlayPage } from './pages/PlayPage/PlayPage';
import { ResultsPage } from './pages/ResultsPage/ResultsPage';
import { TicketPage } from './pages/TicketPage/TicketPage';
import { darkTheme, lightTheme } from './Theme';

const App: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <PageWrapper theme={theme} toggleTheme={toggleTheme}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/checkResults" element={<CheckResultsPage />} />
            <Route path="/checkResults/Results" element={<ResultsPage />} />
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
