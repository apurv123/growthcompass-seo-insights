import React, { useState } from 'react';
import { Filter, Download, TrendingUp, MapPin, Users, MousePointer, Target, DollarSign, Eye, Phone, Navigation, Globe, Star, ArrowUp, ArrowDown, ChevronRight, BarChart3, PieChart, TrendingDown, AlertCircle, Lightbulb, ExternalLink } from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Downtown Location - Store #001');
  const [clickType, setClickType] = useState('all');
  const [localSEOToggle, setLocalSEOToggle] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [drillLevel, setDrillLevel] = useState('country');
  const [drillPath, setDrillPath] = useState(['United States']);

  // Sample data for funnels
  const localSEOFunnelData = {
    views: 145678,
    clicks: 8740,
    conversions: 394
  };

  const coreSEOFunnelData = {
    views: 234567,
    clicks: 12450,
    conversions: 567
  };

  const attributionData = {
    views: 62, // % of core SEO views from local SEO
    clicks: 70, // % of core SEO clicks from local SEO
    conversions: 69 // % of core SEO conversions from local SEO
  };

  const conversionDrivers = [
    { location: 'United States', type: 'Country', contribution: 100, conversionRate: 4.5, ctr: 6.0 },
    { location: 'California', type: 'State', contribution: 28, conversionRate: 5.2, ctr: 6.8 },
    { location: 'Los Angeles', type: 'MSA', contribution: 15, conversionRate: 4.8, ctr: 6.2 },
    { location: 'Beverly Hills', type: 'City', contribution: 8, conversionRate: 6.1, ctr: 7.5 },
    { location: '90210', type: 'ZIP', contribution: 4, conversionRate: 7.2, ctr: 8.1 },
    { location: 'Rodeo Drive Store', type: 'Store', contribution: 2, conversionRate: 8.5, ctr: 9.2 }
  ];

  const clickConversionData = [
    { type: 'Phone Calls', percentage: 45, count: 177 },
    { type: 'Store Visits', percentage: 35, count: 138 },
    { type: 'Online Purchases', percentage: 20, count: 79 }
  ];

  const revenueData = [
    { period: 'YTD 2024', amount: 2450000, type: 'Actual', growth: '+18%' },
    { period: 'FY 2024', amount: 3200000, type: 'Actual', growth: '+22%' },
    { period: 'FY 2025', amount: 4100000, type: 'Forecast', growth: '+28%' }
  ];

  const storePerformanceData = {
    visits: 45678,
    clicks: 2847,
    conversions: 142,
    ctr: 6.2,
    conversionRate: 5.0
  };

  const stores = [
    'Downtown Location - Store #001',
    'Mall Location - Store #002', 
    'Suburban Plaza - Store #003',
    'Airport Terminal - Store #004',
    'University District - Store #005'
  ];

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: TrendingUp },
    { id: 'store', label: 'Store Insights', icon: MapPin },
    { id: 'regional', label: 'Regional Performance', icon: BarChart3 }
  ];

  const handleDrillDown = (location: string) => {
    const levels = ['country', 'state', 'msa', 'city', 'zip', 'store'];
    const currentIndex = levels.indexOf(drillLevel);
    if (currentIndex < levels.length - 1) {
      setDrillLevel(levels[currentIndex + 1]);
      setDrillPath([...drillPath, location]);
    }
  };

  const handleRollUp = () => {
    const levels = ['country', 'state', 'msa', 'city', 'zip', 'store'];
    const currentIndex = levels.indexOf(drillLevel);
    if (currentIndex > 0) {
      setDrillLevel(levels[currentIndex - 1]);
      setDrillPath(drillPath.slice(0, -1));
    }
  };

  const renderFunnelChart = (data: any, title: string, color: string) => {
    const maxValue = Math.max(data.views, data.clicks, data.conversions);
    
    return (
      <div className="space-y-4">
        <h4 className="text-center font-semibold text-slate-900 mb-4">{title}</h4>
        
        {/* Views Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Views</span>
            <span className="text-sm font-bold text-slate-900">{data.views.toLocaleString()}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className={`h-8 rounded-full ${color} transition-all duration-500 flex items-center justify-end pr-3`}
              style={{ width: `${(data.views / maxValue) * 100}%` }}
            >
              <span className="text-white text-sm font-medium">
                {data.views.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Clicks Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Clicks</span>
            <span className="text-sm font-bold text-slate-900">{data.clicks.toLocaleString()}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className={`h-8 rounded-full ${color} transition-all duration-500 flex items-center justify-end pr-3`}
              style={{ width: `${(data.clicks / maxValue) * 100}%` }}
            >
              <span className="text-white text-sm font-medium">
                {data.clicks.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Conversions Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Conversions</span>
            <span className="text-sm font-bold text-slate-900">{data.conversions.toLocaleString()}</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className={`h-8 rounded-full ${color} transition-all duration-500 flex items-center justify-end pr-3`}
              style={{ width: `${(data.conversions / maxValue) * 100}%` }}
            >
              <span className="text-white text-sm font-medium">
                {data.conversions.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAttributionChart = () => {
    return (
      <div className="space-y-4">
        <h4 className="text-center font-semibold text-slate-900 mb-4">Local SEO Attribution</h4>
        
        {/* Views Attribution */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Views Attribution</span>
            <span className="text-sm font-bold text-emerald-900">{attributionData.views}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className="h-8 rounded-full bg-emerald-500 transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${attributionData.views}%` }}
            >
              <span className="text-white text-sm font-medium">
                {attributionData.views}%
              </span>
            </div>
          </div>
        </div>

        {/* Clicks Attribution */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Clicks Attribution</span>
            <span className="text-sm font-bold text-emerald-900">{attributionData.clicks}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className="h-8 rounded-full bg-emerald-500 transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${attributionData.clicks}%` }}
            >
              <span className="text-white text-sm font-medium">
                {attributionData.clicks}%
              </span>
            </div>
          </div>
        </div>

        {/* Conversions Attribution */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Conversions Attribution</span>
            <span className="text-sm font-bold text-emerald-900">{attributionData.conversions}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-8">
            <div
              className="h-8 rounded-full bg-emerald-500 transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${attributionData.conversions}%` }}
            >
              <span className="text-white text-sm font-medium">
                {attributionData.conversions}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
            <p className="text-slate-600">Advanced multi-location SEO intelligence</p>
          </div>
        </div>
        
        {/* Filters Button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Time Range</label>
              <input type="range" className="w-full" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location Type</label>
              <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                <option>Global</option>
                <option>Country</option>
                <option>State</option>
                <option>MSA</option>
                <option>City</option>
                <option>ZIP</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Click Type</label>
              <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                <option>Website visits</option>
                <option>Store visits</option>
                <option>Phone calls</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 mb-8 bg-slate-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-purple-700 shadow-sm font-medium'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'strategic' && (
        <div className="space-y-8">
          {/* SEO Attribution */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">SEO Attribution</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={clickType}
                  onChange={(e) => setClickType(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1 text-sm"
                >
                  <option value="all">All Clicks</option>
                  <option value="phone">Phone Calls</option>
                  <option value="store">Store Visits</option>
                  <option value="online">Online</option>
                </select>
                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Local SEO Funnel */}
              <div className="bg-slate-50 rounded-lg p-6">
                {renderFunnelChart(localSEOFunnelData, 'Local SEO Funnel', 'bg-blue-500')}
              </div>
              
              {/* Core SEO Funnel */}
              <div className="bg-slate-50 rounded-lg p-6">
                {renderFunnelChart(coreSEOFunnelData, 'Core SEO Funnel', 'bg-teal-500')}
              </div>
              
              {/* Attribution */}
              <div className="bg-slate-50 rounded-lg p-6">
                {renderAttributionChart()}
              </div>
            </div>
          </div>

          {/* Conversion Drivers */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Conversion Drivers</h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localSEOToggle}
                    onChange={(e) => setLocalSEOToggle(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-slate-700">Local SEO Contribution</span>
                </label>
                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversionDrivers.map((driver, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{driver.location}</h4>
                    <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">{driver.type}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Contribution</span>
                      <span className="text-sm font-medium text-slate-900">{driver.contribution}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">Conversion Rate</span>
                      <span className="text-sm font-medium text-slate-900">{driver.conversionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-600">CTR</span>
                      <span className="text-sm font-medium text-slate-900">{driver.ctr}%</span>
                    </div>
                  </div>
                  {localSEOToggle && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <span className="text-xs text-emerald-600 font-medium">Local SEO: 68% contribution</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Click-to-Conversion Correlation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Click-to-Conversion Correlation</h3>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localSEOToggle}
                    onChange={(e) => setLocalSEOToggle(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-slate-700">Local SEO Contribution</span>
                </label>
                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {clickConversionData.map((item, index) => {
                    const colors = ['#3B82F6', '#10B981', '#8B5CF6'];
                    const startAngle = clickConversionData.slice(0, index).reduce((sum, d) => sum + (d.percentage * 3.6), 0);
                    const endAngle = startAngle + (item.percentage * 3.6);
                    
                    const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
                    const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
                    const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
                    const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
                    
                    const largeArcFlag = item.percentage > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={index}
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={colors[index]}
                        className="hover:opacity-80 transition-opacity"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">394</div>
                    <div className="text-sm text-slate-600">Total Conversions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <div className="flex space-x-6">
                {clickConversionData.map((item, index) => {
                  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${colors[index]}`}></div>
                      <span className="text-sm text-slate-700">{item.type}: {item.percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {localSEOToggle && (
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <span className="text-sm text-emerald-700 font-medium">Local SEO contributes 72% to total conversions</span>
              </div>
            )}
          </div>

          {/* Revenue Impact */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Revenue Impact</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1 text-sm"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localSEOToggle}
                    onChange={(e) => setLocalSEOToggle(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-slate-700">Local SEO Contribution</span>
                </label>
                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {revenueData.map((revenue, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{revenue.period}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      revenue.type === 'Actual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {revenue.type}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    ${revenue.amount.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-1">
                    <ArrowUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">{revenue.growth}</span>
                  </div>
                  {revenue.type === 'Forecast' && (
                    <p className="text-xs text-slate-600 mt-2">Based on recommended actions</p>
                  )}
                  {localSEOToggle && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <span className="text-xs text-emerald-600 font-medium">Local SEO: 65% contribution</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Strategic Insights</h3>
              <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Performance Insights */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4 flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <span>Performance Optimization</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong>Increase mobile CTR by 23%</strong> by optimizing local listings for mobile search queries in high-traffic ZIP codes.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong>Boost conversions by 15%</strong> by implementing location-specific landing pages for top-performing keywords.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Competitive Insights */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4 flex items-center space-x-2">
                  <Target className="h-5 w-5 text-red-500" />
                  <span>Competitive Intelligence</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Competitor gap analysis</strong> reveals 3 high-value keywords with 40% lower competition.
                    </p>
                    <button className="flex items-center space-x-1 text-xs text-purple-600 hover:text-purple-800">
                      <ExternalLink className="h-3 w-3" />
                      <span>View detailed report</span>
                    </button>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Market opportunity</strong> identified in 5 underserved locations with high search volume.
                    </p>
                    <button className="flex items-center space-x-1 text-xs text-orange-600 hover:text-orange-800">
                      <ExternalLink className="h-3 w-3" />
                      <span>View expansion analysis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'store' && (
        <div className="space-y-8">
          {/* Store Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Store:</span>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-medium"
              >
                {stores.map((store, index) => (
                  <option key={index} value={store}>{store}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Store Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Store Performance</h3>
              <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">{storePerformanceData.visits.toLocaleString()}</div>
                <div className="text-sm text-blue-700">Total Visits</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <MousePointer className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">{storePerformanceData.clicks.toLocaleString()}</div>
                <div className="text-sm text-green-700">Total Clicks</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-900">{storePerformanceData.conversions}</div>
                <div className="text-sm text-purple-700">Conversions</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">{storePerformanceData.ctr}%</div>
                <div className="text-sm text-orange-700">CTR</div>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center">
                <DollarSign className="h-6 w-6 text-teal-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-teal-900">{storePerformanceData.conversionRate}%</div>
                <div className="text-sm text-teal-700">Conversion Rate</div>
              </div>
            </div>
          </div>

          {/* Additional store insights sections would go here */}
        </div>
      )}

      {activeTab === 'regional' && (
        <div className="space-y-8">
          {/* Performance by Location */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Performance by Location</h3>
              <div className="flex items-center space-x-4">
                {drillPath.length > 1 && (
                  <button
                    onClick={handleRollUp}
                    className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg px-3 py-1"
                  >
                    <span>← Roll Up</span>
                  </button>
                )}
                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-800">
                  <Download className="h-4 w-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <div 
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg p-8 cursor-pointer hover:shadow-lg transition-shadow"
                onDoubleClick={() => handleDrillDown('California')}
              >
                <h4 className="text-xl font-bold mb-4">{drillPath[drillPath.length - 1]}</h4>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold">234K</div>
                    <div className="text-sm opacity-90">Views</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12.4K</div>
                    <div className="text-sm opacity-90">Clicks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">567</div>
                    <div className="text-sm opacity-90">Conversions</div>
                  </div>
                </div>
                <p className="text-xs mt-4 opacity-75">Double-click to drill down</p>
              </div>
            </div>
          </div>

          {/* Additional regional sections would go here */}
        </div>
      )}
    </div>
  );
};

export default LocalSEOPlusPlus;