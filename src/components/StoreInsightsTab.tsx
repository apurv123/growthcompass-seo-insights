import React, { useState } from 'react';
import { Store, Eye, MousePointer, ShoppingCart, Target, TrendingUp, Download, ArrowUpDown, Search } from 'lucide-react';
import SankeyDiagram from './SankeyDiagram';

interface StoreInsightsTabProps {
  selectedStore: string;
  setSelectedStore: (value: string) => void;
  exportCSV: (filename: string) => void;
}

const StoreInsightsTab: React.FC<StoreInsightsTabProps> = ({
  selectedStore,
  setSelectedStore,
  exportCSV
}) => {
  const [performanceSortColumn, setPerformanceSortColumn] = useState<string>('');
  const [performanceSortDirection, setPerformanceSortDirection] = useState<'asc' | 'desc'>('desc');
  const [prominenceSortColumn, setProminenceSortColumn] = useState<string>('');
  const [prominenceSortDirection, setProminenceSortDirection] = useState<'asc' | 'desc'>('desc');

  // Store Performance Leaderboard Data
  const performanceData = [
    { store: "Mike's Bikes#Downtown", clicks: 2100, calls: 450, directions: 890, ctr: 7.1, conversionRate: 12.5, isCurrentStore: true },
    { store: "Specialized#Union Square", clicks: 1950, calls: 380, directions: 820, ctr: 6.8, conversionRate: 11.2, isCurrentStore: false },
    { store: "Trek Bikes#SOMA", clicks: 1780, calls: 420, directions: 750, ctr: 6.5, conversionRate: 13.1, isCurrentStore: false },
    { store: "Erik's Bike Shop#Mission", clicks: 1200, calls: 280, directions: 520, ctr: 5.2, conversionRate: 9.8, isCurrentStore: false },
    { store: "Jenson USA#Sunset", clicks: 980, calls: 190, directions: 390, ctr: 4.8, conversionRate: 8.5, isCurrentStore: false },
    { store: "Specialized#Castro", clicks: 1650, calls: 340, directions: 710, ctr: 6.2, conversionRate: 10.8, isCurrentStore: false },
    { store: "Trek Bikes#Marina", clicks: 1420, calls: 310, directions: 640, ctr: 5.9, conversionRate: 11.5, isCurrentStore: false },
    { store: "Erik's Bike Shop#Haight", clicks: 1100, calls: 250, directions: 480, ctr: 5.0, conversionRate: 9.2, isCurrentStore: false },
    { store: "Jenson USA#Richmond", clicks: 850, calls: 160, directions: 320, ctr: 4.5, conversionRate: 7.8, isCurrentStore: false },
    { store: "Specialized#Nob Hill", clicks: 1380, calls: 290, directions: 590, ctr: 5.8, conversionRate: 10.3, isCurrentStore: false }
  ];

  // Store Prominence Leaderboard Data
  const prominenceData = [
    { store: "Mike's Bikes#Downtown", review: 4.6, reviewCount: 1250, citationAccuracy: 98, brandMentions: 340, isCurrentStore: true },
    { store: "Specialized#Union Square", review: 4.8, reviewCount: 2100, citationAccuracy: 95, brandMentions: 520, isCurrentStore: false },
    { store: "Trek Bikes#SOMA", review: 4.5, reviewCount: 1850, citationAccuracy: 92, brandMentions: 380, isCurrentStore: false },
    { store: "Erik's Bike Shop#Mission", review: 4.3, reviewCount: 980, citationAccuracy: 88, brandMentions: 220, isCurrentStore: false },
    { store: "Jenson USA#Sunset", review: 4.4, reviewCount: 1120, citationAccuracy: 85, brandMentions: 180, isCurrentStore: false },
    { store: "Specialized#Castro", review: 4.7, reviewCount: 1680, citationAccuracy: 94, brandMentions: 450, isCurrentStore: false },
    { store: "Trek Bikes#Marina", review: 4.6, reviewCount: 1420, citationAccuracy: 90, brandMentions: 320, isCurrentStore: false },
    { store: "Erik's Bike Shop#Haight", review: 4.2, reviewCount: 850, citationAccuracy: 86, brandMentions: 190, isCurrentStore: false },
    { store: "Jenson USA#Richmond", review: 4.1, reviewCount: 720, citationAccuracy: 82, brandMentions: 150, isCurrentStore: false },
    { store: "Specialized#Nob Hill", review: 4.5, reviewCount: 1320, citationAccuracy: 91, brandMentions: 280, isCurrentStore: false }
  ];

  // Top 10 Keywords Data - Updated to bike-related keywords
  const keywordsData = [
    { keyword: 'bike shop near me', position: 2, views: 8500, change: 1 },
    { keyword: 'best bike shop downtown', position: 1, views: 7200, change: 0 },
    { keyword: 'bicycle repair downtown', position: 4, views: 5800, change: -1 },
    { keyword: 'bike delivery service', position: 3, views: 4900, change: 2 },
    { keyword: 'mountain bikes downtown', position: 5, views: 3600, change: 1 },
    { keyword: 'demo bikes available', position: 6, views: 3200, change: 0 },
    { keyword: 'electric bike shop', position: 7, views: 2800, change: -2 },
    { keyword: 'bike tune up service', position: 8, views: 2400, change: 1 },
    { keyword: 'road bikes for sale', position: 9, views: 2100, change: 0 },
    { keyword: 'bike accessories store', position: 11, views: 1900, change: -1 }
  ];

  // Helper function to get min/max values for styling
  const getMinMaxValues = (data: any[], key: string) => {
    const values = data.map(item => item[key]);
    return { min: Math.min(...values), max: Math.max(...values) };
  };

  // Helper function to get cell styling
  const getCellStyling = (value: number, minMax: { min: number; max: number }) => {
    if (value === minMax.max) return 'font-bold text-green-600';
    if (value === minMax.min) return 'italic text-red-600';
    return 'text-slate-900';
  };

  // Sorting function
  const sortData = (data: any[], column: string, direction: 'asc' | 'desc') => {
    return [...data].sort((a, b) => {
      const aVal = a[column];
      const bVal = b[column];
      if (direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  };

  const handlePerformanceSort = (column: string) => {
    const newDirection = performanceSortColumn === column && performanceSortDirection === 'desc' ? 'asc' : 'desc';
    setPerformanceSortColumn(column);
    setPerformanceSortDirection(newDirection);
  };

  const handleProminenceSort = (column: string) => {
    const newDirection = prominenceSortColumn === column && prominenceSortDirection === 'desc' ? 'asc' : 'desc';
    setProminenceSortColumn(column);
    setProminenceSortDirection(newDirection);
  };

  const sortedPerformanceData = performanceSortColumn 
    ? sortData(performanceData, performanceSortColumn, performanceSortDirection)
    : performanceData;

  const sortedProminenceData = prominenceSortColumn 
    ? sortData(prominenceData, prominenceSortColumn, prominenceSortDirection)
    : prominenceData;

  // Get min/max values for performance data
  const performanceMinMax = {
    clicks: getMinMaxValues(performanceData, 'clicks'),
    calls: getMinMaxValues(performanceData, 'calls'),
    directions: getMinMaxValues(performanceData, 'directions'),
    ctr: getMinMaxValues(performanceData, 'ctr'),
    conversionRate: getMinMaxValues(performanceData, 'conversionRate')
  };

  // Get min/max values for prominence data
  const prominenceMinMax = {
    review: getMinMaxValues(prominenceData, 'review'),
    reviewCount: getMinMaxValues(prominenceData, 'reviewCount'),
    citationAccuracy: getMinMaxValues(prominenceData, 'citationAccuracy'),
    brandMentions: getMinMaxValues(prominenceData, 'brandMentions')
  };

  // Enhanced Horizontal Bar Chart Component with better visibility
  const HorizontalBarChart: React.FC<{ 
    data: Array<{label: string, value: number, color: string}>, 
    title: string,
    height?: number 
  }> = ({ data, title, height = 320 }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const valueRange = maxValue - minValue;
    
    // Use a minimum bar width percentage to ensure visibility
    const minBarWidthPercent = 15;
    const maxBarWidthPercent = 85;
    
    return (
      <div className="w-full">
        <h4 className="text-md font-medium text-slate-700 mb-4">{title}</h4>
        <div className="space-y-3">
          {data.map((item, index) => {
            // Calculate bar width with better scaling
            let barWidthPercent;
            if (valueRange === 0) {
              barWidthPercent = maxBarWidthPercent;
            } else {
              const normalizedValue = (item.value - minValue) / valueRange;
              barWidthPercent = minBarWidthPercent + (normalizedValue * (maxBarWidthPercent - minBarWidthPercent));
            }

            return (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-32 text-right">
                  <span className="text-sm text-slate-700 font-medium">{item.label}</span>
                </div>
                <div className="flex-1 relative">
                  <div className="w-full bg-slate-200 rounded-full h-6 relative">
                    <div
                      className="h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ 
                        width: `${barWidthPercent}%`,
                        backgroundColor: item.color
                      }}
                    >
                      <span className="text-white text-xs font-medium">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Local Context Data
  const ctrComparisonData = [
    { label: 'Store', value: 12.0, color: '#3b82f6' },
    { label: 'ZIP (90210)', value: 10.8, color: '#10b981' },
    { label: 'City (Beverly Hills)', value: 9.5, color: '#f59e0b' },
    { label: 'MSA (Los Angeles)', value: 8.2, color: '#ef4444' },
    { label: 'State (California)', value: 7.9, color: '#8b5cf6' },
    { label: 'Country (US)', value: 7.1, color: '#6b7280' },
    { label: 'Global', value: 6.8, color: '#374151' }
  ];

  const conversionComparisonData = [
    { label: 'Store', value: 5.2, color: '#3b82f6' },
    { label: 'ZIP (90210)', value: 4.8, color: '#10b981' },
    { label: 'City (Beverly Hills)', value: 4.3, color: '#f59e0b' },
    { label: 'MSA (Los Angeles)', value: 3.9, color: '#ef4444' },
    { label: 'State (California)', value: 3.6, color: '#8b5cf6' },
    { label: 'Country (US)', value: 3.2, color: '#6b7280' },
    { label: 'Global', value: 3.0, color: '#374151' }
  ];

  const addonUpsellData = [
    { label: 'Store', value: 18.5, color: '#3b82f6' },
    { label: 'ZIP (90210)', value: 16.2, color: '#10b981' },
    { label: 'City (Beverly Hills)', value: 14.8, color: '#f59e0b' },
    { label: 'MSA (Los Angeles)', value: 13.1, color: '#ef4444' },
    { label: 'State (California)', value: 12.4, color: '#8b5cf6' },
    { label: 'Country (US)', value: 11.8, color: '#6b7280' },
    { label: 'Global', value: 10.9, color: '#374151' }
  ];

  // Customer Actions Data for Bar Charts
  const clicksByTypeData = [
    { label: 'Website Visits', value: 45, color: '#3b82f6' },
    { label: 'Store Visits', value: 35, color: '#10b981' },
    { label: 'Phone Calls', value: 20, color: '#8b5cf6' }
  ];

  const engagementByDistanceData = [
    { label: 'Online visits', value: 28, color: '#3b82f6' },
    { label: '0-1 KM', value: 26, color: '#10b981' },
    { label: '1-5 KM', value: 27, color: '#f59e0b' },
    { label: '5-10 KM', value: 15, color: '#ef4444' },
    { label: '>10 KM', value: 4, color: '#8b5cf6' }
  ];

  // Store-level Customer Journey Data
  const storeCustomerJourneyNodes = [
    // Starting point
    { id: 'local-searches', label: 'Local Searches', value: 100, percentage: 100, color: '#10b981', x: 50, y: 250, width: 120, height: 50 },
    
    // First decision point
    { id: 'chose-store', label: 'Chose our store', value: 65, percentage: 65, color: '#10b981', x: 220, y: 200, width: 120, height: 50 },
    { id: 'chose-competitor', label: 'Chose competitor store', value: 35, percentage: 35, color: '#ef4444', x: 220, y: 300, width: 120, height: 50 },
    
    // Second level actions
    { id: 'navigated', label: 'Got directions', value: 20, percentage: 20, color: '#10b981', x: 390, y: 120, width: 100, height: 40 },
    { id: 'opened-site', label: 'Visited website', value: 30, percentage: 30, color: '#10b981', x: 390, y: 180, width: 100, height: 40 },
    { id: 'in-store-visit', label: 'Visited store', value: 20, percentage: 20, color: '#10b981', x: 390, y: 240, width: 100, height: 40 },
    { id: 'called', label: 'Called store', value: 8, percentage: 8, color: '#10b981', x: 390, y: 300, width: 100, height: 40 },
    { id: 'dropped-1', label: 'Dropped', value: 7, percentage: 7, color: '#ef4444', x: 390, y: 360, width: 100, height: 40 },
    
    // Third level - from website visit
    { id: 'added-cart', label: 'Added to cart', value: 22, percentage: 22, color: '#10b981', x: 540, y: 140, width: 100, height: 40 },
    { id: 'dropped-2', label: 'Dropped', value: 8, percentage: 8, color: '#ef4444', x: 540, y: 200, width: 100, height: 40 },
    
    // From store call
    { id: 'scheduled-visit', label: 'Scheduled visit', value: 5, percentage: 5, color: '#10b981', x: 540, y: 280, width: 100, height: 40 },
    { id: 'dropped-3', label: 'Dropped', value: 3, percentage: 3, color: '#ef4444', x: 540, y: 340, width: 100, height: 40 },
    
    // Fourth level - from cart
    { id: 'checkout', label: 'Checkout', value: 15, percentage: 15, color: '#10b981', x: 690, y: 100, width: 100, height: 40 },
    { id: 'dropped-4', label: 'Dropped', value: 7, percentage: 7, color: '#ef4444', x: 690, y: 160, width: 100, height: 40 },
    
    // Fifth level - from checkout
    { id: 'payment', label: 'Payment', value: 12, percentage: 12, color: '#10b981', x: 840, y: 80, width: 100, height: 40 },
    { id: 'dropped-5', label: 'Dropped', value: 3, percentage: 3, color: '#ef4444', x: 840, y: 140, width: 100, height: 40 },
    
    // Final outcomes
    { id: 'store-pickup', label: 'Store Pickup', value: 4, percentage: 4, color: '#10b981', x: 990, y: 60, width: 100, height: 40 },
    { id: 'delivery', label: 'Delivery', value: 8, percentage: 8, color: '#10b981', x: 990, y: 120, width: 100, height: 40 }
  ];

  const storeCustomerJourneyFlows = [
    // From local searches
    { source: 'local-searches', target: 'chose-store', value: 65, percentage: 65, color: '#10b981' },
    { source: 'local-searches', target: 'chose-competitor', value: 35, percentage: 35, color: '#ef4444' },
    
    // From chose store
    { source: 'chose-store', target: 'navigated', value: 20, percentage: 20, color: '#10b981' },
    { source: 'chose-store', target: 'opened-site', value: 30, percentage: 30, color: '#10b981' },
    { source: 'chose-store', target: 'in-store-visit', value: 20, percentage: 20, color: '#10b981' },
    { source: 'chose-store', target: 'called', value: 8, percentage: 8, color: '#10b981' },
    { source: 'chose-store', target: 'dropped-1', value: 7, percentage: 7, color: '#ef4444' },
    
    // From website visit
    { source: 'opened-site', target: 'added-cart', value: 22, percentage: 22, color: '#10b981' },
    { source: 'opened-site', target: 'dropped-2', value: 8, percentage: 8, color: '#ef4444' },
    
    // From called
    { source: 'called', target: 'scheduled-visit', value: 5, percentage: 5, color: '#10b981' },
    { source: 'called', target: 'dropped-3', value: 3, percentage: 3, color: '#ef4444' },
    
    // From added to cart
    { source: 'added-cart', target: 'checkout', value: 15, percentage: 15, color: '#10b981' },
    { source: 'added-cart', target: 'dropped-4', value: 7, percentage: 7, color: '#ef4444' },
    
    // From checkout
    { source: 'checkout', target: 'payment', value: 12, percentage: 12, color: '#10b981' },
    { source: 'checkout', target: 'dropped-5', value: 3, percentage: 3, color: '#ef4444' },
    
    // Final outcomes
    { source: 'payment', target: 'store-pickup', value: 4, percentage: 4, color: '#10b981' },
    { source: 'payment', target: 'delivery', value: 8, percentage: 8, color: '#10b981' }
  ];

  return (
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

      {/* Customer Journey Funnel - Store - Moved here */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Journey Funnel - Store</h3>
          <button
            onClick={() => exportCSV('store-customer-journey')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-slate-600 mb-2">
            Visualizing the complete customer journey from local searches to final outcomes for this specific store. 
            Green nodes represent positive actions, red nodes represent drop-offs.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <SankeyDiagram 
            nodes={storeCustomerJourneyNodes} 
            flows={storeCustomerJourneyFlows} 
            width={1200} 
            height={450} 
          />
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Store Conversion Highlights</h4>
            <div className="space-y-1 text-sm text-green-600">
              <div>• 65% chose our store over competitor stores</div>
              <div>• 30% visited our website</div>
              <div>• 20% visited our physical store</div>
              <div>• 12% completed payment process</div>
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-medium text-red-700 mb-2">Store Drop-off Points</h4>
            <div className="space-y-1 text-sm text-red-600">
              <div>• 35% chose competitor stores</div>
              <div>• 8% dropped after website visit</div>
              <div>• 7% abandoned cart</div>
              <div>• 3% dropped after phone call</div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Store Optimization Opportunities</h4>
            <div className="space-y-1 text-sm text-blue-600">
              <div>• Improve store website conversion</div>
              <div>• Enhance phone call follow-up</div>
              <div>• Optimize in-store experience</div>
              <div>• Reduce cart abandonment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Context - Updated with Enhanced Horizontal Bar Charts */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Local Context</h3>
          <button
            onClick={() => exportCSV('local-context')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <HorizontalBarChart 
            data={ctrComparisonData} 
            title="CTR Comparison"
          />
          <HorizontalBarChart 
            data={conversionComparisonData} 
            title="Conversion Rate Comparison"
          />
          <HorizontalBarChart 
            data={addonUpsellData} 
            title="Addon Upsell Rate Comparison"
          />
        </div>
      </div>

      {/* Competitive Context */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Competitive Context</h3>
          <button
            onClick={() => exportCSV('competitive-context')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Performance Leaderboard */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Store Performance Leaderboard</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('store')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Store</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('clicks')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Clicks</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('calls')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Calls</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('directions')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Directions</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('ctr')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>CTR</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handlePerformanceSort('conversionRate')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Conv. Rate</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPerformanceData.map((store, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-slate-100 ${
                        store.isCurrentStore ? 'bg-blue-50' : 'hover:bg-slate-50'
                      } transition-colors`}
                    >
                      <td className="py-2 px-2">
                        <span className={`text-xs ${store.isCurrentStore ? 'font-semibold text-blue-900' : 'text-slate-700'}`}>
                          {store.store}
                        </span>
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.clicks, performanceMinMax.clicks)}`}>
                        {store.clicks.toLocaleString()}
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.calls, performanceMinMax.calls)}`}>
                        {store.calls}
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.directions, performanceMinMax.directions)}`}>
                        {store.directions}
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.ctr, performanceMinMax.ctr)}`}>
                        {store.ctr}%
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.conversionRate, performanceMinMax.conversionRate)}`}>
                        {store.conversionRate}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Store Performance Leaderboard Insights */}
            <div className="mt-6 space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Clicks & Calls Leader:</span> Mike's Bikes #Downtown tops clicks (2,100) and calls (450), yet conversion (12.5%) trails Trek's 13.1%—unlock their checkout tactics.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  <span className="font-semibold">Conversion Champion:</span> Trek Bikes #SOMA boasts the highest conversion rate (13.1%)—run a deep dive on their in-store promotions.
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700">
                  <span className="font-semibold">Underperformer Alert:</span> Erik's Bike Shop #Mission has the lowest CTR (5.2%) and 9.8% conversion—prioritize a local ad blitz.
                </p>
              </div>
            </div>
          </div>

          {/* Store Prominence Leaderboard */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Store Prominence Leaderboard</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handleProminenceSort('store')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Store</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handleProminenceSort('review')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Review</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handleProminenceSort('reviewCount')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Review Count</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handleProminenceSort('citationAccuracy')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Citation Acc.</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                    <th className="text-center py-2 px-2 text-xs font-medium text-slate-600">
                      <button 
                        onClick={() => handleProminenceSort('brandMentions')}
                        className="flex items-center space-x-1 hover:text-slate-800"
                      >
                        <span>Brand Mentions</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProminenceData.map((store, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-slate-100 ${
                        store.isCurrentStore ? 'bg-blue-50' : 'hover:bg-slate-50'
                      } transition-colors`}
                    >
                      <td className="py-2 px-2">
                        <span className={`text-xs ${store.isCurrentStore ? 'font-semibold text-blue-900' : 'text-slate-700'}`}>
                          {store.store}
                        </span>
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.review, prominenceMinMax.review)}`}>
                        {store.review}
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.reviewCount, prominenceMinMax.reviewCount)}`}>
                        {store.reviewCount.toLocaleString()}
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.citationAccuracy, prominenceMinMax.citationAccuracy)}`}>
                        {store.citationAccuracy}%
                      </td>
                      <td className={`py-2 px-2 text-center text-xs ${getCellStyling(store.brandMentions, prominenceMinMax.brandMentions)}`}>
                        {store.brandMentions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Store Prominence Leaderboard Insights */}
            <div className="mt-6 space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <span className="font-semibold">Top-Rated Rival:</span> Specialized #Union Square leads with a 4.8⭐️ rating and 2,100 reviews—reverse-engineer their review-solicitation playbook.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <span className="font-semibold">Citation Gap:</span> Jenson USA #Sunset lags at 85% citation accuracy—schedule a listings audit this week.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  <span className="font-semibold">Brand Mentions Miss:</span> Mike's Bikes #Downtown at 340 mentions vs. Specialized's 520—run a targeted PR push locally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Actions - Updated with Enhanced Horizontal Bar Charts */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Actions</h3>
          <button
            onClick={() => exportCSV('customer-actions')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HorizontalBarChart 
            data={clicksByTypeData} 
            title="Clicks by Type"
          />
          <HorizontalBarChart 
            data={engagementByDistanceData} 
            title="Engagement by Distance"
          />
        </div>
      </div>

      {/* Syndication */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Syndication</h3>
          <button
            onClick={() => exportCSV('syndication')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Overall Status</h4>
            <div className="p-6 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-700 font-medium mb-2">Syndication Status</p>
              <p className="text-3xl font-bold text-green-900">91%</p>
              <p className="text-xs text-green-600">Complete</p>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">By Platform</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Google My Business</span>
                <span className="font-medium text-slate-900">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Bing Places</span>
                <span className="font-medium text-slate-900">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Apple Maps</span>
                <span className="font-medium text-slate-900">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Yelp</span>
                <span className="font-medium text-slate-900">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Facebook</span>
                <span className="font-medium text-slate-900">89%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Yellow Pages</span>
                <span className="font-medium text-slate-900">78%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Insights</h3>
          <button
            onClick={() => exportCSV('store-insights')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Store Prominence</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <p className="text-sm text-yellow-700 font-medium">Reviews Rating</p>
                <p className="text-2xl font-bold text-yellow-900">4.7/5</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-blue-700 font-medium">Reviews Count</p>
                <p className="text-2xl font-bold text-blue-900">847</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-sm text-green-700 font-medium">Citation Accuracy</p>
                <p className="text-2xl font-bold text-green-900">91%</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <p className="text-sm text-purple-700 font-medium">Brand Mentions</p>
                <p className="text-2xl font-bold text-purple-900">78%</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Recommended Actions</h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Encourage reviews to reach 900+ count</p>
                <p className="text-sm text-blue-700">Improves prominence by 8%</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Update business hours on 3 platforms</p>
                <p className="text-sm text-green-700">Improves citation accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top 10 Keywords */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Search className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-900">Top 10 Keywords</h3>
          </div>
          <button
            onClick={() => exportCSV('top-keywords')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Keyword</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-600">Position</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-600">Views</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-slate-600">Change</th>
              </tr>
            </thead>
            <tbody>
              {keywordsData.map((keyword, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-900">{keyword.keyword}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
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
                  <td className="py-3 px-4 text-center text-slate-900 font-medium">
                    {keyword.views.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className={`flex items-center justify-center space-x-1 ${
                      keyword.change > 0 ? 'text-green-600' : keyword.change < 0 ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      {keyword.change > 0 && <span>↑</span>}
                      {keyword.change < 0 && <span>↓</span>}
                      {keyword.change === 0 && <span>—</span>}
                      <span className="text-sm font-medium">
                        {keyword.change > 0 ? `+${keyword.change}` : keyword.change === 0 ? '0' : keyword.change}
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
};

export default StoreInsightsTab;