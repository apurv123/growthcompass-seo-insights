import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import LocalSEODashboard from './pages/LocalSEODashboard';
import CoreSEODashboard from './pages/CoreSEODashboard';
import LocalSEOPlusPlus from './pages/LocalSEOPlusPlus';
import Navigation from './components/Navigation';

// Component to handle scroll reset
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route 
            path="/local-seo" 
            element={
              <>
                <Navigation />
                <LocalSEODashboard />
              </>
            } 
          />
          <Route 
            path="/local-seo-plus" 
            element={
              <>
                <Navigation />
                <LocalSEOPlusPlus />
              </>
            } 
          />
          <Route 
            path="/core-seo" 
            element={
              <>
                <Navigation />
                <CoreSEODashboard />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;