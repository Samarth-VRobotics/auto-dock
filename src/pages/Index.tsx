import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Sticky Jump Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-2 text-sm font-medium">
            <div className="flex flex-wrap items-center gap-1 md:gap-4">
              <button onClick={() => scrollToSection('hero')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Hero</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('future')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Future of Manufacturing</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('evolution')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Industry Evolution</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('technologies')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Key Technologies</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('journey')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Vegam Journey</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('partnerships')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Partnerships</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('offerings')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Offerings</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('portfolio')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Automation Portfolio</button>
              <span className="text-muted-foreground">•</span>
              <button onClick={() => scrollToSection('why-vegam')} className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Why Vegam</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide 1 - Hero */}
      <section id="hero" className="relative min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="heading-hero leading-tight">
                  Digital Factories Industrial IoT Robotics & Automation Data Sciences AI/ML
                  <br />
                  <span className="text-primary block mt-4">Light's Out Manufacturing:</span>
                  <span className="block">The Era of Autonomous factories</span>
                </h1>
                <p className="body-lg text-muted-foreground">
                  By: Vegam Team Date:
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactDialog>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Explore the Vision
                  </Button>
                </ContactDialog>
                <DemoDialog>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Contact Vegam
                  </Button>
                </DemoDialog>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 1 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Hero section background/feature image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 - Future of Manufacturing */}
      <section id="future" className="section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="heading-xl">Future of Manufacturing</h2>
              <h3 className="heading-lg text-primary">From Digital to Autonomous Factories</h3>
              <p className="body-lg text-muted-foreground leading-relaxed">
                Pioneering the next evolution in manufacturing excellence. Vegam guides industry leaders through the transformation from digital operations to fully autonomous factories, combining decades of expertise with cutting -edge innovation in AI, robotics, and self - optimizing systems.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 2 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Future of Manufacturing illustration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3 - Industry Evolution */}
      <section id="evolution" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl mb-8">Industry Evolution</h2>
            <div className="aspect-[16/9] md:aspect-[3/1] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center mb-12">
              <div className="text-center p-8">
                <div className="text-lg font-semibold text-muted-foreground">Slide 3 image here</div>
                <div className="text-sm text-muted-foreground mt-2">Industry Evolution timeline</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-sm text-slate-600 mb-4">Yesterday:</h3>
              <h4 className="heading-md mb-4">Manual Operations</h4>
              <p className="body-base text-muted-foreground">
                Paper -driven processes with limited automation capabilities. Heavily dependent on human oversight for quality control, maintenance, and operational decisions.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-sm text-primary mb-4">Today:</h3>
              <h4 className="heading-md mb-4">Digital Factories</h4>
              <p className="body-base text-muted-foreground">
                Connected operations with data -driven insights. Digital tools enable enhanced visibility but still require significant human intervention for optimization and decision -making.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-sm text-secondary mb-4">Tomorrow:</h3>
              <h4 className="heading-md mb-4">Autonomous Factories</h4>
              <p className="body-base text-muted-foreground">
                Self-optimizing systems powered by AI and advanced robotics. Minimal human intervention required as facilities automatically adapt to changing conditions and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4 - Key Technologies Driving the Shift */}
      <section id="technologies" className="section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl mb-6">Key Technologies Driving the Shift</h2>
            <p className="body-xl text-muted-foreground max-w-4xl mx-auto">
              The foundation of autonomous factories is built on four interconnected technological pillars that work together to create self-sustaining manufacturing ecosystems.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-lg font-semibold text-muted-foreground">Slide 4 image here</div>
                <div className="text-sm text-muted-foreground mt-2">Key Technologies diagram</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-md mb-4 text-primary">Cognitive Interfaces</h3>
              <p className="body-base text-muted-foreground">
                Natural human -machine interaction systems that allow intuitive control and monitoring through voice, gesture, and contextual awareness.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-md mb-4 text-secondary">Adaptive Robotics</h3>
              <p className="body-base text-muted-foreground">
                Flexible, collaborative systems that reconfigure based on production needs. These robots adapt to changing conditions without requiring reprogramming.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-md mb-4 text-primary">Self-Optimizing Systems</h3>
              <p className="body-base text-muted-foreground">
                Predictive, resilient networks that identify potential issues before they occur and implement corrective actions autonomously.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
              <h3 className="heading-md mb-4 text-secondary">Generative AI</h3>
              <p className="body-base text-muted-foreground">
                Generative AI —
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5 - Vegam Journey */}
      <section id="journey" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Vegam Journey</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 5 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Vegam Journey timeline</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">2000</div>
                  <div className="text-base">Foundation with digital factory vision</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">2007</div>
                  <div className="text-base">First plant fully digitalized</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">2013</div>
                  <div className="text-base">18 plants connected in network</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">2016</div>
                  <div className="text-base">Scaled to 70 plants globally</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-primary">2019</div>
                  <div className="text-base">Milestone of 100+ plants achieved</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-secondary">2025</div>
                  <div className="text-base">Projected 300+ plants milestone</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border">
              <h3 className="heading-md mb-6">Strong Foundation for Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div className="text-base">230+ dedicated R&D professionals in India</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div className="text-base">ISO 27001 certified for information security</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div className="text-base">ISO 9001 certified for quality management</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="text-lg font-semibold">Proven History in Manufacturing Transformation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6 - Global Partnerships & Big Wins */}
      <section id="partnerships" className="section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Global Partnerships & Big Wins</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
                <h3 className="heading-md text-primary mb-4">Strategic Partnerships</h3>
                <p className="body-base text-muted-foreground">
                  Trusted Long -Term Partner to Global Leaders in Chemicals & Manufacturing
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
                <h3 className="heading-md text-secondary mb-4">Implementation Excellence</h3>
                <p className="body-base text-muted-foreground">
                  Comprehensive digital manufacturing operations management tools with proven track records of delivering sustained improvements across facilities worldwide.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-shadow">
                <h3 className="heading-md text-primary mb-4">Continuous Support</h3>
                <p className="body-base text-muted-foreground">
                  24/7 global support infrastructure ensuring optimal operations and rapid troubleshooting for mission -critical manufacturing systems across time zones.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 6 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Global partnerships visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7 - Vegam's Offerings */}
      <section id="offerings" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Vegam's Offerings</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="heading-sm text-primary mb-3">Manufacturing Operations Management (MOM)</h3>
                <p className="body-base text-muted-foreground">
                  End-to-end digitalization of shop floor operations with real -time visibility and control
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="heading-sm text-secondary mb-3">Global Operations Management (GOM)</h3>
                <p className="body-base text-muted-foreground">
                  Cross -facility optimization with standardized metrics and centralized control capabilities
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="heading-sm text-primary mb-3">AI, ML & Generative AI Integration</h3>
                <p className="body-base text-muted-foreground">
                  Advanced analytics that transform data into actionable insights and autonomous decisions
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="heading-sm text-secondary mb-3">Robotics & Smart IIoT</h3>
                <p className="body-base text-muted-foreground">
                  Seamless integration of physical systems with digital infrastructure for autonomous operations
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="heading-sm text-primary mb-3">Unified KPIs</h3>
                <p className="body-base text-muted-foreground">
                  Standardized performance metrics across regions and plants for true global optimization
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 7 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Vegam's offerings overview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8 - Our Integrated Shop Floor Automation Portfolio (overview) */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Our Integrated Shop Floor Automation Portfolio</h2>
          </div>
          
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center mb-12">
            <div className="text-center p-8">
              <div className="text-lg font-semibold text-muted-foreground">Slide 8 diagram here</div>
              <div className="text-sm text-muted-foreground mt-2">Integrated Shop Floor Automation workflow</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="text-center p-4 bg-card rounded-xl border">
              <div className="font-semibold text-sm">Inbound & Raw Material Handling</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border">
              <div className="font-semibold text-sm">Production & Process Operations</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border">
              <div className="font-semibold text-sm">Quality Assurance & Inspection</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border">
              <div className="font-semibold text-sm">Packaging & Palletization</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border">
              <div className="font-semibold text-sm">Warehousing & Outbound</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="bg-card px-4 py-2 rounded-lg border">Truck Entry</div>
            <div className="bg-card px-4 py-2 rounded-lg border">Dispatch</div>
          </div>
        </div>
      </section>

      {/* Slide 9 - Automation Portfolio (detailed) */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Our Integrated Shop Floor Automation Portfolio</h2>
          </div>
          
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center mb-12">
            <div className="text-center p-8">
              <div className="text-lg font-semibold text-muted-foreground">Slide 9 diagram here</div>
              <div className="text-sm text-muted-foreground mt-2">Detailed Automation Portfolio diagram</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-primary mb-4">Warehouse</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Automated Storage & Retrieval</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Inventory & Condition Monitoring</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Replenishment Operations</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-secondary mb-4">Dispensing /Staging</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Picking & Kitting</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Buffer & Line -side Management</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Cross-docking Operations</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-primary mb-4">Manufacturing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Material Handling</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Assembly & Processing</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Packaging & Batch Processing</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-secondary mb-4">Inbound / Goods Receipt</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Docking & Unloading</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Verification & Scanning</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Pallet Handling & Transport</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-primary mb-4">Outbound / Dispatch</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Order Picking & Palletizing</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Load Sequencing & Transport</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Truck Loading & Final Verification</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border">
              <h3 className="heading-sm text-secondary mb-4">Lab Automation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Automated Inspection & Testing</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Sorting & Defect Isolation</div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>Compliance verification</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <div className="font-semibold text-primary text-sm">Autonomous Material Handling and transport</div>
            </div>
            <div className="text-center p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <div className="font-semibold text-secondary text-sm">Collaborative Robotics (Cobots)</div>
            </div>
            <div className="text-center p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <div className="font-semibold text-primary text-sm">AI Driven Control & Orchestration</div>
            </div>
            <div className="text-center p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
              <div className="font-semibold text-secondary text-sm">Smart inspection and Quality Control</div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10 - Why Vegam? */}
      <section id="why-vegam" className="section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="section-header">
            <h2 className="heading-xl">Why Vegam?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="heading-lg text-primary mb-6">Core Enterprise Value Drivers</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Modular & Scalable</div>
                      <div className="text-muted-foreground text-sm">Designed to grow with enterprise needs.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Digital Transformation Ready</div>
                      <div className="text-muted-foreground text-sm">Roadmap toward Industry 4.0.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Unified Data Management</div>
                      <div className="text-muted-foreground text-sm">Integrated data to boost innovation.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Complete Ownership</div>
                      <div className="text-muted-foreground text-sm">On-premise deployment with full control.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Customized Optimization</div>
                      <div className="text-muted-foreground text-sm">Proprietary algorithms for competitive edge.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-lg text-secondary mb-6">Future -Ready, Autonomous Factories</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Autonomous Operations</div>
                      <div className="text-muted-foreground text-sm">Self-driven execution across plants & processes.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Proactive Risk Mitigation</div>
                      <div className="text-muted-foreground text-sm">AI-enabled robotics predict & prevent hazards.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Hyper -Scalable Manufacturing</div>
                      <div className="text-muted-foreground text-sm">Intelligent orchestration across geographies.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Continuous Optimization</div>
                      <div className="text-muted-foreground text-sm">Real -time workflow, energy & downtime efficiency.</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold">Transformational Growth</div>
                      <div className="text-muted-foreground text-sm">Unlock new business models & value creation.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/5 border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-lg font-semibold text-muted-foreground">Slide 10 image here</div>
                  <div className="text-sm text-muted-foreground mt-2">Why Vegam advantages visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;