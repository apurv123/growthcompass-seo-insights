import React, { useState } from 'react';
import { TrendingUp, Filter, Download, ToggleLeft, ToggleRight, ChevronDown, ChevronUp, ArrowUp, ArrowDown, Eye, MousePointer, Target, DollarSign, Users, Phone, Navigation, Globe, Star, MapPin, BarChart3, Lightbulb, ExternalLink } from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Downtown Location - Store #001');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  
  // Filter states
  const [timeRange, setTimeRange] = useState([30, 365]); // days
  const [locationType, setLocationType] = useState('global');
  const [locationNames, setLocationNames] = useState(['All Locations']);
  const [clickTypes, setClickTypes] = useState(['Website visits', 'Store visits', 'Phone calls']);
  
  // Section-specific filter states
  const [localSeoContribution, setLocalSeoContribution] = useState(false);
  const [clickTypeFilter, setClickTypeFilter] = useState('all');
  const [currency, setCurrency] = useState('USD');
  
  // Drill-down states for Tab 3
  const [currentLocationLevel, setCurrentLocationLevel] = useState('Country');
  const [locationHierarchy, setLocationHierarchy] = useState(['Country']);

  const stores = [
    'Downtown Location - Store #001',
    'Mall Location - Store #002', 
    'Suburban Plaza - Store #003',
    'Airport Terminal - Store #004',
    'University District - Store #005'
  ];

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: Target, persona: 'Leadership/VP' },
    { id: 'store', label: 'Store Insights', icon: MapPin, persona: 'Store Managers' },
    { id: 'regional', label: 'Regional Performance', icon: BarChart3, persona: 'Marketing Managers' }
  ];

  const locationTypes = ['global', 'country', 'state', 'MSA', 'city', 'ZIP'];
  const clickTypeOptions = ['Website visits', 'Store visits', 'Phone calls'];

  // Sample data
  const localSeoFunnelData = [
    { stage: 'Views', count: 125000, percentage: 100 },
    { stage: 'Clicks', count: 15000, percentage: 12 },
    { stage: 'Conversions', count: 1800, percentage: 1.4 }
  ];

  const coreSeoFunnelData = [
    { stage: 'Views', count: 450000, percentage: 100 },
    { stage: 'Clicks', count: 27000, percentage: 6 },
    { stage: 'Conversions', count: 2700, percentage: 0.6 }
  ];

  const conversionDrivers = [
    { type: 'Country', name: 'United States', contribution: 78, conversionRate: 4.2, ctr: 12.5 },
    { type: 'State', name: 'California', contribution: 35, conversionRate: 4.8, ctr: 13.2 },
    { type: 'MSA', name: 'San Francisco Bay Area', contribution: 22, conversionRate: 5.1, ctr: 14.1 },
    { type: 'City', name: 'San Francisco', contribution: 18, conversionRate: 5.3, ctr: 14.8 },
    { type: 'ZIP', name: '94102', contribution: 8, conversionRate: 5.7, ctr: 15.2 },
    { type: 'Store', name: 'Downtown Location', contribution: 6, conversionRate: 6.1, ctr: 16.1 }
  ];

  const clickConversionData = [
    { type: 'Phone calls', percentage: 45, count: 810 },
    { type: 'Store visits', percentage: 35, count: 630 },
    { type: 'Website visits', percentage: 20, count: 360 }
  ];

  const revenueData = [
    { period: 'YTD', amount: 2450000, type: 'actual', growth: 18 },
    { period: 'Current FY', amount: 3200000, type: 'actual', growth: 22 },
    { period: 'Next Year Forecast', amount: 4100000, type: 'forecast', growth: 28 }
  ];

  const storePerformanceData = {
    visits: 45678,
    clicks: 6356,
    conversions: 394,
    ctr: 13.9,
    conversionRate: 6.2
  };

  const benchmarkData = {
    ctr: { store: 13.9, zip: 12.1, city: 11.8, msa: 11.2, state: 10.9, country: 10.5, global: 10.2 },
    conversion: { store: 6.2, zip: 5.8, city: 5.5, msa: 5.2, state: 4.9, country: 4.6, global: 4.3 }
  };

  const syndicationData = [
    { platform: 'Google My Business', status: 100 },
    { platform: 'Bing Places', status: 95 },
    { platform: 'Apple Maps', status: 87 },
    { platform: 'Yelp', status: 92 },
    { platform: 'Facebook', status: 89 },
    { platform: 'Yellow Pages', status: 78 }
  ];

  const prominenceData = {
    reviewScore: 4.7,
    reviewCount: 847,
    citationAccuracy: 94,
    brandMentions: 78
  };

  const topKeywords = [
    { keyword: 'pizza near me', position: 3, views: 12500, change: 2 },
    { keyword: 'best pizza downtown', position: 1, views: 8900, change: 0 },
    { keyword: 'italian restaurant', position: 7, views: 6700, change: -1 },
    { keyword: 'pizza delivery', position: 2, views: 5400, change: 1 },
    { keyword: 'authentic pizza', position: 5, views: 4200, change: 3 }
  ];

  const renderFilterPanel = () => (
    <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
      isFilterPanelOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={() => setIsFilterPanelOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-lg"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-6 overflow-y-auto h-full pb-20">
        {/* Time Range Slider */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Time Range (Days)</label>
          <div className="space-y-2">
            <input
              type="range"
              min="7"
              max="365"
              value={timeRange[1]}
              onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>7 days</span>
              <span className="font-medium">{timeRange[1]} days</span>
              <span>365 days</span>
            </div>
          </div>
        </div>

        {/* Location Type */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Location Type</label>
          <select
            value={locationType}
            onChange={(e) => setLocationType(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            {locationTypes.map(type => (
              <option key={type} value={type}>{type.toUpperCase()}</option>
            ))}
          </select>
        </div>

        {/* Location Names */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Location Names</label>
          <div className="space-y-2 max-h-32 overflow-y-auto border border-slate-200 rounded-lg p-2">
            {['All Locations', 'United States', 'California', 'San Francisco', 'Downtown'].map(location => (
              <label key={location} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={locationNames.includes(location)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setLocationNames([...locationNames, location]);
                    } else {
                      setLocationNames(locationNames.filter(l => l !== location));
                    }
                  }}
                  className="rounded"
                />
                <span className="text-sm text-slate-700">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Click Types */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Click Types</label>
          <div className="space-y-2">
            {clickTypeOptions.map(type => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={clickTypes.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setClickTypes([...clickTypes, type]);
                    } else {
                      setClickTypes(clickTypes.filter(t => t !== type));
                    }
                  }}
                  className="rounded"
                />
                <span className="text-sm text-slate-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFunnelChart = (data, title, color) => (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <h4 className="font-medium text-slate-900 mb-4 text-center">{title}</h4>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">{item.stage}</span>
              <span className="text-sm text-slate-600">{item.percentage}%</span>
            </div>
            <div className="relative">
              <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
                <div
                  className={`h-8 rounded-full ${color} transition-all duration-500 flex items-center justify-end pr-3`}
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
    </div>
  );

  const renderStrategicImpact = () => (
    <div className="space-y-8">
      {/* Section 1: SEO Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">SEO Attribution</h3>
          <div className="flex items-center space-x-4">
            <select
              value={clickTypeFilter}
              onChange={(e) => setClickTypeFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Clicks</option>
              <option value="phone">Phone Calls</option>
              <option value="store">Store Visits</option>
              <option value="online">Online</option>
            </select>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {renderFunnelChart(localSeoFunnelData, 'Local SEO Funnel', 'bg-blue-500')}
          {renderFunnelChart(coreSeoFunnelData, 'Core SEO Funnel', 'bg-teal-500')}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <h4 className="font-medium text-slate-900 mb-4 text-center">Local SEO Attribution</h4>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <p className="text-sm text-slate-600">of Core SEO conversions</p>
              <p className="text-sm text-slate-600">attributed to Local SEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Conversion Drivers */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Conversion Drivers</h3>
          <button
            onClick={() => setLocalSeoContribution(!localSeoContribution)}
            className="flex items-center space-x-2"
          >
            {localSeoContribution ? (
              <ToggleRight className="h-5 w-5 text-blue-600" />
            ) : (
              <ToggleLeft className="h-5 w-5 text-slate-400" />
            )}
            <span className="text-sm text-slate-700">Local SEO Contribution</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conversionDrivers.map((driver, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-4 hover:bg-slate-100 cursor-pointer transition-colors"
              onClick={() => setActiveTab('regional')}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900">{driver.name}</h4>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">{driver.type}</span>
              </div>
              <div className="space-y-1">
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
              {localSeoContribution && (
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <span className="text-xs text-blue-600">Local SEO: {Math.round(driver.contribution * 0.4)}%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Click-to-Conversion Correlation */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Click-to-Conversion Correlation</h3>
          <button
            onClick={() => setLocalSeoContribution(!localSeoContribution)}
            className="flex items-center space-x-2"
          >
            {localSeoContribution ? (
              <ToggleRight className="h-5 w-5 text-blue-600" />
            ) : (
              <ToggleLeft className="h-5 w-5 text-slate-400" />
            )}
            <span className="text-sm text-slate-700">Local SEO Contribution</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {clickConversionData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : '#8b5cf6'}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(item.percentage / 100) * 351.86} 351.86`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{item.percentage}%</div>
                    <div className="text-xs text-slate-600">{item.count}</div>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-slate-900">{item.type}</h4>
              {localSeoContribution && (
                <p className="text-sm text-blue-600 mt-1">Local: {Math.round(item.percentage * 0.4)}%</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Revenue Impact */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Revenue Impact</h3>
          <div className="flex items-center space-x-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <button
              onClick={() => setLocalSeoContribution(!localSeoContribution)}
              className="flex items-center space-x-2"
            >
              {localSeoContribution ? (
                <ToggleRight className="h-5 w-5 text-blue-600" />
              ) : (
                <ToggleLeft className="h-5 w-5 text-slate-400" />
              )}
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueData.map((item, index) => (
            <div key={index} className={`p-6 rounded-lg ${
              item.type === 'actual' ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-medium ${item.type === 'actual' ? 'text-green-800' : 'text-blue-800'}`}>
                  {item.period}
                </h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.type === 'actual' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.type === 'actual' ? 'Actual' : 'Forecast'}
                </span>
              </div>
              <p className={`text-2xl font-bold ${item.type === 'actual' ? 'text-green-900' : 'text-blue-900'}`}>
                ${(item.amount / 1000000).toFixed(1)}M
              </p>
              <p className={`text-sm ${item.type === 'actual' ? 'text-green-600' : 'text-blue-600'}`}>
                +{item.growth}% growth
              </p>
              {localSeoContribution && (
                <p className="text-sm text-purple-600 mt-2">
                  Local SEO: ${((item.amount * 0.4) / 1000000).toFixed(1)}M
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Strategic Insights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Growth Opportunities</h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Optimize mobile experience</p>
                    <p className="text-xs text-blue-700">Could increase conversions by 23%</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Expand to high-performing ZIP codes</p>
                    <p className="text-xs text-green-700">Potential revenue increase of $1.2M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Competitive Intelligence</h4>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-purple-900">Competitor gap analysis</p>
                      <p className="text-xs text-purple-700">3 high-value keywords underutilized</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-900">Market share opportunity</p>
                      <p className="text-xs text-orange-700">15% share available in target MSAs</p>
                    </div>
                  </div>
                  <button className="text-orange-600 hover:text-orange-800">
                    <ExternalLink className="h-4 w-4" />
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
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-slate-500" />
          <span className="text-sm font-medium text-slate-700">Selected Store:</span>
          <div className="relative">
            <button
              onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
              className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <span className="font-medium">{selectedStore}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStoreDropdownOpen && (
              <div className="absolute top-full mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
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

      {/* Section 1: Store Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Store Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <Eye className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-blue-700 font-medium">Total Visits</p>
            <p className="text-2xl font-bold text-blue-900">{storePerformanceData.visits.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <MousePointer className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-700 font-medium">Total Clicks</p>
            <p className="text-2xl font-bold text-green-900">{storePerformanceData.clicks.toLocaleString()}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <Target className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-purple-700 font-medium">Conversions</p>
            <p className="text-2xl font-bold text-purple-900">{storePerformanceData.conversions}</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-4 text-center">
            <TrendingUp className="h-6 w-6 text-teal-600 mx-auto mb-2" />
            <p className="text-sm text-teal-700 font-medium">CTR</p>
            <p className="text-2xl font-bold text-teal-900">{storePerformanceData.ctr}%</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <DollarSign className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-orange-700 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold text-orange-900">{storePerformanceData.conversionRate}%</p>
          </div>
        </div>
      </div>

      {/* Section 2: Local Context */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Local Context Benchmarking</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Click-Through Rate Comparison</h4>
            <div className="space-y-3">
              {Object.entries(benchmarkData.ctr).map(([level, value]) => (
                <div key={level} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 capitalize">{level}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${level === 'store' ? 'bg-blue-500' : 'bg-slate-400'}`}
                        style={{ width: `${(value / 16) * 100}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium w-12 ${level === 'store' ? 'text-blue-600' : 'text-slate-600'}`}>
                      {value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Conversion Rate Comparison</h4>
            <div className="space-y-3">
              {Object.entries(benchmarkData.conversion).map(([level, value]) => (
                <div key={level} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 capitalize">{level}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${level === 'store' ? 'bg-green-500' : 'bg-slate-400'}`}
                        style={{ width: `${(value / 7) * 100}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium w-12 ${level === 'store' ? 'text-green-600' : 'text-slate-600'}`}>
                      {value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Customer Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Customer Actions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Clicks by Type</h4>
            <div className="space-y-4">
              {[
                { type: 'Website visits', count: 2847, percentage: 45, icon: Globe, color: 'bg-blue-500' },
                { type: 'Store visits', count: 1923, percentage: 30, icon: Navigation, color: 'bg-green-500' },
                { type: 'Phone calls', count: 1586, percentage: 25, icon: Phone, color: 'bg-purple-500' }
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
            <h4 className="font-medium text-slate-900 mb-4">Engagement by Distance</h4>
            <div className="space-y-3">
              {[
                { distance: 'Online visits', count: 1200, percentage: 19 },
                { distance: '0-1KM', count: 2100, percentage: 33 },
                { distance: '1-5KM', count: 1800, percentage: 28 },
                { distance: '5-10KM', count: 900, percentage: 14 },
                { distance: '>10KM', count: 356, percentage: 6 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{item.distance}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-teal-500"
                        style={{ width: `${item.percentage * 3}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-16">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Syndication */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Syndication Status</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">91%</div>
            <p className="text-slate-600">Overall Syndication Status</p>
          </div>
          <div className="space-y-3">
            {syndicationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.platform}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-500"
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

      {/* Section 5: Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Store Insights & Recommendations</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Store Prominence</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <Star className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm text-green-700">Review Score</p>
                <p className="text-xl font-bold text-green-900">{prominenceData.reviewScore}/5</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-700">Review Count</p>
                <p className="text-xl font-bold text-blue-900">{prominenceData.reviewCount}</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center">
                <Target className="h-6 w-6 text-teal-600 mx-auto mb-2" />
                <p className="text-sm text-teal-700">Citation Accuracy</p>
                <p className="text-xl font-bold text-teal-900">{prominenceData.citationAccuracy}%</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-700">Brand Mentions</p>
                <p className="text-xl font-bold text-purple-900">{prominenceData.brandMentions}%</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Recommended Actions</h4>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-blue-800">Encourage reviews to reach 900+ count - improves prominence by 8%</p>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start space-x-2">
                  <Target className="h-4 w-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-green-800">Update business hours on 3 platforms to improve citation accuracy</p>
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5" />
                  <p className="text-sm text-purple-800">Optimize for "pizza delivery downtown" - potential 15% CTR increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top 10 Keywords */}
        <div className="mt-8">
          <h4 className="font-medium text-slate-900 mb-4">Top 10 Keywords</h4>
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
                {topKeywords.map((keyword, index) => (
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
                         keyword.change < 0 ? <ArrowDown className="h-3 w-3" /> : null}
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
    </div>
  );

  const renderRegionalPerformance = () => (
    <div className="space-y-8">
      {/* Section 1: Performance by Location */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Performance by Location</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">Current Level: {currentLocationLevel}</span>
            {locationHierarchy.length > 1 && (
              <button
                onClick={() => {
                  const newHierarchy = locationHierarchy.slice(0, -1);
                  setLocationHierarchy(newHierarchy);
                  setCurrentLocationLevel(newHierarchy[newHierarchy.length - 1]);
                }}
                className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm hover:bg-slate-200"
              >
                Roll Up
              </button>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <div 
            className="inline-block cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors"
            onDoubleClick={() => {
              if (currentLocationLevel !== 'Store') {
                const nextLevel = currentLocationLevel === 'Country' ? 'State' : 
                                currentLocationLevel === 'State' ? 'MSA' :
                                currentLocationLevel === 'MSA' ? 'City' :
                                currentLocationLevel === 'City' ? 'ZIP' : 'Store';
                setLocationHierarchy([...locationHierarchy, nextLevel]);
                setCurrentLocationLevel(nextLevel);
              }
            }}
          >
            <h4 className="font-medium text-slate-900 mb-4">United States Performance Funnel</h4>
            <p className="text-xs text-slate-500 mb-4">Double-click to drill down to {
              currentLocationLevel === 'Country' ? 'State' : 
              currentLocationLevel === 'State' ? 'MSA' :
              currentLocationLevel === 'MSA' ? 'City' :
              currentLocationLevel === 'City' ? 'ZIP' : 'Store'
            } level</p>
            <div className="space-y-3 max-w-md mx-auto">
              {[
                { stage: 'Views', count: 1250000, percentage: 100 },
                { stage: 'Clicks', count: 150000, percentage: 12 },
                { stage: 'Conversions', count: 18000, percentage: 1.4 }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-1">
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
          </div>
        </div>
      </div>

      {/* Section 2: Comparative Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Comparative Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>State</option>
                <option>MSA</option>
                <option>City</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
              </select>
            </div>
            <div className="space-y-3">
              {[
                { stage: 'Views', count: 450000, percentage: 100 },
                { stage: 'Clicks', count: 54000, percentage: 12 },
                { stage: 'Conversions', count: 6480, percentage: 1.4 }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{item.stage}</span>
                    <span className="text-sm text-slate-600">{item.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-6 flex items-center">
                      <div
                        className="h-6 rounded-full bg-blue-500 transition-all duration-500 flex items-center justify-end pr-2"
                        style={{ width: `${item.percentage}%` }}
                      >
                        <span className="text-white text-xs font-medium">
                          {item.count.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>City</option>
                <option>MSA</option>
                <option>State</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>San Diego</option>
              </select>
            </div>
            <div className="space-y-3">
              {[
                { stage: 'Views', count: 125000, percentage: 100 },
                { stage: 'Clicks', count: 15000, percentage: 12 },
                { stage: 'Conversions', count: 1800, percentage: 1.4 }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{item.stage}</span>
                    <span className="text-sm text-slate-600">{item.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-6 flex items-center">
                      <div
                        className="h-6 rounded-full bg-teal-500 transition-all duration-500 flex items-center justify-end pr-2"
                        style={{ width: `${item.percentage}%` }}
                      >
                        <span className="text-white text-xs font-medium">
                          {item.count.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Relevance Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Query Relevance Score</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">Current Level: {currentLocationLevel}</span>
            {locationHierarchy.length > 1 && (
              <button className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm hover:bg-slate-200">
                Roll Up
              </button>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { location: 'United States', score: 87 },
            { location: 'California', score: 92 },
            { location: 'Texas', score: 84 },
            { location: 'New York', score: 89 },
            { location: 'Florida', score: 81 }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer"
              onDoubleClick={() => {
                // Drill down logic
              }}
            >
              <span className="font-medium text-slate-900">{item.location}</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-green-500"
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-slate-900 w-10">{item.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Prominence Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Review Score</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600">Current Level: {currentLocationLevel}</span>
            {locationHierarchy.length > 1 && (
              <button className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm hover:bg-slate-200">
                Roll Up
              </button>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { location: 'United States', score: 4.3 },
            { location: 'California', score: 4.6 },
            { location: 'Texas', score: 4.2 },
            { location: 'New York', score: 4.4 },
            { location: 'Florida', score: 4.1 }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer"
              onDoubleClick={() => {
                // Drill down logic
              }}
            >
              <span className="font-medium text-slate-900">{item.location}</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-yellow-500"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-slate-900 w-10">{item.score}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Regional Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Performance Gaps</h4>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-900">Lowest performing city: Miami</p>
                    <p className="text-xs text-red-700">3.8/5 review score, 67% relevance</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-orange-900">Lowest performing MSA: Tampa Bay</p>
                    <p className="text-xs text-orange-700">4.1/5 review score, 71% relevance</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Navigation className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-900">Lowest performing ZIP: 33101</p>
                    <p className="text-xs text-yellow-700">3.6/5 review score, 62% relevance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Expansion Opportunities</h4>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-900">Recommended new store location</p>
                  <p className="text-xs text-green-700 mb-2">Austin, TX - ZIP 78701</p>
                  <div className="text-xs text-green-600 space-y-1">
                    <div>• High search volume: 15,000 monthly queries</div>
                    <div>• Low competition: 2 competitors within 5km</div>
                    <div>• Average travel distance: 8.2km (above optimal)</div>
                    <div>• Projected revenue impact: $2.1M annually</div>
                  </div>
                </div>
              </div>
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
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
              <p className="text-slate-600">Advanced multi-location SEO intelligence</p>
            </div>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Enhanced
            </span>
          </div>
          
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterPanelOpen(true)}
            className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

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
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className="text-xs text-slate-400">{tab.persona}</div>
                </div>
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

      {/* Filter Panel */}
      {renderFilterPanel()}
      
      {/* Overlay */}
      {isFilterPanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterPanelOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default LocalSEOPlusPlus;