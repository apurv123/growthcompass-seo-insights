import React, { useState } from 'react';
import { ArrowUp, ArrowDown, TrendingUp, MapPin, Phone, Navigation, Globe, Eye, MousePointer, ChevronDown } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import ProgressBar from '../components/ProgressBar';
import KeywordTable from '../components/KeywordTable';
import FunnelChart from '../components/FunnelChart';

const LocalSEODashboard = () => {
  const [selectedStore, setSelectedStore] = useState('Downtown Location - Store #001');
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  const stores = [
    'Downtown Location - Store #001',
    'Mall Location - Store #002',
    'Suburban Plaza - Store #003',
    'Airport Terminal - Store #004',
    'University District - Store #005'
  ];

  const syndicationData = [
    { platform: 'Google My Business', status: 100, color: 'bg-green-500' },
    { platform: 'Bing Places', status: 95, color: 'bg-blue-500' },
    { platform: 'Apple Maps', status: 87, color: 'bg-gray-600' },
    { platform: 'Yelp', status: 92, color: 'bg-red-500' },
    { platform: 'Facebook', status: 89, color: 'bg-blue-600' },
    { platform: 'Yellow Pages', status: 78, color: 'bg-yellow-500' }
  ];

  const clicksByType = [
    { type: 'Website Visits', count: 2847, percentage: 45, icon: Globe, color: 'bg-blue-500' },
    { type: 'Directions', count: 1923, percentage: 30, icon: Navigation, color: 'bg-green-500' },
    { type: 'Phone Calls', count: 1586, percentage: 25, icon: Phone, color: 'bg-purple-500' }
  ];

  const keywordData = [
    { keyword: 'pizza near me', position: 3, views: 12500, change: 2 },
    { keyword: 'best pizza downtown', position: 1, views: 8900, change: 0 },
    { keyword: 'italian restaurant', position: 7, views: 6700, change: -1 },
    { keyword: 'pizza delivery', position: 2, views: 5400, change: 1 },
    { keyword: 'authentic pizza', position: 5, views: 4200, change: 3 },
    { keyword: 'wood fired pizza', position: 4, views: 3800, change: 1 },
    { keyword: 'pizza restaurant', position: 6, views: 3200, change: -2 },
    { keyword: 'local pizza', position: 8, views: 2900, change: 0 },
    { keyword: 'pizza place', position: 9, views: 2500, change: 1 },
    { keyword: 'family restaurant', position: 12, views: 2100, change: -1 }
  ];

  const funnelData = [
    { stage: 'Listing Views', count: 45678, percentage: 100 },
    { stage: 'Profile Clicks', count: 13703, percentage: 30 },
    { stage: 'Website Visits', count: 6851, percentage: 15 },
    { stage: 'Contact Actions', count: 2741, percentage: 6 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Store Filter */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-slate-900">Local SEO Dashboard</h1>
          </div>
          
          {/* Store Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
              className="flex items-center space-x-2 bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{selectedStore}</span>
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
                        selectedStore === store ? 'bg-emerald-50 text-emerald-700 font-medium' : 'text-slate-700'
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
        <p className="text-slate-600">Viewing data for: {selectedStore}</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Overall Syndication"
          value="91%"
          change="+5%"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Click-Through Rate"
          value="4.2%"
          change="+0.3%"
          changeType="positive"
          icon={MousePointer}
        />
        <MetricCard
          title="Total Clicks"
          value="6,356"
          change="+12%"
          changeType="positive"
          icon={Eye}
        />
        <MetricCard
          title="Avg. Keyword Position"
          value="5.8"
          change="-0.7"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Syndication Status */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Listing Syndication Status</h3>
          <div className="space-y-4">
            {syndicationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">{item.platform}</span>
                <div className="flex items-center space-x-3">
                  <ProgressBar percentage={item.status} color={item.color} />
                  <span className="text-sm font-medium text-slate-900 w-10">{item.status}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clicks by Type */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Clicks by Type</h3>
          <div className="space-y-4">
            {clicksByType.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.type}</p>
                    <p className="text-sm text-slate-600">{item.percentage}% of total clicks</p>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Search Funnel */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Search Funnel Performance</h3>
          <FunnelChart data={funnelData} />
        </div>

        {/* Monthly Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Monthly Performance Summary</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <div>
                <p className="text-sm text-emerald-700 font-medium">Month over Month</p>
                <p className="text-2xl font-bold text-emerald-900">+18%</p>
              </div>
              <ArrowUp className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm text-blue-700 font-medium">Year to Date</p>
                <p className="text-2xl font-bold text-blue-900">+42%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">This Month</p>
                <p className="text-lg font-semibold text-slate-900">15,247</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Last Month</p>
                <p className="text-lg font-semibold text-slate-900">12,891</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Keywords */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Top 10 Keywords by Views</h3>
        <KeywordTable keywords={keywordData} />
      </div>
    </div>
  );
};

export default LocalSEODashboard;