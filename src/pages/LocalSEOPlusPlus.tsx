import React, { useState } from 'react';
import { 
  TrendingUp, 
  Filter, 
  X, 
  Download,
  MapPin,
  Users,
  MousePointer,
  Target,
  DollarSign,
  Phone,
  Store,
  Globe,
  BarChart3,
  PieChart as PieChartIcon,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Eye,
  ShoppingCart,
  Repeat
} from 'lucide-react';
import FunnelChart from '../components/FunnelChart';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import SankeyDiagram from '../components/SankeyDiagram';

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

  // Sample data for SEO Attribution Funnels
  const localSEOFunnelData = [
    { stage: 'Views', count: 125000, percentage: 100 },
    { stage: 'Clicks', count: 7500, percentage: 6 },
    { stage: 'Conversions', count: 375, percentage: 0.3 }
  ];

  const coreSEOFunnelData = [
    { stage: 'Views', count: 450000, percentage: 100 },
    { stage: 'Clicks', count: 22500, percentage: 5 },
    { stage: 'Conversions', count: 1125, percentage: 0.25 }
  ];

  // Customer Journey Sankey Data
  const sankeyNodes = [
    { id: 'searches', label: 'Local Searches', value: 100, percentage: 100, color: '#10b981', x: 50, y: 200, width: 120, height: 60 },
    { id: 'brand', label: 'Chose our brand', value: 75, percentage: 75, color: '#10b981', x: 220, y: 150, width: 120, height: 60 },
    { id: 'competitor', label: 'Chose competitor', value: 25, percentage: 25, color: '#ef4444', x: 220, y: 250, width: 120, height: 60 },
    { id: 'called', label: 'Called', value: 10, percentage: 10, color: '#ef4444', x: 220, y: 350, width: 120, height: 60 },
    { id: 'navigated', label: 'Navigated', value: 25, percentage: 25, color: '#10b981', x: 390, y: 100, width: 120, height: 60 },
    { id: 'opened', label: 'Opened site', value: 40, percentage: 40, color: '#10b981', x: 390, y: 180, width: 120, height: 60 },
    { id: 'visit', label: 'In-Store Visit', value: 15, percentage: 15, color: '#10b981', x: 390, y: 260, width: 120, height: 60 },
    { id: 'dropped1', label: 'Dropped', value: 10, percentage: 10, color: '#ef4444', x: 390, y: 340, width: 120, height: 60 },
    { id: 'dropped2', label: 'Dropped', value: 10, percentage: 10, color: '#ef4444', x: 560, y: 80, width: 120, height: 60 },
    { id: 'cart', label: 'Added to cart', value: 30, percentage: 30, color: '#10b981', x: 560, y: 160, width: 120, height: 60 },
    { id: 'checkout', label: 'Checkout', value: 20, percentage: 20, color: '#10b981', x: 560, y: 240, width: 120, height: 60 },
    { id: 'billing', label: 'Billing', value: 10, percentage: 10, color: '#10b981', x: 560, y: 320, width: 120, height: 60 },
    { id: 'handover', label: 'Handover', value: 8, percentage: 8, color: '#10b981', x: 560, y: 400, width: 120, height: 60 },
    { id: 'special', label: 'Special Order', value: 2, percentage: 2, color: '#10b981', x: 560, y: 480, width: 120, height: 60 },
    { id: 'dropped3', label: 'Dropped', value: 10, percentage: 10, color: '#ef4444', x: 730, y: 140, width: 120, height: 60 },
    { id: 'dropped4', label: 'Dropped', value: 5, percentage: 5, color: '#ef4444', x: 730, y: 220, width: 120, height: 60 },
    { id: 'dropped5', label: 'Dropped', value: 5, percentage: 5, color: '#ef4444', x: 730, y: 300, width: 120, height: 60 },
    { id: 'dropped6', label: 'Dropped', value: 3, percentage: 3, color: '#ef4444', x: 730, y: 380, width: 120, height: 60 },
    { id: 'payment', label: 'Payment', value: 15, percentage: 15, color: '#10b981', x: 730, y: 460, width: 120, height: 60 },
    { id: 'pickup', label: 'Store Pickup', value: 2, percentage: 2, color: '#10b981', x: 900, y: 420, width: 120, height: 60 },
    { id: 'delivery', label: 'Delivery', value: 10, percentage: 10, color: '#10b981', x: 900, y: 500, width: 120, height: 60 },
    { id: 'dropped7', label: 'Dropped', value: 3, percentage: 3, color: '#ef4444', x: 900, y: 580, width: 120, height: 60 }
  ];

  const sankeyFlows = [
    { source: 'searches', target: 'brand', value: 75, percentage: 75, color: '#10b981' },
    { source: 'searches', target: 'competitor', value: 25, percentage: 25, color: '#ef4444' },
    { source: 'brand', target: 'navigated', value: 25, percentage: 25, color: '#10b981' },
    { source: 'brand', target: 'opened', value: 40, percentage: 40, color: '#10b981' },
    { source: 'brand', target: 'visit', value: 15, percentage: 15, color: '#10b981' },
    { source: 'opened', target: 'cart', value: 30, percentage: 30, color: '#10b981' },
    { source: 'cart', target: 'checkout', value: 20, percentage: 20, color: '#10b981' },
    { source: 'checkout', target: 'billing', value: 10, percentage: 10, color: '#10b981' },
    { source: 'billing', target: 'payment', value: 15, percentage: 15, color: '#10b981' },
    { source: 'payment', target: 'pickup', value: 2, percentage: 2, color: '#10b981' },
    { source: 'payment', target: 'delivery', value: 10, percentage: 10, color: '#10b981' }
  ];

  // Conversion Insights Data
  const conversionByCategoryData = [
    { label: 'Bikes', value: 45, percentage: 45, color: '#3b82f6' },
    { label: 'Components', value: 25, percentage: 25, color: '#10b981' },
    { label: 'Accessories', value: 15, percentage: 15, color: '#f59e0b' },
    { label: 'Apparel', value: 10, percentage: 10, color: '#ef4444' },
    { label: 'Services', value: 5, percentage: 5, color: '#8b5cf6' }
  ];

  const repeatConversionData = [
    { label: '6 months', value: 85, color: '#10b981' },
    { label: '12 months', value: 65, color: '#f59e0b' },
    { label: '18 months', value: 45, color: '#ef4444' }
  ];

  // Revenue Impact Data
  const revenueByCategoryData = [
    { label: 'Bikes', value: 55, percentage: 55, color: '#3b82f6' },
    { label: 'Components', value: 20, percentage: 20, color: '#10b981' },
    { label: 'Accessories', value: 12, percentage: 12, color: '#f59e0b' },
    { label: 'Apparel', value: 8, percentage: 8, color: '#ef4444' },
    { label: 'Services', value: 5, percentage: 5, color: '#8b5cf6' }
  ];

  const revenueSaleVsNonSaleData = [
    { label: 'Sale Items', value: 35, percentage: 35, color: '#ef4444' },
    { label: 'Regular Price', value: 65, percentage: 65, color: '#10b981' }
  ];

  const averageOrderValueData = [
    { label: 'Online', value: 249, color: '#3b82f6' },
    { label: 'In-Store', value: 187, color: '#10b981' }
  ];

  const conversionDrivers = [
    { location: 'United States', contribution: 100, conversionRate: 5.2, ctr: 4.1 },
    { location: 'California', contribution: 28, conversionRate: 6.1, ctr: 4.8 },
    { location: 'Los Angeles MSA', contribution: 15, conversionRate: 5.9, ctr: 4.6 },
    { location: 'Los Angeles', contribution: 12, conversionRate: 6.2, ctr: 4.9 },
    { location: '90210', contribution: 3, conversionRate: 7.1, ctr: 5.2 },
    { location: 'Beverly Hills Store', contribution: 2.5, conversionRate: 7.8, ctr: 5.8 }
  ];

  const clickConversionData = [
    { label: 'Phone Calls', value: 45, percentage: 45, color: '#8b5cf6' },
    { label: 'Store Visits', value: 35, percentage: 35, color: '#10b981' },
    { label: 'Online Orders', value: 20, percentage: 20, color: '#3b82f6' }
  ];

  const exportCSV = (filename: string) => {
    console.log(`Exporting ${filename} to CSV...`);
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
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
            >
              <option value="all">All Clicks</option>
              <option value="phone">Phone Calls</option>
              <option value="store">Store Visits</option>
              <option value="online">Online</option>
            </select>
            <button
              onClick={() => exportCSV('seo-attribution')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Local SEO Funnel */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Local SEO Funnel</h4>
            <FunnelChart data={localSEOFunnelData} />
          </div>
          
          {/* Core SEO Funnel */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Core SEO Funnel</h4>
            <FunnelChart data={coreSEOFunnelData} />
          </div>
          
          {/* Attribution Comparison */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Local SEO Attribution to Core SEO</h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-700">Views</span>
                  <span className="text-lg font-bold text-blue-900">27.8%</span>
                </div>
                <div className="text-xs text-blue-600">125K of 450K total views</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-700">Clicks</span>
                  <span className="text-lg font-bold text-green-900">33.3%</span>
                </div>
                <div className="text-xs text-green-600">7.5K of 22.5K total clicks</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-700">Conversions</span>
                  <span className="text-lg font-bold text-purple-900">33.3%</span>
                </div>
                <div className="text-xs text-purple-600">375 of 1,125 total conversions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Journey Funnel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Journey Funnel</h3>
          <button
            onClick={() => exportCSV('customer-journey')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <SankeyDiagram 
            nodes={sankeyNodes} 
            flows={sankeyFlows} 
            width={1100} 
            height={600} 
          />
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
                checked={localSEOContribution}
                onChange={(e) => setLocalSEOContribution(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button
              onClick={() => exportCSV('conversion-drivers')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversionDrivers.map((driver, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-semibold text-slate-900 mb-2">{driver.location}</h4>
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
                {localSEOContribution && (
                  <div className="text-xs text-blue-600 mt-2">
                    Local SEO: {Math.round(driver.contribution * 0.33)}%
                  </div>
                )}
              </div>
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
                checked={localSEOContribution}
                onChange={(e) => setLocalSEOContribution(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button
              onClick={() => exportCSV('click-conversion')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <PieChart data={clickConversionData} size={300} />
        </div>
        {localSEOContribution && (
          <div className="text-center text-sm text-blue-600 mt-4">
            Local SEO contributes 33% to these conversions
          </div>
        )}
      </div>

      {/* Conversion Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Conversion Insights</h3>
          <button
            onClick={() => exportCSV('conversion-insights')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Conversion by Category</h4>
            <PieChart data={conversionByCategoryData} size={250} />
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Repeat Conversion Probability</h4>
            <BarChart data={repeatConversionData} height={250} />
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
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={localSEOContribution}
                onChange={(e) => setLocalSEOContribution(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-sm text-slate-700">Local SEO Contribution</span>
            </label>
            <button
              onClick={() => exportCSV('revenue-impact')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">YTD Revenue</h4>
            <p className="text-2xl font-bold text-green-900">${currency === 'USD' ? '2.4M' : currency === 'EUR' ? '€2.2M' : '£1.9M'}</p>
            <p className="text-sm text-green-600">Actual data</p>
            {localSEOContribution && (
              <p className="text-xs text-blue-600 mt-1">Local SEO: 33%</p>
            )}
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Current FY</h4>
            <p className="text-2xl font-bold text-blue-900">${currency === 'USD' ? '3.1M' : currency === 'EUR' ? '€2.8M' : '£2.5M'}</p>
            <p className="text-sm text-blue-600">Actual data</p>
            {localSEOContribution && (
              <p className="text-xs text-blue-600 mt-1">Local SEO: 33%</p>
            )}
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-700 mb-2">Next Year Forecast</h4>
            <p className="text-2xl font-bold text-purple-900">${currency === 'USD' ? '4.2M' : currency === 'EUR' ? '€3.8M' : '£3.4M'}</p>
            <p className="text-sm text-purple-600">Based on recommendations</p>
            {localSEOContribution && (
              <p className="text-xs text-blue-600 mt-1">Local SEO: 35%</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Revenue by Category</h4>
            <PieChart data={revenueByCategoryData} size={200} />
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Revenue: Sale vs Non-Sale Items</h4>
            <PieChart data={revenueSaleVsNonSaleData} size={200} />
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Average Order Value</h4>
            <BarChart data={averageOrderValueData} height={200} />
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Insights</h3>
          <button
            onClick={() => exportCSV('insights')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Growth Opportunities</h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Optimize store hours listings</p>
                <p className="text-sm text-blue-700">Could increase conversions by 12% across 15 locations</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Expand bike category keywords</p>
                <p className="text-sm text-green-700">Target 25 new high-intent keywords for 8% traffic boost</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Competitive Intelligence</h4>
            <div className="space-y-3">
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="font-medium text-orange-900">Competitor gaining in electric bikes</p>
                <p className="text-sm text-orange-700">BikeShop Plus increased share by 15% in Q3</p>
                <button className="text-xs text-orange-600 hover:text-orange-800 mt-2 flex items-center space-x-1">
                  <span>View detailed report</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="font-medium text-red-900">Local competitor expanding</p>
                <p className="text-sm text-red-700">CycleMart opened 3 new locations in your top markets</p>
                <button className="text-xs text-red-600 hover:text-red-800 mt-2 flex items-center space-x-1">
                  <span>View detailed report</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
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
        <div className="flex items-center space-x-4">
          <Store className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-slate-900">Store Selection</h3>
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="ml-auto px-4 py-2 border border-slate-300 rounded-lg"
          >
            <option value="Store #001">Downtown Location - Store #001</option>
            <option value="Store #002">Mall Location - Store #002</option>
            <option value="Store #003">Suburban Plaza - Store #003</option>
          </select>
        </div>
      </div>

      {/* Store Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Store Performance</h3>
          <button
            onClick={() => exportCSV('store-performance')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-blue-700 font-medium">Total Visits</p>
            <p className="text-2xl font-bold text-blue-900">15,247</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <MousePointer className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-green-700 font-medium">Total Clicks</p>
            <p className="text-2xl font-bold text-green-900">1,829</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <ShoppingCart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-purple-700 font-medium">Conversions</p>
            <p className="text-2xl font-bold text-purple-900">95</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-orange-700 font-medium">CTR</p>
            <p className="text-2xl font-bold text-orange-900">12.0%</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg text-center">
            <TrendingUp className="h-8 w-8 text-teal-600 mx-auto mb-2" />
            <p className="text-sm text-teal-700 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold text-teal-900">5.2%</p>
          </div>
        </div>
      </div>

      {/* Additional store insights sections would go here */}
    </div>
  );

  const renderRegionalPerformance = () => (
    <div className="space-y-8">
      {/* Performance by Location */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Performance by Location</h3>
          <button
            onClick={() => exportCSV('regional-performance')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
          <div className="inline-block">
            <FunnelChart data={[
              { stage: 'Views', count: 450000, percentage: 100 },
              { stage: 'Clicks', count: 22500, percentage: 5 },
              { stage: 'Conversions', count: 1125, percentage: 0.25 }
            ]} />
            <p className="text-lg font-semibold text-slate-900 mt-4">{drillPath[drillPath.length - 1]}</p>
          </div>
        </div>
      </div>

      {/* Additional regional performance sections would go here */}
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