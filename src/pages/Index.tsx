import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
import { ArrowRight, CheckCircle2, Truck, Building2, Globe, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Intelligent,{" "}
                  <span className="text-primary">Autonomous</span> &{" "}
                  <span className="text-primary">AI-Ready</span> Robotics{" "}
                  <span className="block">for Smart Warehouses</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Transform your warehouse operations with autonomous robotics, intelligent fleet management, 
                  and seamless WMS integration for unmatched efficiency and accuracy.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Increase warehouse efficiency by 35%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Reduce labor costs by up to 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">99.9% accuracy in material handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">24/7 autonomous operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">Seamless WMS & ERP integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">ROI within 12-18 months</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactDialog>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Book A Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactDialog>
                <DemoDialog>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Watch Demo
                  </Button>
                </DemoDialog>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border">
                <img 
                  src="/src/assets/modern-robotics-facility.jpg" 
                  alt="Advanced Robotics Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">vRobotics Across The Globe</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground font-medium">Robots Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground font-medium">Active Warehouses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">48 Hours</div>
              <div className="text-muted-foreground font-medium">Deployment Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview - keeping as requested */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Robotics Solutions for Smart Warehouses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From autonomous mobile robots to intelligent storage systems, transform every aspect of your warehouse operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AMR Solution */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border">
                <img 
                  src="/src/assets/mobile-manipulator-dock.jpg" 
                  alt="Autonomous Mobile Robots (AMR)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Autonomous Mobile Robots (AMR)</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Intelligent fleet of AMRs for material handling, inventory management, and warehouse automation.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dynamic path planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Multi-robot coordination</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time obstacle avoidance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Fleet management dashboard</span>
                </div>
              </div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* AutoDock Solution */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border">
                <img 
                  src="/src/assets/hero-dock-autonomy.jpg" 
                  alt="Robotic Loading and Unloading Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Robotic Loading and Unloading Solutions</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Automated loading and unloading systems for efficient material handling and workflow optimization.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Automated truck loading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Conveyor integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Weight optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time tracking systems</span>
                </div>
              </div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* ASRS Solution */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border">
                <img 
                  src="/src/assets/university-lab-scene.jpg" 
                  alt="Automated Storage & Retrieval Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Storage & Retrieval Systems</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                High-density automated storage with rapid access for inventory optimization and space utilization.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Vertical storage optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Automated inventory tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time stock management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Integration with WMS systems</span>
                </div>
              </div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* WMS Integration */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border">
                <img 
                  src="/src/assets/modern-robotics-facility.jpg" 
                  alt="WMS Integration & Orchestration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">WMS Integration & Orchestration</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Seamless integration with existing warehouse management systems for unified operations.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time WMS sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Order orchestration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Inventory visibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm">Performance analytics</span>
                </div>
              </div>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact & ROI */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Impact & ROI</h2>
            <p className="text-xl text-muted-foreground">Proven results across 100+ warehouse implementations worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">35%</div>
              <div className="text-lg font-semibold mb-2">Warehouse Efficiency Increase</div>
              <div className="text-muted-foreground text-sm">Average improvement in operational efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">40%</div>
              <div className="text-lg font-semibold mb-2">Labor Cost Reduction</div>
              <div className="text-muted-foreground text-sm">Reduction in manual labor requirements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Accuracy Improvement</div>
              <div className="text-muted-foreground text-sm">Material handling and inventory accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">12-18</div>
              <div className="text-lg font-semibold mb-2">ROI Timeline (months)</div>
              <div className="text-muted-foreground text-sm">Typical return on investment period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Robotics Platform */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Robotics Platform</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI-driven capabilities that power autonomous operations and seamless integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">AI-Driven Orchestration</h3>
              <p className="text-muted-foreground">Intelligent task allocation and dynamic route optimization across robot fleets.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Safety & Compliance</h3>
              <p className="text-muted-foreground">Advanced safety protocols with real-time monitoring and emergency response systems.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-muted-foreground">Real-time KPI tracking with predictive insights for continuous optimization.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">System Integration</h3>
              <p className="text-muted-foreground">Seamless connectivity with WMS, ERP, and existing automation infrastructure.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Predictive Maintenance</h3>
              <p className="text-muted-foreground">AI-powered diagnostics to prevent downtime and optimize robot performance.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-muted-foreground">Modular platform that grows with your operations from single robots to enterprise fleets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Deploy Intelligent Robotics in Your Warehouse?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 100+ leading warehouses worldwide and transform your operations with Vegam's AI-powered robotics platform. Get ROI within 12-18 months with 48-hour deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactDialog>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book A Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </ContactDialog>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;