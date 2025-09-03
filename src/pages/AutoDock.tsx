import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Shield, Clock, Target } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
import heroDockAutonomy from "@/assets/hero-dock-autonomy.jpg";
import mobileManipulatorDock from "@/assets/mobile-manipulator-dock.jpg";

const AutoDock = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast Loading",
      description: "Reduce loading/unloading time by up to 70% with our precision automation"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enhanced Safety",
      description: "Eliminate manual handling risks and ensure consistent, safe operations"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Operations",
      description: "Continuous operation capability without human intervention"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Precision Accuracy",
      description: "Sub-millimeter positioning accuracy for perfect load placement"
    }
  ];

  const features = [
    "Automated load detection and positioning",
    "Real-time weight and dimension sensing",
    "Adaptive grip mechanisms for various load types",
    "Seamless integration with warehouse management systems",
    "Advanced safety protocols and emergency stops",
    "Remote monitoring and diagnostics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                AutoDock: <span className="text-primary">Revolutionizing</span> Loading & Unloading
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                Fully automated loading and unloading systems that transform your dock operations with precision, speed, and safety.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <DemoDialog>
                  <Button size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    See AutoDock in Action
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </DemoDialog>
                
                <ContactDialog>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-3 border-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </ContactDialog>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroDockAutonomy} 
                  alt="AutoDock automated loading system in action" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Precision Automation</h4>
                  <p className="text-sm">Next-generation dock technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AutoDock?</h2>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Transform your dock operations with cutting-edge automation that delivers measurable results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Capabilities */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Advanced Capabilities</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground/80 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <ContactDialog>
                    <Button size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore Full Specifications
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </ContactDialog>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={mobileManipulatorDock} 
                    alt="Mobile manipulator dock system" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold">Smart Integration</h4>
                    <p className="text-sm">Seamless workflow automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Dock Operations?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join industry leaders who've revolutionized their logistics with AutoDock
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactDialog>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </ContactDialog>
              
              <DemoDialog>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </DemoDialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoDock;