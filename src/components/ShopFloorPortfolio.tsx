import React, { useState, useEffect } from 'react';
import { Truck, Package, Scan, Boxes, Cog, CheckCircle, Factory } from 'lucide-react';

interface PortfolioSegment {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string[];
  angle: number;
}

const segments: PortfolioSegment[] = [
  {
    id: 'inbound',
    title: 'Inbound / Goods Receipt',
    icon: Truck,
    description: [
      'Automated dock scheduling and vehicle guidance systems',
      'Real-time visibility into incoming shipments and deliveries',
      'Seamless integration with ERP and WMS platforms'
    ],
    angle: 0
  },
  {
    id: 'docking',
    title: 'Docking & Unloading',
    icon: Package,
    description: [
      'Precision dock positioning with sensor-guided alignment',
      'Automated loading dock levelers and trailer restraints',
      'Smart dock door management and safety protocols'
    ],
    angle: 60
  },
  {
    id: 'verification',
    title: 'Verification & Scanning',
    icon: Scan,
    description: [
      'Computer vision-based quality inspection systems',
      'Automated barcode and RFID scanning validation',
      'Real-time data capture and traceability tracking'
    ],
    angle: 120
  },
  {
    id: 'pallet',
    title: 'Pallet Handling & Transport',
    icon: Boxes,
    description: [
      'Autonomous mobile robots for material movement',
      'Intelligent pallet stacking and destacking systems',
      'Dynamic routing optimization for maximum efficiency'
    ],
    angle: 180
  },
  {
    id: 'processing',
    title: 'Processing & Assembly',
    icon: Cog,
    description: [
      'Collaborative robotic work cells for flexible manufacturing',
      'Adaptive production line balancing and optimization',
      'Predictive maintenance and quality assurance'
    ],
    angle: 240
  },
  {
    id: 'outbound',
    title: 'Outbound & Quality Control',
    icon: CheckCircle,
    description: [
      'Automated final inspection and packaging systems',
      'Intelligent order fulfillment and shipping coordination',
      'Complete supply chain visibility and tracking'
    ],
    angle: 300
  }
];

export const ShopFloorPortfolio: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<string>(segments[0].id);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getSegmentPath = (angle: number, radius: number, innerRadius: number) => {
    const startAngle = (angle - 30) * (Math.PI / 180);
    const endAngle = (angle + 30) * (Math.PI / 180);
    
    const x1 = 150 + innerRadius * Math.cos(startAngle);
    const y1 = 150 + innerRadius * Math.sin(startAngle);
    const x2 = 150 + radius * Math.cos(startAngle);
    const y2 = 150 + radius * Math.sin(startAngle);
    
    const x3 = 150 + radius * Math.cos(endAngle);
    const y3 = 150 + radius * Math.sin(endAngle);
    const x4 = 150 + innerRadius * Math.cos(endAngle);
    const y4 = 150 + innerRadius * Math.sin(endAngle);
    
    return `M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  };

  const getIconPosition = (angle: number, radius: number) => {
    const radian = angle * (Math.PI / 180);
    const x = 150 + radius * Math.cos(radian) - 12;
    const y = 150 + radius * Math.sin(radian) - 12;
    return { x, y };
  };

  const activeSegmentData = segments.find(s => s.id === activeSegment) || segments[0];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="section-header mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Integrated <span className="text-red-600">Shop Floor</span> Automation Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions that transform your entire manufacturing ecosystem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Desktop Circular Diagram */}
          <div className="hidden lg:block relative">
            <div className="flex justify-center">
              <svg 
                width="300" 
                height="300" 
                className={`transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                role="img"
                aria-label="Shop Floor Automation Portfolio Diagram"
              >
                {/* Segments */}
                {segments.map((segment) => {
                  const isActive = segment.id === activeSegment;
                  const iconPos = getIconPosition(segment.angle, 100);
                  
                  return (
                    <g key={segment.id}>
                      <path
                        d={getSegmentPath(segment.angle, 120, 60)}
                        fill={isActive ? 'hsl(var(--red-600))' : 'hsl(var(--muted))'}
                        stroke={isActive ? 'hsl(var(--red-600))' : 'hsl(var(--border))'}
                        strokeWidth={isActive ? "3" : "2"}
                        className={`cursor-pointer transition-all duration-300 hover:drop-shadow-lg ${
                          isActive ? 'drop-shadow-lg' : ''
                        }`}
                        style={{
                          transform: isActive ? 'scale(1.08)' : 'scale(1)',
                          transformOrigin: '150px 150px',
                          filter: isActive ? 'brightness(1.1)' : 'brightness(1)'
                        }}
                        onMouseEnter={() => setActiveSegment(segment.id)}
                        onFocus={() => setActiveSegment(segment.id)}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isActive}
                        aria-describedby={`segment-${segment.id}-description`}
                      />
                      
                      {/* Icon */}
                      <foreignObject
                        x={iconPos.x}
                        y={iconPos.y}
                        width="24"
                        height="24"
                        className="pointer-events-none"
                      >
                        <segment.icon 
                          size={24} 
                          className={`transition-all duration-300 ${
                            isActive 
                              ? 'text-white animate-pulse' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      </foreignObject>
                    </g>
                  );
                })}
                
                {/* Center Circle */}
                <circle
                  cx="150"
                  cy="150"
                  r="50"
                  fill="hsl(var(--background))"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className="drop-shadow-sm"
                />
                
                {/* Center Content */}
                <foreignObject x="125" y="135" width="50" height="30" className="pointer-events-none">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Factory size={20} className="text-primary mb-1" />
                    <div className="text-xs font-medium text-center leading-tight">
                      <div>Autonomous</div>
                      <div>Factories</div>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>

          {/* Content Panel */}
          <div className="hidden lg:block">
            <div 
              className={`transition-all duration-300 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-card border rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <activeSegmentData.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {activeSegmentData.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4" id={`segment-${activeSegmentData.id}-description`}>
                  {activeSegmentData.description.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden col-span-full">
            <div className="space-y-4">
              {segments.map((segment) => (
                <div key={segment.id} className="bg-card border rounded-xl overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    onClick={() => setActiveSegment(activeSegment === segment.id ? '' : segment.id)}
                    aria-expanded={activeSegment === segment.id}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        activeSegment === segment.id ? 'bg-red-600' : 'bg-muted'
                      }`}>
                        <segment.icon 
                          size={20} 
                          className={activeSegment === segment.id ? 'text-white' : 'text-muted-foreground'} 
                        />
                      </div>
                      <h3 className="font-semibold text-foreground">{segment.title}</h3>
                    </div>
                    <div className={`transform transition-transform ${
                      activeSegment === segment.id ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </div>
                  </button>
                  
                  {activeSegment === segment.id && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="space-y-3 pt-4 border-t">
                        {segment.description.map((point, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};