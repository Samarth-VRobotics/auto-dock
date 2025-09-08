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

{/* Vegam Journey Section - Clean Professional Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Subtle Background Image - Faded */}
        <div className="absolute inset-0">
          <img 
            src={manufacturingEvolutionLab}
            alt="Manufacturing evolution background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
        </div>
        
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Prominent Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Vegam Journey: 
              <span className="block text-red-600 mt-2">
                Proven History in Manufacturing Transformation
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Clean Timeline Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop/Tablet Timeline */}
            <div className="hidden md:block relative py-20">
              {/* Diagonal Upward Arrow Path */}
              <div className="absolute inset-0 flex items-center">
                <svg 
                  viewBox="0 0 1200 400" 
                  className="w-full h-full max-h-96"
                  preserveAspectRatio="none"
                >
                  {/* Main diagonal arrow path */}
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#64748b', stopOpacity:1}} />
                      <stop offset="40%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="arrowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#64748b', stopOpacity:0.3}} />
                      <stop offset="40%" style={{stopColor:'#3b82f6', stopOpacity:0.4}} />
                      <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:0.5}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Glow effect */}
                  <path 
                    d="M 50 350 Q 300 320 600 250 Q 900 180 1120 150" 
                    stroke="url(#arrowGlow)" 
                    strokeWidth="8" 
                    fill="none"
                    className="blur-sm"
                  />
                  
                  {/* Main path */}
                  <path 
                    d="M 50 350 Q 300 320 600 250 Q 900 180 1120 150" 
                    stroke="url(#arrowGradient)" 
                    strokeWidth="4" 
                    fill="none"
                  />
                  
                  {/* Arrow head */}
                  <path 
                    d="M 1120 150 L 1105 140 L 1105 160 Z" 
                    fill="#dc2626" 
                    className="drop-shadow-sm"
                  />
                </svg>
              </div>
              
              {/* Timeline Points positioned along the diagonal */}
              <div className="relative h-96">
                
                {/* 2000 - Bottom Left */}
                <div className="absolute flex flex-col items-center group" style={{left: '4%', top: '75%'}}>
                  <div className="relative">
                    <div className="w-8 h-8 bg-slate-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-slate-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 max-w-[220px] text-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-slate-800 mb-3">2000</div>
                    <p className="text-sm text-slate-600 leading-relaxed">Foundation with digital factory vision</p>
                  </div>
                </div>

                {/* 2007 - Above the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '16%', top: '25%'}}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center mb-8 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2007</div>
                    <p className="text-sm text-blue-700 leading-relaxed">First plant fully digitalized</p>
                  </div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                </div>

                {/* 2013 - Below the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '28%', top: '60%'}}>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2013</div>
                    <p className="text-sm text-blue-700 leading-relaxed"><span className="font-bold text-blue-600">18</span> plants connected in network</p>
                  </div>
                </div>

                {/* 2016 - Above the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '40%', top: '20%'}}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center mb-8 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2016</div>
                    <p className="text-sm text-blue-700 leading-relaxed">Scaled to <span className="font-bold text-blue-600">70</span> plants globally</p>
                  </div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                </div>

                {/* 2019 - Below the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '52%', top: '50%'}}>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2019</div>
                    <p className="text-sm text-blue-700 leading-relaxed">Milestone of <span className="font-bold text-blue-600">100+</span> plants achieved</p>
                  </div>
                </div>

                {/* 2023 - Above the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '64%', top: '15%'}}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center mb-8 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2023</div>
                    <p className="text-sm text-blue-700 leading-relaxed">Foundation for Autonomous factories</p>
                  </div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-600 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                </div>

                {/* 2025 - Below the line */}
                <div className="absolute flex flex-col items-center group" style={{left: '76%', top: '40%'}}>
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-600 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full animate-ping opacity-30 group-hover:opacity-50"></div>
                  </div>
                  <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200 max-w-[220px] text-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-blue-800 mb-3">2025</div>
                    <p className="text-sm text-blue-700 leading-relaxed">Milestone of <span className="font-bold text-blue-600">300+</span> plants achieved</p>
                  </div>
                </div>

                {/* 2026 - Above the line (Future) */}
                <div className="absolute flex flex-col items-center group" style={{left: '88%', top: '10%'}}>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-200 max-w-[220px] text-center mb-8 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-red-600 mb-3">2026</div>
                    <p className="text-sm text-red-700 leading-relaxed">Projected First Fully Autonomous Plant</p>
                  </div>
                  <div className="relative">
                    <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-red-400 rounded-full animate-ping opacity-40 group-hover:opacity-60"></div>
                  </div>
                </div>

                {/* 2030 - Endpoint (Future) */}
                <div className="absolute flex flex-col items-center group" style={{left: '92%', top: '30%'}}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-xl border-4 border-white relative z-20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 w-10 h-10 bg-red-400 rounded-full animate-pulse opacity-50"></div>
                  </div>
                  <div className="mt-8 bg-gradient-to-br from-red-50 to-red-100 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-200 max-w-[220px] text-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                    <div className="text-xl font-bold text-red-600 mb-3">2030</div>
                    <p className="text-sm text-red-700 leading-relaxed"><span className="font-bold text-red-600">1000</span> Autonomous Plants</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {[
                { year: "2000", text: "Foundation with digital factory vision", color: "red" },
                { year: "2007", text: "First plant fully digitalized", color: "blue" },
                { year: "2013", text: "18 plants connected in network", color: "blue", highlight: "18" },
                { year: "2016", text: "Scaled to 70 plants globally", color: "blue", highlight: "70" },
                { year: "2019", text: "Milestone of 100+ plants achieved", color: "blue", highlight: "100+" },
                { year: "2023", text: "Foundation for Autonomous factories", color: "blue" },
                { year: "2025", text: "Milestone of 300+ plants achieved", color: "blue", highlight: "300+" },
                { year: "2026", text: "Projected First Fully Autonomous Plant", color: "red", future: true },
                { year: "2030", text: "1000 Autonomous Plants", color: "red", highlight: "1000", future: true },
              ].map((item, index) => (
                <div key={item.year} className="flex items-center group">
                  <div className="flex-shrink-0 mr-6">
                    <div className="relative">
                      <div className={`w-6 h-6 ${item.color === 'red' ? 'bg-red-500' : 'bg-blue-500'} rounded-full shadow-lg border-4 border-white relative z-10 group-hover:scale-110 transition-transform duration-300`}></div>
                      <div className={`absolute inset-0 w-6 h-6 ${item.color === 'red' ? 'bg-red-400' : 'bg-blue-400'} rounded-full animate-ping opacity-30`}></div>
                    </div>
                    {index < 8 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-slate-300 to-blue-400 mt-2 mx-auto rounded-full"></div>
                    )}
                  </div>
                  <div className={`flex-1 ${item.future ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200' : 'bg-white/90 border-slate-200'} backdrop-blur-sm rounded-2xl p-4 shadow-lg border group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300`}>
                    <div className={`text-lg font-bold ${item.future ? 'text-red-600' : 'text-slate-800'} mb-2`}>{item.year}</div>
                    <p className={`text-sm ${item.future ? 'text-red-700' : 'text-slate-600'} leading-relaxed`}>
                      {item.highlight ? (
                        <>
                          {item.text.split(item.highlight)[0]}
                          <span className={`font-bold ${item.color === 'red' ? 'text-red-600' : 'text-blue-600'}`}>{item.highlight}</span>
                          {item.text.split(item.highlight)[1]}
                        </>
                      ) : item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strong Foundation Section - Integrated Design */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-slate-100 to-blue-100/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Strong Foundation for Innovation</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">230+</div>
                  <p className="text-sm text-slate-700 leading-relaxed">Dedicated R&D professionals in Hubballi, Karnataka, India</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-emerald-600 mb-2">ISO 27001</div>
                  <p className="text-sm text-slate-700 leading-relaxed">Certified for information security management</p>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-purple-600 mb-2">ISO 9001</div>
                  <p className="text-sm text-slate-700 leading-relaxed">Certified for quality management systems</p>
                </div>
              </div>
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