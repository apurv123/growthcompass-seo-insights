import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, BarChart3, TrendingUp, LogOut, Home } from 'lucide-react';

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
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-lg border border-slate-200">
              <img 
                src="/src/assets/ODLS.png" 
                alt="Mike's Bikes Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-blue-900">
              Mike's Bikes
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Home Button - Only on dashboard pages */}
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            {/* Dashboard Navigation Buttons */}
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 ${
                    isActive ? 'bg-blue-50' : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Logout Button */}
            <Link
              to="/"
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;