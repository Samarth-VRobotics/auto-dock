import React, { useState, useEffect, useRef } from 'react';
import { Truck, Settings, Package, Factory, FlaskConical, FileText, Warehouse, Box } from 'lucide-react';

const ShopFloorPortfolio = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
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
  const ringWidth = outerRadius - innerRadius;
  const iconRadius = innerRadius; // Icons positioned exactly on inner circle circumference
  const labelRadius = innerRadius + ringWidth * 0.6; // Labels inside wedges, above icons

  const getSegmentPath = (index: number) => {
    const angleStart = (index * 60 - 90 - 60) * Math.PI / 180; // Added -60 for one segment anticlockwise rotation
    const angleEnd = ((index + 1) * 60 - 90 - 60) * Math.PI / 180; // Added -60 for one segment anticlockwise rotation
    
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

  const getSegmentCentroid = (index: number) => {
    const angle = (index * 60 - 90 + 30 - 60) * Math.PI / 180; // Added -60 for one segment anticlockwise rotation
    const radius = (innerRadius + outerRadius) / 2;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    };
  };

  const getConnectorPath = (index: number) => {
    const segment = segments[index];
    const angle = (index * 60 - 90 + 30 - 60) * Math.PI / 180; // Added -60 for one segment anticlockwise rotation
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
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 px-4 leading-tight">
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
                  {/* Glow filter */}
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
                  cx={centerX}
                  cy={centerY}
                  r={outerRadius}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  opacity="0.3"
                />
                
                {/* Connector lines removed per requirements */}
                
                {/* Segments - base layer (ring/slices only) */}
                <g id="pie-slices">
                  {segments.map((segment, index) => {
                    const isActive = activeSegment === index;
                    const centroid = getSegmentCentroid(index);
                    
                    return (
                      <path
                        key={`segment-${index}`}
                        id={`segment-${index}`}
                        d={getSegmentPath(index)}
                        fill={isActive ? "#fef2f2" : "white"}
                        stroke={isActive ? "#ef4444" : "#e5e7eb"}
                        strokeWidth={isActive ? "3" : "1"}
                        className="cursor-pointer transition-all duration-150 ease-out hover:fill-red-50 hover:stroke-red-400 hover:stroke-2"
                        style={{
                          transform: isActive ? 'scale(1.07)' : 'scale(1)',
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
                    );
                  })}
                </g>
                
                {/* Center circle - middle layer */}
                <g id="center">
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
                </g>
                
                {/* Labels and Icons - foreground layer */}
                <g id="labels-icons">
                  {segments.map((segment, index) => {
                    const isActive = activeSegment === index;
                    const iconAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                    const iconX = centerX + Math.cos(iconAngle) * iconRadius;
                    const iconY = centerY + Math.sin(iconAngle) * iconRadius;
                    const IconComponent = segment.icon;
                    
                    // Label positioning inside wedges, above icons
                    const labelAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                    const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                    const labelY = centerY + Math.sin(labelAngle) * labelRadius;
                    
                    // Enhanced icon sizing for better mobile/tablet experience
                    const iconSize = window.innerWidth < 768 ? 40 : window.innerWidth < 1024 ? 48 : 52;
                    const iconBgRadius = iconSize / 2 + 4;
                    
                    return (
                      <g key={`icon-label-${index}`} className="pointer-events-none">
                        {/* Icon with background circle - positioned on inner circle circumference */}
                        <circle
                          cx={iconX}
                          cy={iconY}
                          r={iconBgRadius}
                          fill="white"
                          stroke={isActive ? "#ef4444" : "#d1d5db"}
                          strokeWidth={isActive ? "3" : "2"}
                          className="transition-all duration-150"
                          style={{
                            transform: isActive ? 'scale(1.07)' : 'scale(1)',
                            transformOrigin: `${iconX}px ${iconY}px`
                          }}
                        />
                        <foreignObject
                          x={iconX - iconSize/2}
                          y={iconY - iconSize/2}
                          width={iconSize}
                          height={iconSize}
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent 
                              size={iconSize * 0.7} 
                              className={`transition-all duration-150 ${
                                isActive ? "text-red-500" : "text-gray-600"
                              }`}
                            />
                          </div>
                        </foreignObject>
                        
                        {/* Upright segment labels inside wedges, Title Case, bold */}
                        {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ? (
                          // Multi-line labels for segments with "/"
                          <>
                            <text
                              x={labelX}
                              y={labelY - 10}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className={`font-bold tracking-tight transition-all duration-150 ${
                                isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"
                              }`}
                              style={{ 
                                fontSize: window.innerWidth < 768 ? '15px' : window.innerWidth < 1024 ? '16px' : '18px',
                                fontWeight: '700',
                                opacity: isActive ? 1.0 : 0.9,
                                filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                                letterSpacing: '-0.025em'
                              }}
                            >
                              {segment.title.split(' / ')[0]} /
                            </text>
                            <text
                              x={labelX}
                              y={labelY + 10}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className={`font-bold tracking-tight transition-all duration-150 ${
                                isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"
                              }`}
                              style={{ 
                                fontSize: window.innerWidth < 768 ? '15px' : window.innerWidth < 1024 ? '16px' : '18px',
                                fontWeight: '700',
                                opacity: isActive ? 1.0 : 0.9,
                                filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                                letterSpacing: '-0.025em'
                              }}
                            >
                              {segment.title.split(' / ')[1]}
                            </text>
                          </>
                        ) : (
                          // Single line labels in Title Case
                          <text 
                            x={labelX}
                            y={labelY}
                            textAnchor="middle"
                            dominantBaseline="central"
                            className={`font-bold tracking-tight transition-all duration-150 ${
                              isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"
                            }`}
                            style={{ 
                              fontSize: window.innerWidth < 768 ? '15px' : window.innerWidth < 1024 ? '16px' : '18px',
                              fontWeight: '700',
                              opacity: isActive ? 1.0 : 0.9,
                              filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                              letterSpacing: '-0.025em'
                            }}
                          >
                            {window.innerWidth < 768 ? segment.shortTitle : segment.title}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
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
                          <div className="mb-4">
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
                          <div className="mb-4">
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

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-12 md:mb-16 relative">
            {/* Hover Description Popup */}
            {hoveredSegment !== null && (
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10 bg-white rounded-xl border border-gray-200 shadow-xl p-4 max-w-xs animate-fade-in"
                style={{ 
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                }}
              >
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">
                    {segments[hoveredSegment].title}
                  </h4>
                  <ul className="space-y-1.5">
                    {segments[hoveredSegment].description.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2 text-xs text-gray-600">
                        <span className="mt-1 w-1 h-1 rounded-full bg-red-500 flex-shrink-0"></span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-200 rotate-45"></div>
              </div>
            )}
            
            <svg 
              width="100%" 
              height="500" 
              viewBox="0 0 640 640" 
              className="drop-shadow-lg max-w-md md:max-w-xl"
              style={{ minHeight: '450px' }}
            >
              <defs>
                {/* Enhanced Glow filter */}
                <filter id="mobile-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background Circle */}
              <circle
                cx={centerX}
                cy={centerY}
                r={outerRadius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                opacity="0.4"
              />
              
              {/* Segments - Enhanced for mobile visibility */}
              <g id="mobile-pie-slices">
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const isHovered = hoveredSegment === index;
                  const centroid = getSegmentCentroid(index);
                  
                  return (
                    <path
                      key={`mobile-segment-${index}`}
                      d={getSegmentPath(index)}
                      fill={isActive ? "#fef2f2" : isHovered ? "#fef7f7" : "white"}
                      stroke={isActive ? "#ef4444" : isHovered ? "#f87171" : "#e5e7eb"}
                      strokeWidth={isActive ? "4" : isHovered ? "3" : "2"}
                      className="cursor-pointer transition-all duration-200 ease-out"
                      style={{
                        transform: isActive ? 'scale(1.08)' : isHovered ? 'scale(1.04)' : 'scale(1)',
                        transformOrigin: `${centroid.x}px ${centroid.y}px`,
                        filter: isActive ? 'url(#mobile-glow)' : 'none'
                      }}
                      onClick={() => setActiveSegment(index)}
                      onTouchStart={() => setHoveredSegment(index)}
                      onTouchEnd={() => setHoveredSegment(null)}
                      onMouseEnter={() => setHoveredSegment(index)}
                      onMouseLeave={() => setHoveredSegment(null)}
                    />
                  );
                })}
              </g>
              
              {/* Center Circle - Enhanced for mobile */}
              <circle
                cx={centerX}
                cy={centerY}
                r={innerRadius}
                fill="white"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              
              {/* Center Text - Enhanced for mobile */}
              <text
                x={centerX}
                y={centerY - 12}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold fill-gray-800"
                style={{ fontSize: window.innerWidth < 768 ? '18px' : '20px', fontWeight: '800' }}
              >
                Autonomous
              </text>
              <text
                x={centerX}
                y={centerY + 18}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold fill-gray-800"
                style={{ fontSize: window.innerWidth < 768 ? '18px' : '20px', fontWeight: '800' }}
              >
                Factories
              </text>
              
              {/* Labels and Icons - Enhanced for mobile */}
              <g id="mobile-labels-icons">
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const isHovered = hoveredSegment === index;
                  const iconAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                  const iconX = centerX + Math.cos(iconAngle) * iconRadius;
                  const iconY = centerY + Math.sin(iconAngle) * iconRadius;
                  const IconComponent = segment.icon;
                  
                  // Label positioning - consistent with desktop
                  const labelAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                  const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                  const labelY = centerY + Math.sin(labelAngle) * labelRadius;
                  
                  // Enhanced icon sizing for better mobile interaction
                  const iconSize = window.innerWidth < 768 ? 44 : 52;
                  const iconBgRadius = iconSize / 2 + 6;
                  
                  return (
                    <g key={`mobile-icon-label-${index}`} className="pointer-events-none">
                      {/* Icon with background circle - enhanced for mobile */}
                      <circle
                        cx={iconX}
                        cy={iconY}
                        r={iconBgRadius}
                        fill="white"
                        stroke={isActive ? "#ef4444" : isHovered ? "#f87171" : "#d1d5db"}
                        strokeWidth={isActive ? "4" : isHovered ? "3" : "2"}
                        className="transition-all duration-200"
                        style={{
                          transform: isActive ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: `${iconX}px ${iconY}px`,
                          filter: isActive ? 'drop-shadow(0 4px 8px rgba(239, 68, 68, 0.25))' : 'none'
                        }}
                      />
                      <foreignObject
                        x={iconX - iconSize/2}
                        y={iconY - iconSize/2}
                        width={iconSize}
                        height={iconSize}
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <IconComponent 
                            size={iconSize * 0.65} 
                            className={`transition-all duration-200 ${
                              isActive ? "text-red-500" : isHovered ? "text-red-400" : "text-gray-600"
                            }`}
                          />
                        </div>
                      </foreignObject>
                      
                      {/* Enhanced segment labels for mobile visibility */}
                      {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ? (
                        // Multi-line labels for segments with "/"
                        <>
                          <text
                            x={labelX}
                            y={labelY - 10}
                            textAnchor="middle"
                            dominantBaseline="central"
                            className={`font-bold tracking-tight transition-all duration-200 ${
                              isActive ? "fill-gray-900 drop-shadow-sm" : isHovered ? "fill-gray-800" : "fill-gray-700"
                            }`}
                            style={{ 
                              fontSize: window.innerWidth < 768 ? '14px' : '16px',
                              fontWeight: '700',
                              opacity: isActive ? 1.0 : isHovered ? 0.95 : 0.9,
                              filter: isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' : 'none',
                              letterSpacing: '-0.025em'
                            }}
                          >
                            {segment.title.split(' / ')[0]} /
                          </text>
                          <text
                            x={labelX}
                            y={labelY + 10}
                            textAnchor="middle"
                            dominantBaseline="central"
                            className={`font-bold tracking-tight transition-all duration-200 ${
                              isActive ? "fill-gray-900 drop-shadow-sm" : isHovered ? "fill-gray-800" : "fill-gray-700"
                            }`}
                            style={{ 
                              fontSize: window.innerWidth < 768 ? '14px' : '16px',
                              fontWeight: '700',
                              opacity: isActive ? 1.0 : isHovered ? 0.95 : 0.9,
                              filter: isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' : 'none',
                              letterSpacing: '-0.025em'
                            }}
                          >
                            {segment.title.split(' / ')[1]}
                          </text>
                        </>
                      ) : (
                        // Single line labels - enhanced for mobile
                        <text 
                          x={labelX}
                          y={labelY}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className={`font-bold tracking-tight transition-all duration-200 ${
                            isActive ? "fill-gray-900 drop-shadow-sm" : isHovered ? "fill-gray-800" : "fill-gray-700"
                          }`}
                          style={{ 
                            fontSize: window.innerWidth < 768 ? '14px' : '16px',
                            fontWeight: '700',
                            opacity: isActive ? 1.0 : isHovered ? 0.95 : 0.9,
                            filter: isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' : 'none',
                            letterSpacing: '-0.025em'
                          }}
                        >
                          {window.innerWidth < 768 ? segment.shortTitle : segment.title}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
          
          {/* Enhanced Mobile & Tablet Cards */}
          <div className="space-y-4 md:space-y-6 px-4">
            {segments.map((segment, index) => {
              const isActive = activeSegment === index;
              const IconComponent = segment.icon;
              
              return (
                <div
                  key={segment.id}
                  className={`bg-white rounded-2xl md:rounded-3xl border cursor-pointer transition-all duration-150 ${
                    isActive ? 'border-red-400 shadow-xl scale-[1.02]' : 'border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => setActiveSegment(activeSegment === index ? -1 : index)}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 md:p-4 rounded-xl ${
                        isActive ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-600'
                      } transition-colors duration-150`}>
                        <IconComponent size={24} className="md:w-7 md:h-7" />
                      </div>
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold leading-tight ${
                          isActive ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {segment.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 animate-accordion-down">
                      <ul className="space-y-3 md:space-y-4 ml-2">
                        {segment.description.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start space-x-4 text-base md:text-lg text-gray-600">
                            <span className="mt-2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500 flex-shrink-0"></span>
                            <span className="leading-relaxed font-medium">{point}</span>
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