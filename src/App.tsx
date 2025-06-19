import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocalSEODashboard from './pages/LocalSEODashboard';
import CoreSEODashboard from './pages/CoreSEODashboard';
import LocalSEOPlusPlus from './pages/LocalSEOPlusPlus';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/local-seo" element={<LocalSEODashboard />} />
          <Route path="/local-seo-plus" element={<LocalSEOPlusPlus />} />
          <Route path="/core-seo" element={<CoreSEODashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;