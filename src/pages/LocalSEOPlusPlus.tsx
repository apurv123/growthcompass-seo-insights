import React, { useState } from 'react';
import { TrendingUp, MapPin, Target, Users, Filter, Calendar, ChevronDown, Lightbulb, Star, Phone, Navigation, Globe, ArrowUpRight, ArrowDownRight, Download, BarChart3, ArrowUp, Eye, MousePointer } from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [selectedStore, setSelectedStore] = useState('All Stores');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 Days');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedStoreForTab2, setSelectedStoreForTab2] = useState('Downtown Location - Store #001');
  const [isStoreTab2DropdownOpen, setIsStoreTab2DropdownOpen] = useState(false);
  
  // Strategic Impact filters
  const [clickTypeFilter, setClickTypeFilter] = useState('all');
  const [localSeoContribution, setLocalSeoContribution] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  
  // Regional Performance drill-down states
  const [performanceDrillLevel, setPerformanceDrillLevel] = useState('country');
  const [relevanceDrillLevel, setRelevanceDrillLevel] = useState('country');
  const [reviewDrillLevel, setReviewDrillLevel] = useState('country');

  const stores = ['All Stores', 'Downtown Location', 'Mall Location', 'Suburban Plaza', 'Airport Terminal', 'University District'];
  const timeRanges = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last 6 Months', 'Last Year'];
  const storesForTab2 = [
    'Downtown Location - Store #001',
    'Mall Location - Store #002', 
    'Suburban Plaza - Store #003',
    'Airport Terminal - Store #004',
    'University District - Store #005'
  ];

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: Target },
    { id: 'store', label: 'Store Insights', icon: MapPin },
    { id: 'regional', label: 'Regional Performance', icon: TrendingUp }
  ];

  // Strategic Impact Data
  const localSeoFunnelData = [
    { stage: 'Local Search Views', count: 125000, percentage: 100 },
    { stage: 'Local Clicks', count: 15000, percentage: 12 },
    { stage: 'Local Conversions', count: 1800, percentage: 1.4 }
  ];

  const coreSeoFunnelData = [
    { stage: 'Organic Views', count: 450000, percentage: 100 },
    { stage: 'Organic Clicks', count: 36000, percentage: 8 },
    { stage: 'Organic Conversions', count: 2880, percentage: 0.64 }
  ];

  const attributionData = [
    { metric: 'Views', localContribution: 21.7 }, // 125k / (125k + 450k)
    { metric: 'Clicks', localContribution: 29.4 }, // 15k / (15k + 36k)
    { metric: 'Conversions', localContribution: 38.5 } // 1800 / (1800 + 2880)
  ];

  const conversionDriversData = [
    { type: 'Country', name: 'United States', contribution: 100, conversionRate: 1.4, ctr: 12 },
    { type: 'State', name: 'California', contribution: 36, conversionRate: 1.6, ctr: 13.2 },
    { type: 'MSA', name: 'Seattle Metro', contribution: 18, conversionRate: 1.8, ctr: 14.1 },
    { type: 'City', name: 'Seattle', contribution: 12, conversionRate: 2.1, ctr: 15.3 },
    { type: 'ZIP', name: '98101', contribution: 3.2, conversionRate: 2.8, ctr: 16.7 },
    { type: 'Store', name: 'Downtown #001', contribution: 1.8, conversionRate: 3.2, ctr: 18.2 }
  ];

  const clickConversionData = [
    { type: 'Phone Calls', percentage: 45, conversions: 810, color: 'bg-purple-500' },
    { type: 'Store Visits', percentage: 35, conversions: 630, color: 'bg-green-500' },
    { type: 'Website Visits', percentage: 20, conversions: 360, color: 'bg-blue-500' }
  ];

  const revenueData = [
    { 
      period: 'YTD (Actual)', 
      amount: 1247500, 
      growth: '+28% vs last year',
      type: 'actual',
      color: 'from-green-50 to-emerald-50',
      textColor: 'text-emerald-800'
    },
    { 
      period: 'Current FY (Actual)', 
      amount: 1580000, 
      growth: 'Based on current trends',
      type: 'actual',
      color: 'from-blue-50 to-cyan-50',
      textColor: 'text-blue-800'
    },
    { 
      period: 'Next Year (Forecast)', 
      amount: 2150000, 
      growth: 'With recommended actions',
      type: 'forecast',
      color: 'from-purple-50 to-pink-50',
      textColor: 'text-purple-800'
    }
  ];

  // Store Insights Data
  const proximityData = [
    { distance: '<1km', ctr: 8.5, clicks: 3200, color: 'bg-green-500' },
    { distance: '1-3km', ctr: 6.2, clicks: 2800, color: 'bg-blue-500' },
    { distance: '3-5km', ctr: 4.1, clicks: 1900, color: 'bg-yellow-500' },
    { distance: '5-10km', ctr: 2.8, clicks: 1200, color: 'bg-orange-500' },
    { distance: '>10km', ctr: 1.5, clicks: 600, color: 'bg-red-500' }
  ];

  const storeKeywords = [
    { keyword: 'pizza near downtown', position: 2, relevance: 95, views: 8500, change: 1 },
    { keyword: 'best pizza downtown', position: 1, relevance: 98, views: 7200, change: 0 },
    { keyword: 'downtown italian food', position: 4, relevance: 87, views: 5800, change: -1 },
    { keyword: 'pizza delivery downtown', position: 3, relevance: 92, views: 4900, change: 2 },
    { keyword: 'authentic pizza downtown', position: 5, relevance: 89, views: 3600, change: 1 }
  ];

  const clickTypeBreakdown = [
    { type: 'Website Visits', count: 4200, percentage: 42, icon: Globe, color: 'bg-blue-500' },
    { type: 'Directions', count: 3500, percentage: 35, icon: Navigation, color: 'bg-green-500' },
    { type: 'Phone Calls', count: 2300, percentage: 23, icon: Phone, color: 'bg-purple-500' }
  ];

  const prominenceScores = [
    { metric: 'Review Score', score: 4.6, max: 5, color: 'bg-green-500' },
    { metric: 'Review Count', score: 847, max: 1000, color: 'bg-blue-500' },
    { metric: 'Citation Accuracy', score: 94, max: 100, color: 'bg-teal-500' },
    { metric: 'Brand Mentions', score: 78, max: 100, color: 'bg-purple-500' }
  ];

  // Regional Performance Data
  const locationComparison = [
    { location: 'Downtown', city: 'Seattle', visibility: 92, engagement: 8.5, conversions: 245, revenue: '$48,500' },
    { location: 'Bellevue', city: 'Bellevue', visibility: 78, engagement: 6.2, conversions: 189, revenue: '$37,800' },
    { location: 'Capitol Hill', city: 'Seattle', visibility: 85, engagement: 7.8, conversions: 203, revenue: '$42,100' },
    { location: 'Fremont', city: 'Seattle', visibility: 71, engagement: 5.9, conversions: 156, revenue: '$31,200' },
    { location: 'Kirkland', city: 'Kirkland', visibility: 82, engagement: 7.1, conversions: 178, revenue: '$35,600' }
  ];

  // Performance funnel data based on drill level
  const getPerformanceFunnelData = () => {
    if (performanceDrillLevel === 'country') {
      return [
        { location: 'United States', views: 125000, clicks: 15000, conversions: 1800 }
      ];
    } else if (performanceDrillLevel === 'state') {
      return [
        { location: 'California', views: 45000, clicks: 5400, conversions: 648 },
        { location: 'Texas', views: 38000, clicks: 4560, conversions: 547 },
        { location: 'Washington', views: 25000, clicks: 3000, conversions: 360 },
        { location: 'New York', views: 17000, clicks: 2040, conversions: 245 }
      ];
    }
    return [];
  };

  // Query relevance data based on drill level
  const getQueryRelevanceData = () => {
    if (relevanceDrillLevel === 'country') {
      return [
        { location: 'United States', score: 87 }
      ];
    } else if (relevanceDrillLevel === 'state') {
      return [
        { location: 'California', score: 92 },
        { location: 'Texas', score: 85 },
        { location: 'Washington', score: 89 },
        { location: 'New York', score: 83 }
      ];
    }
    return [];
  };

  // Customer review data based on drill level
  const getCustomerReviewData = () => {
    if (reviewDrillLevel === 'country') {
      return [
        { location: 'United States', score: 4.6 }
      ];
    } else if (reviewDrillLevel === 'state') {
      return [
        { location: 'California', score: 4.8 },
        { location: 'Texas', score: 4.5 },
        { location: 'Washington', score: 4.7 },
        { location: 'New York', score: 4.4 }
      ];
    }
    return [];
  };

  const handlePerformanceDrillDown = () => {
    if (performanceDrillLevel === 'country') {
      setPerformanceDrillLevel('state');
    }
  };

  const handlePerformanceRollUp = () => {
    if (performanceDrillLevel === 'state') {
      setPerformanceDrillLevel('country');
    }
  };

  const handleRelevanceDrillDown = () => {
    if (relevanceDrillLevel === 'country') {
      setRelevanceDrillLevel('state');
    }
  };

  const handleRelevanceRollUp = () => {
    if (relevanceDrillLevel === 'state') {
      setRelevanceDrillLevel('country');
    }
  };

  const handleReviewDrillDown = () => {
    if (reviewDrillLevel === 'country') {
      setReviewDrillLevel('state');
    }
  };

  const handleReviewRollUp = () => {
    if (reviewDrillLevel === 'state') {
      setReviewDrillLevel('country');
    }
  };

  const formatCurrency = (amount) => {
    const symbols = { USD: '$', EUR: '€', GBP: '£' };
    return `${symbols[selectedCurrency] || '$'}${(amount / 1000).toFixed(0)}K`;
  };

  const renderStrategicImpact = () => (
    <div className="space-y-8">
      {/* SEO Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">🔄 SEO Attribution</h3>
          <div className="flex items-center space-x-4">
            <select 
              value={clickTypeFilter}
              onChange={(e) => setClickTypeFilter(e.target.value)}
              className="text-sm border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="all">All Clicks</option>
              <option value="phone">Phone Calls</option>
              <option value="store">Store Visits</option>
              <option value="online">Online</option>
            </select>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Local SEO Funnel */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900 text-center">Local SEO Funnel</h4>
            {localSeoFunnelData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.stage}</span>
                  <span className="text-sm text-slate-600">{item.percentage}%</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                    <div
                      className="h-8 rounded-full bg-emerald-500 transition-all duration-500 flex items-center justify-end pr-3"
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="text-white text-sm font-medium">
                        {item.count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core SEO Funnel */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900 text-center">Core SEO Funnel</h4>
            {coreSeoFunnelData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.stage}</span>
                  <span className="text-sm text-slate-600">{item.percentage}%</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                    <div
                      className="h-8 rounded-full bg-blue-500 transition-all duration-500 flex items-center justify-end pr-3"
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="text-white text-sm font-medium">
                        {item.count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attribution Percentages */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900 text-center">Local SEO Attribution</h4>
            {attributionData.map((item, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-800">{item.metric}</span>
                  <span className="text-lg font-bold text-purple-900">{item.localContribution}%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${item.localContribution}%` }}
                  ></div>
                </div>
                <p className="text-xs text-purple-600 mt-1">Local SEO contribution to total</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Drivers */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📊 Conversion Drivers</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={localSeoContribution}
                onChange={(e) => setLocalSeoContribution(e.target.checked)}
                className="rounded" 
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {conversionDriversData.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors group"
              onClick={() => setActiveTab('regional')}
            >
              <div className="text-xs text-slate-500 mb-1">{item.type}</div>
              <div className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.name}
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Contribution:</span>
                  <span className="font-medium">
                    {localSeoContribution ? `${(item.contribution * 0.3).toFixed(1)}%` : `${item.contribution}%`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Conv. Rate:</span>
                  <span className="font-medium">{item.conversionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">CTR:</span>
                  <span className="font-medium">{item.ctr}%</span>
                </div>
              </div>
              {localSeoContribution && (
                <div className="mt-2 text-xs text-blue-600 font-medium">
                  Local SEO: ~30% contribution
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Click-to-Conversion Correlation */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📈 Click-to-Conversion Correlation</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={localSeoContribution}
                onChange={(e) => setLocalSeoContribution(e.target.checked)}
                className="rounded" 
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {clickConversionData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center`}>
                    <span className="text-white font-semibold">
                      {localSeoContribution ? `${(item.percentage * 0.35).toFixed(0)}%` : `${item.percentage}%`}
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-slate-900 mb-1">{item.type}</h4>
              <p className="text-sm text-slate-600">
                {localSeoContribution ? Math.round(item.conversions * 0.35) : item.conversions} conversions
              </p>
              {localSeoContribution && (
                <p className="text-xs text-blue-600 mt-1">Local SEO: ~35% contribution</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Impact */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">💰 Revenue Impact</h3>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="text-sm border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={localSeoContribution}
                onChange={(e) => setLocalSeoContribution(e.target.checked)}
                className="rounded" 
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueData.map((item, index) => (
            <div key={index} className={`p-6 bg-gradient-to-r ${item.color} rounded-lg`}>
              <h4 className={`font-medium ${item.textColor} mb-2`}>{item.period}</h4>
              <p className={`text-2xl font-bold ${item.textColor.replace('800', '900')}`}>
                {formatCurrency(localSeoContribution ? item.amount * 0.25 : item.amount)}
              </p>
              <p className={`text-sm ${item.textColor.replace('800', '600')} mb-2`}>{item.growth}</p>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${item.type === 'actual' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                <span className="text-xs text-slate-600">
                  {item.type === 'actual' ? 'Actual Data' : 'Forecast'}
                </span>
              </div>
              {localSeoContribution && (
                <p className={`text-xs ${item.textColor} mt-2 font-medium`}>
                  Local SEO: ~25% contribution
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-blue-900">💡 Strategic Insights</h3>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-3">Growth Opportunities</h4>
            <div className="space-y-2 text-sm text-blue-700">
              <div>• <strong>Phone Call Optimization:</strong> 45% conversion rate vs 20% web visits - expand phone-focused campaigns</div>
              <div>• <strong>California Market Expansion:</strong> 36% contribution with potential for 15% growth through local keyword optimization</div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-3">Competitive Intelligence</h4>
            <div className="space-y-2 text-sm text-blue-700">
              <div>• <strong>Market Share Alert:</strong> Competitor A gaining 8% market share in Seattle Metro area</div>
              <div>• <strong>Opportunity Gap:</strong> 23% higher conversion rates possible in ZIP code 98101</div>
              <div>• <a href="#" className="underline hover:text-blue-800 transition-colors">View detailed competitive report →</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoreInsights = () => (
    <div className="space-y-8">
      {/* Store Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Selected Store:</span>
            <div className="relative">
              <button
                onClick={() => setIsStoreTab2DropdownOpen(!isStoreTab2DropdownOpen)}
                className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <span className="font-medium">{selectedStoreForTab2}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isStoreTab2DropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isStoreTab2DropdownOpen && (
                <div className="absolute top-full mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                  <div className="py-2">
                    {storesForTab2.map((store, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedStoreForTab2(store);
                          setIsStoreTab2DropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                          selectedStoreForTab2 === store ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700'
                        }`}
                      >
                        {store}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Store Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { title: 'Total Visits', value: '15,247', icon: Eye },
          { title: 'Total Clicks', value: '6,356', icon: MousePointer },
          { title: 'Total Conversions', value: '394', icon: Target },
          { title: 'CTR', value: '4.2%', icon: BarChart3 },
          { title: 'Conversion Rate', value: '6.2%', icon: TrendingUp }
        ].map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <metric.icon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-600">{metric.title}</span>
            </div>
            <p className="text-xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Local Context Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">📊 CTR Comparison</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { level: 'Store', value: 4.2, color: 'bg-blue-500' },
              { level: 'ZIP (98101)', value: 3.8, color: 'bg-teal-500' },
              { level: 'City (Seattle)', value: 3.5, color: 'bg-green-500' },
              { level: 'MSA (Seattle Metro)', value: 3.2, color: 'bg-yellow-500' },
              { level: 'State (Washington)', value: 3.0, color: 'bg-orange-500' },
              { level: 'Country (US)', value: 2.8, color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.level}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${(item.value / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-10">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">📈 Conversion Rate Comparison</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { level: 'Store', value: 6.2, color: 'bg-blue-500' },
              { level: 'ZIP (98101)', value: 5.8, color: 'bg-teal-500' },
              { level: 'City (Seattle)', value: 5.4, color: 'bg-green-500' },
              { level: 'MSA (Seattle Metro)', value: 5.0, color: 'bg-yellow-500' },
              { level: 'State (Washington)', value: 4.6, color: 'bg-orange-500' },
              { level: 'Country (US)', value: 4.2, color: 'bg-red-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.level}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${(item.value / 8) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-10">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">📊 Clicks by Type</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {clickTypeBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-600">{item.percentage}%</p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-slate-900">{item.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">🗺️ Engagement by Distance</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {[
              { distance: 'Online', visits: 2100, color: 'bg-purple-500' },
              ...proximityData.map(item => ({ distance: item.distance, visits: item.clicks, color: item.color }))
            ].map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{item.distance}</span>
                  <span className="text-sm font-medium text-slate-900">{item.visits.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                    style={{ width: `${(item.visits / 3500) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Syndication Status */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📋 Syndication Status</h3>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">91%</span>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-slate-900">Overall Syndication</h4>
          </div>
          <div className="space-y-4">
            {[
              { platform: 'Google My Business', status: 100, color: 'bg-green-500' },
              { platform: 'Bing Places', status: 95, color: 'bg-blue-500' },
              { platform: 'Apple Maps', status: 87, color: 'bg-gray-600' },
              { platform: 'Yelp', status: 92, color: 'bg-red-500' },
              { platform: 'Facebook', status: 89, color: 'bg-blue-600' },
              { platform: 'Yellow Pages', status: 78, color: 'bg-yellow-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.platform}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${item.status}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-10">{item.status}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">⭐ Store Prominence</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {prominenceScores.map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {item.metric === 'Review Score' ? `${item.score}/5` : 
                   item.metric === 'Review Count' ? item.score :
                   `${item.score}%`}
                </div>
                <div className="text-sm text-slate-600">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-900">💡 Recommended Actions</h3>
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Encourage reviews to reach 900+ count - improves prominence by 8%</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
              <span>Update business hours on 3 platforms to improve citation accuracy</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span>Optimize for "free delivery downtown" - potential 11% CTR increase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Keywords Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">🔍 Top 10 Keywords</h3>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 text-sm font-medium text-slate-600">Keyword</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Position</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Views</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Change</th>
              </tr>
            </thead>
            <tbody>
              {storeKeywords.map((keyword, index) => (
                <tr key={index} className="border-b border-slate-100">
                  <td className="py-3 font-medium text-slate-900">{keyword.keyword}</td>
                  <td className="py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                      keyword.position <= 3 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {keyword.position}
                    </span>
                  </td>
                  <td className="py-3 text-center text-slate-900">{keyword.views.toLocaleString()}</td>
                  <td className="py-3 text-center">
                    <div className={`flex items-center justify-center space-x-1 ${
                      keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      {keyword.change > 0 ? <ArrowUp className="h-3 w-3" /> : 
                       keyword.change < 0 ? <ArrowUp className="h-3 w-3 rotate-180" /> : 
                       <div className="w-3 h-0.5 bg-gray-400"></div>}
                      <span className="text-sm font-medium">
                        {keyword.change > 0 ? `+${keyword.change}` : keyword.change}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRegionalPerformance = () => (
    <div className="space-y-8">
      {/* Performance by Location */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📍 Performance by Location</h3>
          <div className="flex items-center space-x-4">
            {performanceDrillLevel === 'state' && (
              <button
                onClick={handlePerformanceRollUp}
                className="flex items-center space-x-2 text-sm bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          {performanceDrillLevel === 'country' ? 'Double-click to drill down to states' : 'Showing state-level performance'}
        </p>
        <div className="space-y-6">
          {getPerformanceFunnelData().map((location, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
              onDoubleClick={handlePerformanceDrillDown}
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-4">{location.location}</h4>
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Views</span>
                    <span className="text-sm text-slate-600">100%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                    <div className="h-8 rounded-full bg-blue-500 transition-all duration-500 flex items-center justify-end pr-3 w-full">
                      <span className="text-white text-sm font-medium">
                        {location.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Clicks</span>
                    <span className="text-sm text-slate-600">{((location.clicks / location.views) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                    <div 
                      className="h-8 rounded-full bg-teal-500 transition-all duration-500 flex items-center justify-end pr-3"
                      style={{ width: `${(location.clicks / location.views) * 100}%` }}
                    >
                      <span className="text-white text-sm font-medium">
                        {location.clicks.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Conversions</span>
                    <span className="text-sm text-slate-600">{((location.conversions / location.views) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                    <div 
                      className="h-8 rounded-full bg-green-500 transition-all duration-500 flex items-center justify-end pr-3"
                      style={{ width: `${(location.conversions / location.views) * 100}%` }}
                    >
                      <span className="text-white text-sm font-medium">
                        {location.conversions.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📊 Comparative Analysis</h3>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Location A</h4>
            <div className="flex space-x-2">
              <select className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>State</option>
                <option>City</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>California</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Views:</span>
                  <span className="font-medium text-blue-900">45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Clicks:</span>
                  <span className="font-medium text-blue-900">5,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Conversions:</span>
                  <span className="font-medium text-blue-900">648</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Location B</h4>
            <div className="flex space-x-2">
              <select className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>State</option>
                <option>City</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>Texas</option>
                <option>California</option>
                <option>Washington</option>
              </select>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-teal-700">Views:</span>
                  <span className="font-medium text-teal-900">38,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-teal-700">Clicks:</span>
                  <span className="font-medium text-teal-900">4,560</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-teal-700">Conversions:</span>
                  <span className="font-medium text-teal-900">547</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Query Relevance Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">🔍 Query Relevance Score</h3>
          <div className="flex items-center space-x-4">
            {relevanceDrillLevel === 'state' && (
              <button
                onClick={handleRelevanceRollUp}
                className="flex items-center space-x-2 text-sm bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          {relevanceDrillLevel === 'country' ? 'Double-click to drill down to states' : 'Showing state-level relevance scores'}
        </p>
        <div 
          className="cursor-pointer"
          onDoubleClick={handleRelevanceDrillDown}
        >
          <div className="space-y-4">
            {getQueryRelevanceData().map((location, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{location.location}</span>
                  <span className="text-lg font-bold text-slate-900">{location.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300"
                    style={{ width: `${location.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Review Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">⭐ Customer Review Score</h3>
          <div className="flex items-center space-x-4">
            {reviewDrillLevel === 'state' && (
              <button
                onClick={handleReviewRollUp}
                className="flex items-center space-x-2 text-sm bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700"
              >
                <ArrowUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          {reviewDrillLevel === 'country' ? 'Double-click to drill down to states' : 'Showing state-level review scores'}
        </p>
        <div 
          className="cursor-pointer"
          onDoubleClick={handleReviewDrillDown}
        >
          <div className="space-y-4">
            {getCustomerReviewData().map((location, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{location.location}</span>
                  <span className="text-lg font-bold text-slate-900">{location.score}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
                    style={{ width: `${(location.score / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-purple-900">💡 Regional Performance Insights</h3>
          <button className="flex items-center space-x-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-purple-800">Performance Gaps</h4>
            <div className="space-y-2 text-sm text-purple-700">
              <div>• <strong>Lowest City:</strong> Fremont (5.9% engagement rate)</div>
              <div>• <strong>Lowest MSA:</strong> Tacoma Metro (4.8% engagement rate)</div>
              <div>• <strong>Lowest ZIP:</strong> 98108 (3.2% engagement rate)</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-purple-800">Expansion Opportunities</h4>
            <div className="space-y-2 text-sm text-purple-700">
              <div>• <strong>Recommended Location:</strong> Bellevue East</div>
              <div>• <strong>Reason:</strong> High search volume, minimal competition</div>
              <div>• <strong>Potential Impact:</strong> 25% reduction in avg. travel distance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Enhanced
            </span>
          </div>
          
          {/* Filter Toggle Button */}
          <button
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
            className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isFilterPanelOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <p className="text-slate-600 mt-2">Advanced multi-location SEO intelligence and strategic insights</p>
      </div>

      {/* Filter Panel */}
      {isFilterPanelOpen && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Time Range</label>
              <input 
                type="range" 
                min="7" 
                max="365" 
                defaultValue="30"
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>7 days</span>
                <span>365 days</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location Type</label>
              <select className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>Global</option>
                <option>Country</option>
                <option>State</option>
                <option>MSA</option>
                <option>City</option>
                <option>ZIP</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location Name</label>
              <select className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2">
                <option>All Locations</option>
                <option>United States</option>
                <option>California</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Click Type</label>
              <div className="space-y-2">
                {['Website visits', 'Store visits', 'Phone calls'].map((type, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-slate-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'strategic' && renderStrategicImpact()}
          {activeTab === 'store' && renderStoreInsights()}
          {activeTab === 'regional' && renderRegionalPerformance()}
        </div>
      </div>
    </div>
  );
};

export default LocalSEOPlusPlus;