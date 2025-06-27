import React from 'react';

interface BarChartData {
  label: string;
  value: number;
  color: string;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
  showValues?: boolean;
  horizontal?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  height = 300, 
  showValues = true, 
  horizontal = false 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const padding = 40;
  const chartWidth = 400;
  const chartHeight = height - padding * 2;

  if (horizontal) {
    const barHeight = chartHeight / data.length * 0.6;
    const barSpacing = chartHeight / data.length;

    return (
      <div className="w-full">
        <svg width={chartWidth + padding * 2} height={height}>
          {data.map((item, index) => {
            const barWidth = (item.value / maxValue) * chartWidth;
            const y = padding + index * barSpacing + (barSpacing - barHeight) / 2;

            return (
              <g key={index}>
                <rect
                  x={padding}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  className="hover:opacity-80 transition-opacity"
                />
                <text
                  x={padding - 10}
                  y={y + barHeight / 2}
                  textAnchor="end"
                  className="text-sm fill-slate-700"
                  dominantBaseline="middle"
                >
                  {item.label}
                </text>
                {showValues && (
                  <text
                    x={padding + barWidth + 10}
                    y={y + barHeight / 2}
                    className="text-sm font-medium fill-slate-900"
                    dominantBaseline="middle"
                  >
                    {item.value}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  // Vertical bars
  const barWidth = chartWidth / data.length * 0.6;
  const barSpacing = chartWidth / data.length;

  return (
    <div className="w-full">
      <svg width={chartWidth + padding * 2} height={height}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * chartHeight;
          const x = padding + index * barSpacing + (barSpacing - barWidth) / 2;
          const y = padding + chartHeight - barHeight;

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
                y={padding + chartHeight + 20}
                textAnchor="middle"
                className="text-sm fill-slate-700"
              >
                {item.label}
              </text>
              {showValues && (
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  textAnchor="middle"
                  className="text-sm font-medium fill-slate-900"
                >
                  {item.value}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default BarChart;