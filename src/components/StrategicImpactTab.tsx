import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import FunnelChart from './FunnelChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import SankeyDiagram from './SankeyDiagram';

interface StrategicImpactTabProps {
  clickTypeFilter: string;
  setClickTypeFilter: (value: string) => void;
  localSEOContribution: boolean;
  setLocalSEOContribution: (value: boolean) => void;
  currency: string;
  setCurrency: (value: string) => void;
  exportCSV: (filename: string) => void;
}

const StrategicImpactTab: React.FC<StrategicImpactTabProps> = ({
  clickTypeFilter,
  setClickTypeFilter,
  localSEOContribution,
  setLocalSEOContribution,
  currency,
  setCurrency,
  exportCSV
}) => {
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

  // Customer Journey Sankey Data - Updated to match the flowchart structure
  const customerJourneyNodes = [
    // Starting point
    { id: 'local-searches', label: 'Local Searches', value: 100, percentage: 100, color: '#059669', x: 50, y: 250, width: 120, height: 50 },
    
    // First decision point
    { id: 'chose-brand', label: 'Chose our brand', value: 75, percentage: 75, color: '#059669', x: 220, y: 200, width: 120, height: 50 },
    { id: 'chose-competitor', label: 'Chose competitor', value: 25, percentage: 25, color: '#dc2626', x: 220, y: 300, width: 120, height: 50 },
    
    // Second level actions
    { id: 'navigated', label: 'Navigated', value: 25, percentage: 25, color: '#059669', x: 390, y: 120, width: 100, height: 40 },
    { id: 'opened-site', label: 'Opened site', value: 40, percentage: 40, color: '#059669', x: 390, y: 180, width: 100, height: 40 },
    { id: 'in-store-visit', label: 'In-Store Visit', value: 15, percentage: 15, color: '#059669', x: 390, y: 240, width: 100, height: 40 },
    { id: 'called', label: 'Called', value: 10, percentage: 10, color: '#059669', x: 390, y: 300, width: 100, height: 40 },
    { id: 'dropped-1', label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 390, y: 360, width: 100, height: 40 },
    
    // Third level - from opened site
    { id: 'added-cart', label: 'Added to cart', value: 30, percentage: 30, color: '#059669', x: 540, y: 140, width: 100, height: 40 },
    { id: 'dropped-2', label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 540, y: 200, width: 100, height: 40 },
    
    // From called
    { id: 'shopped-later', label: 'Shopped later', value: 2, percentage: 2, color: '#059669', x: 540, y: 280, width: 100, height: 40 },
    { id: 'dropped-3', label: 'Dropped', value: 8, percentage: 8, color: '#dc2626', x: 540, y: 340, width: 100, height: 40 },
    
    // Fourth level - from added to cart
    { id: 'checkout', label: 'Checkout', value: 20, percentage: 20, color: '#059669', x: 690, y: 100, width: 100, height: 40 },
    { id: 'dropped-4', label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 690, y: 160, width: 100, height: 40 },
    
    // Fifth level - from checkout
    { id: 'billing', label: 'Billing', value: 10, percentage: 10, color: '#059669', x: 840, y: 80, width: 100, height: 40 },
    { id: 'dropped-5', label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 840, y: 140, width: 100, height: 40 },
    
    // Sixth level - from billing
    { id: 'payment', label: 'Payment', value: 15, percentage: 15, color: '#059669', x: 990, y: 60, width: 100, height: 40 },
    { id: 'handover', label: 'Handover', value: 8, percentage: 8, color: '#059669', x: 990, y: 120, width: 100, height: 40 },
    { id: 'special-order', label: 'Special Order', value: 2, percentage: 2, color: '#059669', x: 990, y: 180, width: 100, height: 40 },
    { id: 'dropped-6', label: 'Dropped', value: 5, percentage: 5, color: '#dc2626', x: 990, y: 240, width: 100, height: 40 },
    
    // Final outcomes
    { id: 'store-pickup', label: 'Store Pickup', value: 2, percentage: 2, color: '#059669', x: 1140, y: 40, width: 100, height: 40 },
    { id: 'delivery', label: 'Delivery', value: 10, percentage: 10, color: '#059669', x: 1140, y: 100, width: 100, height: 40 },
    { id: 'dropped-7', label: 'Dropped', value: 3, percentage: 3, color: '#dc2626', x: 1140, y: 160, width: 100, height: 40 }
  ];

  const customerJourneyFlows = [
    // From local searches
    { source: 'local-searches', target: 'chose-brand', value: 75, percentage: 75, color: '#059669' },
    { source: 'local-searches', target: 'chose-competitor', value: 25, percentage: 25, color: '#dc2626' },
    
    // From chose brand
    { source: 'chose-brand', target: 'navigated', value: 25, percentage: 25, color: '#059669' },
    { source: 'chose-brand', target: 'opened-site', value: 40, percentage: 40, color: '#059669' },
    { source: 'chose-brand', target: 'in-store-visit', value: 15, percentage: 15, color: '#059669' },
    { source: 'chose-brand', target: 'called', value: 10, percentage: 10, color: '#059669' },
    { source: 'chose-brand', target: 'dropped-1', value: 10, percentage: 10, color: '#dc2626' },
    
    // From opened site
    { source: 'opened-site', target: 'added-cart', value: 30, percentage: 30, color: '#059669' },
    { source: 'opened-site', target: 'dropped-2', value: 10, percentage: 10, color: '#dc2626' },
    
    // From called
    { source: 'called', target: 'shopped-later', value: 2, percentage: 2, color: '#059669' },
    { source: 'called', target: 'dropped-3', value: 8, percentage: 8, color: '#dc2626' },
    
    // From added to cart
    { source: 'added-cart', target: 'checkout', value: 20, percentage: 20, color: '#059669' },
    { source: 'added-cart', target: 'dropped-4', value: 10, percentage: 10, color: '#dc2626' },
    
    // From checkout
    { source: 'checkout', target: 'billing', value: 10, percentage: 10, color: '#059669' },
    { source: 'checkout', target: 'dropped-5', value: 10, percentage: 10, color: '#dc2626' },
    
    // From billing
    { source: 'billing', target: 'payment', value: 15, percentage: 15, color: '#059669' },
    { source: 'billing', target: 'handover', value: 8, percentage: 8, color: '#059669' },
    { source: 'billing', target: 'special-order', value: 2, percentage: 2, color: '#059669' },
    { source: 'billing', target: 'dropped-6', value: 5, percentage: 5, color: '#dc2626' },
    
    // Final outcomes
    { source: 'payment', target: 'store-pickup', value: 2, percentage: 2, color: '#059669' },
    { source: 'payment', target: 'delivery', value: 10, percentage: 10, color: '#059669' },
    { source: 'payment', target: 'dropped-7', value: 3, percentage: 3, color: '#dc2626' }
  ];

  const conversionDrivers = [
    { location: 'United States', salesContribution: 100, conversionRate: 5.2, ctr: 4.1 },
    { location: 'California', salesContribution: 28, conversionRate: 6.1, ctr: 4.8 },
    { location: 'Los Angeles MSA', salesContribution: 15, conversionRate: 5.9, ctr: 4.6 },
    { location: 'Los Angeles', salesContribution: 12, conversionRate: 6.2, ctr: 4.9 },
    { location: '90210', salesContribution: 3, conversionRate: 7.1, ctr: 5.2 },
    { location: 'Beverly Hills Store', salesContribution: 2.5, conversionRate: 7.8, ctr: 5.8 }
  ];

  // Conversion Insights Data
  const conversionByClickTypeData = [
    { label: 'Phone Calls', value: 5, percentage: 5, color: '#7c3aed' },
    { label: 'Store Visits', value: 55, percentage: 55, color: '#059669' },
    { label: 'Online Orders', value: 40, percentage: 40, color: '#6366f1' }
  ];

  const conversionByCategoryData = [
    { label: 'Bikes', value: 45, percentage: 45, color: '#6366f1' },
    { label: 'Components', value: 25, percentage: 25, color: '#059669' },
    { label: 'Accessories', value: 15, percentage: 15, color: '#d97706' },
    { label: 'Apparel', value: 10, percentage: 10, color: '#dc2626' },
    { label: 'Services', value: 5, percentage: 5, color: '#7c3aed' }
  ];

  // Stacked bar chart data for repeat conversion
  const repeatConversionData = [
    { label: '6 months', value: 85, color: '#059669' },
    { label: '12 months', value: 65, color: '#d97706' },
    { label: '18 months', value: 45, color: '#dc2626' }
  ];

  // Revenue Analysis Data
  const revenueByCategoryData = [
    { label: 'Bikes', value: 55, percentage: 55, color: '#6366f1' },
    { label: 'Components', value: 20, percentage: 20, color: '#059669' },
    { label: 'Accessories', value: 12, percentage: 12, color: '#d97706' },
    { label: 'Apparel', value: 8, percentage: 8, color: '#dc2626' },
    { label: 'Services', value: 5, percentage: 5, color: '#7c3aed' }
  ];

  const revenueSaleVsNonSaleData = [
    { label: 'Sale Items', value: 35, percentage: 35, color: '#dc2626' },
    { label: 'Regular Price', value: 65, percentage: 65, color: '#059669' }
  ];

  const averageOrderValueData = [
    { label: 'Online', value: 249, color: '#6366f1' },
    { label: 'In-Store', value: 187, color: '#059669' }
  ];

  // Competitive Analysis Data
  const shareOfVoiceData = [
    { label: "Mike's Bikes", value: 35, percentage: 35, color: '#6366f1' },
    { label: 'Specialized', value: 25, percentage: 25, color: '#059669' },
    { label: 'Trek Bikes', value: 20, percentage: 20, color: '#d97706' },
    { label: "Erik's Bike Shop", value: 10, percentage: 10, color: '#dc2626' },
    { label: 'Jenson USA', value: 6, percentage: 6, color: '#7c3aed' },
    { label: 'Others', value: 4, percentage: 4, color: '#6b7280' }
  ];

  const shareOfSearchData = [
    { label: "Mike's Bikes", value: 28, percentage: 28, color: '#6366f1' },
    { label: 'Specialized', value: 30, percentage: 30, color: '#059669' },
    { label: 'Trek Bikes', value: 22, percentage: 22, color: '#d97706' },
    { label: "Erik's Bike Shop", value: 12, percentage: 12, color: '#dc2626' },
    { label: 'Jenson USA', value: 5, percentage: 5, color: '#7c3aed' },
    { label: 'Others', value: 3, percentage: 3, color: '#6b7280' }
  ];

  // Custom Stacked Bar Chart Component
  const StackedBarChart: React.FC<{ data: Array<{label: string, value: number, color: string}>, height?: number, showDollar?: boolean }> = ({ 
    data, 
    height = 200,
    showDollar = false
  }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const chartWidth = 280;
    const chartHeight = height - 80;
    const barWidth = 60;
    const barSpacing = (chartWidth - barWidth * data.length) / (data.length + 1);

    return (
      <div className="w-full flex justify-center">
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
                  className="text-sm fill-slate-700"
                >
                  {item.label}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  {showDollar ? `$${item.value}` : `${item.value}%`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // Custom Horizontal Bar Chart Component for SEO Attribution
  const HorizontalBarChart: React.FC<{ 
    title: string;
    subtitle: string;
    data: Array<{label: string, value: number, percentage: number}>;
    color: string;
  }> = ({ title, subtitle, data, color }) => {
    return (
      <div className="flex flex-col items-center">
        <h4 className="text-md font-medium text-slate-700 mb-2">{title}</h4>
        <div className="space-y-4 w-full max-w-sm">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                <span className="text-lg font-bold text-slate-900">{item.percentage}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-6">
                <div
                  className="h-6 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${item.percentage}%`,
                    backgroundColor: color
                  }}
                >
                </div>
              </div>
              <div className="text-left">
                <span className="text-sm font-medium text-slate-900">
                  {item.value.toLocaleString()}
                </span>
              </div>
              {index < data.length - 1 && (
                <div className="text-xs text-slate-500 text-left">
                  {subtitle}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
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
          <HorizontalBarChart
            title="Local SEO Funnel"
            subtitle=" "
            data={[
              { label: 'Local Views', value: 125000, percentage: 100 },
              { label: 'Local Clicks', value: 15000, percentage: 12 },
              { label: 'Local Conversions', value: 1800, percentage: 1.4 }
            ]}
            color="#8b5cf6"
          />
          
          {/* Core SEO Funnel */}
          <HorizontalBarChart
            title="Core SEO Funnel"
            subtitle=" "
            data={[
              { label: 'Organic Views', value: 450000, percentage: 100 },
              { label: 'Organic Clicks', value: 36000, percentage: 8 },
              { label: 'Organic Conversions', value: 2880, percentage: 0.64 }
            ]}
            color="#8b5cf6"
          />
          
          {/* Local SEO Attribution */}
          <HorizontalBarChart
            title="Local SEO Attribution"
            subtitle=" "
            data={[
              { label: 'Views', value: 27.7, percentage: 27.7 },
              { label: 'Clicks', value: 29.4, percentage: 29.4 },
              { label: 'Conversions', value: 38.5, percentage: 38.5 }
            ]}
            color="#8b5cf6"
          />
        </div>

        {/* SEO Attribution Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Conversion Efficiency</h4>
            <p className="text-sm text-green-600">
              Local SEO drives just <span className="font-semibold">27.7% of total views</span> but delivers <span className="font-semibold">38.5% of conversions</span>—1.4× more efficient than Core SEO. Prioritize expanding local listing optimizations to capture more high-intent traffic.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Click-Through Strength</h4>
            <p className="text-sm text-blue-600">
              With a <span className="font-semibold">12% CTR vs. 8% for organic</span>, Local SEO listings clearly resonate better. Scaling local keyword targeting could boost overall clicks by up to 50%.
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">Opportunity in Scale</h4>
            <p className="text-sm text-orange-600">
              Organic still generates <span className="font-semibold">36K clicks vs. Local's 15K</span>, but at half the conversion rate (0.64% vs. 1.4%). Apply Local SEO best practices (e.g., rich snippets, location extensions) to core pages to lift their performance.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Journey Funnel */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Customer Journey Funnel</h3>
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
              onClick={() => exportCSV('customer-journey')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-slate-600 mb-2">
            Visualizing the complete customer journey from local searches to final outcomes. 
            Green nodes represent positive actions, red nodes represent drop-offs.
          </p>
          {localSEOContribution && (
            <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
              <strong>Local SEO Contribution:</strong> This funnel reflects local searches which are a subset of core searches. 
              Local SEO contributes 33% to the overall customer journey.
            </div>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <SankeyDiagram 
            nodes={customerJourneyNodes} 
            flows={customerJourneyFlows} 
            width={1300} 
            height={450} 
          />
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Conversion Highlights</h4>
            <div className="space-y-1 text-sm text-green-600">
              <div>• 75% chose our brand over competitors</div>
              <div>• 40% opened our website</div>
              <div>• 15% completed payment process</div>
              <div>• 12% reached final delivery/pickup</div>
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-medium text-red-700 mb-2">Drop-off Points</h4>
            <div className="space-y-1 text-sm text-red-600">
              <div>• 25% chose competitors</div>
              <div>• 10% dropped after site visit</div>
              <div>• 10% abandoned cart</div>
              <div>• 8% dropped after phone call</div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Optimization Opportunities</h4>
            <div className="space-y-1 text-sm text-blue-600">
              <div>• Improve cart-to-checkout conversion</div>
              <div>• Enhance phone call follow-up</div>
              <div>• Reduce billing process friction</div>
              <div>• Optimize competitor comparison</div>
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
                  <span className="text-sm text-slate-600">Sales Contribution</span>
                  <span className="font-medium">{driver.salesContribution}%</span>
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
                    Local SEO: {Math.round(driver.salesContribution * 0.33)}%
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversion Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Conversion Insights</h3>
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
              onClick={() => exportCSV('conversion-insights')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conversion by Click Type */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Conversion by Click Type</h4>
              <p className="text-sm text-slate-500">% split for sales by type of click</p>
            </div>
            <div className="flex justify-center flex-1">
              <PieChart data={conversionByClickTypeData} size={200} showLegend={true} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO contributes 33% to these conversions
              </div>
            )}
          </div>
          
          {/* Conversion by Category */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Conversion by Category</h4>
              <p className="text-sm text-slate-500">% split of sales by product category</p>
            </div>
            <div className="flex justify-center flex-1">
              <PieChart data={conversionByCategoryData} size={200} showLegend={true} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO contributes 33% to these conversions
              </div>
            )}
          </div>
          
          {/* Repeat Conversion - Now Stacked Bar Chart */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Repeat Conversion</h4>
              <p className="text-sm text-slate-500">% probability of customer buying again</p>
            </div>
            <div className="flex justify-center flex-1">
              <StackedBarChart data={repeatConversionData} height={200} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO customers show 15% higher repeat rates
              </div>
            )}
          </div>
        </div>

        {/* Conversion Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Local Foot Traffic Power</h4>
            <p className="text-sm text-green-600">
              Store visits account for <span className="font-semibold">55% of conversions</span>—confirming our local SEO optimizations are effectively driving in-store sales.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">E-commerce Balance</h4>
            <p className="text-sm text-blue-600">
              Online orders make up <span className="font-semibold">40% of conversions</span>. This split shows the need to invest equally in website UX alongside local listing accuracy.
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">Customer Loyalty Window</h4>
            <p className="text-sm text-orange-600">
              Repeat purchase probability drops from <span className="font-semibold">85% at 6 months to 45% at 18 months</span>—suggesting a targeted retention campaign (e.g., local events or promotions) around month 5–6 to prolong engagement.
            </p>
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
        
        {/* Revenue Tiles */}
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

        {/* Revenue Analysis Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue by Category */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Revenue by Category</h4>
              <p className="text-sm text-slate-500">% contribution of revenue from each category</p>
            </div>
            <div className="flex justify-center flex-1">
              <PieChart data={revenueByCategoryData} size={200} showLegend={true} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO contributes 33% to category revenue
              </div>
            )}
          </div>
          
          {/* Revenue: Sale vs Non-Sale Items */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Revenue: Sale vs Non-Sale Items</h4>
              <p className="text-sm text-slate-500">% contribution from items on sale or not on sale</p>
            </div>
            <div className="flex justify-center flex-1">
              <PieChart data={revenueSaleVsNonSaleData} size={200} showLegend={true} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO drives 40% more full-price sales
              </div>
            )}
          </div>
          
          {/* Average Order Value - Now Bar Chart */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Average Order Value</h4>
              <p className="text-sm text-slate-500">Difference in online vs in-store purchases</p>
            </div>
            <div className="flex justify-center flex-1">
              <StackedBarChart data={averageOrderValueData} height={200} showDollar={true} />
            </div>
            {localSEOContribution && (
              <div className="text-center text-sm text-blue-600 mt-4">
                Local SEO increases in-store AOV by 12%
              </div>
            )}
          </div>
        </div>

        {/* Revenue Impact Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Local SEO Revenue Share</h4>
            <p className="text-sm text-green-600">
              Local SEO now drives <span className="font-semibold">38% of YTD revenue</span> (≈ $912K of $2.4M), up from 32% last year—showing that our local listings optimizations are directly lifting sales.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Category Lift via Local Search</h4>
            <p className="text-sm text-blue-600">
              Although Bikes account for 55% of total revenue, Local SEO‐sourced traffic disproportionately fuels <span className="font-semibold">60% of component sales</span>—pinpointing a high‐ROI opportunity to double down on "bike parts" campaigns in key ZIP codes.
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-700 mb-2">AOV Gap & Upsell Window</h4>
            <p className="text-sm text-orange-600">
              Local SEO‐driven in-store orders average <span className="font-semibold">$187—25% below the $249 online AOV</span>—so improving onsite cross-sell messaging (e.g., "Complete your purchase with accessories") could close that gap and boost per-visit revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Competitive Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Competitive Analysis</h3>
          <button
            onClick={() => exportCSV('competitive-analysis')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Share of Voice */}
          <div>
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Share of Voice</h4>
              <p className="text-sm text-slate-500">% share of ad/media presence</p>
            </div>
            <div className="flex justify-center">
              <PieChart data={shareOfVoiceData} size={280} showLegend={true} />
            </div>
          </div>
          
          {/* Share of Search */}
          <div>
            <div className="mb-4">
              <h4 className="text-md font-medium text-slate-700">Share of Search</h4>
              <p className="text-sm text-slate-500">% share of search volume</p>
            </div>
            <div className="flex justify-center">
              <PieChart data={shareOfSearchData} size={280} showLegend={true} />
            </div>
          </div>
        </div>

        {/* Share of Voice & Share of Search Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Biggest Gainers</h4>
            <div className="space-y-2 text-sm text-green-600">
              <div><span className="font-semibold">Voice:</span> Specialized jumped +2.0% MoM, stealing the spotlight.</div>
              <div><span className="font-semibold">Search:</span> Trek Bikes jumped +5.0% MoM, highest jump this year</div>
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-medium text-red-700 mb-2">Biggest Losers</h4>
            <div className="space-y-2 text-sm text-red-600">
              <div><span className="font-semibold">Voice:</span> Trek Bikes dropped −1.2% MoM—an early warning sign.</div>
              <div><span className="font-semibold">Search:</span> Jenson USA dropped 10% - signs of instability</div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Mike's Bikes MoM Change</h4>
            <p className="text-sm text-blue-600">
              Up <span className="font-semibold">+0.8%</span> in Share of Voice and <span className="font-semibold">+0.5%</span> in Share of Search—momentum is on our side.
            </p>
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
};

export default StrategicImpactTab;