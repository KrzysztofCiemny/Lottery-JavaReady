import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PageWrapper } from './components/PageWrapper';
import { CheckResultsPage } from './pages/CheckResultsPage';
import { HomePage } from './pages/HomePage';
import { PlayPage } from './pages/PlayPage';
import { ResultsPage } from './pages/ResultsPage';
import { TicketPage } from './pages/TicketPage';
import { theme } from './Theme';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <PageWrapper>
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
