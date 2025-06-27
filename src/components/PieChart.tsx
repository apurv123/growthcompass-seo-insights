import React from 'react';

interface PieChartData {
  label: string;
  value: number;
  percentage: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  size?: number;
  showLegend?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({ data, size = 200, showLegend = true }) => {
  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;

  let cumulativePercentage = 0;

  const createArcPath = (percentage: number, startPercentage: number) => {
    const startAngle = (startPercentage / 100) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((startPercentage + percentage) / 100) * 2 * Math.PI - Math.PI / 2;
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = percentage > 50 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="flex items-center space-x-6">
      <svg width={size} height={size}>
        {data.map((item, index) => {
          const path = createArcPath(item.percentage, cumulativePercentage);
          const currentCumulative = cumulativePercentage;
          cumulativePercentage += item.percentage;
          
          return (
            <path
              key={index}
              d={path}
              fill={item.color}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              title={`${item.label}: ${item.percentage}%`}
            />
          );
        })}
      </svg>
      
      {showLegend && (
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-slate-700">
                {item.label} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PieChart;