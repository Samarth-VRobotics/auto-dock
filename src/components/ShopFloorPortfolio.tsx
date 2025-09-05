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
      angle: 0, // Top
      side: 'left',
      slot: 0 // Top slot
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
      angle: 60, // Top right
      side: 'right',
      slot: 0 // Top slot
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
      angle: 120, // Bottom right
      side: 'right',
      slot: 1 // Middle slot
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
      angle: 180, // Bottom
      side: 'right',
      slot: 2 // Bottom slot
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
      angle: 240, // Bottom left
      side: 'left',
      slot: 2 // Bottom slot
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
      angle: 300, // Top left
      side: 'left',
      slot: 1 // Middle slot
    }
  ];

  const getSegmentPath = (index: number) => {
    const angleStart = (index * 60 - 90) * Math.PI / 180;
    const angleEnd = ((index + 1) * 60 - 90) * Math.PI / 180;
    const innerRadius = 90; // Increased for safety padding around center
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
    const radius = 160; // Outer radius for connector start point
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getIconPosition = (index: number) => {
    const angle = (index * 60 - 90) * Math.PI / 180 + (30 * Math.PI / 180);
    const radius = 60; // Icon ring radius between center and segments
    return {
      x: 300 + Math.cos(angle) * radius,
      y: 300 + Math.sin(angle) * radius
    };
  };

  const getCardPosition = (side: string, slot: number) => {
    const baseY = 80; // Starting Y position
    const slotHeight = 160; // Height between each slot
    const y = baseY + (slot * slotHeight);
    
    return {
      x: side === 'left' ? 0 : 0, // Grid positioning, not absolute
      y: y
    };
  };

  const getConnectorPath = (index: number) => {
    const segment = segments[index];
    const startPos = getSegmentCentroid(index);
    const isLeft = segment.side === 'left';
    
    // Calculate card center position based on grid
    const cardCenterY = 140 + (segment.slot * 160); // Grid slot positioning
    const cardX = isLeft ? 80 + 140 : 520 + 140; // Card center X
    
    // Create elbow connector that avoids other cards
    const midX = isLeft ? startPos.x - 60 : startPos.x + 60;
    
    return `M ${startPos.x} ${startPos.y} L ${midX} ${startPos.y} L ${midX} ${cardCenterY} L ${cardX} ${cardCenterY}`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Integrated Shop Floor Automation Portfolio
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          <div className="relative max-w-7xl mx-auto h-[600px]" aria-live="polite">
            {/* SVG Circular Diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="600" height="600" viewBox="0 0 600 600" className="overflow-visible">
                {/* Definitions for gradients and markers */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 8 3, 0 6"
                      fill="hsl(var(--primary))"
                    />
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
                  r="160"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.3"
                />
                
                {/* Segments */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  return (
                    <path
                      key={segment.id}
                      d={getSegmentPath(index)}
                      fill={isActive ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="cursor-pointer transition-all duration-150 ease-out hover:fill-primary/10"
                      style={{
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        transformOrigin: `${300 + Math.cos((index * 60 - 90 + 30) * Math.PI / 180) * 125}px ${300 + Math.sin((index * 60 - 90 + 30) * Math.PI / 180) * 125}px`,
                        filter: isActive ? 'url(#glow)' : 'none',
                        zIndex: isActive ? 2 : 1
                      }}
                      onMouseEnter={() => setActiveSegment(index)}
                      onFocus={() => setActiveSegment(index)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${segment.title} - ${segment.description.join(', ')}`}
                      aria-expanded={isActive}
                    />
                  );
                })}
                
                {/* Inner Center Circle */}
                <circle
                  cx="300"
                  cy="300"
                  r="80"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  style={{ zIndex: 3 }}
                />
                
                {/* Center Text */}
                <text
                  x="300"
                  y="295"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold fill-primary"
                  style={{ 
                    fontSize: 'clamp(14px, 1.6vw, 20px)',
                    lineHeight: '1.2',
                    fontWeight: '700'
                  }}
                >
                  Autonomous
                </text>
                <text
                  x="300"
                  y="315"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-bold fill-primary"
                  style={{ 
                    fontSize: 'clamp(14px, 1.6vw, 20px)',
                    lineHeight: '1.2',
                    fontWeight: '700'
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
                      x={pos.x - 14}
                      y={pos.y - 14}
                      width="28"
                      height="28"
                      className="pointer-events-none"
                      style={{ zIndex: 2 }}
                    >
                      <div className={`w-7 h-7 rounded-full bg-card border flex items-center justify-center transition-all duration-150 ${
                        isActive ? 'scale-110 border-primary shadow-md' : 'border-border'
                      }`}>
                        <IconComponent 
                          size={16} 
                          className={`transition-all duration-150 ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                          style={{ opacity: isActive ? 1 : 0.7 }}
                        />
                      </div>
                    </foreignObject>
                  );
                })}
                
                {/* Connector Lines */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  return (
                    <path
                      key={`connector-${index}`}
                      d={getConnectorPath(index)}
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={isActive ? "2.5" : "1.5"}
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-150"
                      opacity={isActive ? 1 : 0.6}
                      style={{ zIndex: 1 }}
                    />
                  );
                })}
              </svg>
            </div>
            
            {/* Fixed Grid Description Cards */}
            {/* Left side grid */}
            <div className="absolute left-0 top-0 w-80 h-full">
              <div className="grid grid-rows-3 gap-4 h-full py-20">
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
                        <div className={`bg-card rounded-2xl p-6 border shadow-lg transition-all duration-150 w-full ${
                          isActive ? 'border-primary shadow-xl bg-primary/5' : 'border-border'
                        }`}
                        style={{ zIndex: isActive ? 3 : 1 }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-2">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1 font-bold">•</span>
                                <span>{point}</span>
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
              <div className="grid grid-rows-3 gap-4 h-full py-20">
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
                        <div className={`bg-card rounded-2xl p-6 border shadow-lg transition-all duration-150 w-full ${
                          isActive ? 'border-primary shadow-xl bg-primary/5' : 'border-border'
                        }`}
                        style={{ zIndex: isActive ? 3 : 1 }}
                        >
                          <h3 className={`text-lg font-bold mb-4 transition-colors ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {segment.title}
                          </h3>
                          <ul className="space-y-2">
                            {segment.description.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1 font-bold">•</span>
                                <span>{point}</span>
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
                r="80"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
              
              {/* Center Text */}
              <text
                x="300"
                y="295"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-primary"
                style={{ fontSize: '12px' }}
              >
                Autonomous
              </text>
              <text
                x="300"
                y="315"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-primary"
                style={{ fontSize: '12px' }}
              >
                Factories
              </text>
              
              {/* Segments */}
              {segments.map((segment, index) => (
                <path
                  key={segment.id}
                  d={getSegmentPath(index)}
                  fill={activeSegment === index ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
                  stroke={activeSegment === index ? "hsl(var(--primary))" : "hsl(var(--border))"}
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
                    x={pos.x - 10}
                    y={pos.y - 10}
                    width="20"
                    height="20"
                    className="pointer-events-none"
                  >
                    <div className="w-5 h-5 rounded-full bg-card border border-border flex items-center justify-center">
                      <IconComponent 
                        size={12} 
                        className={activeSegment === index ? "text-primary" : "text-muted-foreground"}
                      />
                    </div>
                  </foreignObject>
                );
              })}
            </svg>
          </div>
          
          {/* Mobile Accordion */}
          <div className="space-y-4">
            {segments.map((segment, index) => (
              <div
                key={segment.id}
                className={`bg-card rounded-2xl border cursor-pointer transition-all duration-150 ${
                  activeSegment === index ? 'border-primary shadow-lg' : 'border-border'
                }`}
                onClick={() => setActiveSegment(activeSegment === index ? -1 : index)}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <segment.icon size={20} className={activeSegment === index ? "text-primary" : "text-muted-foreground"} />
                    <h3 className={`font-bold ${activeSegment === index ? 'text-primary' : 'text-foreground'}`}>
                      {segment.title}
                    </h3>
                  </div>
                </div>
                
                {activeSegment === index && (
                  <div className="px-4 pb-4 animate-accordion-down">
                    <ul className="space-y-2 ml-8">
                      {segment.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 font-bold">•</span>
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