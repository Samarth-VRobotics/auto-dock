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
      descriptionPosition: 'left-top'
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
      descriptionPosition: 'right-top'
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
      descriptionPosition: 'right-bottom'
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
      descriptionPosition: 'right-bottom'
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
      descriptionPosition: 'left-bottom'
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
      descriptionPosition: 'left-top'
    }
  ];

  const getSegmentPath = (index: number) => {
    const angleStart = (index * 60 - 90) * Math.PI / 180;
    const angleEnd = ((index + 1) * 60 - 90) * Math.PI / 180;
    const innerRadius = 80;
    const outerRadius = 160;
    
    const x1 = 250 + Math.cos(angleStart) * innerRadius;
    const y1 = 250 + Math.sin(angleStart) * innerRadius;
    const x2 = 250 + Math.cos(angleStart) * outerRadius;
    const y2 = 250 + Math.sin(angleStart) * outerRadius;
    const x3 = 250 + Math.cos(angleEnd) * outerRadius;
    const y3 = 250 + Math.sin(angleEnd) * outerRadius;
    const x4 = 250 + Math.cos(angleEnd) * innerRadius;
    const y4 = 250 + Math.sin(angleEnd) * innerRadius;
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  };

  const getIconPosition = (index: number) => {
    const angle = (index * 60 - 90) * Math.PI / 180 + (30 * Math.PI / 180);
    const radius = 120;
    return {
      x: 250 + Math.cos(angle) * radius,
      y: 250 + Math.sin(angle) * radius
    };
  };

  const getCenterIconPosition = (index: number) => {
    const angle = (index * 60) * Math.PI / 180;
    const radius = 50;
    return {
      x: 250 + Math.cos(angle) * radius,
      y: 250 + Math.sin(angle) * radius
    };
  };

  const getConnectorPath = (index: number) => {
    const segment = segments[index];
    const iconPos = getIconPosition(index);
    
    // Define target positions for description blocks
    const targets = {
      'left-top': { x: 50, y: 120 },
      'right-top': { x: 450, y: 120 },
      'right-bottom': { x: 450, y: 380 },
      'left-bottom': { x: 50, y: 380 }
    };
    
    const targetPos = segment.descriptionPosition === 'left-top' ? targets['left-top'] :
                     segment.descriptionPosition === 'right-top' ? targets['right-top'] :
                     segment.descriptionPosition === 'right-bottom' ? targets['right-bottom'] :
                     targets['left-bottom'];
    
    return `M ${iconPos.x} ${iconPos.y} L ${targetPos.x} ${targetPos.y}`;
  };

  const getDescriptionBlockPosition = (position: string) => {
    switch (position) {
      case 'left-top':
        return 'absolute top-8 left-0 w-80';
      case 'right-top':
        return 'absolute top-8 right-0 w-80';
      case 'right-bottom':
        return 'absolute bottom-8 right-0 w-80';
      case 'left-bottom':
      default:
        return 'absolute bottom-8 left-0 w-80';
    }
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
          <div className="relative max-w-6xl mx-auto h-[600px]">
            {/* SVG Circular Diagram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="500" height="500" viewBox="0 0 500 500" className="overflow-visible">
                {/* Background Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="160"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity="0.3"
                />
                
                {/* Inner Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="80"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                
                {/* Center Text */}
                <text
                  x="250"
                  y="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm font-bold fill-primary"
                  style={{ fontSize: '14px' }}
                >
                  Autonomous
                </text>
                <text
                  x="250"
                  y="265"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm font-bold fill-primary"
                  style={{ fontSize: '14px' }}
                >
                  Factories
                </text>
                
                {/* Center Icons Ring */}
                {segments.map((_, index) => {
                  const pos = getCenterIconPosition(index);
                  return (
                    <circle
                      key={`center-icon-${index}`}
                      cx={pos.x}
                      cy={pos.y}
                      r="12"
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                  );
                })}
                
                {/* Segments */}
                {segments.map((segment, index) => {
                  const isActive = activeSegment === index;
                  return (
                    <g key={segment.id}>
                      <path
                        d={getSegmentPath(index)}
                        fill={isActive ? "hsl(var(--primary) / 0.15)" : "hsl(var(--card))"}
                        stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                        strokeWidth={isActive ? "3" : "1"}
                        className="cursor-pointer transition-all duration-300 hover:fill-primary/10"
                        style={{
                          transform: isActive ? 'scale(1.08)' : 'scale(1)',
                          transformOrigin: '250px 250px',
                          filter: isActive ? 'drop-shadow(0 4px 8px hsl(var(--primary) / 0.3))' : 'none'
                        }}
                        onMouseEnter={() => setActiveSegment(index)}
                        onFocus={() => setActiveSegment(index)}
                        tabIndex={0}
                        role="button"
                        aria-label={segment.title}
                        aria-expanded={isActive}
                      />
                    </g>
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
                      strokeWidth={isActive ? "2" : "1"}
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-300"
                      opacity={isActive ? 1 : 0.5}
                    />
                  );
                })}
                
                {/* Arrow marker */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="hsl(var(--primary))"
                    />
                  </marker>
                </defs>
                
                {/* Segment Icons */}
                {segments.map((segment, index) => {
                  const pos = getIconPosition(index);
                  const IconComponent = segment.icon;
                  const isActive = activeSegment === index;
                  
                  return (
                    <foreignObject
                      key={`icon-${index}`}
                      x={pos.x - 12}
                      y={pos.y - 12}
                      width="24"
                      height="24"
                      className="pointer-events-none"
                    >
                      <IconComponent 
                        size={24} 
                        className={`transition-all duration-300 ${
                          isActive ? "text-primary scale-110" : "text-muted-foreground"
                        }`}
                      />
                    </foreignObject>
                  );
                })}
              </svg>
            </div>
            
            {/* Description Blocks */}
            {segments.map((segment, index) => {
              const isActive = activeSegment === index;
              const positionClass = getDescriptionBlockPosition(segment.descriptionPosition);
              
              return (
                <div
                  key={`desc-${index}`}
                  className={`${positionClass} transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                  }`}
                >
                  <div className={`bg-card rounded-2xl p-6 border shadow-lg ${
                    isActive ? 'border-primary shadow-xl' : 'border-border'
                  }`}>
                    <h3 className={`text-lg font-bold mb-4 transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}>
                      {segment.title}
                    </h3>
                    <ul className="space-y-2">
                      {segment.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
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

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-12">
            <svg width="300" height="300" viewBox="0 0 500 500">
              {/* Background Circle */}
              <circle
                cx="250"
                cy="250"
                r="160"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                opacity="0.3"
              />
              
              {/* Inner Circle */}
              <circle
                cx="250"
                cy="250"
                r="80"
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />
              
              {/* Center Text */}
              <text
                x="250"
                y="250"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-primary"
                style={{ fontSize: '12px' }}
              >
                Autonomous
              </text>
              <text
                x="250"
                y="265"
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
              
              {/* Segment Icons */}
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
                    <IconComponent 
                      size={20} 
                      className={activeSegment === index ? "text-primary" : "text-muted-foreground"}
                    />
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
                className={`bg-card rounded-2xl border cursor-pointer transition-all duration-300 ${
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
                          <span className="text-primary mt-1">•</span>
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