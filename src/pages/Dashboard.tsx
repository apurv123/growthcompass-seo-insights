import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BarChart3, TrendingUp, LogOut, Compass } from 'lucide-react';

const Dashboard = () => {
  const dashboards = [
    {
      title: 'Local SEO',
      subtitle: 'Store-Level Analytics',
      description: 'Monitor individual store performance with syndication status, keyword rankings, and local search metrics.',
      icon: MapPin,
      path: '/local-seo',
      gradient: 'from-emerald-500 to-teal-600',
      features: ['Store-level insights', 'Listing syndication', 'Local keyword tracking']
    },
    {
      title: 'Core SEO',
      subtitle: 'Essential Analytics',
      description: 'Track top level metrics, keyword rankings, website traffic, conversions, and brand authority—all in one place.',
      icon: BarChart3,
      path: '/core-seo',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Organic traffic analysis', 'Conversion tracking', 'Performance monitoring']
    },
    {
      title: 'Local SEO++',
      subtitle: 'Advanced Multi-Location',
      description: 'Strategic insights across locations with attribution funnels, regional performance, and store optimization recommendations.',
      icon: TrendingUp,
      path: '/local-seo-plus',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Strategic impact analysis', 'Regional benchmarking', 'Store optimization insights'],
      badge: 'Enhanced'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      {/* Persistent Top Bar */}
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

              <Link
                to="/local-seo"
                className="px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg"
              >
                Local SEO
              </Link>
              <Link
                to="/core-seo"
                className="px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg"
              >
                Core SEO
              </Link>
              <Link
                to="/local-seo-plus"
                className="px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg"
              >
                Local SEO++
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="px-4 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg bg-blue-50 text-blue-600 border-b-2 border-blue-600"
              >
                Home
              </Link>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Welcome, Mike's Bikes Team 👋
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive SEO intelligence platform is ready. Choose the dashboard that best fits your current analysis needs.
          </p>
        </div>

        {/* Dashboards Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              🚀 Explore Your Dashboards
            </h2>
            <p className="text-slate-600 text-lg">
              Access powerful analytics and insights tailored for your multi-location bike business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dashboards.map((dashboard, index) => (
              <Link
                key={index}
                to={dashboard.path}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2 relative"
              >
                {dashboard.badge && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {dashboard.badge}
                  </div>
                )}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${dashboard.gradient} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <dashboard.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{dashboard.title}</h3>
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full mb-2 inline-block">
                      {dashboard.subtitle}
                    </span>
                    <p className="text-slate-600 leading-relaxed mb-4">{dashboard.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {dashboard.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Click to explore →
                  </span>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Quick Performance Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
              <div className="text-sm text-slate-600">Store Locations</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.4M</div>
              <div className="text-sm text-slate-600">Monthly Searches</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-sm text-slate-600">Listing Accuracy</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">+28%</div>
              <div className="text-sm text-slate-600">YoY Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;