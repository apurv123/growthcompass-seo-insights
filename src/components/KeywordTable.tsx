import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface Keyword {
  keyword: string;
  position: number;
  views: number;
  change: number;
}

interface KeywordTableProps {
  keywords: Keyword[];
}

const KeywordTable: React.FC<KeywordTableProps> = ({ keywords }) => {
  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-400';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Keyword</th>
            <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Position</th>
            <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Views</th>
            <th className="text-center py-3 px-2 text-sm font-medium text-slate-600">Change</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((keyword, index) => (
            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-3 px-2">
                <span className="font-medium text-slate-900">{keyword.keyword}</span>
              </td>
              <td className="py-3 px-2 text-center">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  keyword.position <= 3 
                    ? 'bg-green-100 text-green-800' 
                    : keyword.position <= 10 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {keyword.position}
                </span>
              </td>
              <td className="py-3 px-2 text-center text-slate-900 font-medium">
                {keyword.views.toLocaleString()}
              </td>
              <td className="py-3 px-2 text-center">
                <div className={`flex items-center justify-center space-x-1 ${getChangeColor(keyword.change)}`}>
                  {getChangeIcon(keyword.change)}
                  <span className="text-sm font-medium">
                    {keyword.change > 0 ? `+${keyword.change}` : keyword.change}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordTable;