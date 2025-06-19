import React from 'react';

interface FunnelData {
  stage: string;
  count: number;
  percentage: number;
}

interface FunnelChartProps {
  data: FunnelData[];
}

const FunnelChart: React.FC<FunnelChartProps> = ({ data }) => {
  const colors = ['bg-blue-500', 'bg-teal-500', 'bg-green-500', 'bg-purple-500'];
  
  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">{item.stage}</span>
            <span className="text-sm text-slate-600">{item.percentage}%</span>
          </div>
          <div className="relative">
            <div className="w-full bg-slate-200 rounded-full h-8 flex items-center">
              <div
                className={`h-8 rounded-full ${colors[index]} transition-all duration-500 flex items-center justify-end pr-3`}
                style={{ width: `${item.percentage}%` }}
              >
                <span className="text-white text-sm font-medium">
                  {item.count.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunnelChart;