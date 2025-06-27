import React, { useState } from 'react';
import { Filter, X, Calendar, MapPin, MousePointer, Download, BarChart3, TrendingUp, Users, Phone, Navigation, Globe, Eye, ArrowUp, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Store #001 - Downtown Location');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [clickTypeFilter, setClickTypeFilter] = useState('all');
  const [localSEOToggle, setLocalSEOToggle] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [drillLevel, setDrillLevel] = useState('country');
  const [currentLocation, setCurrentLocation] = useState('United States');
  
  // Filter states
  const [timeRange, setTimeRange] = useState([0, 12]);
  const [locationType, setLocationType] = useState('global');
  const [locationName, setLocationName] = useState([]);
  const [clickType, setClickType] = useState('all');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [zoneNumber, setZoneNumber] = useState('');
  const [productCode, setProductCode] = useState('');

  // Filter options
  const categories = ['Bikes', 'Components', 'Accessories', 'Apparel', 'Services'];
  const brands = ['Cannondale', 'Cervelo', 'CoMotion', 'Gazelle', 'Giant', 'GT Bicycles'];
  const subCategories = ['Active Bikes', 'Mountain Bikes', 'Comfort Bikes', 'Electric Bikes', 'Fat Bike', 'Kids Bikes', 'Urban Bikes'];
  const zoneNumbers = ['12345', '23456', '34567', '45678', '56789', '67890'];
  const productCodes = ['C11064U1054', 'B22075V2165', 'A33086W3276', 'D44097X4387', 'E55108Y5498'];

  const stores = [
    'Store #001 - Downtown Location',
    'Store #002 - Mall Location', 
    'Store #003 - Suburban Plaza',
    'Store #004 - Airport Terminal',
    'Store #005 - University District'
  ];

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: BarChart3 },
    { id: 'store', label: 'Store Insights', icon: MapPin },
    { id: 'regional', label: 'Regional Performance', icon: TrendingUp }
  ];

  const funnelData = {
    local: { views: 145678, clicks: 8740, conversions: 394 },
    core: { views: 234567, clicks: 14567, conversions: 723 }
  };

  const conversionDrivers = [
    { location: 'United States', type: 'Country', contribution: 100, conversionRate: 4.5, ctr: 6.0 },
    { location: 'California', type: 'State', contribution: 28, conversionRate: 5.2, ctr: 6.8 },
    { location: 'Los Angeles', type: 'MSA', contribution: 15, conversionRate: 4.8, ctr: 6.2 },
    { location: 'Beverly Hills', type: 'City', contribution: 8, conversionRate: 6.1, ctr: 7.5 },
    { location: '90210', type: 'ZIP', contribution: 4, conversionRate: 7.2, ctr: 8.1 },
    { location: 'Store #001', type: 'Store', contribution: 2, conversionRate: 8.5, ctr: 9.2 }
  ];

  const clickConversionData = [
    { type: 'Phone Calls', percentage: 45, count: 177 },
    { type: 'Store Visits', percentage: 35, count: 138 },
    { type: 'Online Purchases', percentage: 20, count: 79 }
  ];

  const revenueData = [
    { period: 'YTD 2024', amount: 2847000, type: 'Actual', growth: '+18%' },
    { period: 'FY 2024', amount: 4250000, type: 'Actual', growth: '+22%' },
    { period: 'FY 2025', amount: 5100000, type: 'Forecast', growth: '+20%' }
  ];

  const storeMetrics = {
    visits: 45678,
    clicks: 8740,
    conversions: 394,
    ctr: 19.1,
    conversionRate: 4.5
  };

  const contextData = {
    ctr: { store: 19.1, zip: 16.8, city: 15.2, msa: 14.7, state: 13.9, country: 13.1, global: 12.8 },
    conversion: { store: 4.5, zip: 4.1, city: 3.8, msa: 3.6, state: 3.4, country: 3.2, global: 3.0 }
  };

  const clicksByType = [
    { type: 'Website Visits', count: 3847, percentage: 44, icon: Globe },
    { type: 'Store Visits', count: 3156, percentage: 36, icon: Navigation },
    { type: 'Phone Calls', count: 1737, percentage: 20, icon: Phone }
  ];

  const distanceData = [
    { range: 'Online', count: 2847, percentage: 32.6 },
    { range: '0-1KM', count: 2156, percentage: 24.7 },
    { range: '1-5KM', count: 1923, percentage: 22.0 },
    { range: '5-10KM', count: 1234, percentage: 14.1 },
    { range: '>10KM', count: 580, percentage: 6.6 }
  ];

  const syndicationData = [
    { platform: 'Google My Business', status: 100 },
    { platform: 'Bing Places', status: 95 },
    { platform: 'Apple Maps', status: 87 },
    { platform: 'Yelp', status: 92 },
    { platform: 'Facebook', status: 89 },
    { platform: 'Yellow Pages', status: 78 }
  ];

  const prominenceData = [
    { metric: 'Reviews Rating', value: '4.7/5', icon: '⭐' },
    { metric: 'Reviews Count', value: '847', icon: '💬' },
    { metric: 'Citation Accuracy', value: '91%', icon: '📍' },
    { metric: 'Brand Mentions', value: '73%', icon: '🏷️' }
  ];

  const keywordData = [
    { keyword: 'bike shop near me', position: 3, views: 12500, change: 2 },
    { keyword: 'bicycle repair', position: 1, views: 8900, change: 0 },
    { keyword: 'mountain bikes', position: 7, views: 6700, change: -1 },
    { keyword: 'electric bikes', position: 2, views: 5400, change: 1 },
    { keyword: 'bike accessories', position: 5, views: 4200, change: 3 }
  ];

  const handleDrillDown = () => {
    if (drillLevel === 'country') {
      setDrillLevel('state');
      setCurrentLocation('State Level');
    } else if (drillLevel === 'state') {
      setDrillLevel('msa');
      setCurrentLocation('MSA Level');
    }
  };

  const handleRollUp = () => {
    if (drillLevel === 'msa') {
      setDrillLevel('state');
      setCurrentLocation('State Level');
    } else if (drillLevel === 'state') {
      setDrillLevel('country');
      setCurrentLocation('United States');
    }
  };

  const renderStrategicImpact = () => (
    <div className="space-y-8">
      {/* SEO Attribution */}
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
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Local SEO Funnel */}
          <div className="text-center">
            <h4 className="font-medium text-slate-700 mb-4">Local SEO Funnel</h4>
            <div className="space-y-3">
              <div className="bg-blue-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.local.views.toLocaleString()}</div>
                <div className="text-sm">Views</div>
              </div>
              <div className="bg-teal-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.local.clicks.toLocaleString()}</div>
                <div className="text-sm">Clicks</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.local.conversions.toLocaleString()}</div>
                <div className="text-sm">Conversions</div>
              </div>
            </div>
          </div>

          {/* Core SEO Funnel */}
          <div className="text-center">
            <h4 className="font-medium text-slate-700 mb-4">Core SEO Funnel</h4>
            <div className="space-y-3">
              <div className="bg-purple-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.core.views.toLocaleString()}</div>
                <div className="text-sm">Views</div>
              </div>
              <div className="bg-pink-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.core.clicks.toLocaleString()}</div>
                <div className="text-sm">Clicks</div>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">{funnelData.core.conversions.toLocaleString()}</div>
                <div className="text-sm">Conversions</div>
              </div>
            </div>
          </div>

          {/* Attribution Percentage */}
          <div className="text-center">
            <h4 className="font-medium text-slate-700 mb-4">Local SEO Attribution</h4>
            <div className="space-y-3">
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">38%</div>
                <div className="text-sm text-slate-600">Views Attribution</div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">37%</div>
                <div className="text-sm text-slate-600">Clicks Attribution</div>
              </div>
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-slate-900">35%</div>
                <div className="text-sm text-slate-600">Conversion Attribution</div>
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
                className="rounded"
              />
              <span className="text-sm">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversionDrivers.map((driver, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900">{driver.location}</h4>
                <span className="text-xs bg-slate-200 px-2 py-1 rounded-full">{driver.type}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Contribution</span>
                  <span className="font-medium">{driver.contribution}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Conversion Rate</span>
                  <span className="font-medium">{driver.conversionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">CTR</span>
                  <span className="font-medium">{driver.ctr}%</span>
                </div>
              </div>
              {localSEOToggle && (
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <span className="text-xs text-blue-600 font-medium">Local SEO: {Math.round(driver.contribution * 0.35)}%</span>
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
              <span className="text-sm">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {clickConversionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-teal-500' : 'bg-green-500'
                  }`}></div>
                  <span className="font-medium">{item.type}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{item.percentage}%</div>
                  <div className="text-sm text-slate-600">{item.count} conversions</div>
                  {localSEOToggle && (
                    <div className="text-xs text-blue-600">Local: {Math.round(item.percentage * 0.35)}%</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
                        strokeDasharray={`${clickConversionData[0].percentage * 2.51} 251`}/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#14b8a6" strokeWidth="8" 
                        strokeDasharray={`${clickConversionData[1].percentage * 2.51} 251`}
                        strokeDashoffset={`-${clickConversionData[0].percentage * 2.51}`}/>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" 
                        strokeDasharray={`${clickConversionData[2].percentage * 2.51} 251`}
                        strokeDashoffset={`-${(clickConversionData[0].percentage + clickConversionData[1].percentage) * 2.51}`}/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">394</div>
                  <div className="text-sm text-slate-600">Total</div>
                </div>
              </div>
            </div>
          </div>
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
              <span className="text-sm">Local SEO Contribution</span>
            </label>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueData.map((revenue, index) => (
            <div key={index} className={`p-6 rounded-lg ${
              revenue.type === 'Actual' ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
            }`}>
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
              <div className="flex items-center space-x-2">
                <ArrowUp className="h-4 w-4 text-green-600" />
                <span className="text-green-600 font-medium">{revenue.growth}</span>
              </div>
              {localSEOToggle && (
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <span className="text-sm text-blue-600 font-medium">
                    Local SEO: ${Math.round(revenue.amount * 0.35).toLocaleString()}
                  </span>
                </div>
              )}
              {revenue.type === 'Forecast' && (
                <div className="mt-2 text-xs text-slate-600">
                  *Based on recommended actions
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Strategic Insights</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Growth Opportunities</h4>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-emerald-900">Optimize store hours listings</p>
                    <p className="text-sm text-emerald-700">Update business hours across 3 platforms to improve citation accuracy by 12% and increase phone calls by 8%</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-blue-900">Expand high-performing keywords</p>
                    <p className="text-sm text-blue-700">Target 5 additional long-tail keywords in top-performing regions to increase organic traffic by 15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Competitive Intelligence</h4>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-purple-900">Competitor gap analysis</p>
                    <p className="text-sm text-purple-700">3 competitors are ranking higher for "electric bike repair" - opportunity to capture 2,400 monthly searches</p>
                    <a href="#" className="text-xs text-purple-600 hover:underline">View detailed report →</a>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-orange-900">Local pack opportunities</p>
                    <p className="text-sm text-orange-700">Competitor analysis shows 40% higher review velocity in top-performing locations</p>
                    <a href="#" className="text-xs text-orange-600 hover:underline">View detailed report →</a>
                  </div>
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
      {/* Store Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Store Performance Analysis</h3>
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

      {/* Store Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Store Performance</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
            <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-900">{storeMetrics.visits.toLocaleString()}</div>
            <div className="text-sm text-blue-700">Total Visits</div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center">
            <MousePointer className="h-8 w-8 text-teal-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-900">{storeMetrics.clicks.toLocaleString()}</div>
            <div className="text-sm text-teal-700">Total Clicks</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-900">{storeMetrics.conversions.toLocaleString()}</div>
            <div className="text-sm text-green-700">Total Conversions</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
            <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-900">{storeMetrics.ctr}%</div>
            <div className="text-sm text-purple-700">Click-Through Rate</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-900">{storeMetrics.conversionRate}%</div>
            <div className="text-sm text-orange-700">Conversion Rate</div>
          </div>
        </div>
      </div>

      {/* Local Context */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">CTR Comparison</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(contextData.ctr).map(([level, value], index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 capitalize">{level}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(value / 20) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-12">{value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Conversion Rate Comparison</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {Object.entries(contextData.conversion).map(([level, value], index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 capitalize">{level}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(value / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-12">{value}%</span>
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
            <h3 className="text-lg font-semibold text-slate-900">Clicks by Type</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {clicksByType.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-600">{item.percentage}% of total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-slate-900">{item.count.toLocaleString()}</p>
                  <p className="text-sm text-slate-600">clicks</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Engagement by Distance</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="space-y-4">
            {distanceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.range}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-16">{item.count.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Syndication & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Syndication Status</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          <div className="mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-900">91%</div>
              <div className="text-sm text-green-700">Overall Syndication</div>
            </div>
          </div>
          <div className="space-y-4">
            {syndicationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.platform}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.status}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-10">{item.status}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Store Insights</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {prominenceData.map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-lg font-semibold text-slate-900">{item.value}</div>
                <div className="text-xs text-slate-600">{item.metric}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Recommended Actions</h4>
            <div className="space-y-2">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">Encourage reviews to reach 900+ count</p>
                <p className="text-xs text-blue-700">Improves prominence by 8%</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-900">Update business hours on 3 platforms</p>
                <p className="text-xs text-green-700">Improves citation accuracy to 95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Keywords */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Top 10 Keywords</h3>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Keyword</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Position</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Views</th>
                <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Change</th>
              </tr>
            </thead>
            <tbody>
              {keywordData.map((keyword, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-2">
                    <span className="font-medium text-slate-900">{keyword.keyword}</span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      keyword.position <= 3 
                        ? 'bg-green-100 text-green-800' 
                        : keyword.position <= 10 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {keyword.position}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center text-slate-900 font-medium">
                    {keyword.views.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-center">
                    <div className={`flex items-center justify-center space-x-1 ${
                      keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      {keyword.change > 0 ? <ArrowUp className="h-4 w-4" /> : 
                       keyword.change < 0 ? <ArrowDown className="h-4 w-4" /> : 
                       <div className="h-4 w-4"></div>}
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
          <h3 className="text-lg font-semibold text-slate-900">Performance by Location</h3>
          <div className="flex items-center space-x-4">
            {drillLevel !== 'country' && (
              <button 
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div 
            className="inline-block cursor-pointer hover:shadow-lg transition-shadow"
            onDoubleClick={handleDrillDown}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <h4 className="text-xl font-semibold text-blue-900 mb-6">{currentLocation}</h4>
              <div className="space-y-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">380,234</div>
                  <div className="text-sm">Views</div>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">23,307</div>
                  <div className="text-sm">Clicks</div>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg">
                  <div className="text-2xl font-bold">1,117</div>
                  <div className="text-sm">Conversions</div>
                </div>
              </div>
              <p className="text-xs text-blue-700 mt-4">Double-click to drill down</p>
            </div>
          </div>
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
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>State</option>
                <option>MSA</option>
                <option>City</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm flex-1">
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
              </select>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-purple-900 mb-4">California</h4>
              <div className="space-y-3">
                <div className="bg-purple-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">106,467</div>
                  <div className="text-sm">Views</div>
                </div>
                <div className="bg-pink-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">6,526</div>
                  <div className="text-sm">Clicks</div>
                </div>
                <div className="bg-red-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">313</div>
                  <div className="text-sm">Conversions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
                <option>State</option>
                <option>MSA</option>
                <option>City</option>
                <option>ZIP</option>
                <option>Store</option>
              </select>
              <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm flex-1">
                <option>Texas</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-orange-900 mb-4">Texas</h4>
              <div className="space-y-3">
                <div className="bg-orange-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">91,234</div>
                  <div className="text-sm">Views</div>
                </div>
                <div className="bg-yellow-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">5,474</div>
                  <div className="text-sm">Clicks</div>
                </div>
                <div className="bg-green-500 text-white p-3 rounded-lg">
                  <div className="text-xl font-bold">274</div>
                  <div className="text-sm">Conversions</div>
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
            {drillLevel !== 'country' && (
              <button 
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onDoubleClick={handleDrillDown}
          >
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border-2 border-teal-200 text-center">
              <h4 className="text-lg font-semibold text-teal-900 mb-4">{currentLocation}</h4>
              <div className="w-32 h-64 bg-teal-500 rounded-lg flex items-end justify-center relative">
                <div className="absolute bottom-4 text-white font-bold text-xl">87%</div>
              </div>
              <p className="text-xs text-teal-700 mt-4">Double-click to drill down</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Review Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Review Score</h3>
          <div className="flex items-center space-x-4">
            {drillLevel !== 'country' && (
              <button 
                onClick={handleRollUp}
                className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <ChevronUp className="h-4 w-4" />
                <span>Roll Up</span>
              </button>
            )}
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onDoubleClick={handleDrillDown}
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200 text-center">
              <h4 className="text-lg font-semibold text-green-900 mb-4">{currentLocation}</h4>
              <div className="w-32 h-64 bg-green-500 rounded-lg flex items-end justify-center relative">
                <div className="absolute bottom-4 text-white font-bold text-xl">4.6/5</div>
              </div>
              <p className="text-xs text-green-700 mt-4">Double-click to drill down</p>
            </div>
          </div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-medium text-red-900 mb-2">Lowest Performing City</h4>
            <p className="text-lg font-semibold text-red-800">Phoenix, AZ</p>
            <p className="text-sm text-red-600">2.1% conversion rate</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-medium text-orange-900 mb-2">Lowest Performing MSA</h4>
            <p className="text-lg font-semibold text-orange-800">Tampa-St. Petersburg</p>
            <p className="text-sm text-orange-600">2.8% conversion rate</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-900 mb-2">Lowest Performing ZIP</h4>
            <p className="text-lg font-semibold text-yellow-800">85001</p>
            <p className="text-sm text-yellow-600">1.9% conversion rate</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">New Store Opportunity</h4>
            <p className="text-lg font-semibold text-blue-800">Austin, TX</p>
            <p className="text-sm text-blue-600">Minimize travel distance</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFilterPanel = () => (
    <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
      isFilterOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Time Range */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Time Range</label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="12"
                value={timeRange[1]}
                onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>0 months</span>
                <span>12 months</span>
              </div>
            </div>
          </div>

          {/* Location Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Location Type</label>
            <select
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="global">Global</option>
              <option value="country">Country</option>
              <option value="state">State</option>
              <option value="msa">MSA</option>
              <option value="city">City</option>
              <option value="zip">ZIP</option>
            </select>
          </div>

          {/* Location Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Location Name</label>
            <select
              multiple
              className="w-full border border-slate-300 rounded-lg px-3 py-2 h-24"
            >
              <option>United States</option>
              <option>California</option>
              <option>Texas</option>
              <option>New York</option>
            </select>
          </div>

          {/* Click Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Click Type</label>
            <select
              value={clickType}
              onChange={(e) => setClickType(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="all">All</option>
              <option value="website">Website Visits</option>
              <option value="store">Store Visits</option>
              <option value="phone">Phone Calls</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">All Brands</option>
              {brands.map((brandOption) => (
                <option key={brandOption} value={brandOption}>{brandOption}</option>
              ))}
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Sub Category</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">All Sub Categories</option>
              {subCategories.map((subCat) => (
                <option key={subCat} value={subCat}>{subCat}</option>
              ))}
            </select>
          </div>

          {/* Zone Number */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Zone Number</label>
            <select
              value={zoneNumber}
              onChange={(e) => setZoneNumber(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">All Zones</option>
              {zoneNumbers.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

          {/* Product Code */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Product Code</label>
            <select
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">All Products</option>
              {productCodes.map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-slate-200">
          <div className="flex space-x-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Filters
            </button>
            <button className="flex-1 border border-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
        </div>
        <p className="text-slate-600">Advanced multi-location SEO intelligence platform</p>
      </div>

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

      {/* Floating Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Filter Panel */}
      {renderFilterPanel()}

      {/* Overlay */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
};

export default LocalSEOPlusPlus;