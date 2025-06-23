import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BarChart3, TrendingUp, Users, Zap, Shield, Target } from 'lucide-react';

const HomePage = () => {
  const dashboards = [
    {
      title: 'Local SEO Dashboard',
      subtitle: 'Store-Level Analytics',
      description: 'Monitor store performance with syndication status, keyword rankings, and local search metrics.',
      icon: MapPin,
      path: '/local-seo',
      gradient: 'from-emerald-500 to-teal-600',
      features: ['Store-level insights', 'Listing syndication', 'Local keyword tracking']
    },
    {
      title: 'Local SEO++',
      subtitle: 'Advanced Multi-Location',
      description: 'Strategic insights across locations with attribution funnels, regional performance, and AI recommendations.',
      icon: TrendingUp,
      path: '/local-seo-plus',
      gradient: 'from-purple-500 to-pink-600',
      features: ['Strategic impact analysis', 'Regional benchmarking', 'Store optimization insights'],
      badge: 'Enhanced'
    },
    {
      title: 'Core SEO Dashboard',
      subtitle: 'Essential Analytics',
      description: 'Track keyword rankings, website traffic, conversions, and brand authority—all in one place.',
      icon: BarChart3,
      path: '/core-seo',
      gradient: 'from-blue-500 to-indigo-600',
      features: ['Organic traffic analysis', 'Conversion tracking', 'Performance monitoring']
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description: 'Get precise, data-driven recommendations to improve your SEO performance across all locations.'
    },
    {
      icon: Users,
      title: 'Multi-Location Management',
      description: 'Scale your SEO strategy effortlessly across multiple stores, cities, and regions.'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Monitor your search performance with up-to-date metrics and instant alerts.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security to protect your business-critical SEO data.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span>🧭</span>
          <span>Welcome to Growth Compass</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Your all-in-one{' '}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            SEO intelligence
          </span>{' '}
          platform
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Built for multi-location brands. Whether you're optimizing for local visibility or scaling your search strategy nationwide, 
          Growth Compass helps you navigate the path to growth with clarity, precision, and actionable insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/local-seo-plus"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <span>Explore Local SEO++</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/core-seo"
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 hover:border-slate-400"
          >
            View Core Dashboard
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 group"
          >
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Dashboards Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            🚀 Explore Your Dashboards
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the dashboard that best fits your current needs and growth stage
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Navigate Your Growth?</h2>
        <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
          Join thousands of multi-location brands who trust Growth Compass to drive their SEO success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/local-seo-plus"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Free Trial
          </Link>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;