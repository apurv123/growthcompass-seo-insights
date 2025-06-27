import React from 'react';

interface SankeyNode {
  id: string;
  label: string;
  value: number;
  percentage: number;
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SankeyFlow {
  source: string;
  target: string;
  value: number;
  percentage: number;
  color: string;
}

interface SankeyDiagramProps {
  nodes: SankeyNode[];
  flows: SankeyFlow[];
  width?: number;
  height?: number;
}

const SankeyDiagram: React.FC<SankeyDiagramProps> = ({ 
  nodes, 
  flows, 
  width = 800, 
  height = 500 
}) => {
  const getFlowPath = (source: SankeyNode, target: SankeyNode, flowHeight: number) => {
    const sourceX = source.x + source.width;
    const sourceY = source.y + source.height / 2;
    const targetX = target.x;
    const targetY = target.y + target.height / 2;
    
    const midX = (sourceX + targetX) / 2;
    
    return `M ${sourceX} ${sourceY - flowHeight/2} 
            C ${midX} ${sourceY - flowHeight/2} ${midX} ${targetY - flowHeight/2} ${targetX} ${targetY - flowHeight/2}
            L ${targetX} ${targetY + flowHeight/2}
            C ${midX} ${targetY + flowHeight/2} ${midX} ${sourceY + flowHeight/2} ${sourceX} ${sourceY + flowHeight/2}
            Z`;
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg width={width} height={height} className="min-w-full">
        {/* Render flows first (behind nodes) */}
        {flows.map((flow, index) => {
          const sourceNode = nodes.find(n => n.id === flow.source);
          const targetNode = nodes.find(n => n.id === flow.target);
          
          if (!sourceNode || !targetNode) return null;
          
          const flowHeight = (flow.value / 100) * 40; // Scale flow thickness
          
          return (
            <g key={index}>
              <path
                d={getFlowPath(sourceNode, targetNode, flowHeight)}
                fill={flow.color}
                opacity={0.6}
                className="hover:opacity-80 transition-opacity"
              />
              <text
                x={(sourceNode.x + sourceNode.width + targetNode.x) / 2}
                y={(sourceNode.y + sourceNode.height / 2 + targetNode.y + targetNode.height / 2) / 2}
                textAnchor="middle"
                className="text-xs font-medium fill-slate-700"
              >
                {flow.percentage}%
              </text>
            </g>
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node, index) => (
          <g key={index}>
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              fill={node.color}
              rx={4}
              className="hover:opacity-90 transition-opacity"
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height / 2 - 8}
              textAnchor="middle"
              className="text-sm font-semibold fill-white"
            >
              {node.label}
            </text>
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height / 2 + 8}
              textAnchor="middle"
              className="text-xs fill-white opacity-90"
            >
              {node.percentage}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SankeyDiagram;