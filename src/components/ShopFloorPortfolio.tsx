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
  const ringWidth = outerRadius - innerRadius;
  const iconRadius = innerRadius + ringWidth * 0.55; // Move icons into middle of ring for full visibility
  const labelRadius = innerRadius + ringWidth * 0.85; // Closer to outer edge to avoid overlap

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
                
                {/* Segments */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  const centroid = getSegmentCentroid(index);
                  const iconAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                  const iconX = centerX + Math.cos(iconAngle) * iconRadius;
                  const iconY = centerY + Math.sin(iconAngle) * iconRadius;
                  const IconComponent = segment.icon;
                  
                  // Label positioning for upright text
                  const labelAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                  const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                  const labelY = centerY + Math.sin(labelAngle) * labelRadius;
                  
                  return (
                    <g key={segment.id}>
                      {/* Main segment path */}
                      <path
                        id={`segment-${index}`}
                        d={getSegmentPath(index)}
                        fill={isActive ? "#fef2f2" : "white"}
                        stroke={isActive ? "#ef4444" : "#e5e7eb"}
                        strokeWidth={isActive ? "3" : "1"}
                        className="cursor-pointer transition-all duration-150 ease-out hover:fill-red-50 hover:stroke-red-400 hover:stroke-2"
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
                      
                      {/* Icon on segment */}
                      <g className="pointer-events-none">
                        <circle
                          cx={iconX}
                          cy={iconY}
                          r="24"
                          fill="white"
                          stroke={isActive ? "#ef4444" : "#d1d5db"}
                          strokeWidth={isActive ? "2" : "1"}
                          className="transition-all duration-150"
                          style={{
                            transform: isActive ? 'scale(1.1)' : 'scale(1)',
                            transformOrigin: `${iconX}px ${iconY}px`
                          }}
                        />
                        <foreignObject
                          x={iconX - 12}
                          y={iconY - 12}
                          width="24"
                          height="24"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent 
                              size={24} 
                              className={`transition-all duration-150 ${
                                isActive ? "text-red-500" : "text-gray-600"
                              }`}
                            />
                          </div>
                        </foreignObject>
                      </g>
                      
                      {/* Upright segment label with Title Case and proper sizing */}
                      <g className="pointer-events-none">
                        {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ? (
                          // Multi-line labels for segments with "/"
                          <>
                            <text
                              x={labelX}
                              y={labelY - 8}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className={`font-medium tracking-tight transition-all duration-150 ${
                                isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-600"
                              }`}
                              style={{ 
                                fontSize: window.innerWidth < 768 ? '13px' : window.innerWidth < 1024 ? '14px' : '15px',
                                fontWeight: isActive ? '600' : '500',
                                opacity: isActive ? 1.0 : 0.8,
                                filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                                letterSpacing: '-0.025em'
                              }}
                            >
                              {segment.title.split(' / ')[0]} /
                            </text>
                            <text
                              x={labelX}
                              y={labelY + 8}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className={`font-medium tracking-tight transition-all duration-150 ${
                                isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-600"
                              }`}
                              style={{ 
                                fontSize: window.innerWidth < 768 ? '13px' : window.innerWidth < 1024 ? '14px' : '15px',
                                fontWeight: isActive ? '600' : '500',
                                opacity: isActive ? 1.0 : 0.8,
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
                            className={`font-medium tracking-tight transition-all duration-150 ${
                              isActive ? "fill-gray-900 drop-shadow-sm" : "fill-gray-600"
                            }`}
                            style={{ 
                              fontSize: window.innerWidth < 768 ? '13px' : window.innerWidth < 1024 ? '14px' : '15px',
                              fontWeight: isActive ? '600' : '500',
                              opacity: isActive ? 1.0 : 0.8,
                              filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                              letterSpacing: '-0.025em'
                            }}
                          >
                            {window.innerWidth < 768 ? segment.shortTitle : segment.title}
                          </text>
                        )}
                      </g>
                    </g>
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

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-12">
            <svg width="320" height="320" viewBox="0 0 640 640">
              <defs>
                {/* Glow filter */}
                <filter id="mobile-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
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
              
              {/* Connector lines for mobile */}
              {segments.map((segment, index) => {
                const isActive = activeSegment === index;
                const angle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                const startX = centerX + Math.cos(angle) * (outerRadius * 0.5); // Scale down for mobile
                const startY = centerY + Math.sin(angle) * (outerRadius * 0.5);
                
                // Mobile cards position (simplified - just show lines going outward)
                const endX = centerX + Math.cos(angle) * (outerRadius * 0.7);
                const endY = centerY + Math.sin(angle) * (outerRadius * 0.7);
                
                return (
                  <line
                    key={`mobile-connector-${index}`}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={isActive ? "#ef4444" : "#d1d5db"}
                    strokeWidth={isActive ? "1.5" : "0.5"}
                    className="transition-all duration-150"
                    opacity="0.4"
                  />
                );
              })}
              
              {/* Segments */}
              {segments.map((segment, index) => {
                const isActive = activeSegment === index;
                const iconAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                const mobileIconRadius = innerRadius; // Exactly at center circle border for mobile too
                const iconX = centerX + Math.cos(iconAngle) * mobileIconRadius;
                const iconY = centerY + Math.sin(iconAngle) * mobileIconRadius;
                
                const labelAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                const mobileLabelRadius = innerRadius + ringWidth * 0.80; // Closer to outer edge for mobile
                const labelX = centerX + Math.cos(labelAngle) * mobileLabelRadius;
                const labelY = centerY + Math.sin(labelAngle) * mobileLabelRadius;
                
                return (
                      <g key={segment.id}>
                        <path
                          d={getSegmentPath(index)}
                          fill={isActive ? "#fef2f2" : "white"}
                          stroke={isActive ? "#ef4444" : "#e5e7eb"}
                          strokeWidth={isActive ? "2" : "1"}
                          className="cursor-pointer transition-all duration-150 hover:fill-red-50 hover:stroke-red-400"
                          onClick={() => setActiveSegment(index)}
                        />
                        
                        {/* Mobile segment icon */}
                        <g className="pointer-events-none">
                          <circle
                            cx={iconX}
                            cy={iconY}
                            r="16"
                            fill="white"
                            stroke={isActive ? "#ef4444" : "#d1d5db"}
                            strokeWidth="1"
                          />
                          <foreignObject
                            x={iconX - 10}
                            y={iconY - 10}
                            width="20"
                            height="20"
                            className="pointer-events-none"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <segment.icon 
                                size={18} 
                                className={isActive ? "text-red-500" : "text-gray-600"}
                              />
                            </div>
                          </foreignObject>
                        </g>
                        
                        {/* Upright mobile label with multi-line support */}
                        <g className="pointer-events-none">
                          {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ? (
                            // Multi-line labels for segments with "/"
                            <>
                              <text
                                x={labelX}
                                y={labelY - 6}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className={`text-xs font-medium tracking-tight transition-all duration-150 ${
                                  isActive ? "fill-gray-900" : "fill-gray-600"
                                }`}
                                style={{ 
                                  fontSize: '9px',
                                  fontWeight: isActive ? '600' : '500',
                                  opacity: isActive ? 1.0 : 0.8
                                }}
                              >
                                {segment.title.split(' / ')[0]}/
                              </text>
                              <text
                                x={labelX}
                                y={labelY + 6}
                                textAnchor="middle"
                                dominantBaseline="central"
                                className={`text-xs font-medium tracking-tight transition-all duration-150 ${
                                  isActive ? "fill-gray-900" : "fill-gray-600"
                                }`}
                                style={{ 
                                  fontSize: '8px',
                                  fontWeight: isActive ? '600' : '500',
                                  opacity: isActive ? 1.0 : 0.8
                                }}
                              >
                                {segment.title.split(' / ')[1].toLowerCase()}
                              </text>
                            </>
                          ) : (
                            // Single line labels
                            <text 
                              x={labelX}
                              y={labelY}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className={`text-xs font-medium tracking-tight transition-all duration-150 ${
                                isActive ? "fill-gray-900" : "fill-gray-600"
                              }`}
                              style={{ 
                                fontSize: '10px',
                                fontWeight: isActive ? '600' : '500',
                                opacity: isActive ? 1.0 : 0.8
                              }}
                            >
                              {segment.shortTitle}
                            </text>
                          )}
                        </g>
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
                    <div>
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