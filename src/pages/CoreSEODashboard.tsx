import React from 'react';
import { TrendingUp, Users, MousePointer, Target, Clock, CheckCircle, Globe, Search } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import KeywordTable from '../components/KeywordTable';
import FunnelChart from '../components/FunnelChart';
import TrafficChart from '../components/TrafficChart';

const CoreSEODashboard = () => {
  const keywordData = [
    { keyword: 'enterprise seo software', position: 2, views: 24500, change: 1 },
    { keyword: 'multi location seo', position: 1, views: 18900, change: 0 },
    { keyword: 'local seo management', position: 4, views: 16700, change: 2 },
    { keyword: 'seo analytics platform', position: 3, views: 15400, change: -1 },
    { keyword: 'franchise seo tools', position: 5, views: 12200, change: 1 },
    { keyword: 'local search optimization', position: 6, views: 11800, change: 0 },
    { keyword: 'seo dashboard software', position: 7, views: 9200, change: 3 },
    { keyword: 'multi store seo', position: 8, views: 8900, change: -2 },
    { keyword: 'local seo analytics', position: 9, views: 7500, change: 1 },
    { keyword: 'seo reporting tools', position: 11, views: 6100, change: -1 }
  ];

  const funnelData = [
    { stage: 'Search Impressions', count: 145678, percentage: 100 },
    { stage: 'Organic Clicks', count: 8740, percentage: 6 },
    { stage: 'Website Sessions', count: 7892, percentage: 5.4 },
    { stage: 'Conversions', count: 394, percentage: 0.3 }
  ];

  const trafficData = [
    { month: 'Jan', organic: 12500, seo: 15200 },
    { month: 'Feb', organic: 13800, seo: 16900 },
    { month: 'Mar', organic: 15200, seo: 18400 },
    { month: 'Apr', organic: 16900, seo: 20100 },
    { month: 'May', organic: 18400, seo: 21800 },
    { month: 'Jun', organic: 20100, seo: 23500 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <Search className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-900">Core SEO Dashboard</h1>
        </div>
        <p className="text-slate-600">Comprehensive SEO performance analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Organic Traffic"
          value="23.5K"
          change="+15%"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Click-Through Rate"
          value="6%"
          change="+0.8%"
          changeType="positive"
          icon={MousePointer}
        />
        <MetricCard
          title="Conversion Rate"
          value="5.2%"
          change="+1.1%"
          changeType="positive"
          icon={Target}
        />
        <MetricCard
          title="Avg. Page Load Time"
          value="1.8s"
          change="-0.3s"
          changeType="positive"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traffic Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Organic vs SEO Traffic</h3>
          <TrafficChart data={trafficData} />
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Metrics</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">Indexing Coverage</p>
                  <p className="text-sm text-slate-600">All pages indexed successfully</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-900">100%</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-700 font-medium">Pages Indexed</p>
                <p className="text-xl font-bold text-blue-900">1,247</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-purple-700 font-medium">Avg. Load Time</p>
                <p className="text-xl font-bold text-purple-900">1.8s</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Conversion Funnel</h3>
          <FunnelChart data={funnelData} />
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Summary</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
              <div>
                <p className="text-sm text-emerald-700 font-medium">Month over Month</p>
                <p className="text-2xl font-bold text-emerald-900">+22%</p>
                <p className="text-xs text-emerald-600">Traffic Growth</p>
              </div>
              <TrendingUp className="h-8 w-8 text-emerald-600" />
            </div>
            
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm text-blue-700 font-medium">Year to Date</p>
                <p className="text-2xl font-bold text-blue-900">+67%</p>
                <p className="text-xs text-blue-600">Overall Growth</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">This Month</p>
                <p className="text-lg font-semibold text-slate-900">394</p>
                <p className="text-xs text-slate-500">Conversions</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">Last Month</p>
                <p className="text-lg font-semibold text-slate-900">323</p>
                <p className="text-xs text-slate-500">Conversions</p>
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

export default CoreSEODashboard;