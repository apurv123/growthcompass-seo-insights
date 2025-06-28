import React, { useState } from 'react';
import { Download, ArrowUpDown, RotateCcw } from 'lucide-react';
import FunnelChart from './FunnelChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import SankeyDiagram from './SankeyDiagram';

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
  const [competitorDataFilter, setCompetitorDataFilter] = useState('all');
  const [gapAnalysisCompetitors, setGapAnalysisCompetitors] = useState(['Specialized', 'Trek Bikes']);
  const [competitorSortColumn, setCompetitorSortColumn] = useState<string>('');
  const [competitorSortDirection, setCompetitorSortDirection] = useState<'asc' | 'desc'>('desc');
  const [keywordSortColumn, setKeywordSortColumn] = useState<string>('');
  const [keywordSortDirection, setKeywordSortDirection] = useState<'asc' | 'desc'>('desc');
  
  // Synchronized Location Analysis drill-down state
  const [locationAnalysisDrillLevel, setLocationAnalysisDrillLevel] = useState('country');

  // Comparative Analysis state
  const [locationAType, setLocationAType] = useState('state');
  const [locationAValue, setLocationAValue] = useState('california');
  const [locationBType, setLocationBType] = useState('state');
  const [locationBValue, setLocationBValue] = useState('texas');

  // Competitor Data
  const competitorData = [
    { 
      company: "Mike's Bikes", 
      domainTrust: 68, 
      organicTraffic: 125000, 
      paidTraffic: 18500, 
      keywords: 8200, 
      totalTrafficCost: 95000, 
      referringDomains: 1850,
      isOurCompany: true 
    },
    { 
      company: "Specialized", 
      domainTrust: 82, 
      organicTraffic: 280000, 
      paidTraffic: 45000, 
      keywords: 15600, 
      totalTrafficCost: 180000, 
      referringDomains: 3200,
      isOurCompany: false 
    },
    { 
      company: "Trek Bikes", 
      domainTrust: 79, 
      organicTraffic: 210000, 
      paidTraffic: 32000, 
      keywords: 12400, 
      totalTrafficCost: 145000, 
      referringDomains: 2850,
      isOurCompany: false 
    },
    { 
      company: "Erik's Bike Shop", 
      domainTrust: 45, 
      organicTraffic: 85000, 
      paidTraffic: 12000, 
      keywords: 5800, 
      totalTrafficCost: 58000, 
      referringDomains: 980,
      isOurCompany: false 
    },
    { 
      company: "Jenson USA", 
      domainTrust: 72, 
      organicTraffic: 165000, 
      paidTraffic: 25000, 
      keywords: 9200, 
      totalTrafficCost: 120000, 
      referringDomains: 2100,
      isOurCompany: false 
    },
    { 
      company: "Giant Bicycles", 
      domainTrust: 75, 
      organicTraffic: 195000, 
      paidTraffic: 28000, 
      keywords: 10800, 
      totalTrafficCost: 135000, 
      referringDomains: 2450,
      isOurCompany: false 
    }
  ];

  // Keyword Gap Analysis Data
  const keywordGapData = [
    {
      keyword: 'mountain bike reviews',
      mbPos: 8,
      mbChange: 2,
      specPos: 3,
      specChange: -1,
      trekPos: 5,
      trekChange: 0,
      cpc: 1.25,
      difficulty: 68,
      volume: 2.4
    },
    {
      keyword: 'bike shop near me',
      mbPos: 4,
      mbChange: -1,
      specPos: 7,
      specChange: 3,
      trekPos: 6,
      trekChange: 1,
      cpc: 2.15,
      difficulty: 75,
      volume: 8.9
    },
    {
      keyword: 'bicycle maintenance',
      mbPos: 12,
      mbChange: 5,
      specPos: 2,
      specChange: 0,
      trekPos: 9,
      trekChange: -2,
      cpc: 0.85,
      difficulty: 52,
      volume: 1.8
    },
    {
      keyword: 'road bike sale',
      mbPos: 6,
      mbChange: 0,
      specPos: 1,
      specChange: -1,
      trekPos: 4,
      trekChange: 2,
      cpc: 3.2,
      difficulty: 82,
      volume: 3.6
    },
    {
      keyword: 'cycling gear',
      mbPos: 15,
      mbChange: -3,
      specPos: 8,
      specChange: 1,
      trekPos: 11,
      trekChange: 0,
      cpc: 1.95,
      difficulty: 64,
      volume: 5.2
    }
  ];

  const availableCompetitors = [
    'Specialized', 'Trek Bikes', 'Erik\'s Bike Shop', 'Jenson USA', 
    'Giant Bicycles', 'Cannondale', 'Santa Cruz Bicycles', 
    'Wheel & Sprocket', 'Conte\'s Bike Shop'
  ];

  // Location Analysis Data
  const getViewsData = (level: string) => {
    const data = {
      country: [{ label: 'United States', value: 450000, color: '#6366f1' }],
      state: [
        { label: 'California', value: 125000, color: '#6366f1' },
        { label: 'Texas', value: 98000, color: '#059669' },
        { label: 'New York', value: 87000, color: '#d97706' },
        { label: 'Florida', value: 76000, color: '#dc2626' }
      ],
      city: [
        { label: 'Los Angeles', value: 45000, color: '#6366f1' },
        { label: 'San Francisco', value: 38000, color: '#059669' },
        { label: 'San Diego', value: 32000, color: '#d97706' },
        { label: 'Sacramento', value: 28000, color: '#dc2626' }
      ]
    };
    return data[level as keyof typeof data] || data.country;
  };

  const getRelevanceData = (level: string) => {
    const data = {
      country: [{ label: 'United States', value: 87, color: '#6366f1' }],
      state: [
        { label: 'California', value: 92, color: '#6366f1' },
        { label: 'Texas', value: 85, color: '#059669' },
        { label: 'New York', value: 88, color: '#d97706' },
        { label: 'Florida', value: 83, color: '#dc2626' }
      ],
      city: [
        { label: 'Los Angeles', value: 94, color: '#6366f1' },
        { label: 'San Francisco', value: 91, color: '#059669' },
        { label: 'San Diego', value: 89, color: '#d97706' },
        { label: 'Sacramento', value: 86, color: '#dc2626' }
      ]
    };
    return data[level as keyof typeof data] || data.country;
  };

  const getReviewData = (level: string) => {
    const data = {
      country: [{ label: 'United States', value: 4.7, color: '#059669' }],
      state: [
        { label: 'California', value: 4.8, color: '#6366f1' },
        { label: 'Texas', value: 4.6, color: '#059669' },
        { label: 'New York', value: 4.7, color: '#d97706' },
        { label: 'Florida', value: 4.5, color: '#dc2626' }
      ],
      city: [
        { label: 'Los Angeles', value: 4.9, color: '#6366f1' },
        { label: 'San Francisco', value: 4.8, color: '#059669' },
        { label: 'San Diego', value: 4.7, color: '#d97706' },
        { label: 'Sacramento', value: 4.6, color: '#dc2626' }
      ]
    };
    return data[level as keyof typeof data] || data.country;
  };

  // Comparative Analysis Data
  const getLocationData = (type: string, value: string) => {
    const locationData = {
      california: { views: 45000, clicks: 5400, conversions: 648 },
      texas: { views: 38000, clicks: 4560, conversions: 547 },
      newyork: { views: 35000, clicks: 4200, conversions: 504 },
      florida: { views: 32000, clicks: 3840, conversions: 461 }
    };
    return locationData[value as keyof typeof locationData] || locationData.california;
  };

  // Customer Journey Data for Comparative Analysis - Updated to match Strategic Impact style
  const getCustomerJourneyNodes = (location: string) => {
    const baseNodes = [
      // Starting point
      { id: `${location}-searches`, label: 'Local Searches', value: 100, percentage: 100, color: '#059669', x: 30, y: 150, width: 90, height: 35 },
      
      // First decision point
      { id: `${location}-brand`, label: 'Chose our brand', value: 75, percentage: 75, color: '#059669', x: 150, y: 120, width: 90, height: 35 },
      { id: `${location}-competitor`, label: 'Chose competitor', value: 25, percentage: 25, color: '#dc2626', x: 150, y: 180, width: 90, height: 35 },
      
      // Second level actions
      { id: `${location}-website`, label: 'Website', value: 40, percentage: 40, color: '#059669', x: 270, y: 90, width: 70, height: 30 },
      { id: `${location}-store`, label: 'Store visit', value: 25, percentage: 25, color: '#059669', x: 270, y: 130, width: 70, height: 30 },
      { id: `${location}-call`, label: 'Phone call', value: 10, percentage: 10, color: '#059669', x: 270, y: 170, width: 70, height: 30 },
      { id: `${location}-dropped1`, label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 270, y: 210, width: 70, height: 30 },
      
      // Third level - from website
      { id: `${location}-cart`, label: 'Add to cart', value: 30, percentage: 30, color: '#059669', x: 370, y: 80, width: 70, height: 30 },
      { id: `${location}-dropped2`, label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 370, y: 120, width: 70, height: 30 },
      
      // From call
      { id: `${location}-scheduled`, label: 'Scheduled', value: 5, percentage: 5, color: '#059669', x: 370, y: 160, width: 70, height: 30 },
      { id: `${location}-dropped3`, label: 'Dropped', value: 5, percentage: 5, color: '#dc2626', x: 370, y: 200, width: 70, height: 30 },
      
      // Fourth level - from cart
      { id: `${location}-checkout`, label: 'Checkout', value: 20, percentage: 20, color: '#059669', x: 470, y: 70, width: 70, height: 30 },
      { id: `${location}-dropped4`, label: 'Dropped', value: 10, percentage: 10, color: '#dc2626', x: 470, y: 110, width: 70, height: 30 },
      
      // Final outcomes
      { id: `${location}-purchase`, label: 'Purchase', value: 15, percentage: 15, color: '#059669', x: 570, y: 80, width: 70, height: 30 }
    ];
    return baseNodes;
  };

  const getCustomerJourneyFlows = (location: string) => {
    return [
      // From local searches
      { source: `${location}-searches`, target: `${location}-brand`, value: 75, percentage: 75, color: '#059669' },
      { source: `${location}-searches`, target: `${location}-competitor`, value: 25, percentage: 25, color: '#dc2626' },
      
      // From chose brand
      { source: `${location}-brand`, target: `${location}-website`, value: 40, percentage: 40, color: '#059669' },
      { source: `${location}-brand`, target: `${location}-store`, value: 25, percentage: 25, color: '#059669' },
      { source: `${location}-brand`, target: `${location}-call`, value: 10, percentage: 10, color: '#059669' },
      { source: `${location}-brand`, target: `${location}-dropped1`, value: 10, percentage: 10, color: '#dc2626' },
      
      // From website
      { source: `${location}-website`, target: `${location}-cart`, value: 30, percentage: 30, color: '#059669' },
      { source: `${location}-website`, target: `${location}-dropped2`, value: 10, percentage: 10, color: '#dc2626' },
      
      // From call
      { source: `${location}-call`, target: `${location}-scheduled`, value: 5, percentage: 5, color: '#059669' },
      { source: `${location}-call`, target: `${location}-dropped3`, value: 5, percentage: 5, color: '#dc2626' },
      
      // From cart
      { source: `${location}-cart`, target: `${location}-checkout`, value: 20, percentage: 20, color: '#059669' },
      { source: `${location}-cart`, target: `${location}-dropped4`, value: 10, percentage: 10, color: '#dc2626' },
      
      // Final outcome
      { source: `${location}-checkout`, target: `${location}-purchase`, value: 15, percentage: 15, color: '#059669' }
    ];
  };

  // Conversion by Category Data
  const getConversionByCategoryData = (location: string) => {
    const data = {
      california: [
        { label: 'Bikes', value: 45, percentage: 45, color: '#6366f1' },
        { label: 'Components', value: 25, percentage: 25, color: '#059669' },
        { label: 'Accessories', value: 15, percentage: 15, color: '#d97706' },
        { label: 'Apparel', value: 10, percentage: 10, color: '#dc2626' },
        { label: 'Services', value: 5, percentage: 5, color: '#7c3aed' }
      ],
      texas: [
        { label: 'Bikes', value: 42, percentage: 42, color: '#6366f1' },
        { label: 'Components', value: 28, percentage: 28, color: '#059669' },
        { label: 'Accessories', value: 18, percentage: 18, color: '#d97706' },
        { label: 'Apparel', value: 8, percentage: 8, color: '#dc2626' },
        { label: 'Services', value: 4, percentage: 4, color: '#7c3aed' }
      ]
    };
    return data[location as keyof typeof data] || data.california;
  };

  // Repeat Conversion Probability Data
  const getRepeatConversionData = (location: string) => {
    const data = {
      california: [
        { label: '6 months', value: 85, color: '#059669' },
        { label: '12 months', value: 65, color: '#d97706' },
        { label: '18 months', value: 45, color: '#dc2626' }
      ],
      texas: [
        { label: '6 months', value: 82, color: '#059669' },
        { label: '12 months', value: 62, color: '#d97706' },
        { label: '18 months', value: 42, color: '#dc2626' }
      ]
    };
    return data[location as keyof typeof data] || data.california;
  };

  // Helper functions for min/max values and styling
  const getMinMaxValues = (data: any[], key: string) => {
    const values = data.map(item => item[key]);
    return { min: Math.min(...values), max: Math.max(...values) };
  };

  const getCellStyling = (value: number, minMax: { min: number; max: number }) => {
    if (value === minMax.max) return 'font-bold text-green-600';
    if (value === minMax.min) return 'italic text-red-600';
    return 'text-slate-900';
  };

  // Sorting functions
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

  const handleCompetitorSort = (column: string) => {
    const newDirection = competitorSortColumn === column && competitorSortDirection === 'desc' ? 'asc' : 'desc';
    setCompetitorSortColumn(column);
    setCompetitorSortDirection(newDirection);
  };

  const handleKeywordSort = (column: string) => {
    const newDirection = keywordSortColumn === column && keywordSortDirection === 'desc' ? 'asc' : 'desc';
    setKeywordSortColumn(column);
    setKeywordSortDirection(newDirection);
  };

  const sortedCompetitorData = competitorSortColumn 
    ? sortData(competitorData, competitorSortColumn, competitorSortDirection)
    : competitorData;

  const sortedKeywordData = keywordSortColumn 
    ? sortData(keywordGapData, keywordSortColumn, keywordSortDirection)
    : keywordGapData;

  // Get min/max values for competitor data
  const competitorMinMax = {
    domainTrust: getMinMaxValues(competitorData, 'domainTrust'),
    organicTraffic: getMinMaxValues(competitorData, 'organicTraffic'),
    paidTraffic: getMinMaxValues(competitorData, 'paidTraffic'),
    keywords: getMinMaxValues(competitorData, 'keywords'),
    totalTrafficCost: getMinMaxValues(competitorData, 'totalTrafficCost'),
    referringDomains: getMinMaxValues(competitorData, 'referringDomains')
  };

  // Synchronized drill-down handlers
  const handleLocationAnalysisDrillDown = () => {
    if (locationAnalysisDrillLevel === 'country') {
      setLocationAnalysisDrillLevel('state');
    } else if (locationAnalysisDrillLevel === 'state') {
      setLocationAnalysisDrillLevel('city');
    }
  };

  const handleLocationAnalysisRollUp = () => {
    if (locationAnalysisDrillLevel === 'city') {
      setLocationAnalysisDrillLevel('state');
    } else if (locationAnalysisDrillLevel === 'state') {
      setLocationAnalysisDrillLevel('country');
    }
  };

  // Get dynamic title based on drill level
  const getDynamicTitle = (baseTitle: string) => {
    const levelMap = {
      country: 'Country',
      state: 'State', 
      city: 'City'
    };
    return `${baseTitle} by ${levelMap[locationAnalysisDrillLevel as keyof typeof levelMap]}`;
  };

  // Venn Diagram Component
  const VennDiagram: React.FC = () => {
    return (
      <div className="flex flex-col items-center mb-6">
        <svg width="300" height="200" viewBox="0 0 300 200">
          {/* Mike's Bikes Circle */}
          <circle
            cx="100"
            cy="120"
            r="60"
            fill="#6366f1"
            fillOpacity="0.3"
            stroke="#6366f1"
            strokeWidth="2"
          />
          <text x="70" y="80" textAnchor="middle" className="text-xs font-medium fill-blue-700">
            Mike's Bikes
          </text>
          
          {/* Specialized Circle */}
          <circle
            cx="160"
            cy="80"
            r="60"
            fill="#059669"
            fillOpacity="0.3"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="190" y="50" textAnchor="middle" className="text-xs font-medium fill-green-700">
            Specialized
          </text>
          
          {/* Trek Circle */}
          <circle
            cx="160"
            cy="140"
            r="60"
            fill="#d97706"
            fillOpacity="0.3"
            stroke="#d97706"
            strokeWidth="2"
          />
          <text x="190" y="180" textAnchor="middle" className="text-xs font-medium fill-yellow-700">
            Trek Bikes
          </text>
        </svg>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4 w-full">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-700">Missing Keywords</p>
            <p className="text-2xl font-bold text-blue-900">1,240</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-sm font-medium text-green-700">Shared Keywords</p>
            <p className="text-2xl font-bold text-green-900">3,850</p>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <p className="text-sm font-medium text-yellow-700">Unique Keywords</p>
            <p className="text-2xl font-bold text-yellow-900">2,110</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Comparative Analysis - Extended */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">📊 Comparative Analysis</h3>
          <button
            onClick={() => exportCSV('comparative-analysis')}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location A */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Location A</h4>
            <div className="flex items-center space-x-4 mb-4">
              <select 
                value={locationAType}
                onChange={(e) => setLocationAType(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="state">State</option>
                <option value="city">City</option>
                <option value="msa">MSA</option>
                <option value="store">Store</option>
              </select>
              <select 
                value={locationAValue}
                onChange={(e) => setLocationAValue(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="california">California</option>
                <option value="texas">Texas</option>
                <option value="newyork">New York</option>
                <option value="florida">Florida</option>
              </select>
            </div>
            
            {/* Views/Clicks/Conversions */}
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Views:</span>
                  <span className="font-medium text-blue-900">{getLocationData(locationAType, locationAValue).views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Clicks:</span>
                  <span className="font-medium text-blue-900">{getLocationData(locationAType, locationAValue).clicks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Conversions:</span>
                  <span className="font-medium text-blue-900">{getLocationData(locationAType, locationAValue).conversions}</span>
                </div>
              </div>
            </div>

            {/* Customer Journey Funnel */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-slate-700 mb-2">Customer Journey</h5>
              <div className="bg-slate-50 p-3 rounded-lg overflow-x-auto">
                <SankeyDiagram 
                  nodes={getCustomerJourneyNodes('locationA')} 
                  flows={getCustomerJourneyFlows('locationA')} 
                  width={680} 
                  height={280} 
                />
              </div>
            </div>

            {/* Conversion by Category */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-slate-700 mb-2">Conversion by Category</h5>
              <div className="flex justify-center">
                <PieChart 
                  data={getConversionByCategoryData(locationAValue)} 
                  size={180} 
                  showLegend={true} 
                />
              </div>
            </div>

            {/* Repeat Conversion Probability */}
            <div>
              <h5 className="text-sm font-medium text-slate-700 mb-2">Repeat Conversion Probability</h5>
              <div className="flex justify-center">
                <BarChart 
                  data={getRepeatConversionData(locationAValue)} 
                  height={150} 
                  showValues={true} 
                />
              </div>
            </div>
          </div>

          {/* Location B */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">Location B</h4>
            <div className="flex items-center space-x-4 mb-4">
              <select 
                value={locationBType}
                onChange={(e) => setLocationBType(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="state">State</option>
                <option value="city">City</option>
                <option value="msa">MSA</option>
                <option value="store">Store</option>
              </select>
              <select 
                value={locationBValue}
                onChange={(e) => setLocationBValue(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="texas">Texas</option>
                <option value="california">California</option>
                <option value="newyork">New York</option>
                <option value="florida">Florida</option>
              </select>
            </div>
            
            {/* Views/Clicks/Conversions */}
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Views:</span>
                  <span className="font-medium text-green-900">{getLocationData(locationBType, locationBValue).views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Clicks:</span>
                  <span className="font-medium text-green-900">{getLocationData(locationBType, locationBValue).clicks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Conversions:</span>
                  <span className="font-medium text-green-900">{getLocationData(locationBType, locationBValue).conversions}</span>
                </div>
              </div>
            </div>

            {/* Customer Journey Funnel */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-slate-700 mb-2">Customer Journey</h5>
              <div className="bg-slate-50 p-3 rounded-lg overflow-x-auto">
                <SankeyDiagram 
                  nodes={getCustomerJourneyNodes('locationB')} 
                  flows={getCustomerJourneyFlows('locationB')} 
                  width={680} 
                  height={280} 
                />
              </div>
            </div>

            {/* Conversion by Category */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-slate-700 mb-2">Conversion by Category</h5>
              <div className="flex justify-center">
                <PieChart 
                  data={getConversionByCategoryData(locationBValue)} 
                  size={180} 
                  showLegend={true} 
                />
              </div>
            </div>

            {/* Repeat Conversion Probability */}
            <div>
              <h5 className="text-sm font-medium text-slate-700 mb-2">Repeat Conversion Probability</h5>
              <div className="flex justify-center">
                <BarChart 
                  data={getRepeatConversionData(locationBValue)} 
                  height={150} 
                  showValues={true} 
                />
              </div>
            </div>
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

        {/* Competitor Data */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-medium text-slate-700">Competitor Data</h4>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Choose Competitors:</span>
              <select
                value={competitorDataFilter}
                onChange={(e) => setCompetitorDataFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="all">All Competitors</option>
                <option value="top5">Top 5</option>
                <option value="direct">Direct Competitors</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('company')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Company</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('domainTrust')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Domain Trust</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('organicTraffic')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Organic Traffic</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('paidTraffic')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Paid Traffic</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('keywords')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Keywords</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('totalTrafficCost')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Total Traffic Cost</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                  <th className="text-center py-3 px-3 text-xs font-medium text-slate-600">
                    <button 
                      onClick={() => handleCompetitorSort('referringDomains')}
                      className="flex items-center space-x-1 hover:text-slate-800"
                    >
                      <span>Referring Domains</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedCompetitorData.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-slate-100 ${
                      competitor.isOurCompany ? 'bg-blue-50' : 'hover:bg-slate-50'
                    } transition-colors`}
                  >
                    <td className="py-3 px-3">
                      <span className={`text-sm ${competitor.isOurCompany ? 'font-semibold text-blue-900' : 'text-slate-700'}`}>
                        {competitor.company}
                      </span>
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.domainTrust, competitorMinMax.domainTrust)}`}>
                      {competitor.domainTrust}
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.organicTraffic, competitorMinMax.organicTraffic)}`}>
                      {competitor.organicTraffic.toLocaleString()}
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.paidTraffic, competitorMinMax.paidTraffic)}`}>
                      {competitor.paidTraffic.toLocaleString()}
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.keywords, competitorMinMax.keywords)}`}>
                      {competitor.keywords.toLocaleString()}
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.totalTrafficCost, competitorMinMax.totalTrafficCost)}`}>
                      ${competitor.totalTrafficCost.toLocaleString()}
                    </td>
                    <td className={`py-3 px-3 text-center text-sm ${getCellStyling(competitor.referringDomains, competitorMinMax.referringDomains)}`}>
                      {competitor.referringDomains.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gap Analysis */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-medium text-slate-700">Gap Analysis</h4>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Choose Competitors:</span>
              <select
                value={gapAnalysisCompetitors.join(', ')}
                onChange={(e) => {
                  const selected = e.target.value.split(', ').filter(Boolean);
                  setGapAnalysisCompetitors(selected);
                }}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
              >
                <option value="Specialized, Trek Bikes">Specialized, Trek Bikes</option>
                <option value="Specialized, Giant Bicycles">Specialized, Giant Bicycles</option>
                <option value="Trek Bikes, Giant Bicycles">Trek Bikes, Giant Bicycles</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Keyword Gap Analysis */}
            <div>
              <h5 className="text-sm font-medium text-slate-700 mb-4">Keyword Gap Analysis</h5>
              
              {/* Venn Diagram */}
              <VennDiagram />
              
              {/* Keyword Details Table */}
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 px-2 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('keyword')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>Keyword</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('mbPos')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>MB Pos</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('specPos')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>Spec Pos</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('trekPos')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>Trek Pos</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('cpc')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>CPC</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('difficulty')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>Difficulty</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                        <th className="text-center py-2 px-1 text-xs font-medium text-slate-600">
                          <button 
                            onClick={() => handleKeywordSort('volume')}
                            className="flex items-center space-x-1 hover:text-slate-800"
                          >
                            <span>Volume</span>
                            <ArrowUpDown className="h-2 w-2" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedKeywordData.map((keyword, index) => (
                        <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-2 px-2 text-xs text-slate-700">{keyword.keyword}</td>
                          <td className="py-2 px-1 text-center text-xs">
                            <span className="text-slate-900">{keyword.mbPos}</span>
                            <span className={`ml-1 text-xs ${keyword.mbChange > 0 ? 'text-green-600' : keyword.mbChange < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                              {keyword.mbChange > 0 ? `+${keyword.mbChange}` : keyword.mbChange}
                            </span>
                          </td>
                          <td className="py-2 px-1 text-center text-xs">
                            <span className="text-slate-900">{keyword.specPos}</span>
                            <span className={`ml-1 text-xs ${keyword.specChange > 0 ? 'text-green-600' : keyword.specChange < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                              {keyword.specChange > 0 ? `+${keyword.specChange}` : keyword.specChange === 0 ? '0' : keyword.specChange}
                            </span>
                          </td>
                          <td className="py-2 px-1 text-center text-xs">
                            <span className="text-slate-900">{keyword.trekPos}</span>
                            <span className={`ml-1 text-xs ${keyword.trekChange > 0 ? 'text-green-600' : keyword.trekChange < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                              {keyword.trekChange > 0 ? `+${keyword.trekChange}` : keyword.trekChange === 0 ? '0' : keyword.trekChange}
                            </span>
                          </td>
                          <td className="py-2 px-1 text-center text-xs text-slate-900">${keyword.cpc}</td>
                          <td className="py-2 px-1 text-center text-xs text-slate-900">{keyword.difficulty}</td>
                          <td className="py-2 px-1 text-center text-xs text-slate-900">{keyword.volume}M</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Backlink Gap Analysis */}
            <div>
              <h5 className="text-sm font-medium text-slate-700 mb-4">Backlink Gap Analysis</h5>
              <div className="h-96 bg-slate-50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚧</div>
                  <h6 className="text-lg font-semibold text-slate-700 mb-2">Coming Soon</h6>
                  <p className="text-sm text-slate-500">Backlink gap analysis will be available in the next update</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Analysis and Insights - Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Location Analysis - New Section with Synchronized Drill-down */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">Location Analysis</h3>
            <div className="flex items-center space-x-3">
              {locationAnalysisDrillLevel !== 'country' && (
                <button
                  onClick={handleLocationAnalysisRollUp}
                  className="flex items-center space-x-2 px-3 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Roll Up</span>
                </button>
              )}
              <button
                onClick={() => exportCSV('location-analysis')}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Views by Location */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-slate-700 mb-4">{getDynamicTitle('Views')}</h4>
            
            <div className="text-left">
              <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
              <div className="inline-block">
                <div 
                  className="cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors"
                  onDoubleClick={handleLocationAnalysisDrillDown}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {getViewsData(locationAnalysisDrillLevel).map((item, index) => (
                      <div key={index} className="p-3 bg-blue-50 rounded-lg text-left">
                        <p className="text-sm font-medium text-blue-700">{item.label}</p>
                        <p className="text-lg font-bold text-blue-900">{item.value.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Query Relevance Score */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-slate-700 mb-4">{getDynamicTitle('Query Relevance Score')}</h4>
            
            <div className="text-left">
              <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
              <div className="inline-block">
                <div 
                  className="cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors"
                  onDoubleClick={handleLocationAnalysisDrillDown}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {getRelevanceData(locationAnalysisDrillLevel).map((item, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg text-left">
                        <p className="text-sm font-medium text-green-700">{item.label}</p>
                        <p className="text-lg font-bold text-green-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Review Score */}
          <div>
            <h4 className="text-md font-medium text-slate-700 mb-4">{getDynamicTitle('Customer Review Score')}</h4>
            
            <div className="text-left">
              <p className="text-sm text-slate-600 mb-4">Double-click to drill down, use Roll Up button to go back</p>
              <div className="inline-block">
                <div 
                  className="cursor-pointer hover:bg-slate-50 p-4 rounded-lg transition-colors"
                  onDoubleClick={handleLocationAnalysisDrillDown}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {getReviewData(locationAnalysisDrillLevel).map((item, index) => (
                      <div key={index} className="p-3 bg-purple-50 rounded-lg text-left">
                        <p className="text-sm font-medium text-purple-700">{item.label}</p>
                        <p className="text-lg font-bold text-purple-900">{item.value}</p>
                      </div>
                    ))}
                  </div>
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
              onClick={() => exportCSV('regional-insights')}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </button>
          </div>
          
          <div className="space-y-8">
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
    </div>
  );
};

export default RegionalPerformanceTab;