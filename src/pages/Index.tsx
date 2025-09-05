import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
import { ArrowRight, Brain, Cog, Zap, Network, Clock, Shield, BarChart3, Users, Globe, Building2, Truck, Factory, Boxes, Package, FlaskConical, FileText, Download, CheckCircle2, Star, TrendingUp, Target } from "lucide-react";
import autonomousProductionLine from "@/assets/autonomous-production-line.jpg";
import smartFactoryHall from "@/assets/smart-factory-hall.jpg";
import manufacturingEvolutionLab from "@/assets/manufacturing-evolution-lab.jpg";
import futureOfWorkBg from "@/assets/future-of-work-bg.jpg";
const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img src={autonomousProductionLine} alt="Autonomous robotic arms on production line" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="heading-hero text-foreground mb-8 animate-fade-in-up">
              Light's Out Manufacturing: 
              <span className="block text-primary">The Era of Autonomous Factories</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>
              <Badge className="badge-primary">Digital Factories</Badge>
              <Badge className="badge-primary">Industrial IoT</Badge>
              <Badge className="badge-secondary">Robotics & Automation</Badge>
              <Badge className="badge-secondary">Data Sciences AI/ML</Badge>
            </div>

            

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
              <Button size="lg" className="px-10 py-6 body-lg font-bold hover:scale-105 transition-transform" onClick={() => scrollToSection('future-manufacturing')}>
                Explore the Vision
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="px-10 py-6 body-lg font-bold hover:scale-105 transition-transform">
                  Contact Vegam
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Manufacturing Section */}
      <section id="future-manufacturing" className="section-padding bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="heading-lg mb-4">Future of Manufacturing</h2>
                <h3 className="heading-md text-primary mb-6">From Digital to Autonomous Factories</h3>
                <p className="body-lg text-muted-foreground leading-relaxed">
                  Pioneering the next evolution in manufacturing excellence. Vegam guides industry leaders through the transformation from digital operations to fully autonomous factories, combining decades of expertise with cutting-edge innovation in AI, robotics, and self-optimizing systems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/e3c6f9fe-fe05-4fde-8134-14dffba60042.png" alt="Production Line 7 with autonomous robotic arms and digital monitoring systems" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Evolution Section */}
      <section id="industry-evolution" className="section-padding relative" style={{
      backgroundImage: `url(${futureOfWorkBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Industry Evolution</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="heading-sm">Yesterday: Manual Operations</h3>
              <p className="body-base text-muted-foreground">
                Paper-driven processes with limited automation capabilities. Heavily dependent on human oversight for quality control, maintenance, and operational decisions.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-sm">Today: Digital Factories</h3>
              <p className="body-base text-muted-foreground">
                Connected operations with data-driven insights. Digital tools enable enhanced visibility but still require significant human intervention for optimization and decision-making.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm">Tomorrow: Autonomous Factories</h3>
              <p className="body-base text-muted-foreground">
                Self-optimizing systems powered by AI and advanced robotics. Minimal human intervention required as facilities automatically adapt to changing conditions and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section id="key-technologies" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Key Technologies Driving the Shift</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-4">Cognitive Interfaces</h3>
              <p className="body-base text-muted-foreground">
                Natural human-machine interaction systems that allow intuitive control and monitoring through voice, gesture, and contextual awareness.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Cog className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="heading-sm mb-4">Adaptive Robotics</h3>
              <p className="body-base text-muted-foreground">
                Flexible, collaborative systems that reconfigure based on production needs. These robots adapt to changing conditions without requiring reprogramming.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm mb-4">Self-Optimizing Systems</h3>
              <p className="body-base text-muted-foreground">
                Predictive, resilient networks that identify potential issues before they occur and implement corrective actions autonomously.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-4">Generative AI</h3>
              <p className="body-base text-muted-foreground">
                Advanced algorithms that optimize product design, workflow efficiency, and process parameters in real time, continuously improving operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vegam Journey Section */}
      <section id="vegam-journey" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Proven History in Manufacturing Transformation</h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Over two decades of experience in digitalizing and transforming manufacturing operations across the globe
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="space-y-12">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                
                <div className="space-y-12">
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-primary">2000</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-primary mb-2">Foundation</h3>
                      <p className="body-base text-muted-foreground">Started with digital factory vision and early automation concepts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-primary">2007</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-primary mb-2">First Success</h3>
                      <p className="body-base text-muted-foreground">First manufacturing plant fully digitalized with integrated systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-primary">2013</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-primary mb-2">Network Expansion</h3>
                      <p className="body-base text-muted-foreground">18 plants connected in integrated manufacturing network</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-primary">2016</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-primary mb-2">Global Scale</h3>
                      <p className="body-base text-muted-foreground">Scaled operations to 70 manufacturing plants globally</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-primary">2019</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-primary mb-2">Century Mark</h3>
                      <p className="body-base text-muted-foreground">Achieved milestone of 100+ plants under digital transformation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-sm font-bold text-secondary">2025</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="heading-sm text-secondary mb-2">Future Vision</h3>
                      <p className="body-base text-muted-foreground">Targeting 300+ plants with autonomous manufacturing capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Strong Foundation Card */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h3 className="heading-sm mb-6">Strong Foundation for Innovation</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="body-base">230+ dedicated R&D professionals in India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="body-base">ISO 27001 certified for information security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="body-base">ISO 9001 certified for quality management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="body-base">Proven track record across 60+ countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="body-base">24/7 global support infrastructure</span>
                </div>
              </div>
              
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={manufacturingEvolutionLab} alt="Modern control room and manufacturing evolution lab" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section id="global-partnerships" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Global Partnerships & Big Wins</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border shadow-lg flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="heading-sm mb-2">Strategic Partnerships</h3>
                <p className="body-base text-muted-foreground">Trusted Long-Term Partner to Global Leaders in Chemicals & Manufacturing</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg flex items-center space-x-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="heading-sm mb-2">Implementation Excellence</h3>
                <p className="body-base text-muted-foreground">Comprehensive digital manufacturing operations management tools with proven track records of delivering sustained improvements across facilities worldwide.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg flex items-center space-x-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="heading-sm mb-2">Continuous Support</h3>
                <p className="body-base text-muted-foreground">24/7 global support infrastructure ensuring optimal operations and rapid troubleshooting for mission-critical manufacturing systems across time zones.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="body-lg text-muted-foreground mb-8">Trusted by 300+ Plants across 60+ countries</p>
            
            {/* Animated scrolling logos */}
            <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-2xl p-8">
              <div className="flex gap-10 md:gap-16 animate-scroll">
                {/* First set of logos */}
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/1a590db5-6790-4c96-846f-1908fd8142ea.png" alt="Bostik logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/a130b90f-7ac1-4960-920e-a0474132e26f.png" alt="Emerson logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/a566f628-b7a5-488d-ae06-e4f4dc306e28.png" alt="JSL Jindal Stainless logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/83bbbced-e06e-48c3-b1e2-1a0879172c1c.png" alt="Indorama logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/c0b6dbaa-39e8-4181-8f27-a1e1e3a63bda.png" alt="LG Electronics logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/3a453a0d-1d64-4438-b964-ce77b954bdb1.png" alt="JSW Steel logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/fcf8d687-3ef1-4c16-993e-16dd3eb46b83.png" alt="Saint-Gobain logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/5693a6a3-2dff-454a-9982-d16213261092.png" alt="SEP India logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/28ac4552-9267-4e43-9929-9dff1c9e7f86.png" alt="SKF logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/66fde0cf-949d-4508-81a6-02eeeb41e212.png" alt="Solex Logistics logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/1a590db5-6790-4c96-846f-1908fd8142ea.png" alt="Bostik logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/a130b90f-7ac1-4960-920e-a0474132e26f.png" alt="Emerson logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/a566f628-b7a5-488d-ae06-e4f4dc306e28.png" alt="JSL Jindal Stainless logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/83bbbced-e06e-48c3-b1e2-1a0879172c1c.png" alt="Indorama logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/c0b6dbaa-39e8-4181-8f27-a1e1e3a63bda.png" alt="LG Electronics logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/3a453a0d-1d64-4438-b964-ce77b954bdb1.png" alt="JSW Steel logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/fcf8d687-3ef1-4c16-993e-16dd3eb46b83.png" alt="Saint-Gobain logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/5693a6a3-2dff-454a-9982-d16213261092.png" alt="SEP India logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/28ac4552-9267-4e43-9929-9dff1c9e7f86.png" alt="SKF logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 group">
                  <img src="https://vegam.co/lovable-uploads/66fde0cf-949d-4508-81a6-02eeeb41e212.png" alt="Solex Logistics logo" className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vegam's Offerings Section */}
      <section id="offerings" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Vegam's Offerings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-4">Manufacturing Operations Management (MOM)</h3>
                <p className="body-base text-muted-foreground">End-to-end digitalization of shop floor operations with real-time visibility and control</p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-sm mb-4">Global Operations Management (GOM)</h3>
                <p className="body-base text-muted-foreground">Cross-facility optimization with standardized metrics and centralized control capabilities</p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-sm mb-4">Unified KPIs</h3>
                <p className="body-base text-muted-foreground">Standardized performance metrics across regions and plants for true global optimization</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-4">AI, ML & Generative AI Integration</h3>
                <p className="body-base text-muted-foreground">Advanced analytics that transform data into actionable insights and autonomous decisions</p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-sm mb-4">Robotics & Smart IIoT</h3>
                <p className="body-base text-muted-foreground">Seamless integration of physical systems with digital infrastructure for autonomous operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Floor Automation Portfolio Section */}
      <section id="automation-portfolio" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Our Integrated Shop Floor Automation Portfolio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm">Inbound & Raw Material Handling</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto flex items-center justify-center">
                <Cog className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-sm">Production & Process Operations</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="heading-sm">Quality Assurance & Inspection</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-sm">Packaging & Palletization</h3>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto flex items-center justify-center">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-sm">Warehousing & Outbound</h3>
            </div>
          </div>
          
          <div className="text-center">
            <p className="body-base text-muted-foreground">
              <span className="font-semibold">Truck Entry</span> • Process Flow • <span className="font-semibold">Dispatch</span>
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Automation Portfolio Section */}
      <section id="detailed-portfolio" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Our Integrated Shop Floor Automation Portfolio</h2>
          </div>
          
          {/* Circular Layout matching reference image */}
          <div className="relative max-w-7xl mx-auto min-h-[600px]">
            {/* Central Circle with Warehouse and icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                {/* Warehouse label at top */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xl font-bold text-primary">Warehouse</span>
                </div>
                
                {/* Central icons */}
                <div className="flex items-center justify-center space-x-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary" />
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/20">
                    <Cog className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                
                {/* Bottom section labels */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-12">
                  <span className="text-sm font-medium text-primary">Lab Automation</span>
                  <span className="text-sm font-medium text-secondary">Manufacturing</span>
                </div>
                
                {/* Side section labels */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90">
                  <span className="text-sm font-medium text-accent whitespace-nowrap">Outbound / Dispatch</span>
                </div>
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90">
                  <span className="text-sm font-medium text-accent whitespace-nowrap">Dispensing /Staging</span>
                </div>
              </div>
            </div>
            
            {/* Inbound/Goods Receipt - Top Left */}
            <div className="absolute top-0 left-0 max-w-xs">
              <div className="bg-slate-100 rounded-lg p-4 border-l-4 border-primary">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Docking & Unloading</li>
                  <li>• Verification & Scanning</li>
                  <li>• Pallet Handling & Transport</li>
                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20 overflow-hidden">
                  <img src="/lovable-uploads/318afd9b-1608-4c39-9b68-af9535c69047.png" alt="Docking operations" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm font-semibold text-primary">Inbound / Goods Receipt</span>
              </div>
            </div>
            
            {/* Automated Storage & Retrieval - Top Right */}
            <div className="absolute top-0 right-0 max-w-xs text-right">
              <div className="bg-slate-100 rounded-lg p-4 border-r-4 border-secondary">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Automated Storage & Retrieval</li>
                  <li>• Inventory & Condition Monitoring</li>
                  <li>• Replenishment Operations</li>
                </ul>
              </div>
              <div className="flex justify-start mt-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/20 overflow-hidden">
                  <img src="/lovable-uploads/5a563870-000a-4169-ba13-0bbccd419c59.png" alt="Automated storage" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Dispensing/Staging - Middle Right */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-xs text-right">
              <div className="bg-slate-100 rounded-lg p-4 border-r-4 border-accent">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Picking & Kitting</li>
                  <li>• Buffer & Line-side Management</li>
                  <li>• Cross-docking Operations</li>
                </ul>
              </div>
              <div className="flex justify-start mt-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent/20 overflow-hidden">
                  <img src="/lovable-uploads/7b36ed01-b0ce-4ab8-9964-584fb2c7ba36.png" alt="Picking and kitting" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Manufacturing - Bottom Right */}
            <div className="absolute bottom-0 right-0 max-w-xs text-right">
              <div className="text-center mb-2">
                <span className="text-sm font-semibold text-secondary">Material Handling</span>
              </div>
              <div className="flex justify-start mb-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-secondary/20 overflow-hidden">
                  <img src="/lovable-uploads/8f6eb9f1-323c-4635-a08a-8b3484c5d126.png" alt="Material handling" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 border-r-4 border-secondary">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Material Handling</li>
                  <li>• Assembly & Processing</li>
                  <li>• Packaging & Batch Processing</li>
                </ul>
              </div>
            </div>
            
            {/* Lab Automation - Bottom Left */}
            <div className="absolute bottom-0 left-0 max-w-xs">
              <div className="text-center mb-2">
                <span className="text-sm font-semibold text-primary">Automated Inspection & Testing</span>
              </div>
              <div className="flex justify-end mb-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20 overflow-hidden">
                  <img src="/lovable-uploads/f191ab51-7c99-400f-8dca-10df86689ff4.png" alt="Lab automation" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 border-l-4 border-primary">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Automated Inspection & Testing</li>
                  <li>• Sorting & Defect Isolation</li>
                  <li>• Compliance verification</li>
                </ul>
              </div>
            </div>
            
            {/* Outbound/Dispatch - Middle Left */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 max-w-xs">
              <div className="bg-slate-100 rounded-lg p-4 border-l-4 border-accent">
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Order Picking & Palletizing</li>
                  <li>• Load Sequencing & Transport</li>
                  <li>• Truck Loading & Final Verification</li>
                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-accent/20 overflow-hidden">
                  <img src="/lovable-uploads/2991708b-0967-45b6-941f-9198703ebe8e.png" alt="Outbound operations" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Connecting arrows */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                   refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--primary))" opacity="0.6" />
                  </marker>
                </defs>
                
                {/* Flow lines */}
                <line x1="200" y1="150" x2="300" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                <line x1="600" y1="150" x2="500" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                <line x1="650" y1="300" x2="550" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                <line x1="600" y1="450" x2="500" y2="400" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                <line x1="200" y1="450" x2="300" y2="400" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
                <line x1="150" y1="300" x2="250" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
          </div>
          
          {/* Bottom Technology Foundation */}
          <div className="mt-20 bg-white rounded-2xl p-6 border-2 border-dashed border-primary/20 shadow-sm">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Cog className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-sm">Autonomous Material Handling and transport</h4>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-bold text-sm">Collaborative Robotics (Cobots)</h4>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-sm">AI Driven Control & Orchestration</h4>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-sm">Smart inspection and Quality Control</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vegam Section */}
      <section id="why-vegam" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="heading-lg mb-4">Why Vegam?</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h3 className="heading-md mb-8 text-primary">Core Enterprise Value Drivers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Modular & Scalable</h4>
                    <p className="body-base text-muted-foreground">Designed to grow with enterprise needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Digital Transformation Ready</h4>
                    <p className="body-base text-muted-foreground">Roadmap toward Industry 4.0.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Unified Data Management</h4>
                    <p className="body-base text-muted-foreground">Integrated data to boost innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Complete Ownership</h4>
                    <p className="body-base text-muted-foreground">On-premise deployment with full control.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Customized Optimization</h4>
                    <p className="body-base text-muted-foreground">Proprietary algorithms for competitive edge.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h3 className="heading-md mb-8 text-secondary">Future-Ready, Autonomous Factories</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Autonomous Operations</h4>
                    <p className="body-base text-muted-foreground">Self-driven execution across plants & processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Proactive Risk Mitigation</h4>
                    <p className="body-base text-muted-foreground">AI-enabled robotics predict & prevent hazards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Hyper-Scalable Manufacturing</h4>
                    <p className="body-base text-muted-foreground">Intelligent orchestration across geographies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Continuous Optimization</h4>
                    <p className="body-base text-muted-foreground">Real-time workflow, energy & downtime efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="heading-sm mb-2">Transformational Growth</h4>
                    <p className="body-base text-muted-foreground">Unlock new business models & value creation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ContactDialog>
                <Button size="lg" className="px-10 py-6 body-lg font-bold">
                  Talk to Vegam
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactDialog>
              <Button variant="outline" size="lg" className="px-10 py-6 body-lg font-bold">
                <Download className="mr-2 h-5 w-5" />
                Download Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;