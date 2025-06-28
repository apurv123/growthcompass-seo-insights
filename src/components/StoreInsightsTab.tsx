import React from 'react';
import { Store, Eye, MousePointer, ShoppingCart, Target, TrendingUp, Download } from 'lucide-react';

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

      {/* Local Context */}
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
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">CTR Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Store</span>
                <span className="font-medium text-slate-900">12.0%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">ZIP (90210)</span>
                <span className="font-medium text-slate-900">10.8%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">City (Beverly Hills)</span>
                <span className="font-medium text-slate-900">9.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">MSA (Los Angeles)</span>
                <span className="font-medium text-slate-900">8.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">State (California)</span>
                <span className="font-medium text-slate-900">7.9%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Country (US)</span>
                <span className="font-medium text-slate-900">7.1%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Global</span>
                <span className="font-medium text-slate-900">6.8%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Conversion Rate Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Store</span>
                <span className="font-medium text-slate-900">5.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">ZIP (90210)</span>
                <span className="font-medium text-slate-900">4.8%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">City (Beverly Hills)</span>
                <span className="font-medium text-slate-900">4.3%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">MSA (Los Angeles)</span>
                <span className="font-medium text-slate-900">3.9%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">State (California)</span>
                <span className="font-medium text-slate-900">3.6%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Country (US)</span>
                <span className="font-medium text-slate-900">3.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <span className="text-sm text-slate-600">Global</span>
                <span className="font-medium text-slate-900">3.0%</span>
              </div>
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
                <span className="text-sm text-slate-600">>10 KM</span>
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