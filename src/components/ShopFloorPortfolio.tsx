import React, { useState, useEffect, useRef } from 'react';
import { Truck, Settings, Package, Factory, FlaskConical, FileText, Warehouse, Box } from 'lucide-react';

const ShopFloorPortfolio = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const segments = [
    {
      id: 'inbound',
      title: 'Inbound / Goods Receipt',
      shortTitle: 'Inbound',
      icon: FileText,
      description: [
        'Docking & Unloading',
        'Verification & Scanning',
        'Pallet Handling & Transport'
      ],
      side: 'left',
      slot: 0
    },
    {
      id: 'warehouse',
      title: 'Warehouse',
      shortTitle: 'Warehouse', 
      icon: Warehouse,
      description: [
        'Automated Storage & Retrieval',
        'Inventory & Condition Monitoring',
        'Replenishment Operations'
      ],
      side: 'right',
      slot: 0
    },
    {
      id: 'dispensing',
      title: 'Dispensing / Staging',
      shortTitle: 'Dispensing',
      icon: Box,
      description: [
        'Picking & Kitting',
        'Buffer & Line-side Management',
        'Cross-docking Operations'
      ],
      side: 'right',
      slot: 1
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      shortTitle: 'Manufacturing',
      icon: Settings,
      description: [
        'Material Handling',
        'Assembly & Processing', 
        'Packaging & Batch Processing'
      ],
      side: 'right',
      slot: 2
    },
    {
      id: 'lab',
      title: 'Lab Automation',
      shortTitle: 'Lab',
      icon: FlaskConical,
      description: [
        'Automated Inspection & Testing',
        'Sorting & Defect Isolation',
        'Compliance verification'
      ],
      side: 'left',
      slot: 2
    },
    {
      id: 'outbound',
      title: 'Outbound / Dispatch',
      shortTitle: 'Outbound',
      icon: Truck,
      description: [
        'Order Picking & Palletizing',
        'Load Sequencing & Transport',
        'Truck Loading & Final Verification'
      ],
      side: 'left',
      slot: 1
    }
  ];

  const centerX = 320;
  const centerY = 320;
  const innerRadius = 120;
  const outerRadius = 240;
  const labelRadius = 200;

  const getSegmentPath = (index: number) => {
    const angleStart = (index * 60 - 90) * Math.PI / 180;
    const angleEnd = ((index + 1) * 60 - 90) * Math.PI / 180;
    
    const x1 = centerX + Math.cos(angleStart) * innerRadius;
    const y1 = centerY + Math.sin(angleStart) * innerRadius;
    const x2 = centerX + Math.cos(angleStart) * outerRadius;
    const y2 = centerY + Math.sin(angleStart) * outerRadius;
    const x3 = centerX + Math.cos(angleEnd) * outerRadius;
    const y3 = centerY + Math.sin(angleEnd) * outerRadius;
    const x4 = centerX + Math.cos(angleEnd) * innerRadius;
    const y4 = centerY + Math.sin(angleEnd) * innerRadius;
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  };

  const getTextPath = (index: number) => {
    const angleStart = (index * 60 - 90) * Math.PI / 180;
    const angleEnd = ((index + 1) * 60 - 90) * Math.PI / 180;
    
    const startX = centerX + Math.cos(angleStart) * labelRadius;
    const startY = centerY + Math.sin(angleStart) * labelRadius;
    const endX = centerX + Math.cos(angleEnd) * labelRadius;
    const endY = centerY + Math.sin(angleEnd) * labelRadius;
    
    return `M ${startX} ${startY} A ${labelRadius} ${labelRadius} 0 0 1 ${endX} ${endY}`;
  };

  const getSegmentCentroid = (index: number) => {
    const angle = (index * 60 - 90 + 30) * Math.PI / 180;
    const radius = (innerRadius + outerRadius) / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    };
  };

  const getConnectorPath = (index: number) => {
    const segment = segments[index];
    const angle = (index * 60 - 90 + 30) * Math.PI / 180;
    const startX = centerX + Math.cos(angle) * outerRadius;
    const startY = centerY + Math.sin(angle) * outerRadius;
    
    const isLeft = segment.side === 'left';
    const cardCenterY = 120 + (segment.slot * 200) + 100;
    const cardEdgeX = isLeft ? 80 + 280 : 540;
    
    // Two-point polyline for clean routing
    const midX = isLeft ? startX - 50 : startX + 50;
    return `M ${startX} ${startY} L ${midX} ${startY} L ${cardEdgeX} ${cardCenterY}`;
  };

  const handleSegmentClick = (index: number) => {
    setActiveSegment(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveSegment(index);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % segments.length;
      setActiveSegment(nextIndex);
      // Focus next segment
      const nextElement = document.getElementById(`segment-${nextIndex}`);
      nextElement?.focus();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (index - 1 + segments.length) % segments.length;
      setActiveSegment(prevIndex);
      // Focus previous segment
      const prevElement = document.getElementById(`segment-${prevIndex}`);
      prevElement?.focus();
    }
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F6F8FB 0%, #F0F4F8 100%)',
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.03) 0%, transparent 50%)
        `
      }}
    >
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
              <svg ref={svgRef} width="640" height="640" viewBox="0 0 640 640" className="overflow-visible">
                <defs>
                  {/* Arrowhead marker */}
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="10"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#ef4444"
                    />
                  </marker>
                  
                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  
                  {/* Text paths for curved labels */}
                  {segments.map((segment, index) => (
                    <path
                      key={`textpath-${index}`}
                      id={`textpath-${index}`}
                      d={getTextPath(index)}
                      fill="none"
                    />
                  ))}
                </defs>
                
                {/* Background Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={outerRadius}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.3"
                />
                
                {/* Segments */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const centroid = getSegmentCentroid(index);
                  
                  return (
                    <g key={segment.id}>
                      <path
                        id={`segment-${index}`}
                        d={getSegmentPath(index)}
                        fill={isActive ? "#fef2f2" : "white"}
                        stroke={isActive ? "#ef4444" : "#e5e7eb"}
                        strokeWidth={isActive ? "3" : "1"}
                        className="cursor-pointer transition-all duration-150 ease-out hover:fill-red-50"
                        style={{
                          transform: isActive ? 'scale(1.06)' : 'scale(1)',
                          transformOrigin: `${centroid.x}px ${centroid.y}px`,
                          filter: isActive ? 'url(#glow)' : 'none'
                        }}
                        onMouseEnter={() => setActiveSegment(index)}
                        onFocus={() => setActiveSegment(index)}
                        tabIndex={0}
                        role="button"
                        aria-label={`${segment.title} — ${segment.description.join('; ')}`}
                        aria-controls={`card-${segment.id}`}
                        aria-expanded={isActive}
                        onClick={() => handleSegmentClick(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                      
                      {/* Curved segment label */}
                      <text 
                        className="text-sm font-medium fill-gray-700 pointer-events-none"
                        style={{ 
                          fontSize: window.innerWidth < 768 ? '11px' : '13px',
                          fontWeight: isActive ? '600' : '500'
                        }}
                      >
                        <textPath 
                          href={`#textpath-${index}`} 
                          startOffset="50%" 
                          textAnchor="middle"
                        >
                          {window.innerWidth < 768 ? segment.shortTitle : segment.title}
                        </textPath>
                      </text>
                    </g>
                  );
                })}
                
                {/* Connector lines with arrowheads */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const connectorPath = getConnectorPath(index);
                  
                  return (
                    <path
                      key={`connector-${index}`}
                      d={connectorPath}
                      stroke="#ef4444"
                      strokeWidth={isActive ? "2.5" : "2"}
                      fill="none"
                      className="transition-all duration-150"
                      opacity={isActive ? 1 : 0.6}
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
                
                {/* Inner center circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={innerRadius}
                  fill="white"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                
                {/* Center text */}
                <text
                  x={centerX}
                  y={centerY - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold fill-gray-800"
                  style={{ fontSize: '20px', fontWeight: '800' }}
                >
                  Autonomous
                </text>
                <text
                  x={centerX}
                  y={centerY + 15}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold fill-gray-800"
                  style={{ fontSize: '20px', fontWeight: '800' }}
                >
                  Factories
                </text>
              </svg>
            </div>
            
            {/* Left Card Stack */}
            <div className="absolute left-0 top-0 w-80 h-full">
              <div className="flex flex-col justify-center h-full py-20 space-y-7">
                {segments
                  .filter(segment => segment.side === 'left')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    const IconComponent = segment.icon;
                    
                    return (
                      <div
                        key={`left-${segment.id}`}
                        className="flex items-center"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-150 w-full min-h-[180px] flex flex-col justify-start cursor-pointer ${
                            isActive 
                              ? 'border-red-400 shadow-xl bg-red-50/20' 
                              : 'border-gray-200 shadow-lg hover:shadow-xl'
                          }`}
                          style={{ 
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                          onMouseEnter={() => setActiveSegment(segmentIndex)}
                          onClick={() => setActiveSegment(segmentIndex)}
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-2 rounded-lg ${
                              isActive ? 'bg-red-100' : 'bg-gray-100'
                            }`}>
                              <IconComponent 
                                size={20} 
                                className={isActive ? 'text-red-600' : 'text-gray-600'} 
                              />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors ${
                              isActive ? 'text-red-600' : 'text-gray-900'
                            }`}>
                              {segment.title}
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  isActive ? 'bg-red-500' : 'bg-gray-400'
                                }`}></span>
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
            
            {/* Right Card Stack */}
            <div className="absolute right-0 top-0 w-80 h-full">
              <div className="flex flex-col justify-center h-full py-20 space-y-7">
                {segments
                  .filter(segment => segment.side === 'right')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    const IconComponent = segment.icon;
                    
                    return (
                      <div
                        key={`right-${segment.id}`}
                        className="flex items-center"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-150 w-full min-h-[180px] flex flex-col justify-start cursor-pointer ${
                            isActive 
                              ? 'border-red-400 shadow-xl bg-red-50/20' 
                              : 'border-gray-200 shadow-lg hover:shadow-xl'
                          }`}
                          style={{ 
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                          onMouseEnter={() => setActiveSegment(segmentIndex)}
                          onClick={() => setActiveSegment(segmentIndex)}
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-2 rounded-lg ${
                              isActive ? 'bg-red-100' : 'bg-gray-100'
                            }`}>
                              <IconComponent 
                                size={20} 
                                className={isActive ? 'text-red-600' : 'text-gray-600'} 
                              />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors ${
                              isActive ? 'text-red-600' : 'text-gray-900'
                            }`}>
                              {segment.title}
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  isActive ? 'bg-red-500' : 'bg-gray-400'
                                }`}></span>
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
            <svg width="320" height="320" viewBox="0 0 640 640">
              <defs>
                {segments.map((segment, index) => (
                  <path
                    key={`mobile-textpath-${index}`}
                    id={`mobile-textpath-${index}`}
                    d={getTextPath(index)}
                    fill="none"
                  />
                ))}
              </defs>
              
              {/* Background Circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={outerRadius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.3"
              />
              
              {/* Segments */}
              {segments.map((segment, index) => {
                const isActive = activeSegment === index;
                return (
                  <g key={segment.id}>
                    <path
                      d={getSegmentPath(index)}
                      fill={isActive ? "#fef2f2" : "white"}
                      stroke={isActive ? "#ef4444" : "#e5e7eb"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="cursor-pointer transition-all duration-150"
                      onClick={() => setActiveSegment(index)}
                    />
                    <text className="text-xs font-medium fill-gray-700 pointer-events-none">
                      <textPath 
                        href={`#mobile-textpath-${index}`} 
                        startOffset="50%" 
                        textAnchor="middle"
                      >
                        {segment.shortTitle}
                      </textPath>
                    </text>
                  </g>
                );
              })}
              
              {/* Center Circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius}
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              
              {/* Center Text */}
              <text
                x={centerX}
                y={centerY - 8}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold fill-gray-800"
                style={{ fontSize: '16px', fontWeight: '800' }}
              >
                Autonomous
              </text>
              <text
                x={centerX}
                y={centerY + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold fill-gray-800"
                style={{ fontSize: '16px', fontWeight: '800' }}
              >
                Factories
              </text>
            </svg>
          </div>
          
          {/* Mobile Cards */}
          <div className="space-y-4">
            {segments.map((segment, index) => {
              const isActive = activeSegment === index;
              const IconComponent = segment.icon;
              
              return (
                <div
                  key={segment.id}
                  className={`bg-white rounded-2xl border cursor-pointer transition-all duration-150 ${
                    isActive ? 'border-red-400 shadow-xl' : 'border-gray-200 shadow-lg'
                  }`}
                  onClick={() => setActiveSegment(activeSegment === index ? -1 : index)}
                >
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-red-100' : 'bg-gray-100'
                      }`}>
                        <IconComponent 
                          size={18} 
                          className={isActive ? 'text-red-600' : 'text-gray-600'} 
                        />
                      </div>
                      <h3 className={`font-bold ${
                        isActive ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="px-5 pb-5 animate-accordion-down">
                      <ul className="space-y-2.5 ml-10">
                        {segment.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFloorPortfolio;