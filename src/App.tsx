import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeWrapper } from './components/Theme/ThemeWrapper';
import { CheckResultsPage } from './pages/CheckResultsPage/CheckResultsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PlayPage } from './pages/PlayPage/PlayPage';
import { ResultsPage } from './pages/ResultsPage/ResultsPage';
import { TicketPage } from './pages/TicketPage/TicketPage';

const App = () => {
  return (
    <Router>
      <ThemeWrapper>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/checkResults" element={<CheckResultsPage />} />
          <Route path="/checkResults/Results" element={<ResultsPage />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </ThemeWrapper>
    </Router>
  );
};

export default App;
