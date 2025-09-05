import React, { useState } from 'react';
import { Truck, Building2, Package, Factory, FlaskConical, FileText, Warehouse, Boxes } from 'lucide-react';

const ShopFloorPortfolio = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'inbound',
      title: 'Inbound / Goods Receipt',
      icon: Truck,
      description: [
        'Docking & Unloading',
        'Verification & Scanning',
        'Pallet Handling & Transport'
      ],
      angle: 0,
      side: 'left',
      slot: 0
    },
    {
      id: 'warehouse',
      title: 'Warehouse',
      icon: Warehouse,
      description: [
        'Automated Storage & Retrieval',
        'Inventory & Condition Monitoring',
        'Replenishment Operations'
      ],
      angle: 60,
      side: 'right',
      slot: 0
    },
    {
      id: 'dispensing',
      title: 'Dispensing / Staging',
      icon: Package,
      description: [
        'Picking & Kitting',
        'Buffer & Line-side Management',
        'Cross-docking Operations'
      ],
      angle: 120,
      side: 'right',
      slot: 1
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: [
        'Material Handling',
        'Assembly & Processing',
        'Packaging & Batch Processing'
      ],
      angle: 180,
      side: 'right',
      slot: 2
    },
    {
      id: 'lab',
      title: 'Lab Automation',
      icon: FlaskConical,
      description: [
        'Automated Inspection & Testing',
        'Sorting & Defect Isolation',
        'Compliance verification'
      ],
      angle: 240,
      side: 'left',
      slot: 2
    },
    {
      id: 'outbound',
      title: 'Outbound / Dispatch',
      icon: FileText,
      description: [
        'Order Picking & Palletizing',
        'Load Sequencing & Transport',
        'Truck Loading & Final Verification'
      ],
      angle: 300,
      side: 'left',
      slot: 1
    }
  ];

  const getSegmentPath = (index: number) => {
    const angleStart = (index * 60 - 90) * Math.PI / 180;
    const angleEnd = ((index + 1) * 60 - 90) * Math.PI / 180;
    const innerRadius = 100;
    const outerRadius = 160;
    
    const x1 = 300 + Math.cos(angleStart) * innerRadius;
    const y1 = 300 + Math.sin(angleStart) * innerRadius;
    const x2 = 300 + Math.cos(angleStart) * outerRadius;
    const y2 = 300 + Math.sin(angleStart) * outerRadius;
    const x3 = 300 + Math.cos(angleEnd) * outerRadius;
    const y3 = 300 + Math.sin(angleEnd) * outerRadius;
    const x4 = 300 + Math.cos(angleEnd) * innerRadius;
    const y4 = 300 + Math.sin(angleEnd) * innerRadius;
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  };

  const getSegmentCentroid = (index: number) => {
    const angle = (index * 60 - 90) * Math.PI / 180 + (30 * Math.PI / 180);
    const radius = 160;
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getIconPosition = (index: number) => {
    const angle = (index * 60 - 90) * Math.PI / 180 + (30 * Math.PI / 180);
    const radius = 68;
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getConnectorPath = (index: number) => {
    const segment = segments[index];
    const startPos = getSegmentCentroid(index);
    
    if (!startPos || typeof startPos.x !== 'number' || typeof startPos.y !== 'number') {
      return '';
    }
    
    const isLeft = segment.side === 'left';
    const slotHeight = 200;
    const startY = 50;
    const cardCenterY = startY + (segment.slot * slotHeight) + 100;
    const cardX = isLeft ? 320 : 380;
    const midX = isLeft ? 120 : 580;
    
    return `M ${startPos.x},${startPos.y} L ${midX},${startPos.y} Q ${midX},${cardCenterY} ${midX + (isLeft ? 10 : -10)},${cardCenterY} L ${cardX},${cardCenterY}`;
  };

  return (
    <section className="py-24 bg-[#F7F9FB]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Integrated Shop Floor Automation Portfolio
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div 
            className="relative max-w-7xl mx-auto h-[700px]" 
            aria-live="polite"
            aria-label="Interactive shop floor automation portfolio diagram"
          >
            {/* SVG Circular Diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="700" height="700" viewBox="0 0 600 600" className="overflow-visible">
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="8"
                    refX="9"
                    refY="4"
                    orient="auto"
                    fill="#ef4444"
                  >
                    <polygon points="0 0, 10 4, 0 8" fill="#ef4444" />
                  </marker>
                  
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="160"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.2"
                />
                
                {/* Segments */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const centroid = getSegmentCentroid(index);
                  
                  return (
                    <g key={segment.id}>
                      <path
                        d={getSegmentPath(index)}
                        fill={isActive ? "hsl(var(--card))" : "hsl(var(--card))"}
                        stroke={isActive ? "#ef4444" : "hsl(var(--border))"}
                        strokeWidth={isActive ? "2" : "1"}
                        className="cursor-pointer transition-all duration-200 ease-out hover:fill-red-50"
                        style={{
                          transform: isActive ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: `${centroid.x}px ${centroid.y}px`,
                          filter: isActive ? 'url(#glow)' : 'none',
                          zIndex: 1
                        }}
                        onMouseEnter={() => setActiveSegment(index)}
                        onFocus={() => setActiveSegment(index)}
                        tabIndex={0}
                        role="button"
                        aria-label={`${segment.title} segment`}
                        aria-controls={`card-${segment.id}`}
                        aria-expanded={isActive}
                      />
                    </g>
                  );
                })}
                
                {/* Inner Center Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="85"
                  fill="white"
                  stroke="#ef4444"
                  strokeWidth="1"
                  style={{ zIndex: 4 }}
                />
                
                {/* Center Text */}
                <text
                  x="300"
                  y="292"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold"
                  style={{ 
                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                    fontWeight: '800',
                    letterSpacing: '0.2px',
                    lineHeight: '1.15',
                    fill: '#ef4444',
                    zIndex: 4
                  }}
                >
                  Autonomous
                </text>
                <text
                  x="300"
                  y="315"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold"
                  style={{ 
                    fontSize: 'clamp(16px, 1.8vw, 22px)',
                    fontWeight: '800',
                    letterSpacing: '0.2px',
                    lineHeight: '1.15',
                    fill: '#ef4444',
                    zIndex: 4
                  }}
                >
                  Factories
                </text>
                
                {/* Icon Ring */}
                {segments.map((segment, index) => {
                  const pos = getIconPosition(index);
                  const IconComponent = segment.icon;
                  const isActive = activeSegment === index;
                  
                  return (
                    <foreignObject
                      key={`icon-${index}`}
                      x={pos.x - 16}
                      y={pos.y - 16}
                      width="32"
                      height="32"
                      className="pointer-events-none"
                      style={{ zIndex: 3 }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-200 ${
                        isActive ? 'scale-110 border-red-400 shadow-lg' : 'border-gray-200'
                      }`}>
                        <IconComponent 
                          size={18} 
                          className={`transition-all duration-200 ${
                            isActive ? "text-red-500 stroke-2" : "text-gray-600"
                          }`}
                          style={{ opacity: isActive ? 1 : 0.75 }}
                        />
                      </div>
                    </foreignObject>
                  );
                })}
                
                {/* Connector Lines */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const connectorPath = getConnectorPath(index);
                  
                  if (!connectorPath) return null;
                  
                  return (
                    <path
                      key={`connector-${index}`}
                      d={connectorPath}
                      stroke={isActive ? "#ef4444" : "#d1d5db"}
                      strokeWidth={isActive ? "2.5" : "1.75"}
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-200"
                      opacity={isActive ? 1 : 0.7}
                      style={{ zIndex: 2 }}
                    />
                  );
                })}
              </svg>
            </div>
            
            {/* Left side grid */}
            <div className="absolute left-0 top-0 w-80 h-full">
              <div className="grid grid-rows-3 gap-7 h-full py-12">
                {segments
                  .filter(segment => segment.side === 'left')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    
                    return (
                      <div
                        key={`left-${segment.id}`}
                        className="flex items-center min-h-[180px]"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-200 w-full min-h-[180px] ${
                            isActive 
                              ? 'border-red-400 shadow-2xl bg-red-50/30' 
                              : 'border-gray-200 shadow-lg'
                          }`}
                          style={{ 
                            zIndex: isActive ? 3 : 1,
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-red-600' : 'text-gray-900'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-3">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className="text-red-500 mt-1 font-bold text-base">•</span>
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            
            {/* Right side grid */}
            <div className="absolute right-0 top-0 w-80 h-full">
              <div className="grid grid-rows-3 gap-7 h-full py-12">
                {segments
                  .filter(segment => segment.side === 'right')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    
                    return (
                      <div
                        key={`right-${segment.id}`}
                        className="flex items-center min-h-[180px]"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-200 w-full min-h-[180px] ${
                            isActive 
                              ? 'border-red-400 shadow-2xl bg-red-50/30' 
                              : 'border-gray-200 shadow-lg'
                          }`}
                          style={{ 
                            zIndex: isActive ? 3 : 1,
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-red-600' : 'text-gray-900'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-3">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className="text-red-500 mt-1 font-bold text-base">•</span>
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-12">
            <svg width="300" height="300" viewBox="0 0 600 600">
              {/* Background Circle */}
              <circle
                cx="300"
                cy="300"
                r="160"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                opacity="0.3"
              />
              
              {/* Inner Circle */}
              <circle
                cx="300"
                cy="300"
                r="85"
                fill="white"
                stroke="#ef4444"
                strokeWidth="2"
              />
              
              {/* Center Text */}
              <text
                x="300"
                y="292"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{ fontSize: '14px', fontWeight: '800', fill: '#ef4444' }}
              >
                Autonomous
              </text>
              <text
                x="300"
                y="315"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{ fontSize: '14px', fontWeight: '800', fill: '#ef4444' }}
              >
                Factories
              </text>
              
              {/* Segments */}
              {segments.map((segment, index) => (
                <path
                  key={segment.id}
                  d={getSegmentPath(index)}
                  fill={activeSegment === index ? "hsl(var(--red-50))" : "hsl(var(--card))"}
                  stroke={activeSegment === index ? "#ef4444" : "hsl(var(--border))"}
                  strokeWidth={activeSegment === index ? "3" : "1"}
                  className="cursor-pointer"
                  onClick={() => setActiveSegment(index)}
                />
              ))}
              
              {/* Icon Ring */}
              {segments.map((segment, index) => {
                const pos = getIconPosition(index);
                const IconComponent = segment.icon;
                
                return (
                  <foreignObject
                    key={`icon-${index}`}
                    x={pos.x - 12}
                    y={pos.y - 12}
                    width="24"
                    height="24"
                    className="pointer-events-none"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <IconComponent 
                        size={14} 
                        className={activeSegment === index ? "text-red-500" : "text-gray-600"}
                      />
                    </div>
                  </foreignObject>
                );
              })}
            </svg>
          </div>
          
          {/* Mobile Accordion */}
          <div className="space-y-5">
            {segments.map((segment, index) => (
              <div
                key={segment.id}
                className={`bg-white rounded-2xl border cursor-pointer transition-all duration-200 ${
                  activeSegment === index ? 'border-red-400 shadow-xl' : 'border-gray-200 shadow-lg'
                }`}
                onClick={() => setActiveSegment(activeSegment === index ? -1 : index)}
              >
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <segment.icon 
                      size={24} 
                      className={activeSegment === index ? "text-red-500" : "text-gray-600"} 
                    />
                    <h3 className={`font-bold text-lg ${
                      activeSegment === index ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                {activeSegment === index && (
                  <div className="px-5 pb-5 animate-accordion-down">
                    <ul className="space-y-3 ml-10">
                      {segment.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                          <span className="text-red-500 mt-1 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFloorPortfolio;