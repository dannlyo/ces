import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about/about';
import Dashboard from './pages/admin/dashboard';
import Submissions from './pages/admin/submissions';
import Agencies from './pages/admin/agencies';
import Submission from './pages/submission'
import Track from './pages/track';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/track" element={<Track />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/submissions" element={<Submissions />} />
        <Route path="/admin/agencies" element={<Agencies />} />
        {/* Catch-all route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
