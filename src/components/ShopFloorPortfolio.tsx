import React, { useState } from 'react';
import { Truck, Settings, Package, Factory, FlaskConical, FileText } from 'lucide-react';

const ShopFloorPortfolio = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      id: 'inbound',
      title: 'Inbound / Goods Receipt',
      icon: FileText,
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
      icon: Settings,
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
      icon: Truck,
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
    const innerRadius = 110; // Safety radius around center
    const outerRadius = 180;
    
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
    const radius = 145; // Midpoint of segment for transform origin
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getIconPosition = (index: number) => {
    const angle = (index * 60 - 90) * Math.PI / 180 + (30 * Math.PI / 180);
    const radius = 105; // 58% of pie radius (180 * 0.58 ≈ 105)
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getArrowPath = (index: number) => {
    const segment = segments[index];
    const iconPos = getIconPosition(index);
    const isLeft = segment.side === 'left';
    
    // Card positions - vertical center of each card
    const cardCenterY = 100 + (segment.slot * 180) + 90; // Card vertical center
    const cardEdgeX = isLeft ? 60 + 260 : 540; // Card edge (left edge for left cards, right edge for right cards)
    
    // Straight horizontal line from icon node center to card edge
    const startX = iconPos.x + (isLeft ? -16 : 16); // Offset from icon edge
    const endX = cardEdgeX + (isLeft ? -4 : 4); // Terminate just inside card edge (2-4px)
    
    return `M ${startX} ${iconPos.y} L ${endX} ${cardCenterY}`;
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
            className="relative max-w-6xl mx-auto h-[640px]" 
            aria-live="polite"
            aria-label="Interactive shop floor automation portfolio diagram"
          >
            {/* SVG Circular Diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="600" height="600" viewBox="0 0 600 600" className="overflow-visible">
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
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
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
                  r="180"
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
                    <path
                      key={segment.id}
                      d={getSegmentPath(index)}
                      fill="white"
                      stroke={isActive ? "#ef4444" : "#e5e7eb"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="cursor-pointer transition-all duration-200 ease-out hover:fill-red-50"
                      style={{
                        transform: isActive ? 'scale(1.04)' : 'scale(1)',
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
                  );
                })}
                
                {/* Arrows - Rendered first so they appear behind icons */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const arrowPath = getArrowPath(index);
                  
                  return (
                    <path
                      key={`arrow-${index}`}
                      d={arrowPath}
                      stroke={isActive ? "#ef4444" : "#d1d5db"}
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-200"
                      opacity={isActive ? 1 : 0.6}
                      style={{ zIndex: 2 }}
                    />
                  );
                })}
                
                {/* Icon Nodes */}
                {segments.map((segment, index) => {
                  const pos = getIconPosition(index);
                  const IconComponent = segment.icon;
                  const isActive = activeSegment === index;
                  
                  return (
                    <g key={`icon-${index}`} style={{ zIndex: 2 }}>
                      {/* Icon Background Circle */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="16"
                        fill="white"
                        stroke={isActive ? "#ef4444" : "#d1d5db"}
                        strokeWidth={isActive ? "2" : "1"}
                        className="cursor-pointer transition-all duration-200"
                        style={{
                          transform: isActive ? 'scale(1.08)' : 'scale(1)',
                          transformOrigin: `${pos.x}px ${pos.y}px`
                        }}
                        onMouseEnter={() => setActiveSegment(index)}
                        onClick={() => setActiveSegment(index)}
                      />
                      
                      {/* Icon */}
                      <foreignObject
                        x={pos.x - 10}
                        y={pos.y - 10}
                        width="20"
                        height="20"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <IconComponent 
                            size={16} 
                            className={`transition-all duration-200 ${
                              isActive ? "text-red-500" : "text-gray-600"
                            }`}
                          />
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
                
                {/* Center Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="70"
                  fill="white"
                  stroke="#e5e7eb"
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
                    fontSize: '18px',
                    fontWeight: '800',
                    letterSpacing: '0.2px',
                    lineHeight: '1.15',
                    fill: '#1f2937',
                    zIndex: 4
                  }}
                >
                  Autonomous
                </text>
                <text
                  x="300"
                  y="312"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold"
                  style={{ 
                    fontSize: '18px',
                    fontWeight: '800',
                    letterSpacing: '0.2px',
                    lineHeight: '1.15',
                    fill: '#1f2937',
                    zIndex: 4
                  }}
                >
                  Factories
                </text>
              </svg>
            </div>
            
            {/* Left Card Stack */}
            <div className="absolute left-0 top-0 w-72 h-full">
              <div className="grid grid-rows-3 gap-7 h-full py-20">
                {segments
                  .filter(segment => segment.side === 'left')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    
                    return (
                      <div
                        key={`left-${segment.id}`}
                        className="flex items-center"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-200 w-full min-h-[160px] flex flex-col justify-center ${
                            isActive 
                              ? 'border-red-400 shadow-xl bg-red-50/20' 
                              : 'border-gray-200 shadow-lg'
                          }`}
                          style={{ 
                            zIndex: 3,
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-red-600' : 'text-gray-900'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-2">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <span className="text-red-500 mt-1 font-bold">•</span>
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
            <div className="absolute right-0 top-0 w-72 h-full">
              <div className="grid grid-rows-3 gap-7 h-full py-20">
                {segments
                  .filter(segment => segment.side === 'right')
                  .sort((a, b) => a.slot - b.slot)
                  .map((segment, gridIndex) => {
                    const segmentIndex = segments.findIndex(s => s.id === segment.id);
                    const isActive = activeSegment === segmentIndex;
                    
                    return (
                      <div
                        key={`right-${segment.id}`}
                        className="flex items-center"
                      >
                        <div 
                          id={`card-${segment.id}`}
                          className={`bg-white rounded-2xl p-6 border transition-all duration-200 w-full min-h-[160px] flex flex-col justify-center ${
                            isActive 
                              ? 'border-red-400 shadow-xl bg-red-50/20' 
                              : 'border-gray-200 shadow-lg'
                          }`}
                          style={{ 
                            zIndex: 3,
                            boxShadow: isActive 
                              ? '0 8px 32px rgba(239, 68, 68, 0.15)' 
                              : '0 8px 24px rgba(0, 0, 0, 0.06)'
                          }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-red-600' : 'text-gray-900'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-2">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <span className="text-red-500 mt-1 font-bold">•</span>
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
            <svg width="280" height="280" viewBox="0 0 600 600">
              {/* Background Circle */}
              <circle
                cx="300"
                cy="300"
                r="180"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
                opacity="0.3"
              />
              
              {/* Center Circle */}
              <circle
                cx="300"
                cy="300"
                r="70"
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              
              {/* Center Text */}
              <text
                x="300"
                y="292"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{ fontSize: '13px', fontWeight: '800', fill: '#1f2937' }}
              >
                Autonomous
              </text>
              <text
                x="300"
                y="312"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{ fontSize: '13px', fontWeight: '800', fill: '#1f2937' }}
              >
                Factories
              </text>
              
              {/* Segments */}
              {segments.map((segment, index) => (
                <path
                  key={segment.id}
                  d={getSegmentPath(index)}
                  fill={activeSegment === index ? "#fef2f2" : "white"}
                  stroke={activeSegment === index ? "#ef4444" : "#e5e7eb"}
                  strokeWidth={activeSegment === index ? "2" : "1"}
                  className="cursor-pointer"
                  onClick={() => setActiveSegment(index)}
                />
              ))}
              
              {/* Icon Nodes */}
              {segments.map((segment, index) => {
                const pos = getIconPosition(index);
                const IconComponent = segment.icon;
                
                return (
                  <g key={`mobile-icon-${index}`}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="12"
                      fill="white"
                      stroke={activeSegment === index ? "#ef4444" : "#d1d5db"}
                      strokeWidth="1"
                    />
                    <foreignObject
                      x={pos.x - 8}
                      y={pos.y - 8}
                      width="16"
                      height="16"
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent 
                          size={12} 
                          className={activeSegment === index ? "text-red-500" : "text-gray-600"}
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>
          
          {/* Mobile Accordion */}
          <div className="space-y-4">
            {segments.map((segment, index) => (
              <div
                key={segment.id}
                className={`bg-white rounded-2xl border cursor-pointer transition-all duration-200 ${
                  activeSegment === index ? 'border-red-400 shadow-xl' : 'border-gray-200 shadow-lg'
                }`}
                onClick={() => setActiveSegment(activeSegment === index ? -1 : index)}
              >
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <segment.icon 
                      size={20} 
                      className={activeSegment === index ? "text-red-500" : "text-gray-600"} 
                    />
                    <h3 className={`font-bold ${
                      activeSegment === index ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                {activeSegment === index && (
                  <div className="px-5 pb-5 animate-accordion-down">
                    <ul className="space-y-2 ml-8">
                      {segment.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2 text-sm text-gray-600">
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