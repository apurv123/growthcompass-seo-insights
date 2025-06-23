import React, { useState } from 'react';
import { 
  Filter, 
  Download, 
  TrendingUp, 
  Users, 
  MousePointer, 
  Target, 
  DollarSign,
  Phone,
  MapPin,
  Globe,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  BarChart3,
  Eye,
  Star,
  Lightbulb,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Downtown Location - Store #001');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  
  // Strategic Impact filters
  const [clickType, setClickType] = useState('all');
  const [localSEOToggle, setLocalSEOToggle] = useState(false);
  const [currency, setCurrency] = useState('USD');
  
  // Regional Performance state
  const [currentLevel, setCurrentLevel] = useState('country');
  const [locationHistory, setLocationHistory] = useState(['country']);
  const [selectedLocation1, setSelectedLocation1] = useState({ type: 'Country', value: 'United States' });
  const [selectedLocation2, setSelectedLocation2] = useState({ type: 'State', value: 'California' });

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

  const clickTypeOptions = [
    { value: 'all', label: 'All Clicks' },
    { value: 'phone', label: 'Phone Calls' },
    { value: 'store', label: 'Store Visits' },
    { value: 'online', label: 'Website Visits' }
  ];

  const currencyOptions = [
    { value: 'USD', symbol: '$' },
    { value: 'EUR', symbol: '€' },
    { value: 'GBP', symbol: '£' }
  ];

  const locationTypes = ['Country', 'State', 'MSA', 'City', 'ZIP', 'Store'];

  // Sample data
  const localSEOFunnelData = {
    views: localSEOToggle ? 89420 : 124680,
    clicks: localSEOToggle ? 6258 : 8740,
    conversions: localSEOToggle ? 312 : 436
  };

  const coreSEOFunnelData = {
    views: 578340,
    clicks: 29167,
    conversions: 1134
  };

  const attributionData = {
    views: 21.7,
    clicks: 29.4,
    conversions: 38.5
  };

  const conversionDrivers = [
    { location: 'United States', type: 'Country', contribution: localSEOToggle ? 30.2 : 42.8, conversionRate: localSEOToggle ? 4.8 : 6.2, ctr: localSEOToggle ? 5.1 : 7.0 },
    { location: 'California', type: 'State', contribution: localSEOToggle ? 8.4 : 12.1, conversionRate: localSEOToggle ? 5.2 : 6.8, ctr: localSEOToggle ? 5.8 : 7.4 },
    { location: 'Los Angeles', type: 'MSA', contribution: localSEOToggle ? 4.2 : 6.8, conversionRate: localSEOToggle ? 4.9 : 6.4, ctr: localSEOToggle ? 5.4 : 7.1 },
    { location: 'Beverly Hills', type: 'City', contribution: localSEOToggle ? 2.1 : 3.4, conversionRate: localSEOToggle ? 5.6 : 7.2, ctr: localSEOToggle ? 6.1 : 7.8 },
    { location: '90210', type: 'ZIP', contribution: localSEOToggle ? 1.2 : 1.9, conversionRate: localSEOToggle ? 5.8 : 7.5, ctr: localSEOToggle ? 6.3 : 8.1 },
    { location: 'Rodeo Drive Store', type: 'Store', contribution: localSEOToggle ? 0.8 : 1.3, conversionRate: localSEOToggle ? 6.2 : 8.1, ctr: localSEOToggle ? 6.8 : 8.7 }
  ];

  const clickConversionData = [
    { type: 'Phone Calls', percentage: localSEOToggle ? 38 : 45, conversions: localSEOToggle ? 118 : 196, color: 'bg-blue-500' },
    { type: 'Store Visits', percentage: localSEOToggle ? 42 : 35, conversions: localSEOToggle ? 131 : 153, color: 'bg-green-500' },
    { type: 'Website Visits', percentage: localSEOToggle ? 20 : 20, conversions: localSEOToggle ? 63 : 87, color: 'bg-purple-500' }
  ];

  const revenueData = [
    { 
      period: 'YTD 2024', 
      type: 'Actual', 
      amount: localSEOToggle ? 2840000 : 3780000, 
      change: '+18%',
      description: 'Year-to-date actual revenue'
    },
    { 
      period: 'FY 2024', 
      type: 'Actual', 
      amount: localSEOToggle ? 4260000 : 5680000, 
      change: '+22%',
      description: 'Current financial year actual'
    },
    { 
      period: 'FY 2025', 
      type: 'Forecast', 
      amount: localSEOToggle ? 5520000 : 7360000, 
      change: '+30%',
      description: 'Based on recommended actions'
    }
  ];

  const formatCurrency = (amount: number) => {
    const symbol = currencyOptions.find(c => c.value === currency)?.symbol || '$';
    return `${symbol}${(amount / 1000000).toFixed(1)}M`;
  };

  const handleDrillDown = (level: string) => {
    const levels = ['country', 'state', 'msa', 'city', 'zip', 'store'];
    const currentIndex = levels.indexOf(currentLevel);
    if (currentIndex < levels.length - 1) {
      const newLevel = levels[currentIndex + 1];
      setCurrentLevel(newLevel);
      setLocationHistory([...locationHistory, newLevel]);
    }
  };

  const handleRollUp = () => {
    if (locationHistory.length > 1) {
      const newHistory = locationHistory.slice(0, -1);
      setLocationHistory(newHistory);
      setCurrentLevel(newHistory[newHistory.length - 1]);
    }
  };

  const getCurrentLevelData = () => {
    const levelData = {
      country: [{ name: 'United States', views: 578340, clicks: 29167, conversions: 1134, score: 87.2, reviews: 4.6 }],
      state: [
        { name: 'California', views: 156520, clicks: 7826, conversions: 304, score: 89.1, reviews: 4.7 },
        { name: 'Texas', views: 134680, clicks: 6734, conversions: 267, score: 85.3, reviews: 4.5 },
        { name: 'New York', views: 98740, clicks: 4937, conversions: 198, score: 91.2, reviews: 4.8 }
      ],
      msa: [
        { name: 'Los Angeles', views: 89420, clicks: 4471, conversions: 174, score: 88.7, reviews: 4.6 },
        { name: 'San Francisco', views: 67100, clicks: 3355, conversions: 130, score: 90.4, reviews: 4.8 }
      ],
      city: [
        { name: 'Beverly Hills', views: 34520, clicks: 1726, conversions: 67, score: 92.1, reviews: 4.9 },
        { name: 'Santa Monica', views: 28940, clicks: 1447, conversions: 56, score: 87.3, reviews: 4.5 }
      ],
      zip: [
        { name: '90210', views: 18420, clicks: 921, conversions: 36, score: 94.2, reviews: 4.9 },
        { name: '90401', views: 16520, clicks: 826, conversions: 32, score: 89.1, reviews: 4.6 }
      ],
      store: [
        { name: 'Rodeo Drive Store', views: 12340, clicks: 617, conversions: 24, score: 95.1, reviews: 4.9 },
        { name: 'Wilshire Blvd Store', views: 6080, clicks: 304, conversions: 12, score: 91.8, reviews: 4.7 }
      ]
    };
    return levelData[currentLevel] || [];
  };

  const renderStrategicImpact = () => (
    <div className="space-y-8">
      {/* SEO Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">SEO Attribution</h3>
          <div className="flex items-center space-x-4">
            <select
              value={clickType}
              onChange={(e) => setClickType(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              {clickTypeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Local SEO Funnel */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-700 text-center">Local SEO Funnel</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-700">Views</span>
                  <span className="text-lg font-bold text-blue-900">{localSEOFunnelData.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-teal-700">Clicks</span>
                  <span className="text-lg font-bold text-teal-900">{localSEOFunnelData.clicks.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-700">Conversions</span>
                  <span className="text-lg font-bold text-green-900">{localSEOFunnelData.conversions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core SEO Funnel */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-700 text-center">Core SEO Funnel</h4>
            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">Views</span>
                  <span className="text-lg font-bold text-purple-900">{coreSEOFunnelData.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-indigo-700">Clicks</span>
                  <span className="text-lg font-bold text-indigo-900">{coreSEOFunnelData.clicks.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-700">Conversions</span>
                  <span className="text-lg font-bold text-blue-900">{coreSEOFunnelData.conversions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local SEO Attribution */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-700 text-center">Local SEO Attribution</h4>
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-orange-700">Views</span>
                  <span className="text-lg font-bold text-orange-900">{attributionData.views}%</span>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-red-700">Clicks</span>
                  <span className="text-lg font-bold text-red-900">{attributionData.clicks}%</span>
                </div>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-pink-700">Conversions</span>
                  <span className="text-lg font-bold text-pink-900">{attributionData.conversions}%</span>
                </div>
              </div>
            </div>
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
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversionDrivers.map((driver, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setActiveTab('regional')}
            >
              <h4 className="font-semibold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                {driver.location}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Contribution:</span>
                  <span className="font-medium">{driver.contribution}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Conversion Rate:</span>
                  <span className="font-medium">{driver.conversionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">CTR:</span>
                  <span className="font-medium">{driver.ctr}%</span>
                </div>
              </div>
              {localSEOToggle && (
                <div className="mt-2 text-xs text-blue-600 font-medium">
                  ~30% Local SEO contribution
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
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clickConversionData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={item.color.replace('bg-', '').replace('-500', '') === 'blue' ? '#3b82f6' : 
                           item.color.replace('bg-', '').replace('-500', '') === 'green' ? '#10b981' : '#8b5cf6'}
                    strokeWidth="2"
                    strokeDasharray={`${item.percentage}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-900">{item.percentage}%</span>
                </div>
              </div>
              <h4 className="font-medium text-slate-900 mb-1">{item.type}</h4>
              <p className="text-sm text-slate-600">{item.conversions} conversions</p>
              {localSEOToggle && (
                <p className="text-xs text-blue-600 font-medium mt-1">
                  ~25% from Local SEO
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Impact */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Revenue Impact</h3>
          <div className="flex items-center space-x-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              {currencyOptions.map(option => (
                <option key={option.value} value={option.value}>{option.value}</option>
              ))}
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={localSEOToggle}
                onChange={(e) => setLocalSEOToggle(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueData.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900">{item.period}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Actual' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.type}
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{formatCurrency(item.amount)}</p>
              <div className="flex items-center space-x-2 mb-2">
                <ArrowUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">{item.change}</span>
              </div>
              <p className="text-xs text-slate-600">{item.description}</p>
              {localSEOToggle && (
                <div className="mt-2 text-xs text-blue-600 font-medium">
                  ~25% Local SEO contribution
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
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-slate-900 mb-3 flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <span>Growth Opportunities</span>
            </h4>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Phone Call Optimization:</strong> Increasing phone call conversions by 15% could drive an additional $420K in annual revenue. Focus on call tracking and staff training.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Market Expansion:</strong> Texas and Florida markets show 40% higher conversion rates than average. Consider expanding local SEO investment in these regions.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-900 mb-3 flex items-center space-x-2">
              <Target className="h-5 w-5 text-red-500" />
              <span>Competitive Intelligence</span>
            </h4>
            <div className="space-y-3">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  <strong>Market Share Alert:</strong> Competitor "LocalPro" gained 8% market share in your top 3 cities. Their local listing optimization is 23% more complete than yours.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-purple-800">
                    <strong>Opportunity Gap:</strong> 67% of your target keywords have competitors ranking higher in local pack results.
                  </p>
                  <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-800 transition-colors">
                    <span className="text-xs font-medium">View Report</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoreInsights = () => (
    <div className="space-y-8">
      {/* Store Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Store Selection</h3>
          <div className="relative">
            <button
              onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>{selectedStore}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStoreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {stores.map((store, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedStore(store);
                        setIsStoreDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                        selectedStore === store ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700'
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
      </div>

      {/* Store Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Store Performance</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-blue-700 font-medium">Total Visits</p>
            <p className="text-2xl font-bold text-blue-900">15,247</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <MousePointer className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-700 font-medium">Total Clicks</p>
            <p className="text-2xl font-bold text-green-900">6,356</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-purple-700 font-medium">Conversions</p>
            <p className="text-2xl font-bold text-purple-900">312</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-orange-700 font-medium">CTR</p>
            <p className="text-2xl font-bold text-orange-900">4.2%</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-4 text-center">
            <DollarSign className="h-8 w-8 text-teal-600 mx-auto mb-2" />
            <p className="text-sm text-teal-700 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold text-teal-900">4.9%</p>
          </div>
        </div>
      </div>

      {/* Local Context */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Local Context</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-700 mb-4">CTR Comparison</h4>
            <div className="space-y-3">
              {[
                { level: 'Store', rate: 4.2, color: 'bg-blue-500' },
                { level: 'ZIP (90210)', rate: 3.8, color: 'bg-green-500' },
                { level: 'City (Beverly Hills)', rate: 3.5, color: 'bg-purple-500' },
                { level: 'MSA (Los Angeles)', rate: 3.2, color: 'bg-orange-500' },
                { level: 'State (California)', rate: 2.9, color: 'bg-red-500' },
                { level: 'Country (US)', rate: 2.7, color: 'bg-gray-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{item.level}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${(item.rate / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-10">{item.rate}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Conversion Rate Comparison</h4>
            <div className="space-y-3">
              {[
                { level: 'Store', rate: 4.9, color: 'bg-blue-500' },
                { level: 'ZIP (90210)', rate: 4.6, color: 'bg-green-500' },
                { level: 'City (Beverly Hills)', rate: 4.3, color: 'bg-purple-500' },
                { level: 'MSA (Los Angeles)', rate: 4.0, color: 'bg-orange-500' },
                { level: 'State (California)', rate: 3.8, color: 'bg-red-500' },
                { level: 'Country (US)', rate: 3.5, color: 'bg-gray-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{item.level}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${(item.rate / 6) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-10">{item.rate}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Actions</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Clicks by Type</h4>
            <div className="space-y-4">
              {[
                { type: 'Website Visits', count: 2847, percentage: 45, icon: Globe, color: 'bg-blue-500' },
                { type: 'Store Visits', count: 1923, percentage: 30, icon: MapPin, color: 'bg-green-500' },
                { type: 'Phone Calls', count: 1586, percentage: 25, icon: Phone, color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-slate-900">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{item.count.toLocaleString()}</p>
                    <p className="text-sm text-slate-600">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Engagement by Distance</h4>
            <div className="space-y-3">
              {[
                { distance: 'Online', visits: 1586, percentage: 25 },
                { distance: '0-1 KM', visits: 2214, percentage: 35 },
                { distance: '1-5 KM', visits: 1586, percentage: 25 },
                { distance: '5-10 KM', visits: 628, percentage: 10 },
                { distance: '>10 KM', visits: 314, percentage: 5 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{item.distance}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-teal-500"
                        style={{ width: `${item.percentage * 2}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-16">{item.visits}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Syndication */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Syndication</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">91%</span>
            </div>
            <h4 className="font-semibold text-green-900 mb-2">Overall Syndication Status</h4>
            <p className="text-sm text-green-700">Excellent listing coverage across platforms</p>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Platform Breakdown</h4>
            <div className="space-y-3">
              {[
                { platform: 'Google My Business', status: 100, color: 'bg-green-500' },
                { platform: 'Bing Places', status: 95, color: 'bg-blue-500' },
                { platform: 'Apple Maps', status: 87, color: 'bg-gray-600' },
                { platform: 'Yelp', status: 92, color: 'bg-red-500' },
                { platform: 'Facebook', status: 89, color: 'bg-blue-600' },
                { platform: 'Yellow Pages', status: 78, color: 'bg-yellow-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{item.platform}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
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
      </div>

      {/* Store Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Store Insights</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="space-y-8">
          {/* Prominence Cards */}
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Store Prominence</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-yellow-700 font-medium">Reviews Rating</p>
                <p className="text-xl font-bold text-yellow-900">4.7/5</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm text-blue-700 font-medium">Reviews Count</p>
                <p className="text-xl font-bold text-blue-900">847</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Target className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-green-700 font-medium">Citation Accuracy</p>
                <p className="text-xl font-bold text-green-900">94%</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <TrendingUp className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-purple-700 font-medium">Brand Mentions</p>
                <p className="text-xl font-bold text-purple-900">78%</p>
              </div>
            </div>
          </div>

          {/* Recommended Actions */}
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Recommended Actions</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Encourage reviews to reach 900+ count</strong> - improves prominence by 8%
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  <strong>Update business hours on 3 platforms</strong> to improve citation accuracy
                </p>
              </div>
            </div>
          </div>

          {/* Top Keywords */}
          <div>
            <h4 className="font-medium text-slate-700 mb-4">Top 10 Keywords</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 text-sm font-medium text-slate-600">Keyword</th>
                    <th className="text-center py-2 text-sm font-medium text-slate-600">Position</th>
                    <th className="text-center py-2 text-sm font-medium text-slate-600">Views</th>
                    <th className="text-center py-2 text-sm font-medium text-slate-600">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { keyword: 'pizza near me', position: 3, views: 12500, change: 2 },
                    { keyword: 'best pizza downtown', position: 1, views: 8900, change: 0 },
                    { keyword: 'italian restaurant', position: 7, views: 6700, change: -1 },
                    { keyword: 'pizza delivery', position: 2, views: 5400, change: 1 },
                    { keyword: 'authentic pizza', position: 5, views: 4200, change: 3 }
                  ].map((keyword, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-2 font-medium text-slate-900">{keyword.keyword}</td>
                      <td className="py-2 text-center">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                          keyword.position <= 3 ? 'bg-green-100 text-green-800' : 
                          keyword.position <= 10 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {keyword.position}
                        </span>
                      </td>
                      <td className="py-2 text-center font-medium">{keyword.views.toLocaleString()}</td>
                      <td className="py-2 text-center">
                        <div className={`flex items-center justify-center space-x-1 ${
                          keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-400'
                        }`}>
                          {keyword.change > 0 ? <ArrowUp className="h-3 w-3" /> : 
                           keyword.change < 0 ? <ArrowDown className="h-3 w-3" /> : null}
                          <span className="text-xs font-medium">
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
      </div>
    </div>
  );

  const renderRegionalPerformance = () => (
    <div className="space-y-8">
      {/* Performance by Location */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Performance by Location</h3>
          <div className="flex items-center space-x-4">
            {locationHistory.length > 1 && (
              <button
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentLevelData().map((location, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors"
              onDoubleClick={() => handleDrillDown(currentLevel)}
            >
              <h4 className="font-semibold text-slate-900 mb-4 text-center">{location.name}</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700">Views</span>
                    <span className="text-lg font-bold text-blue-900">{location.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">Clicks</span>
                    <span className="text-lg font-bold text-teal-900">{location.clicks.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-700">Conversions</span>
                    <span className="text-lg font-bold text-green-900">{location.conversions.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-3">Double-click to drill down</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Comparative Analysis</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location 1 */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select
                value={selectedLocation1.type}
                onChange={(e) => setSelectedLocation1({...selectedLocation1, type: e.target.value})}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
              >
                {locationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={selectedLocation1.value}
                onChange={(e) => setSelectedLocation1({...selectedLocation1, value: e.target.value})}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm flex-1"
              >
                <option value="United States">United States</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-4 text-center">{selectedLocation1.value}</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700">Views</span>
                    <span className="text-lg font-bold text-blue-900">578,340</span>
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">Clicks</span>
                    <span className="text-lg font-bold text-teal-900">29,167</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-700">Conversions</span>
                    <span className="text-lg font-bold text-green-900">1,134</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select
                value={selectedLocation2.type}
                onChange={(e) => setSelectedLocation2({...selectedLocation2, type: e.target.value})}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
              >
                {locationTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={selectedLocation2.value}
                onChange={(e) => setSelectedLocation2({...selectedLocation2, value: e.target.value})}
                className="border border-slate-300 rounded-lg px-3 py-2 text-sm flex-1"
              >
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
              </select>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-4 text-center">{selectedLocation2.value}</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-700">Views</span>
                    <span className="text-lg font-bold text-blue-900">156,520</span>
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">Clicks</span>
                    <span className="text-lg font-bold text-teal-900">7,826</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-700">Conversions</span>
                    <span className="text-lg font-bold text-green-900">304</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Query Relevance Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Query Relevance Score</h3>
          <div className="flex items-center space-x-4">
            {locationHistory.length > 1 && (
              <button
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentLevelData().map((location, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors"
              onDoubleClick={() => handleDrillDown(currentLevel)}
            >
              <h4 className="font-semibold text-slate-900 mb-4 text-center">{location.name}</h4>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray={`${location.score}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-slate-900">{location.score}%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 text-center mt-3">Double-click to drill down</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Review Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Review Score</h3>
          <div className="flex items-center space-x-4">
            {locationHistory.length > 1 && (
              <button
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentLevelData().map((location, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors"
              onDoubleClick={() => handleDrillDown(currentLevel)}
            >
              <h4 className="font-semibold text-slate-900 mb-4 text-center">{location.name}</h4>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${
                        star <= Math.floor(location.reviews) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold text-slate-900">{location.reviews}/5</p>
              </div>
              <p className="text-xs text-slate-500 text-center mt-3">Double-click to drill down</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Regional Insights</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">Lowest Performing City</h4>
              <p className="text-lg font-bold text-red-800">Phoenix, AZ</p>
              <p className="text-sm text-red-600">2.1% conversion rate</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">Lowest Performing MSA</h4>
              <p className="text-lg font-bold text-orange-800">Tampa Bay, FL</p>
              <p className="text-sm text-orange-600">2.8% conversion rate</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Lowest Performing ZIP</h4>
              <p className="text-lg font-bold text-yellow-800">33101 (Miami)</p>
              <p className="text-sm text-yellow-600">1.9% conversion rate</p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Expansion Opportunity</h4>
            <p className="text-sm text-green-800">
              <strong>Austin, TX:</strong> Opening a new store could reduce average customer travel distance by 23% and potentially increase conversions by 340 per month based on local search volume and competitor analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
          </div>
          
          {/* Filters Button */}
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <p className="text-slate-600">Advanced multi-location SEO analytics and strategic insights</p>
      </div>

      {/* Filters Sidebar */}
      {isFiltersOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
              <button
                onClick={() => setIsFiltersOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Time Range</label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  defaultValue="6"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
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
                <div className="space-y-2">
                  {['Website visits', 'Store visits', 'Phone calls'].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded border-slate-300" />
                      <span className="text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'strategic' && renderStrategicImpact()}
      {activeTab === 'store' && renderStoreInsights()}
      {activeTab === 'regional' && renderRegionalPerformance()}
    </div>
  );
};

export default LocalSEOPlusPlus;