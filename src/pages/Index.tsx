import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopFloorPortfolio from "@/components/ShopFloorPortfolio";
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

        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in-up leading-tight">
              Light's Out Manufacturing: 
              <span className="block text-red-600">The Era of Autonomous Factories</span>
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
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Future of Manufacturing</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">From Digital to Autonomous Factories</h3>
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

      {/* Vegam Journey Section - Curved Timeline */}
      <section id="vegam-journey" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Vegam Journey: Proven History in Manufacturing Transformation</h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Over two decades of experience in digitalizing and transforming manufacturing operations across the globe.
            </p>
          </div>

          {/* Diagonal Growth Timeline */}
          <div className="relative min-h-[800px] lg:min-h-[700px] overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-4 h-full">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="border-l border-muted-foreground/30"></div>
                ))}
              </div>
            </div>

            {/* SVG Diagonal Growth Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="diagonalGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(214 100% 50%)" stopOpacity="1" />
                </linearGradient>
                <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="hsl(var(--primary))" floodOpacity="0.3"/>
                </filter>
              </defs>
              {/* Diagonal growth line from bottom-left to upper-right */}
              <path 
                d="M 100 650 L 1100 150" 
                stroke="url(#diagonalGradient)" 
                strokeWidth="3" 
                fill="none" 
                filter="url(#lineShadow)"
                className="animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              />
              {/* Arrow head at the end */}
              <polygon 
                points="1100,150 1090,140 1090,145 1080,145 1080,155 1090,155 1090,160" 
                fill="hsl(214 100% 50%)" 
                className="animate-fade-in"
                style={{ animationDelay: '1s' }}
              />
            </svg>

            {/* Strong Foundation for Innovation Card */}
            <div className="absolute top-4 left-4 lg:top-8 lg:left-8 max-w-sm bg-background/95 rounded-2xl p-6 border shadow-xl backdrop-blur-sm z-20">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Strong Foundation for Innovation
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">230+ dedicated R&D professionals in India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">ISO 27001 certified for information security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">ISO 9001 certified for quality management</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Proven track record across global deployments & 24/7 support.
              </p>
            </div>

            {/* Desktop Timeline Nodes */}
            <div className="hidden lg:block relative z-10 h-full">
              {[
                {
                  id: 1,
                  year: '2000',
                  title: 'Foundation with digital factory vision.',
                  position: { left: '8.5%', top: '81%' },
                  isPast: true
                },
                {
                  id: 2,
                  year: '2007',
                  title: 'First plant fully digitalized.',
                  position: { left: '20%', top: '71%' },
                  isPast: true
                },
                {
                  id: 3,
                  year: '2013',
                  title: '18 plants connected in network.',
                  position: { left: '31%', top: '61%' },
                  isPast: true
                },
                {
                  id: 4,
                  year: '2016',
                  title: 'Scaled to 70 plants globally.',
                  position: { left: '42.5%', top: '51%' },
                  isPast: true
                },
                {
                  id: 5,
                  year: '2019',
                  title: 'Milestone of 100+ plants achieved.',
                  position: { left: '54%', top: '41%' },
                  isPast: true
                },
                {
                  id: 6,
                  year: '2023',
                  title: 'Foundation for Autonomous factories.',
                  position: { left: '65.5%', top: '31%' },
                  isPast: true
                },
                {
                  id: 7,
                  year: '2025',
                  title: 'Milestone of 300+ plants achieved.',
                  position: { left: '77%', top: '21%' },
                  isPast: false
                },
                {
                  id: 8,
                  year: '2026',
                  title: 'Projected First Fully Autonomous Plant.',
                  position: { left: '88.5%', top: '11%' },
                  isPast: false
                },
                {
                  id: 9,
                  year: '2030',
                  title: '1000 Autonomous Plants.',
                  position: { right: '2%', top: '5%' },
                  isPast: false
                }
              ].map((milestone, index) => (
                <button
                  key={milestone.id}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                  style={milestone.position}
                  aria-label={`${milestone.year} — ${milestone.title}`}
                  tabIndex={0}
                >
                  {/* Node Circle */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-200 group-hover:scale-125 group-focus:scale-125 ${
                      milestone.isPast 
                        ? 'bg-muted border-muted-foreground/60' 
                        : 'bg-destructive border-destructive'
                    }`}>
                      <div className={`absolute inset-0 rounded-full transition-all duration-200 group-hover:animate-ping ${
                        milestone.isPast 
                          ? 'border border-muted-foreground/30' 
                          : 'border border-destructive/30'
                      }`}></div>
                    </div>
                    
                    {/* Year Label */}
                    <div className={`mt-3 px-3 py-1 rounded-full text-lg font-bold shadow-sm transition-all duration-200 group-hover:scale-110 group-focus:scale-110 ${
                      milestone.isPast 
                        ? 'bg-muted text-muted-foreground' 
                        : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {milestone.year}
                    </div>

                    {/* Caption Card */}
                    <div className={`mt-4 bg-background rounded-xl p-4 shadow-lg border max-w-80 transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1 group-focus:shadow-xl group-focus:-translate-y-1 ${
                      milestone.isPast 
                        ? 'border-border' 
                        : 'border-destructive/20'
                    }`}>
                      <p className={`text-sm font-medium leading-relaxed text-center ${
                        milestone.isPast 
                          ? 'text-foreground' 
                          : 'text-destructive'
                      }`}>
                        {milestone.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden relative z-10 pt-64">
              <div className="space-y-8 px-4">
                {[
                  { year: '2000', title: 'Foundation with digital factory vision.', isPast: true },
                  { year: '2007', title: 'First plant fully digitalized.', isPast: true },
                  { year: '2013', title: '18 plants connected in network.', isPast: true },
                  { year: '2016', title: 'Scaled to 70 plants globally.', isPast: true },
                  { year: '2019', title: 'Milestone of 100+ plants achieved.', isPast: true },
                  { year: '2023', title: 'Foundation for Autonomous factories.', isPast: true },
                  { year: '2025', title: 'Milestone of 300+ plants achieved.', isPast: false },
                  { year: '2026', title: 'Projected First Fully Autonomous Plant.', isPast: false },
                  { year: '2030', title: '1000 Autonomous Plants.', isPast: false }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        milestone.isPast 
                          ? 'bg-muted border-muted-foreground/60' 
                          : 'bg-destructive border-destructive'
                      }`}></div>
                      {index < 8 && (
                        <div className="w-px h-8 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${
                        milestone.isPast 
                          ? 'bg-muted text-muted-foreground' 
                          : 'bg-destructive text-destructive-foreground'
                      }`}>
                        {milestone.year}
                      </div>
                      <p className={`text-sm ${
                        milestone.isPast 
                          ? 'text-foreground' 
                          : 'text-destructive'
                      }`}>
                        {milestone.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section id="global-partnerships" className="section-padding bg-gradient-to-br from-gray-50/50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Global Partnerships & <span className="text-red-600">Big Wins</span></h2>
          </div>
          
          {/* Strategic Partnerships - Full Width Row */}
          <div className="mt-16 mb-12">
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/20">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Handshake className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Strategic Partnerships</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Trusted Long-Term Partner to Global Leaders in Chemicals & Manufacturing
                  </p>
                </div>
                
                {/* Company Logos Grid */}
                <div className="bg-white/60 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/85aadf10-6770-458d-a137-5836196e9f54.png" 
                    alt="Global partner company logos including ARKEMA, BASF, BELCO, BOSTIK, EMERSON, EVONIK, HENKEL, Saint-Gobain, SEP, Avery Dennison, SKF, SOLEX, Unilever, Vedanta, INDORAMA, JSL, JSW Steel, LG Electronics, MRCC, Target, and OKW" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Implementation Excellence & Continuous Support - Two Cards Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Implementation Excellence Card */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-white to-green-50/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:pulse transition-all duration-300">
                    <Settings className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Implementation Excellence</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20 rounded-xl -z-10"></div>
                  <div className="bg-white/60 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:pulse">
                        <Factory className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comprehensive digital manufacturing operations management tools with proven track records of delivering sustained improvements across facilities worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continuous Support Card */}
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 group-hover:pulse transition-all duration-300">
                    <Headphones className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Continuous Support</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-xl -z-10"></div>
                  <div className="bg-white/60 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:pulse">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-medium text-green-600">24/7 GLOBAL</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Always-on global support infrastructure ensuring optimal operations and rapid troubleshooting for mission-critical systems.
                        </p>
                      </div>
                    </div>
                    
                    {/* Time Zone Indicators */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200/50">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">Americas</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">EMEA</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">APAC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

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
              <Button variant="outline" size="lg" className="px-10 py-6 body-lg font-bold">
                <Download className="mr-2 h-5 w-5" />
                Download Deck
              </Button>
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