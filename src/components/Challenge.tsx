import React, { useState, useEffect, useRef } from "react";
import { Truck, BarChart3, Package, Building, Link, DollarSign, AlertTriangle, TrendingDown, Clock, FileX, UserMinus } from "lucide-react";
const Challenge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const operationalBottlenecks = [{
    icon: Truck,
    text: "Seasonal Surges",
    description: "overloaded docks, missed turnarounds"
  }, {
    icon: BarChart3,
    text: "Throughput Uncertainty",
    description: "fluctuating flow rates"
  }, {
    icon: Package,
    text: "Unstructured Loads",
    description: "manual floor-loaded cartons"
  }, {
    icon: Building,
    text: "Rigid Layouts",
    description: "fixed infrastructure limits"
  }, {
    icon: Link,
    text: "Integration Gaps",
    description: "ERP/WMS blind spots"
  }];
  const AnimatedNumber = ({
    value,
    duration = 2000
  }: {
    value: string;
    duration?: number;
  }) => {
    const [displayValue, setDisplayValue] = useState("0");
    useEffect(() => {
      if (isVisible) {
        setTimeout(() => setDisplayValue(value), 300);
      }
    }, [isVisible, value]);
    return <span className={`font-bold transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {displayValue}
      </span>;
  };
  return <section ref={sectionRef} className="section-padding bg-gradient-surface relative overflow-hidden" aria-label="Dock Operations Bottlenecks">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="section-header animate-fade-in">
            <div className="badge badge-destructive mb-6">
              <span>Challenges & Impacts</span>
            </div>
            <h2 className="heading-xl text-foreground mb-8">
              The Hidden Bottlenecks in
              <span className="gradient-text block">Dock Operations</span>
            </h2>
            <p className="body-xl text-muted-foreground mb-8 max-w-4xl mx-auto">The dock is where logistics efficiency is pushed to its limits.</p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Operational Bottlenecks */}
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
              <div className="bg-background/95 backdrop-blur-sm rounded-3xl border border-blue-200/50 p-8 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Blue accent gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="heading-md text-foreground mb-4">
                    Operational Bottlenecks
                  </h3>
                  
                  <h4 className="body-lg font-semibold text-blue-700 mb-6">
                    Where rigid systems meet unpredictable reality
                  </h4>
                  
                  <div className="space-y-3">
                    {operationalBottlenecks.map((item, index) => <div key={index} className="flex items-start space-x-3 group/item">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-200 transition-colors">
                          <item.icon className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div className="body-base font-medium text-foreground">
                          <span className="font-semibold">{item.text}</span> – {item.description}
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Direct Financial Costs */}
            <div className="animate-fade-in" style={{
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
              <div className="bg-background/95 backdrop-blur-sm rounded-3xl border border-orange-200/50 p-8 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Orange accent gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="heading-md text-foreground mb-4">
                    Direct Financial Costs
                  </h3>
                  
                  <h4 className="body-lg font-semibold text-orange-700 mb-6">
                    Every wasted hour shows up on your balance sheet
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-200/30">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <DollarSign className="w-4 h-4 text-orange-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="body-base font-medium text-foreground">
                            Truck Detention → <AnimatedNumber value="$50–100" />/hr = <AnimatedNumber value="$80K+" />/year lost
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-200/30">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <AlertTriangle className="w-4 h-4 text-orange-600" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="body-base font-medium text-foreground">
                            Hidden Extras → costly expedited freight, storage fees, emergency shipments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Lost Revenue & Growth */}
            <div className="animate-fade-in" style={{
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
              <div className="bg-background/95 backdrop-blur-sm rounded-3xl border border-green-200/50 p-8 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Green accent gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingDown className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="heading-md text-foreground mb-4">
                    Lost Revenue & Growth
                  </h3>
                  
                  <h4 className="body-lg font-semibold text-green-700 mb-6">
                    Dock delays don't just waste time — they cost sales
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div className="body-base font-medium text-foreground">
                        Lost Throughput → <AnimatedNumber value="70%" />% slower turnarounds
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingDown className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div className="body-base font-medium text-foreground">
                        Revenue Loss → up to <AnimatedNumber value="20%" />% lost sales
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileX className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div className="body-base font-medium text-foreground">
                        OTIF Penalties → millions in fines
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <UserMinus className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div className="body-base font-medium text-foreground">
                        Customer Churn → <AnimatedNumber value="50%" />%+ abandon after one late delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Challenge;