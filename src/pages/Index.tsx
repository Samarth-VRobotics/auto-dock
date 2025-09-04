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
                <img src={smartFactoryHall} alt="Smart factory hall with robotic cells and digital signage" className="w-full h-full object-cover" />
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
          <div className="section-header">
            <h2 className="heading-lg mb-4">Vegam Journey</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-primary">2000</span>
                    <p className="body-base text-muted-foreground">Foundation with digital factory vision</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-primary">2007</span>
                    <p className="body-base text-muted-foreground">First plant fully digitalized</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-primary">2013</span>
                    <p className="body-base text-muted-foreground">18 plants connected in network</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-primary">2016</span>
                    <p className="body-base text-muted-foreground">Scaled to 70 plants globally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-primary">2019</span>
                    <p className="body-base text-muted-foreground">Milestone of 100+ plants achieved</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                  <div>
                    <span className="heading-sm text-secondary">2025</span>
                    <p className="body-base text-muted-foreground">Projected 300+ plants milestone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg">
              <h3 className="heading-sm mb-6">Strong Foundation for Innovation</h3>
              <div className="space-y-4">
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
              </div>
              
              <div className="mt-8">
                <img src={manufacturingEvolutionLab} alt="Modern control room and manufacturing evolution lab" className="w-full rounded-lg" />
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
            <h2 className="heading-lg mb-4">Automation Portfolio — Detailed Capabilities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-4">Warehouse</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Automated Storage & Retrieval</li>
                  <li>• Inventory & Condition Monitoring</li>
                  <li>• Replenishment Operations</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Boxes className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-sm mb-4">Dispensing / Staging</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Picking & Kitting</li>
                  <li>• Buffer & Line-side Management</li>
                  <li>• Cross-docking Operations</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-sm mb-4">Manufacturing</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Material Handling</li>
                  <li>• Assembly & Processing</li>
                  <li>• Packaging & Batch Processing</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-sm mb-4">Inbound / Goods Receipt</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Docking & Unloading</li>
                  <li>• Verification & Scanning</li>
                  <li>• Pallet Handling & Transport</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-sm mb-4">Outbound / Dispatch</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Order Picking & Palletizing</li>
                  <li>• Load Sequencing & Transport</li>
                  <li>• Truck Loading & Final Verification</li>
                </ul>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <FlaskConical className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-sm mb-4">Lab Automation</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li>• Automated Inspection & Testing</li>
                  <li>• Sorting & Defect Isolation</li>
                  <li>• Compliance verification</li>
                </ul>
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