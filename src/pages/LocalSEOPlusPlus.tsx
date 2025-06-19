import React, { useState } from 'react';
import { TrendingUp, MapPin, Target, Users, Filter, Calendar, ChevronDown, Lightbulb, Star, Phone, Navigation, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [selectedStore, setSelectedStore] = useState('All Stores');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 Days');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  const stores = ['All Stores', 'Downtown Location', 'Mall Location', 'Suburban Plaza', 'Airport Terminal', 'University District'];
  const timeRanges = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Last 6 Months', 'Last Year'];

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: Target },
    { id: 'store', label: 'Store Insights', icon: MapPin },
    { id: 'regional', label: 'Regional Performance', icon: TrendingUp }
  ];

  // Strategic Impact Data
  const attributionFunnelData = [
    { stage: 'Local Search Views', count: 125000, percentage: 100, color: 'bg-blue-500' },
    { stage: 'Local Clicks', count: 15000, percentage: 12, color: 'bg-teal-500' },
    { stage: 'Website Sessions', count: 12000, percentage: 9.6, color: 'bg-green-500' },
    { stage: 'Conversions', count: 1800, percentage: 1.4, color: 'bg-purple-500' }
  ];

  const kpiComparisonData = [
    { metric: 'Traffic Contribution', local: 35, core: 65, trend: 'up' },
    { metric: 'Conversion Rate', local: 4.2, core: 2.8, trend: 'up' },
    { metric: 'Brand Searches', local: 28, core: 72, trend: 'up' },
    { metric: 'Revenue Attribution', local: 22, core: 78, trend: 'up' }
  ];

  const brandAuthorityData = [
    { region: 'Downtown', strength: 92, color: 'bg-green-500' },
    { region: 'Suburbs', strength: 78, color: 'bg-yellow-500' },
    { region: 'University Area', strength: 85, color: 'bg-blue-500' },
    { region: 'Airport District', strength: 71, color: 'bg-orange-500' },
    { region: 'Mall Corridor', strength: 88, color: 'bg-teal-500' }
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
    { keyword: 'pizza near downtown', position: 2, relevance: 95, views: 8500 },
    { keyword: 'best pizza downtown', position: 1, relevance: 98, views: 7200 },
    { keyword: 'downtown italian food', position: 4, relevance: 87, views: 5800 },
    { keyword: 'pizza delivery downtown', position: 3, relevance: 92, views: 4900 },
    { keyword: 'authentic pizza downtown', position: 5, relevance: 89, views: 3600 }
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

  const renderStrategicImpact = () => (
    <div className="space-y-8">
      {/* SEO Attribution Funnel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">🔄 SEO Attribution Funnel: Local → Website → Conversion</h3>
        <div className="space-y-4">
          {attributionFunnelData.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">{item.stage}</span>
                <span className="text-sm text-slate-600">{item.percentage}%</span>
              </div>
              <div className="relative">
                <div className="w-full bg-slate-200 rounded-full h-10 flex items-center">
                  <div
                    className={`h-10 rounded-full ${item.color} transition-all duration-500 flex items-center justify-end pr-4`}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* KPI Comparison Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">📊 Local vs Core SEO KPI Comparison</h3>
          <div className="space-y-4">
            {kpiComparisonData.map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{item.metric}</span>
                  {item.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Local SEO</span>
                    <p className="text-lg font-semibold text-blue-600">{item.local}%</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Core SEO</span>
                    <p className="text-lg font-semibold text-teal-600">{item.core}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Authority Map */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">🗺️ Brand Authority by Region</h3>
          <div className="space-y-4">
            {brandAuthorityData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.region}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${item.strength}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900 w-10">{item.strength}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Impact Forecast */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">📈 Revenue Impact Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
            <h4 className="font-medium text-emerald-800 mb-2">Current Month</h4>
            <p className="text-2xl font-bold text-emerald-900">$127,500</p>
            <p className="text-sm text-emerald-600">+18% vs last month</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Projected (3 months)</h4>
            <p className="text-2xl font-bold text-blue-900">$425,000</p>
            <p className="text-sm text-blue-600">Based on current trends</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Potential (optimized)</h4>
            <p className="text-2xl font-bold text-purple-900">$580,000</p>
            <p className="text-sm text-purple-600">With recommended actions</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStoreInsights = () => (
    <div className="space-y-8">
      {/* Distance Heatmap & Proximity CTR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">🗺️ Distance Engagement Zones</h3>
          <div className="space-y-4">
            {proximityData.map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{item.distance}</span>
                  <span className="text-sm text-slate-600">{item.ctr}% CTR</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${(item.ctr / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{item.clicks.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Click Type Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">📊 Click Type Breakdown</h3>
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
      </div>

      {/* Keyword Performance & Prominence Scorecard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">🔍 Keyword Performance & Relevance</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 text-sm font-medium text-slate-600">Keyword</th>
                  <th className="text-center py-3 text-sm font-medium text-slate-600">Pos.</th>
                  <th className="text-center py-3 text-sm font-medium text-slate-600">Rel.</th>
                  <th className="text-center py-3 text-sm font-medium text-slate-600">Views</th>
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
                    <td className="py-3 text-center">
                      <span className="text-sm font-medium text-slate-900">{keyword.relevance}%</span>
                    </td>
                    <td className="py-3 text-center text-slate-900">{keyword.views.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">⭐ Prominence Scorecard</h3>
          <div className="space-y-4">
            {prominenceScores.map((item, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-900">{item.metric}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.metric === 'Review Score' ? `${item.score}/5` : 
                     item.metric === 'Review Count' ? item.score :
                     `${item.score}%`}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${item.color}`}
                    style={{ width: `${(item.score / item.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Panel */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">📥 Recommended Actions</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800">Optimize for "pizza delivery downtown" - potential 15% CTR increase</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-blue-800">Encourage reviews to reach 900+ count - improves prominence by 8%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-blue-800">Update business hours on 3 platforms to improve citation accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegionalPerformance = () => (
    <div className="space-y-8">
      {/* Location Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">📍 Location Performance Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 text-sm font-medium text-slate-600">Location</th>
                <th className="text-left py-3 text-sm font-medium text-slate-600">City</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Visibility</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Engagement</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Conversions</th>
                <th className="text-center py-3 text-sm font-medium text-slate-600">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {locationComparison.map((location, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 font-medium text-slate-900">{location.location}</td>
                  <td className="py-4 text-slate-600">{location.city}</td>
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-12 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${location.visibility >= 85 ? 'bg-green-500' : location.visibility >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${location.visibility}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{location.visibility}%</span>
                    </div>
                  </td>
                  <td className="py-4 text-center font-medium text-slate-900">{location.engagement}%</td>
                  <td className="py-4 text-center font-medium text-slate-900">{location.conversions}</td>
                  <td className="py-4 text-center font-semibold text-green-600">{location.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visibility vs Attention Matrix */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">🧩 Visibility vs Attention Performance Matrix</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">High Performers</h4>
            <div className="space-y-2">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-green-800">Downtown</span>
                  <span className="text-sm text-green-600">92% visibility, 8.5% engagement</span>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-green-800">Capitol Hill</span>
                  <span className="text-sm text-green-600">85% visibility, 7.8% engagement</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Growth Opportunities</h4>
            <div className="space-y-2">
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-yellow-800">Bellevue</span>
                  <span className="text-sm text-yellow-600">78% visibility, 6.2% engagement</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-orange-800">Fremont</span>
                  <span className="text-sm text-orange-600">71% visibility, 5.9% engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights Panel */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-start space-x-3">
          <Target className="h-6 w-6 text-purple-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-3">📥 Regional Optimization Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-purple-800">Top Opportunities</h4>
                <div className="space-y-1 text-sm text-purple-700">
                  <div>• Fremont location: Focus on local keyword optimization</div>
                  <div>• Bellevue: Increase review acquisition campaigns</div>
                  <div>• Airport: Improve business hours accuracy</div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-purple-800">Success Patterns</h4>
                <div className="space-y-1 text-sm text-purple-700">
                  <div>• Downtown success: High foot traffic + strong reviews</div>
                  <div>• Capitol Hill: Community engagement drives performance</div>
                  <div>• Kirkland: Consistent local content strategy</div>
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
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-slate-900">Local SEO++</h1>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Enhanced
          </span>
        </div>
        <p className="text-slate-600">Advanced multi-location SEO intelligence and strategic insights</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Filters:</span>
          </div>
          
          {/* Store Filter */}
          <div className="relative">
            <button
              onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
              className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>{selectedStore}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStoreDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {stores.map((store, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedStore(store);
                        setIsStoreDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                        selectedStore === store ? 'bg-purple-50 text-purple-700 font-medium' : 'text-slate-700'
                      }`}
                    >
                      {store}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Time Range Filter */}
          <div className="relative">
            <button
              onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
              className="flex items-center space-x-2 bg-slate-100 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>{selectedTimeRange}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTimeDropdownOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {timeRanges.map((range, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedTimeRange(range);
                        setIsTimeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                        selectedTimeRange === range ? 'bg-purple-50 text-purple-700 font-medium' : 'text-slate-700'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
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