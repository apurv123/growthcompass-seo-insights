import React, { useState } from 'react';
import { 
  TrendingUp, 
  Filter, 
  X, 
  Target,
  Store,
  MapPin
} from 'lucide-react';
import StrategicImpactTab from '../components/StrategicImpactTab';
import StoreInsightsTab from '../components/StoreInsightsTab';
import RegionalPerformanceTab from '../components/RegionalPerformanceTab';

const LocalSEOPlusPlus = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Store #001');
  const [clickTypeFilter, setClickTypeFilter] = useState('all');
  const [localSEOContribution, setLocalSEOContribution] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [drillLevel, setDrillLevel] = useState('country');
  const [drillPath, setDrillPath] = useState(['United States']);

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

  const tabs = [
    { id: 'strategic', label: 'Strategic Impact', icon: Target },
    { id: 'store', label: 'Store Insights', icon: Store },
    { id: 'regional', label: 'Regional Performance', icon: MapPin }
  ];

  const exportCSV = (filename: string) => {
    console.log(`Exporting ${filename} to CSV...`);
  };

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
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'strategic' && (
        <StrategicImpactTab
          clickTypeFilter={clickTypeFilter}
          setClickTypeFilter={setClickTypeFilter}
          localSEOContribution={localSEOContribution}
          setLocalSEOContribution={setLocalSEOContribution}
          currency={currency}
          setCurrency={setCurrency}
          exportCSV={exportCSV}
        />
      )}
      {activeTab === 'store' && (
        <StoreInsightsTab
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          exportCSV={exportCSV}
        />
      )}
      {activeTab === 'regional' && (
        <RegionalPerformanceTab
          drillLevel={drillLevel}
          drillPath={drillPath}
          exportCSV={exportCSV}
        />
      )}

      {/* Floating Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Filter Side Panel */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto h-full pb-24">
              <div className="space-y-6">
                {/* Time Range */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Time Range (months)</label>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={timeRange[1]}
                    onChange={(e) => setTimeRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>0</span>
                    <span>{timeRange[1]} months</span>
                  </div>
                </div>

                {/* Location Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location Type</label>
                  <select
                    value={locationType}
                    onChange={(e) => setLocationType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="global">Global</option>
                    <option value="country">Country</option>
                    <option value="state">State</option>
                    <option value="msa">MSA</option>
                    <option value="city">City</option>
                    <option value="zip">ZIP</option>
                  </select>
                </div>

                {/* Click Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Click Type</label>
                  <select
                    value={clickType}
                    onChange={(e) => setClickType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="all">All</option>
                    <option value="website">Website Visits</option>
                    <option value="store">Store Visits</option>
                    <option value="phone">Phone Calls</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">All Categories</option>
                    <option value="bikes">Bikes</option>
                    <option value="components">Components</option>
                    <option value="accessories">Accessories</option>
                    <option value="apparel">Apparel</option>
                    <option value="services">Services</option>
                  </select>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">All Brands</option>
                    <option value="cannondale">Cannondale</option>
                    <option value="cervelo">Cervelo</option>
                    <option value="comotion">CoMotion</option>
                    <option value="gazelle">Gazelle</option>
                    <option value="giant">Giant</option>
                    <option value="gt">GT Bicycles</option>
                  </select>
                </div>

                {/* Sub Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sub Category</label>
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">All Sub Categories</option>
                    <option value="active">Active Bikes</option>
                    <option value="mountain">Mountain Bikes</option>
                    <option value="comfort">Comfort Bikes</option>
                    <option value="electric">Electric Bikes</option>
                    <option value="fat">Fat Bike</option>
                    <option value="kids">Kids Bikes</option>
                    <option value="urban">Urban Bikes</option>
                  </select>
                </div>

                {/* Zone Number */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Zone Number</label>
                  <select
                    value={zoneNumber}
                    onChange={(e) => setZoneNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">All Zones</option>
                    <option value="12345">12345</option>
                    <option value="23456">23456</option>
                    <option value="34567">34567</option>
                    <option value="45678">45678</option>
                    <option value="56789">56789</option>
                  </select>
                </div>

                {/* Product Code */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product Code</label>
                  <select
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  >
                    <option value="">All Products</option>
                    <option value="C11064U1054">C11064U1054</option>
                    <option value="B22075V2165">B22075V2165</option>
                    <option value="A33086W3276">A33086W3276</option>
                    <option value="D44097X4387">D44097X4387</option>
                    <option value="E55108Y5498">E55108Y5498</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-200">
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Apply Filters
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalSEOPlusPlus;