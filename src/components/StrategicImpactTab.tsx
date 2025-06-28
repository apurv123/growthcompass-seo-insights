import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import FunnelChart from './FunnelChart';
import PieChart from './PieChart';

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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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