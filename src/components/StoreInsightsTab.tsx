import React, { useState } from 'react';
import { Store, Eye, MousePointer, ShoppingCart, Target, TrendingUp, Download, ArrowUpDown } from 'lucide-react';

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

  // Stacked Bar Chart Component for Local Context
  const StackedBarChart: React.FC<{ 
    data: Array<{label: string, value: number, color: string}>, 
    title: string,
    height?: number 
  }> = ({ data, title, height = 300 }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const chartWidth = 400;
    const chartHeight = height - 80;
    const barWidth = 40;
    const barSpacing = (chartWidth - barWidth * data.length) / (data.length + 1);

    return (
      <div className="w-full">
        <h4 className="text-md font-medium text-slate-700 mb-4">{title}</h4>
        <div className="flex justify-center">
          <svg width={chartWidth} height={height}>
            {data.map((item, index) => {
              const barHeight = (item.value / maxValue) * chartHeight;
              const x = barSpacing + index * (barWidth + barSpacing);
              const y = 40 + chartHeight - barHeight;

              return (
                <g key={index}>
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill={item.color}
                    className="hover:opacity-80 transition-opacity"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={40 + chartHeight + 20}
                    textAnchor="middle"
                    className="text-xs fill-slate-700"
                    transform={`rotate(-45, ${x + barWidth / 2}, ${40 + chartHeight + 20})`}
                  >
                    {item.label}
                  </text>
                  <text
                    x={x + barWidth / 2}
                    y={y - 5}
                    textAnchor="middle"
                    className="text-sm font-medium fill-slate-900"
                  >
                    {item.value}%
                  </text>
                </g>
              );
            })}
          </svg>
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

      {/* Local Context - Updated with Stacked Bar Charts */}
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StackedBarChart 
            data={ctrComparisonData} 
            title="CTR Comparison"
          />
          <StackedBarChart 
            data={conversionComparisonData} 
            title="Conversion Rate Comparison"
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
          </div>
        </div>
      </div>

      {/* Customer Actions */}
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
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Clicks by Type</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900">Website Visits</p>
                  <p className="text-sm text-blue-700">45% of total clicks</p>
                </div>
                <span className="text-lg font-bold text-blue-900">823</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-green-900">Store Visits</p>
                  <p className="text-sm text-green-700">35% of total clicks</p>
                </div>
                <span className="text-lg font-bold text-green-900">640</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-medium text-purple-900">Phone Calls</p>
                  <p className="text-sm text-purple-700">20% of total clicks</p>
                </div>
                <span className="text-lg font-bold text-purple-900">366</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Engagement by Distance</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Online visits</span>
                <span className="font-medium text-slate-900">4,250</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">0-1 KM</span>
                <span className="font-medium text-slate-900">3,890</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">1-5 KM</span>
                <span className="font-medium text-slate-900">4,120</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">5-10 KM</span>
                <span className="font-medium text-slate-900">2,340</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">&gt;10 KM</span>
                <span className="font-medium text-slate-900">647</span>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default StoreInsightsTab;