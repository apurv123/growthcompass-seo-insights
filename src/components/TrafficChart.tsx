import React from 'react';

interface TrafficData {
  month: string;
  organic: number;
  seo: number;
}

interface TrafficChartProps {
  data: TrafficData[];
}

const TrafficChart: React.FC<TrafficChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.organic, d.seo)));
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-slate-600">Organic Traffic</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <span className="text-slate-600">SEO Traffic</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-700">{item.month}</span>
              <div className="flex space-x-4">
                <span className="text-blue-600">{item.organic.toLocaleString()}</span>
                <span className="text-teal-600">{item.seo.toLocaleString()}</span>
              </div>
            </div>
            <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(item.organic / maxValue) * 100}%` }}
              ></div>
              <div
                className="absolute bottom-0 left-0 h-3 bg-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${(item.seo / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficChart;