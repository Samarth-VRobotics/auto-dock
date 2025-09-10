import React, { useState, useEffect, useRef } from 'react';
import { Truck, Settings, Package, Factory, FlaskConical, FileText, Warehouse, Box } from 'lucide-react';
import shopFloorBg from '@/assets/shop-floor-automation-bg.jpg';
const ShopFloorPortfolio = () => {
  const [activeSegment, setActiveSegment] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const segments = [{
    id: 'inbound',
    title: 'Inbound / Goods Receipt',
    shortTitle: 'Inbound',
    icon: FileText,
    description: ['Docking & Unloading', 'Verification & Scanning', 'Pallet Handling & Transport'],
    side: 'left',
    slot: 0
  }, {
    id: 'warehouse',
    title: 'Warehouse',
    shortTitle: 'Warehouse',
    icon: Warehouse,
    description: ['Automated Storage & Retrieval', 'Inventory & Condition Monitoring', 'Replenishment Operations'],
    side: 'right',
    slot: 0
  }, {
    id: 'dispensing',
    title: 'Dispensing / Staging',
    shortTitle: 'Dispensing',
    icon: Box,
    description: ['Picking & Kitting', 'Buffer & Line-side Management', 'Cross-docking Operations'],
    side: 'right',
    slot: 1
  }, {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortTitle: 'Manufacturing',
    icon: Settings,
    description: ['Material Handling', 'Assembly & Processing', 'Packaging & Batch Processing'],
    side: 'right',
    slot: 2
  }, {
    id: 'lab',
    title: 'Lab Automation',
    shortTitle: 'Lab',
    icon: FlaskConical,
    description: ['Automated Inspection & Testing', 'Sorting & Defect Isolation', 'Compliance verification'],
    side: 'left',
    slot: 2
  }, {
    id: 'outbound',
    title: 'Outbound / Dispatch',
    shortTitle: 'Outbound',
    icon: Truck,
    description: ['Order Picking & Palletizing', 'Load Sequencing & Transport', 'Truck Loading & Final Verification'],
    side: 'left',
    slot: 1
  }];
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
    const cardCenterY = 120 + segment.slot * 200 + 100;
    const cardEdgeX = isLeft ? 80 + 280 : 540;

    // Two-point polyline for clean routing
    const midX = isLeft ? startX - 50 : startX + 50;
    return `M ${startX} ${startY} L ${midX} ${startY} L ${cardEdgeX} ${cardCenterY}`;
  };

  // Simple interaction handlers for hover and click
  const handleSegmentInteraction = (index: number, isHover: boolean = false) => {
    if (isHover) {
      setHoveredSegment(index);
    } else {
      setActiveSegment(index);
    }
  };

  const handleInteractionEnd = () => {
    setHoveredSegment(null);
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
  return <section className="py-24 relative overflow-hidden" style={{
    background: `
      linear-gradient(135deg, rgba(246, 248, 251, 0.98) 0%, rgba(240, 244, 248, 0.98) 100%),
      url(${shopFloorBg})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `
          linear-gradient(135deg, rgba(246, 248, 251, 0.98) 0%, rgba(240, 244, 248, 0.98) 100%),
          url(${shopFloorBg}),
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.02) 0%, transparent 50%)
        `,
    filter: 'brightness(1.1) contrast(0.9)'
  }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6 px-4 leading-relaxed">
            Our Integrated Shop Floor<br className="hidden sm:block" /> Automation Portfolio
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div className="relative max-w-7xl mx-auto h-[700px]" aria-live="polite" aria-label="Interactive shop floor automation portfolio diagram">
            {/* SVG Circular Diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg ref={svgRef} width="640" height="640" viewBox="0 0 640 640" className="overflow-visible">
                <defs>
                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background Circle - red border for mobile/tablet */}
                <circle cx={centerX} cy={centerY} r={outerRadius} fill="none" stroke={window.innerWidth < 1024 ? "#ef4444" : "#e5e7eb"} strokeWidth={window.innerWidth < 1024 ? "2" : "1"} opacity={window.innerWidth < 1024 ? "0.8" : "0.3"} />
                
                {/* Connector lines removed per requirements */}
                
                {/* Segments - base layer (ring/slices only) */}
                <g id="pie-slices">
                  {segments.map((segment, index) => {
                  const isHighlighted = hoveredSegment === index;
                  const centroid = getSegmentCentroid(index);
                  return <path key={`segment-${index}`} id={`segment-${index}`} d={getSegmentPath(index)} fill={hoveredSegment === index ? "#fef2f2" : "white"} stroke={hoveredSegment === index ? "#ef4444" : "#e5e7eb"} strokeWidth={hoveredSegment === index ? "3" : "1"} className="cursor-pointer transition-all duration-150 ease-out hover:fill-red-50 hover:stroke-red-400 hover:stroke-2 focus:outline-none" style={{
                    transform: hoveredSegment === index ? 'scale(1.07)' : 'scale(1)',
                    transformOrigin: `${centroid.x}px ${centroid.y}px`,
                    filter: hoveredSegment === index ? 'url(#glow)' : 'none'
                  }} onMouseEnter={() => handleSegmentInteraction(index, true)} onFocus={() => handleSegmentInteraction(index, true)} onMouseLeave={handleInteractionEnd} onBlur={handleInteractionEnd} tabIndex={0} role="button" aria-label={`${segment.title} — ${segment.description.join('; ')}`} aria-controls={`card-${segment.id}`} aria-expanded={hoveredSegment === index} />;
                })}
                </g>
                
                {/* Center circle - middle layer */}
                <g id="center">
                  <circle cx={centerX} cy={centerY} r={innerRadius} fill="white" stroke="#e5e7eb" strokeWidth="2" />
                  
                  {/* Center text */}
                  <text x={centerX} y={centerY - 10} textAnchor="middle" dominantBaseline="middle" className="font-bold fill-gray-800" style={{
                  fontSize: '20px',
                  fontWeight: '800'
                }}>
                    Autonomous
                  </text>
                  <text x={centerX} y={centerY + 15} textAnchor="middle" dominantBaseline="middle" className="font-bold fill-gray-800" style={{
                  fontSize: '20px',
                  fontWeight: '800'
                }}>
                    Factories
                  </text>
                </g>
                
                {/* Labels and Icons - foreground layer */}
                <g id="labels-icons">
                  {segments.map((segment, index) => {
                  const isHighlighted = hoveredSegment === index;
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
                  return <g key={`icon-label-${index}`} className="pointer-events-none">
                        {/* Icon with background circle - positioned on inner circle circumference */}
                        <circle cx={iconX} cy={iconY} r={iconBgRadius} fill="white" stroke={isHighlighted ? "#ef4444" : "#d1d5db"} strokeWidth={isHighlighted ? "3" : "2"} className="transition-all duration-150" style={{
                      transform: isHighlighted ? 'scale(1.07)' : 'scale(1)',
                      transformOrigin: `${iconX}px ${iconY}px`
                    }} />
                        <foreignObject x={iconX - iconSize / 2} y={iconY - iconSize / 2} width={iconSize} height={iconSize} className="pointer-events-none">
                          <div className="w-full h-full flex items-center justify-center">
                            <IconComponent size={iconSize * 0.7} className={`transition-all duration-150 ${isHighlighted ? "text-red-500" : "text-gray-600"}`} />
                          </div>
                        </foreignObject>
                        
                        {/* Upright segment labels inside wedges, Title Case, bold */}
                        {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ?
                    // Multi-line labels for segments with "/"
                    <>
                            <text x={labelX} y={labelY - 10} textAnchor="middle" dominantBaseline="central" className={`font-bold tracking-tight transition-all duration-150 ${isHighlighted ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"}`} style={{
                        fontSize: window.innerWidth < 768 ? '12px' : window.innerWidth < 1024 ? '12.8px' : '14.4px',
                        fontWeight: '700',
                        opacity: isHighlighted ? 1.0 : 0.9,
                        filter: isHighlighted ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                        letterSpacing: '-0.025em'
                      }}>
                              {segment.title.split(' / ')[0]} /
                            </text>
                            <text x={labelX} y={labelY + 10} textAnchor="middle" dominantBaseline="central" className={`font-bold tracking-tight transition-all duration-150 ${isHighlighted ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"}`} style={{
                        fontSize: window.innerWidth < 768 ? '12px' : window.innerWidth < 1024 ? '12.8px' : '14.4px',
                        fontWeight: '700',
                        opacity: isHighlighted ? 1.0 : 0.9,
                        filter: isHighlighted ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                        letterSpacing: '-0.025em'
                      }}>
                              {segment.title.split(' / ')[1]}
                            </text>
                          </> :
                    // Single line labels in Title Case
                     <text x={labelX} y={labelY} textAnchor="middle" dominantBaseline="central" className={`font-bold tracking-tight transition-all duration-150 ${isHighlighted ? "fill-gray-900 drop-shadow-sm" : "fill-gray-700"}`} style={{
                      fontSize: window.innerWidth < 768 ? '12px' : window.innerWidth < 1024 ? '12.8px' : '14.4px',
                      fontWeight: '700',
                      opacity: isHighlighted ? 1.0 : 0.9,
                      filter: isHighlighted ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' : 'none',
                      letterSpacing: '-0.025em'
                    }}>
                            {window.innerWidth < 768 ? segment.shortTitle : segment.title}
                          </text>}
                      </g>;
                })}
                </g>
              </svg>
            </div>
            
            {/* Left Card Stack */}
            <div className="absolute left-0 top-0 w-80 h-full">
              <div className="flex flex-col justify-center h-full py-20 space-y-7">
                {segments.filter(segment => segment.side === 'left').sort((a, b) => a.slot - b.slot).map((segment, gridIndex) => {
                 const segmentIndex = segments.findIndex(s => s.id === segment.id);
                 const isHighlighted = hoveredSegment === segmentIndex;
                 const IconComponent = segment.icon;
                 return <div key={`left-${segment.id}`} className="flex items-center">
                        <div id={`card-${segment.id}`} className={`bg-white rounded-2xl p-6 border transition-all duration-150 w-full min-h-[180px] flex flex-col justify-start ${isHighlighted ? 'border-red-400 shadow-xl bg-red-50/20' : 'border-gray-200 shadow-lg hover:shadow-xl'}`} style={{
                    boxShadow: isHighlighted ? '0 8px 32px rgba(239, 68, 68, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.06)'
                  }} onMouseEnter={() => handleSegmentInteraction(segmentIndex, true)} onMouseLeave={handleInteractionEnd}>
                          <div className="mb-4">
                            <h3 className={`text-lg font-bold transition-colors ${isHighlighted ? 'text-red-600' : 'text-gray-900'}`}>
                              {segment.title}
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {segment.description.map((point, pointIndex) => <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isHighlighted ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                <span className="leading-relaxed">{point}</span>
                              </li>)}
                          </ul>
                        </div>
                      </div>;
              })}
              </div>
            </div>
            
            {/* Right Card Stack */}
            <div className="absolute right-0 top-0 w-80 h-full">
              <div className="flex flex-col justify-center h-full py-20 space-y-7">
                {segments.filter(segment => segment.side === 'right').sort((a, b) => a.slot - b.slot).map((segment, gridIndex) => {
                 const segmentIndex = segments.findIndex(s => s.id === segment.id);
                 const isHighlighted = hoveredSegment === segmentIndex;
                 const IconComponent = segment.icon;
                 return <div key={`right-${segment.id}`} className="flex items-center">
                        <div id={`card-${segment.id}`} className={`bg-white rounded-2xl p-6 border transition-all duration-150 w-full min-h-[180px] flex flex-col justify-start ${isHighlighted ? 'border-red-400 shadow-xl bg-red-50/20' : 'border-gray-200 shadow-lg hover:shadow-xl'}`} style={{
                    boxShadow: isHighlighted ? '0 8px 32px rgba(239, 68, 68, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.06)'
                  }} onMouseEnter={() => handleSegmentInteraction(segmentIndex, true)} onMouseLeave={handleInteractionEnd}>
                          <div className="mb-4">
                            <h3 className={`text-lg font-bold transition-colors ${isHighlighted ? 'text-red-600' : 'text-gray-900'}`}>
                              {segment.title}
                            </h3>
                          </div>
                          <ul className="space-y-2.5">
                            {segment.description.map((point, pointIndex) => <li key={pointIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isHighlighted ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                                <span className="leading-relaxed">{point}</span>
                              </li>)}
                          </ul>
                        </div>
                      </div>;
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout - Larger chart, no highlighting */}
        <div className="lg:hidden">
          <div className="flex justify-center relative">
            
            <svg width="100%" height="auto" viewBox="80 80 480 480" className="drop-shadow-lg max-w-full w-full touch-manipulation" style={{ maxWidth: '100vw' }}>
              <defs>
                {/* Subtle Glow filter */}
                <filter id="mobile-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background Circle */}
              <circle cx={centerX} cy={centerY} r={outerRadius} fill="none" stroke="#e5e7eb" strokeWidth="2" opacity="0.4" />
              
              {/* Segments - Neutral colors, no highlighting */}
              <g id="mobile-pie-slices">
                {segments.map((segment, index) => {
                const centroid = getSegmentCentroid(index);
                return <path key={`mobile-segment-${index}`} d={getSegmentPath(index)} fill="white" stroke="#e5e7eb" strokeWidth="2" className="transition-none" style={{
                  transform: 'scale(1)',
                  transformOrigin: `${centroid.x}px ${centroid.y}px`
                }} />;
              })}
              </g>
              
              {/* Center Circle */}
              <circle cx={centerX} cy={centerY} r={innerRadius} fill="white" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Center Text */}
              <text x={centerX} y={centerY - 12} textAnchor="middle" dominantBaseline="middle" className="font-bold fill-gray-800" style={{
              fontSize: window.innerWidth < 768 ? '20px' : '24px',
              fontWeight: '800'
            }}>
                Autonomous
              </text>
              <text x={centerX} y={centerY + 18} textAnchor="middle" dominantBaseline="middle" className="font-bold fill-gray-800" style={{
              fontSize: window.innerWidth < 768 ? '20px' : '24px',
              fontWeight: '800'
            }}>
                Factories
              </text>
              
              {/* Labels and Icons - Neutral colors */}
              <g id="mobile-labels-icons">
                {segments.map((segment, index) => {
                const iconAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                const iconX = centerX + Math.cos(iconAngle) * iconRadius;
                const iconY = centerY + Math.sin(iconAngle) * iconRadius;
                const IconComponent = segment.icon;

                // Label positioning - consistent with desktop
                const labelAngle = (index * 60 - 90 + 30 - 60) * Math.PI / 180;
                const labelX = centerX + Math.cos(labelAngle) * labelRadius;
                const labelY = centerY + Math.sin(labelAngle) * labelRadius;

                // Larger icon sizing for better mobile visibility
                const iconSize = window.innerWidth < 768 ? 60 : 70;
                const iconBgRadius = iconSize / 2 + 8;
                return <g key={`mobile-icon-label-${index}`} className="pointer-events-none">
                      {/* Icon with background circle - red styling for mobile/tablet */}
                      <circle cx={iconX} cy={iconY} r={iconBgRadius} fill="#fef2f2" stroke="#ef4444" strokeWidth="2" className="transition-none" />
                      <foreignObject x={iconX - iconSize / 2} y={iconY - iconSize / 2} width={iconSize} height={iconSize} className="pointer-events-none">
                        <div className="w-full h-full flex items-center justify-center">
                          <IconComponent size={iconSize * 0.6} className="text-red-500" strokeWidth={2} />
                        </div>
                      </foreignObject>
                      
                      {/* Segment labels - neutral colors */}
                      {segment.title.includes(' / ') && !segment.title.includes('Manufacturing') && !segment.title.includes('Warehouse') && !segment.title.includes('Lab') ?
                  // Multi-line labels for segments with "/"
                  <>
                          <text x={labelX} y={labelY - 12} textAnchor="middle" dominantBaseline="central" className="font-bold tracking-tight fill-gray-700" style={{
                      fontSize: window.innerWidth < 768 ? '10px' : '12px',
                      fontWeight: '700',
                      letterSpacing: '-0.025em'
                    }}>
                            {segment.title.split(' / ')[0]} /
                          </text>
                          <text x={labelX} y={labelY + 12} textAnchor="middle" dominantBaseline="central" className="font-bold tracking-tight fill-gray-700" style={{
                      fontSize: window.innerWidth < 768 ? '10px' : '12px',
                      fontWeight: '700',
                      letterSpacing: '-0.025em'
                    }}>
                            {segment.title.split(' / ')[1]}
                          </text>
                        </> :
                  // Single line labels
                  <text x={labelX} y={labelY} textAnchor="middle" dominantBaseline="central" className="font-bold tracking-tight fill-gray-700" style={{
                    fontSize: window.innerWidth < 768 ? '10px' : '12px',
                    fontWeight: '700',
                    letterSpacing: '-0.025em'
                  }}>
                          {window.innerWidth < 768 ? (segment.id === 'lab' ? segment.title : segment.shortTitle) : segment.title}
                        </text>}
                    </g>;
              })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>;
};
export default ShopFloorPortfolio;