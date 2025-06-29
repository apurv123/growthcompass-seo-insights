import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Target, Building2, TrendingUp, Award, CheckCircle, Compass } from 'lucide-react';

const HomePage = () => {
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

  const fortune500Companies = [
    { name: 'Microsoft', logo: '🏢' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Google', logo: '🔍' },
    { name: 'Meta', logo: '📘' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Salesforce', logo: '☁️' }
  ];

  const successStories = [
    {
      company: 'RetailCorp',
      result: '300% increase in local search visibility',
      metric: '2.4M monthly searches',
      icon: Building2
    },
    {
      company: 'FoodChain Plus',
      result: '85% improvement in conversion rates',
      metric: '500+ locations optimized',
      icon: TrendingUp
    },
    {
      company: 'ServicePro',
      result: '150% growth in organic traffic',
      metric: '40% cost reduction',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Persistent Top Bar */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Growth Compass
              </span>
            </div>

            <div className="flex space-x-6">
              <button className="px-6 py-2 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg">
                Request Demo
              </button>
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
            <button className="px-8 py-4 text-slate-600 font-normal hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 rounded-lg">
              Request Demo
            </button>
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Login</span>
              <ArrowRight className="h-5 w-5" />
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

        {/* Fortune 500 Social Proof */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Trusted by Fortune 500 Companies
            </h2>
            <p className="text-slate-600 text-lg">
              Join industry leaders who rely on Growth Compass for their SEO success
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
            {fortune500Companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="text-3xl mb-2">{company.logo}</div>
                <span className="text-sm font-medium text-slate-700">{company.name}</span>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <story.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{story.company}</h3>
                    <p className="text-sm text-slate-600">{story.metric}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm font-medium text-slate-700">{story.result}</p>
                </div>
              </div>
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
            <button className="px-8 py-4 text-white font-normal hover:bg-white/10 transition-all duration-300 rounded-lg">
              Request Demo
            </button>
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;