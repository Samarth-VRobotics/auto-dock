import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopFloorPortfolio from "@/components/ShopFloorPortfolio";
import DownloadDeckDialog from "@/components/DownloadDeckDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
import { ArrowRight, Brain, Cog, Zap, Network, Clock, Shield, BarChart3, Users, Globe, Building2, Truck, Factory, Boxes, Package, FlaskConical, FileText, Download, CheckCircle2, Star, TrendingUp, Target, Settings, Database, Hand, Cpu, Gauge, Lightbulb, Handshake, Headphones, MapPin } from "lucide-react";
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 animate-fade-in-up leading-tight">
              Light's Out Manufacturing: 
              <span className="block text-red-600 mt-2">The Era of Autonomous Factories</span>
            </h1>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{
            animationDelay: '0.3s',
            animationFillMode: 'both'
          }}>
              <Badge className="badge-primary text-xs sm:text-sm">Digital Factories</Badge>
              <Badge className="badge-primary text-xs sm:text-sm">Industrial IoT</Badge>
              <Badge className="badge-secondary text-xs sm:text-sm">Robotics & Automation</Badge>
              <Badge className="badge-secondary text-xs sm:text-sm">Data Sciences AI/ML</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in" style={{
            animationDelay: '0.9s',
            animationFillMode: 'both'
          }}>
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-bold hover:scale-105 transition-transform" onClick={() => scrollToSection('future-manufacturing')}>
                Explore the Vision
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <ContactDialog>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-bold hover:scale-105 transition-transform">
                  Contact Vegam
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Manufacturing Section */}
      <section id="future-manufacturing" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 sm:mb-4">Future of Manufacturing</h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-red-600 mb-4 sm:mb-6">From Digital to Autonomous Factories</h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Pioneering the next evolution in manufacturing excellence. Vegam guides industry leaders through the transformation from digital operations to fully autonomous factories, combining decades of expertise with cutting-edge innovation in AI, robotics, and self-optimizing systems.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                <img src="/lovable-uploads/e3c6f9fe-fe05-4fde-8134-14dffba60042.png" alt="Production Line 7 with autonomous robotic arms and digital monitoring systems" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Evolution Section */}
      <section id="industry-evolution" className="section-padding relative bg-gradient-to-r from-slate-50 via-blue-50 to-red-50">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/40 via-blue-100/40 to-red-100/40"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-20">Industry Evolution</h2>
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Progressive Timeline Arrow */}
            <div className="absolute top-1/2 left-16 right-16 -translate-y-1/2">
              {/* Main Progressive Line */}
              <div className="relative h-2">
                {/* Background line */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-blue-400 to-red-500 rounded-full"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/30 via-blue-500/50 to-red-600/70 rounded-full blur-sm"></div>
                {/* Growth emphasis - line gets thicker */}
                <div className="absolute left-0 top-1/2 w-1/3 h-1 bg-slate-400 rounded-full -translate-y-1/2"></div>
                <div className="absolute left-1/3 top-1/2 w-1/3 h-1.5 bg-blue-500 rounded-full -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-1/3 h-2 bg-red-500 rounded-full -translate-y-1/2"></div>
              </div>
              
              {/* Large Arrowhead at the end */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 transform rotate-45 rounded-sm shadow-lg"></div>
                <div className="absolute inset-0 w-8 h-8 bg-red-400 transform rotate-45 rounded-sm blur-sm opacity-50"></div>
              </div>
            </div>
            
            {/* Timeline Nodes with Growth Emphasis */}
            <div className="flex justify-between items-center py-20 px-16">
              {/* Yesterday Node - Smaller, Muted */}
              <div className="group relative flex flex-col items-center cursor-pointer transform transition-all duration-500 hover:scale-110 focus:scale-110 focus:outline-none" tabIndex={0} role="button" aria-label="Yesterday: Manual Operations – Paper-driven processes with limited automation capabilities">
                {/* Node Circle */}
                <div className="relative">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center shadow-md border-3 border-white group-hover:border-slate-400 group-focus:border-slate-400 transition-all duration-500 group-hover:shadow-xl group-focus:shadow-xl group-hover:w-18 group-hover:h-18 group-focus:w-18 group-focus:h-18">
                    <Users className="w-8 h-8 text-slate-500 group-hover:text-slate-700 group-focus:text-slate-700 transition-colors duration-500" />
                  </div>
                  {/* Pulse Effect on Hover */}
                  <div className="absolute inset-0 w-16 h-16 bg-slate-400 rounded-full opacity-0 group-hover:opacity-20 group-focus:opacity-20 group-hover:animate-ping group-focus:animate-ping"></div>
                </div>
                
                {/* Content Card */}
                <div className="mt-6 max-w-xs text-center bg-slate-50/90 backdrop-blur-sm rounded-xl p-5 shadow-md border border-slate-200 group-hover:shadow-xl group-focus:shadow-xl group-hover:bg-white group-focus:bg-white transition-all duration-500">
                  <h3 className="text-lg font-bold text-slate-700 mb-2 group-hover:text-slate-900 group-focus:text-slate-900 transition-colors duration-500">Yesterday: Manual Operations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-800 group-focus:text-slate-800 transition-colors duration-500">
                    Paper-driven processes with limited automation capabilities. Heavily dependent on human oversight.
                  </p>
                </div>
              </div>
              
              {/* Today Node - Medium, Blue Emphasis */}
              <div className="group relative flex flex-col items-center cursor-pointer transform transition-all duration-500 hover:scale-110 focus:scale-110 focus:outline-none" tabIndex={0} role="button" aria-label="Today: Digital Factories – Connected operations with data-driven insights">
                {/* Node Circle */}
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-500 group-hover:shadow-2xl group-focus:shadow-2xl group-hover:w-24 group-hover:h-24 group-focus:w-24 group-focus:h-24">
                    <BarChart3 className="w-10 h-10 text-blue-600 group-hover:text-blue-800 group-focus:text-blue-800 transition-colors duration-500" />
                  </div>
                  {/* Pulse Effect on Hover */}
                  <div className="absolute inset-0 w-20 h-20 bg-blue-500 rounded-full opacity-0 group-hover:opacity-30 group-focus:opacity-30 group-hover:animate-ping group-focus:animate-ping"></div>
                </div>
                
                {/* Content Card */}
                <div className="mt-6 max-w-sm text-center bg-blue-50/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200 group-hover:shadow-2xl group-focus:shadow-2xl group-hover:bg-white group-focus:bg-white transition-all duration-500">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-900 group-focus:text-blue-900 transition-colors duration-500">Today: Digital Factories</h3>
                  <p className="text-sm text-blue-700 leading-relaxed group-hover:text-blue-800 group-focus:text-blue-800 transition-colors duration-500">
                    Connected operations with data-driven insights. Digital tools enable enhanced visibility but still require human intervention.
                  </p>
                </div>
                
                {/* "Current State" Badge */}
                <div className="absolute -top-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  Current State
                </div>
              </div>
              
              {/* Tomorrow Node - Largest, Red Future Vision */}
              <div className="group relative flex flex-col items-center cursor-pointer transform transition-all duration-500 hover:scale-110 focus:scale-110 focus:outline-none" tabIndex={0} role="button" aria-label="Tomorrow: Autonomous Factories – Self-optimizing systems powered by AI and advanced robotics">
                {/* Node Circle */}
                <div className="relative">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:border-red-400 group-focus:border-red-400 transition-all duration-500 group-hover:shadow-2xl group-focus:shadow-2xl group-hover:w-28 group-hover:h-28 group-focus:w-28 group-focus:h-28">
                    <Brain className="w-12 h-12 text-red-600 group-hover:text-red-800 group-focus:text-red-800 transition-colors duration-500" />
                  </div>
                  {/* Pulse Effect on Hover */}
                  <div className="absolute inset-0 w-24 h-24 bg-red-500 rounded-full opacity-0 group-hover:opacity-40 group-focus:opacity-40 group-hover:animate-ping group-focus:animate-ping"></div>
                </div>
                
                {/* Content Card */}
                <div className="mt-6 max-w-sm text-center bg-red-50/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-red-200 group-hover:shadow-2xl group-focus:shadow-2xl group-hover:bg-white group-focus:bg-white transition-all duration-500">
                  <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-900 group-focus:text-red-900 transition-colors duration-500">Tomorrow: Autonomous Factories</h3>
                  <p className="text-sm text-red-700 leading-relaxed group-hover:text-red-800 group-focus:text-red-800 transition-colors duration-500">
                    Self-optimizing systems powered by AI and advanced robotics. Minimal human intervention required as facilities automatically adapt.
                  </p>
                </div>
                
                {/* "Future Vision" Badge */}
                <div className="absolute -top-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  Future Vision
                </div>
              </div>
            </div>
            
            {/* Growth Indicators */}
            
          </div>
          
          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-16">
            {/* Yesterday */}
            <div className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 focus:scale-105">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500">
                <Users className="w-8 h-8 text-slate-500 group-hover:text-slate-700 transition-colors duration-500" />
              </div>
              <div className="w-2 h-16 bg-gradient-to-b from-slate-400 to-blue-400 my-6 rounded-full shadow-sm"></div>
              <div className="bg-slate-50/90 backdrop-blur-sm rounded-xl p-6 shadow-md max-w-sm group-hover:shadow-xl group-hover:bg-white transition-all duration-500">
                <h3 className="text-lg font-bold text-slate-700 mb-3 group-hover:text-slate-900 transition-colors duration-500">Yesterday: Manual Operations</h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-500">
                  Paper-driven processes with limited automation capabilities. Heavily dependent on human oversight.
                </p>
              </div>
            </div>
            
            {/* Today */}
            <div className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 focus:scale-105">
              <div className="relative">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <BarChart3 className="w-10 h-10 text-blue-600 group-hover:text-blue-800 transition-colors duration-500" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Current
                </div>
              </div>
              <div className="w-2 h-16 bg-gradient-to-b from-blue-400 to-red-400 my-6 rounded-full shadow-sm"></div>
              <div className="bg-blue-50/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-sm group-hover:shadow-xl group-hover:bg-white transition-all duration-500">
                <h3 className="text-lg font-bold text-blue-800 mb-3 group-hover:text-blue-900 transition-colors duration-500">Today: Digital Factories</h3>
                <p className="text-sm text-blue-700 leading-relaxed group-hover:text-blue-800 transition-colors duration-500">
                  Connected operations with data-driven insights. Digital tools enable enhanced visibility but still require human intervention.
                </p>
              </div>
            </div>
            
            {/* Tomorrow */}
            <div className="group relative flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 focus:scale-105">
              <div className="relative">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Brain className="w-12 h-12 text-red-600 group-hover:text-red-800 transition-colors duration-500" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  Future
                </div>
              </div>
              <div className="bg-red-50/90 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-sm group-hover:shadow-2xl group-hover:bg-white transition-all duration-500">
                <h3 className="text-lg font-bold text-red-800 mb-3 group-hover:text-red-900 transition-colors duration-500">Tomorrow: Autonomous Factories</h3>
                <p className="text-sm text-red-700 leading-relaxed group-hover:text-red-800 transition-colors duration-500">
                  Self-optimizing systems powered by AI and advanced robotics. Minimal human intervention required as facilities automatically adapt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section id="key-technologies" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Key Technologies <span className="text-red-600">Driving the Shift</span></h2>
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

      {/* Vegam Journey Section - Enhanced Interactive Timeline */}
      <section className="vegam-journey min-h-screen flex flex-col justify-center bg-gradient-to-br from-background via-muted/30 to-accent/5 relative overflow-hidden py-8">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <img src="/lovable-uploads/1b457b5e-e209-4e7f-93fb-3edebe02a174.png" alt="Manufacturing evolution background" className="w-full h-full object-cover brightness-75" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/20 to-background/40"></div>
        <div className="container mx-auto px-6 lg:px-8 relative flex-1 flex flex-col justify-center">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-foreground px-4">
              Vegam Journey: Proven History in Manufacturing Transformation
            </h2>
          </div>

          <div className="timeline-container relative max-w-7xl mx-auto flex-1 flex items-center justify-center" style={{
          paddingRight: 'min(4vw, 80px)',
          paddingLeft: 'min(4vw, 80px)',
          overflow: 'visible'
        }}>
            <style>{`
               .vj-svg { 
                 width: 100%; 
                 height: 100%; 
                 display: block; 
                 filter: drop-shadow(0 4px 20px hsl(var(--primary) / 0.1));
               }
               .vj-year { 
                 font: 800 36px/1.2 Inter, system-ui; 
                 fill: hsl(var(--foreground)); 
                 transition: all 0.2s ease-out;
                 text-anchor: middle;
                 font-weight: 800;
                 letter-spacing: 0.5px;
               }
                .vj-year-visible {
                  font: 700 33px/1.2 Inter, system-ui;
                  fill: hsl(var(--foreground));
                  transition: all 0.2s ease-out;
                  text-anchor: middle;
                  font-weight: 700;
                  letter-spacing: 0.5px;
                }
                .vj-cap { 
                  font: 600 27px/1.4 Inter, system-ui; 
                  fill: hsl(var(--foreground)); 
                  transition: all 0.2s ease-out;
                  text-anchor: start;
                  font-weight: 600;
                  letter-spacing: 0.2px;
                  white-space: normal;
                  overflow: visible;
                  text-overflow: clip;
                }
              .vj-cap strong { font-weight: 700; }
                .vj-node-ring { 
                 fill: hsl(var(--background)); 
                 stroke: hsl(var(--background)); 
                 stroke-width: 9; 
                 filter: drop-shadow(0 4px 15px hsl(var(--foreground) / 0.18));
               }
              .vj-node--past { 
                fill: hsl(var(--primary)); 
                transition: all 0.2s ease-out;
              }
              .vj-node--future { 
                fill: hsl(var(--destructive)); 
                transition: all 0.2s ease-out;
              }
               .vj-line { 
                 stroke-width: 6; 
                 fill: none; 
                 filter: drop-shadow(0 4px 8px hsl(var(--primary) / 0.3));
               }
               .vj-card rect { 
                 fill: hsl(var(--card)); 
                 rx: 24; 
                 transition: all 0.2s ease-out;
                 stroke: hsl(var(--border));
                 stroke-width: 3;
               }
               .vj-card { 
                 filter: drop-shadow(0 10px 30px hsl(var(--foreground) / 0.12)); 
                 transition: all 0.2s ease-out;
                 transform-origin: top center;
               }
              .milestone { 
                cursor: pointer; 
                outline: none; 
                transition: all 0.2s ease-out;
              }
              .milestone .vj-node { 
                transition: all 0.2s ease-out; 
                transform-origin: center; 
              }
              .milestone .vj-card { 
                opacity: 1; 
                pointer-events: auto; 
                transform: translateY(0);
                transition: all 0.2s ease-out;
                transform-origin: top center;
              }
              /* Node circle hover effects */
              .milestone:hover .vj-node,
              .milestone:focus-visible .vj-node {
                transform: scale(1.09);
                filter: drop-shadow(0 4px 14px hsl(var(--foreground) / 0.15));
              }
               /* Card hover effects - gentle enlarge with shadow */
               .milestone:hover .vj-card,
               .milestone:focus-visible .vj-card {
                 transform: scale(1.04);
                 filter: drop-shadow(0 12px 30px hsl(var(--foreground) / 0.15));
               }
               /* Past milestone hover (≤2025) - blue accent */
               .milestone[data-key="2000"]:hover .vj-card rect,
               .milestone[data-key="2007"]:hover .vj-card rect,
               .milestone[data-key="2013"]:hover .vj-card rect,
               .milestone[data-key="2016"]:hover .vj-card rect,
               .milestone[data-key="2019"]:hover .vj-card rect,
               .milestone[data-key="2023"]:hover .vj-card rect,
               .milestone[data-key="2025"]:hover .vj-card rect,
               .milestone[data-key="2000"]:focus-visible .vj-card rect,
               .milestone[data-key="2007"]:focus-visible .vj-card rect,
               .milestone[data-key="2013"]:focus-visible .vj-card rect,
               .milestone[data-key="2016"]:focus-visible .vj-card rect,
               .milestone[data-key="2019"]:focus-visible .vj-card rect,
               .milestone[data-key="2023"]:focus-visible .vj-card rect,
               .milestone[data-key="2025"]:focus-visible .vj-card rect {
                 stroke: hsl(var(--primary));
                 stroke-width: 2;
               }
               /* Future milestone hover (2026, 2030) - red accent */
               .milestone[data-key="2026"]:hover .vj-card rect,
               .milestone[data-key="2030"]:hover .vj-card rect,
               .milestone[data-key="2026"]:focus-visible .vj-card rect,
               .milestone[data-key="2030"]:focus-visible .vj-card rect {
                 stroke: hsl(var(--destructive));
                 stroke-width: 2;
               }
              .vj-foundation-card {
                cursor: pointer;
                transition: all 0.2s ease-out;
              }
              .vj-foundation-card:hover {
                filter: drop-shadow(0 8px 20px hsl(var(--primary) / 0.25));
              }
              /* Ensure layering */
              .vj-layer-line { isolation: isolate; z-index: 1; }
              .vj-layer-nodes { isolation: isolate; z-index: 2; }
              
                  /* Mobile responsive adjustments */
                  @media (max-width: 768px) {
                    .timeline-container > div { height: 85vh !important; min-height: 600px !important; }
                    .vj-svg { transform: scale(0.75); transform-origin: center; }
                    .vj-year { font-size: 42px; }
                    .vj-year-visible { font-size: 39px; font-weight: 700; }
                    .vj-cap { font-size: 22px; font-weight: 600; }
                    .vj-node { r: 54; }
                    .vj-node-ring { r: 66; }
                    .vj-card rect { height: auto; min-height: 120px; rx: 30; }
                  }
                
                 /* Tablet responsive adjustments */
                 @media (min-width: 769px) and (max-width: 1024px) {
                   .timeline-container > div { height: 82vh !important; min-height: 650px !important; }
                   .vj-svg { transform: scale(0.8); transform-origin: center; }
                   .vj-year { font-size: 39px; }
                   .vj-year-visible { font-size: 36px; font-weight: 700; }
                   .vj-cap { font-size: 22px; font-weight: 600; }
                   .vj-node { r: 51; }
                   .vj-node-ring { r: 63; }
                   .vj-card rect { height: auto; min-height: 113px; rx: 30; }
                 }
                
                 /* Desktop responsive adjustments */
                 @media (min-width: 1025px) {
                   .timeline-container > div { height: 80vh !important; min-height: 700px !important; }
                   .vj-svg { transform: scale(0.85); transform-origin: center; }
                 }
             `}</style>
            <div className="w-full" style={{ height: '80vh', minHeight: '700px', maxHeight: '900px' }}>
            <svg className="vj-svg" viewBox="0 0 2000 1400" role="img" aria-label="Interactive diagonal timeline with 9 milestones from 2000 to 2030" 
                 style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="vj-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--destructive))" />
                  <stop offset="35%" stopColor="hsl(var(--accent))" />
                  <stop offset="70%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
                <marker id="vj-arrow" markerWidth={12} markerHeight={12} refX={9} refY={6} orient="auto">
                  <path d="M0,0 L0,12 L12,6 z" fill="hsl(var(--destructive))"></path>
                </marker>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation={3} result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

               {/* diagonal growth line (behind everything) - Evenly spaced from bottom-left to top-right */}
               <g className="vj-layer-line">
                 <path className="vj-line" stroke="url(#vj-grad)" markerEnd="url(#vj-arrow)" d="M 200 1200 L 1800 200" />
               </g>

              {/* NODES + CARDS (above the line) - Evenly spaced timeline */}
              <g className="vj-layer-nodes" aria-label="timeline milestones" tabIndex={-1}>
                
                {/* 1) 2000 */}
                 <g className="milestone" data-key="2000" transform="translate(200,1200)" tabIndex={0} aria-label="2000 — Foundation with digital factory vision" aria-describedby="milestone-2000">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  {/* Year label always visible */}
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2000</text>
                  
                  {/* Message card - positioned below to avoid overlap */}
                   <g className="vj-card" transform="translate(-210,70)" id="milestone-2000">
                     <rect width={420} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Foundation with digital factory vision</tspan>
                     </text>
                   </g>
                </g>

                {/* 2) 2007 */}
                 <g className="milestone" data-key="2007" transform="translate(400,1075)" tabIndex={0} aria-label="2007 — First plant fully digitalized" aria-describedby="milestone-2007">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2007</text>
                  
                  {/* Message card - positioned above to avoid overlap */}
                   <g className="vj-card" transform="translate(-180,-135)" id="milestone-2007">
                     <rect width={360} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">First plant fully digitalized</tspan>
                     </text>
                   </g>
                </g>

                {/* 3) 2013 */}
                 <g className="milestone" data-key="2013" transform="translate(600,950)" tabIndex={0} aria-label="2013 — 18 plants connected in network" aria-describedby="milestone-2013">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2013</text>
                  
                  {/* Message card - positioned below */}
                   <g className="vj-card" transform="translate(-210,70)" id="milestone-2013">
                     <rect width={420} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))"><tspan fontWeight="700">18</tspan> plants connected in network</tspan>
                     </text>
                   </g>
                </g>

                {/* 4) 2016 */}
                 <g className="milestone" data-key="2016" transform="translate(800,825)" tabIndex={0} aria-label="2016 — Scaled to 70 plants globally" aria-describedby="milestone-2016">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2016</text>
                  
                  {/* Message card - positioned above */}
                   <g className="vj-card" transform="translate(-195,-135)" id="milestone-2016">
                     <rect width={390} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Scaled to <tspan fontWeight="700">70</tspan> plants globally</tspan>
                     </text>
                   </g>
                </g>

                {/* 5) 2019 */}
                 <g className="milestone" data-key="2019" transform="translate(1000,700)" tabIndex={0} aria-label="2019 — Milestone of 100+ plants achieved" aria-describedby="milestone-2019">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2019</text>
                  
                  {/* Message card - positioned below */}
                   <g className="vj-card" transform="translate(-225,70)" id="milestone-2019">
                     <rect width={450} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Milestone of <tspan fontWeight="700">100+</tspan> plants achieved</tspan>
                     </text>
                   </g>
                </g>

                {/* 6) 2023 */}
                 <g className="milestone" data-key="2023" transform="translate(1200,575)" tabIndex={0} aria-label="2023 — Foundation for Autonomous factories" aria-describedby="milestone-2023">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2023</text>
                  
                  {/* Message card - positioned above */}
                   <g className="vj-card" transform="translate(-225,-135)" id="milestone-2023">
                     <rect width={450} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Foundation for Autonomous factories</tspan>
                     </text>
                   </g>
                </g>

                {/* 7) 2025 */}
                 <g className="milestone" data-key="2025" transform="translate(1400,450)" tabIndex={0} aria-label="2025 — Milestone of 300+ plants achieved" aria-describedby="milestone-2025">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--past" r={36}></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--foreground))">2025</text>
                  
                  {/* Message card - positioned below */}
                   <g className="vj-card" transform="translate(-240,70)" id="milestone-2025">
                     <rect width={480} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--border))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Milestone of <tspan fontWeight="700">300+</tspan> plants achieved</tspan>
                     </text>
                   </g>
                </g>

                {/* 8) 2026 (future) */}
                 <g className="milestone" data-key="2026" transform="translate(1600,325)" tabIndex={0} aria-label="2026 — Projected First Fully Autonomous Plant" aria-describedby="milestone-2026">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--future" r={36} filter="url(#glow)"></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--destructive))">2026</text>
                  
                  {/* Message card - positioned above */}
                   <g className="vj-card" transform="translate(-255,-135)" id="milestone-2026">
                     <rect width={510} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--destructive))" strokeWidth={3}></rect>
                     <text className="vj-cap" x={24} y={48}>
                       <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))">Projected First Fully Autonomous Plant</tspan>
                     </text>
                   </g>
                </g>

                {/* 9) 2030 (future) */}
                 <g className="milestone" data-key="2030" transform="translate(1800,200)" tabIndex={0} aria-label="2030 — 1000 Autonomous Plants" aria-describedby="milestone-2030">
                   <circle className="vj-node-ring" r={48}></circle>
                   <circle className="vj-node vj-node--future" r={36} filter="url(#glow)"></circle>
                  
                  <text className="vj-year-visible" x={0} y={-50} textAnchor="middle" fill="hsl(var(--destructive))">2030</text>
                  
                  {/* Message card - positioned below */}
                   <g className="vj-card" transform="translate(-210,70)" id="milestone-2030">
                     <rect width={420} height={75} fill="hsl(var(--card))" rx={24} stroke="hsl(var(--destructive))" strokeWidth={3}></rect>
                      <text className="vj-cap" x={24} y={48}>
                        <tspan x="24" dy="0" fontSize="24" fontWeight="600" fill="hsl(var(--foreground))"><tspan fontWeight="700">1000</tspan> Autonomous Plants</tspan>
                      </text>
                    </g>
                 </g>

                   {/* Our Strengths Panel - Repositioned to fit in larger viewBox */}
                   <g className="vj-strengths-panel" transform="translate(100,50)" aria-label="Our company strengths">
                    {/* Panel background */}
                    <rect width="640" height="120" fill="hsl(var(--card) / 0.95)" rx="20" stroke="hsl(var(--border))" strokeWidth="3" 
                          filter="drop-shadow(0 15px 40px hsl(var(--foreground) / 0.15))" />
                    
                    {/* Title */}
                    <text x="320" y="35" textAnchor="middle" fontSize="28" fontWeight="700" fill="hsl(var(--foreground))">Our Strengths</text>
                    
                    {/* Horizontal layout for strengths */}
                    <g transform="translate(40,65)">
                      <text x="0" y="20" fontSize="22" fontWeight="700" fill="hsl(var(--primary))">230+</text>
                      <text x="0" y="35" fontSize="16" fill="hsl(var(--foreground))">R&amp;D professionals</text>
                    </g>
                    
                    <g transform="translate(220,65)">
                      <text x="0" y="20" fontSize="20" fontWeight="700" fill="hsl(var(--primary))">ISO 27001</text>
                      <text x="0" y="35" fontSize="16" fill="hsl(var(--foreground))">Security certified</text>
                    </g>
                    
                    <g transform="translate(420,65)">
                      <text x="0" y="20" fontSize="20" fontWeight="700" fill="hsl(var(--primary))">ISO 9001</text>
                      <text x="0" y="35" fontSize="16" fill="hsl(var(--foreground))">Quality certified</text>
                    </g>
                  </g>
               </g>

            </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      

      {/* Vegam's Offerings Section */}
      <section id="offerings" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Vegam's <span className="text-red-600">Offerings</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Row 1: MOM and GOM */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-4">Manufacturing Operations Management (MOM)</h3>
              <p className="body-base text-muted-foreground">End-to-end digitalization of shop floor operations with real-time visibility and control</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift h-full">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="heading-sm mb-4">Global Operations Management (GOM)</h3>
              <p className="body-base text-muted-foreground">Cross-facility optimization with standardized metrics and centralized control capabilities</p>
            </div>
            
            {/* Row 2: AI/ML and Robotics */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-4">AI, ML & Generative AI Integration</h3>
              <p className="body-base text-muted-foreground">Advanced analytics that transform data into actionable insights and autonomous decisions</p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift h-full">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="heading-sm mb-4">Robotics & Smart IIoT</h3>
              <p className="body-base text-muted-foreground">Seamless integration of physical systems with digital infrastructure for autonomous operations</p>
            </div>
            
            {/* Row 3: Unified KPIs (centered) */}
            <div className="bg-card rounded-2xl p-8 border shadow-lg hover-lift h-full md:col-span-2 md:max-w-md md:mx-auto">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-sm mb-4">Unified KPIs</h3>
              <p className="body-base text-muted-foreground">Standardized performance metrics across regions and plants for true global optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Floor Automation Portfolio Section */}
      <ShopFloorPortfolio />


      {/* Why Vegam Section */}
      <section id="why-vegam" className="section-padding relative bg-gradient-to-r from-gray-100 via-gray-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why <span className="text-red-600">Vegam?</span></h2>
          </div>
          
          {/* Enhanced Torch Light Beam Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Main horizontal beam - wider cone effect */}
            <div className="absolute top-1/2 left-8 lg:left-1/4 w-[600px] lg:w-[800px] h-[300px] lg:h-[400px] -translate-y-1/2 opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-red-500/60 via-red-300/40 via-red-200/30 to-red-100/20 transform rotate-3 lg:rotate-0 lg:skew-y-3 blur-xl"></div>
            </div>
            
            {/* Secondary beam layer for intensity */}
            <div className="absolute top-1/2 left-8 lg:left-1/4 w-[400px] lg:w-[600px] h-[200px] lg:h-[250px] -translate-y-1/2 opacity-25">
              <div className="w-full h-full bg-gradient-to-r from-red-600/70 via-red-400/50 to-red-200/30 transform rotate-2 lg:rotate-0 lg:skew-y-2 blur-2xl"></div>
            </div>
            
            {/* Core beam - most intense */}
            <div className="absolute top-1/2 left-8 lg:left-1/4 w-[300px] lg:w-[500px] h-[150px] lg:h-[200px] -translate-y-1/2 opacity-20">
              <div className="w-full h-full bg-gradient-to-r from-red-700/80 via-red-500/60 to-red-300/40 transform rotate-1 lg:rotate-0 lg:skew-y-1 blur-lg"></div>
            </div>
            
            {/* Mobile vertical beam effect */}
            <div className="lg:hidden absolute top-0 left-1/2 w-[300px] h-[600px] -translate-x-1/2 opacity-20">
              <div className="w-full h-full bg-gradient-to-b from-red-600/60 via-red-400/40 to-red-200/20 transform skew-x-2 blur-2xl"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 relative z-10 lg:items-center">
            {/* Left Block - Torch Source */}
            <div className="relative">
              {/* Torch emission glow */}
              <div className="absolute -right-8 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-red-400/30 to-red-300/40 blur-md lg:block hidden"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-red-500/40 to-red-400/50 blur-sm lg:block hidden"></div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-red-100/50 border border-red-100/50 relative">
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-500 rounded-full"></div>
                  Core Enterprise Value Drivers
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-gray-300/50 transition-all duration-300">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Modular & Scalable</h4>
                      <p className="text-sm text-muted-foreground">Designed to grow with enterprise needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-slate-300/50 transition-all duration-300">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Digital Transformation Ready</h4>
                      <p className="text-sm text-muted-foreground">Roadmap toward Industry 4.0.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-gray-300/50 transition-all duration-300">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Unified Data Management</h4>
                      <p className="text-sm text-muted-foreground">Integrated data to boost innovation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-zinc-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-zinc-300/50 transition-all duration-300">
                      <Hand className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Complete Ownership</h4>
                      <p className="text-sm text-muted-foreground">On-premise deployment with full control.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-stone-300/50 transition-all duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Customized Optimization</h4>
                      <p className="text-sm text-muted-foreground">Proprietary algorithms for competitive edge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Block - Illuminated Future */}
            <div className="relative">
              {/* Red glow halo around edges where light lands */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-200/30 via-red-100/20 to-transparent rounded-3xl blur-xl lg:block hidden"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-red-300/20 via-red-200/15 to-transparent rounded-2xl blur-lg lg:block hidden"></div>
              
              {/* Illumination Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-white/40 to-red-50/40 rounded-2xl blur-sm"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-red-200/30 border border-red-200/50">
                {/* Header with accent background */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <h3 className="text-2xl font-bold text-white text-center">
                    Future-Ready, Autonomous Factories
                  </h3>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gray-600 rounded-xl flex items-center justify-center">
                        <Cog className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Autonomous Operations</h4>
                      <p className="text-xs text-gray-600">Self-driven execution across plants & processes.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-slate-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Proactive Risk Mitigation</h4>
                      <p className="text-xs text-gray-600">AI-enabled robotics predict & prevent hazards.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-zinc-600 rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Hyper-Scalable Manufacturing</h4>
                      <p className="text-xs text-gray-600">Intelligent orchestration across geographies.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-stone-600 rounded-xl flex items-center justify-center">
                        <Gauge className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Continuous Optimization</h4>
                      <p className="text-xs text-gray-600">Real-time workflow, energy & downtime efficiency.</p>
                    </div>
                  </div>
                  
                  {/* Full-width bottom card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Transformational Growth</h4>
                        <p className="text-sm text-gray-600">Unlock new business models & value creation opportunities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center space-y-8 relative z-10">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <ContactDialog>
                <Button size="lg" className="px-10 py-6 body-lg font-bold">
                  Talk to Vegam
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactDialog>
              <DownloadDeckDialog>
                <Button variant="outline" size="lg" className="px-10 py-6 body-lg font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  Download Deck
                </Button>
              </DownloadDeckDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready Autonomous Factories Section */}
      <section id="future-ready-autonomous" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/307df0c7-0ffd-4137-837b-c62ab2530f85.png" alt="Precision manufacturing robotic arm with advanced sensors and lighting" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Future-Ready <span className="text-red-600">Autonomous Factories</span></h2>
                <h3 className="text-3xl font-bold text-foreground mb-6">The Lights-Out Vision</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 md:border-r md:border-gray-200 md:pr-8">
                    <p className="body-base text-muted-foreground leading-relaxed">
                      Autonomous operations transform manufacturing by creating self-sustaining production ecosystems that operate continuously with minimal human intervention. These facilities leverage predictive robotics with proactive risk mitigation capabilities to anticipate and resolve potential issues before they impact operations.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="body-base text-muted-foreground leading-relaxed">
                      The future factory features hyper-scalable orchestration across geographies, enabling seamless production shifts based on demand, resources, and efficiency. Continuous optimization of energy usage, downtime prevention, and workflow efficiency unlocks new business models and growth opportunities previously impossible with traditional manufacturing approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;