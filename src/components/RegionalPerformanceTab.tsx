import React from 'react';
import { Download } from 'lucide-react';
import FunnelChart from './FunnelChart';
import BarChart from './BarChart';

interface RegionalPerformanceTabProps {
  drillLevel: string;
  drillPath: string[];
  exportCSV: (filename: string) => void;
}

const RegionalPerformanceTab: React.FC<RegionalPerformanceTabProps> = ({
  drillLevel,
  drillPath,
  exportCSV
}) => {
  return (
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

      {/* Comparative Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Comparative Analysis</h3>
          <button
            onClick={() => exportCSV('comparative-analysis')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="state">State</option>
                <option value="city">City</option>
                <option value="msa">MSA</option>
                <option value="store">Store</option>
              </select>
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="california">California</option>
                <option value="texas">Texas</option>
                <option value="newyork">New York</option>
              </select>
            </div>
            <FunnelChart data={[
              { stage: 'Views', count: 125000, percentage: 100 },
              { stage: 'Clicks', count: 7500, percentage: 6 },
              { stage: 'Conversions', count: 375, percentage: 0.3 }
            ]} />
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="state">State</option>
                <option value="city">City</option>
                <option value="msa">MSA</option>
                <option value="store">Store</option>
              </select>
              <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option value="texas">Texas</option>
                <option value="california">California</option>
                <option value="newyork">New York</option>
              </select>
            </div>
            <FunnelChart data={[
              { stage: 'Views', count: 98000, percentage: 100 },
              { stage: 'Clicks', count: 4900, percentage: 5 },
              { stage: 'Conversions', count: 245, percentage: 0.25 }
            ]} />
          </div>
        </div>
      </div>

      {/* Relevance Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Relevance Attribution</h3>
          <button
            onClick={() => exportCSV('relevance-attribution')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
          <div className="inline-block">
            <BarChart 
              data={[{ label: 'United States', value: 87, color: '#3b82f6' }]} 
              height={200} 
              showValues={true}
            />
            <p className="text-lg font-semibold text-slate-900 mt-4">Query Relevance Score</p>
          </div>
        </div>
      </div>

      {/* Prominence Attribution */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Prominence Attribution</h3>
          <button
            onClick={() => exportCSV('prominence-attribution')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
          <div className="inline-block">
            <BarChart 
              data={[{ label: 'United States', value: 4.7, color: '#10b981' }]} 
              height={200} 
              showValues={true}
            />
            <p className="text-lg font-semibold text-slate-900 mt-4">Customer Review Score</p>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Insights</h3>
          <button
            onClick={() => exportCSV('regional-insights')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Performance Analysis</h4>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="font-medium text-red-900">Lowest performing city</p>
                <p className="text-sm text-red-700">Phoenix, AZ - 2.1% conversion rate</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="font-medium text-orange-900">Lowest performing MSA</p>
                <p className="text-sm text-orange-700">Detroit-Warren-Dearborn, MI - 2.8% conversion rate</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-medium text-yellow-900">Lowest performing ZIP</p>
                <p className="text-sm text-yellow-700">85001 (Phoenix) - 1.9% conversion rate</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Expansion Opportunities</h4>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Recommended new store location</p>
                <p className="text-sm text-green-700">Austin, TX - High demand, minimal travel distance</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Market gap identified</p>
                <p className="text-sm text-blue-700">Denver metro area shows 15% higher search volume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalPerformanceTab;