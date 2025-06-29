import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, BarChart3, TrendingUp, LogOut, Home, Compass } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/local-seo', label: 'Local SEO', icon: MapPin },
    { path: '/core-seo', label: 'Core SEO', icon: BarChart3 },
    { path: '/local-seo-plus', label: 'Local SEO++', icon: TrendingUp },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-800" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                Mike's Bikes
              </span>
            </div>

            {/* Dashboard Navigation Buttons */}
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg ${
                    isActive ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            {/* Home Button */}
            <Link
              to="/dashboard"
              className={`px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg ${
                location.pathname === '/dashboard' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              Home
            </Link>

            {/* Logout Button */}
            <Link
              to="/"
              className="px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;