import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopFloorPortfolio from "@/components/ShopFloorPortfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactDialog from "@/components/ContactDialog";
import DemoDialog from "@/components/DemoDialog";
import { ArrowRight, Brain, Cog, Zap, Network, Clock, Shield, BarChart3, Users, Globe, Building2, Truck, Factory, Boxes, Package, FlaskConical, FileText, Download, CheckCircle2, Star, TrendingUp, Target, Settings, Database, Hand, Cpu, Gauge, Lightbulb } from "lucide-react";
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
      <section id="industry-evolution" className="section-padding relative" style={{
      backgroundImage: `url(${futureOfWorkBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Industry Evolution</h2>
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

      {/* Vegam Journey Section */}
      <section id="vegam-journey" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Proven History in Manufacturing Transformation</h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Over two decades of experience in digitalizing and transforming manufacturing operations across the globe
            </p>
          </div>
          
          <div className="space-y-16">
            {/* First Line: Growth Timeline (Full Width) */}
            <div className="relative">
              {/* Growth Journey Timeline */}
              <div className="mb-12">
                <div className="relative pb-8">
                  {/* Growth Line - SVG for smooth curve */}
                  <svg className="absolute top-16 left-0 w-full h-32 pointer-events-none z-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="hsl(--secondary)" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                    {/* Curved growth line that rises over time */}
                    <path 
                      d="M 60 80 Q 300 70 500 50 Q 700 35 900 25 Q 1000 20 1140 15" 
                      stroke="url(#growthGradient)" 
                      strokeWidth="4" 
                      fill="none"
                      strokeDasharray="0"
                      className="animate-fade-in"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                  
                  {/* Milestones Container */}
                  <div className="flex justify-between items-end px-8 relative z-10">
                    {[
                      { year: '2000', title: 'Foundation', desc: 'Started with digital factory vision and early automation concepts', icon: 'lightbulb', size: 'w-12 h-12', yearSize: 'text-xs', bgHeight: 'h-16' },
                      { year: '2007', title: 'First Success', desc: 'First manufacturing plant fully digitalized with integrated systems', icon: 'factory', size: 'w-14 h-14', yearSize: 'text-sm', bgHeight: 'h-20' },
                      { year: '2013', title: 'Network Expansion', desc: '18 plants connected in integrated manufacturing network', icon: 'network', size: 'w-16 h-16', yearSize: 'text-sm', bgHeight: 'h-24' },
                      { year: '2016', title: 'Global Scale', desc: 'Scaled operations to 70 manufacturing plants globally', icon: 'globe', size: 'w-18 h-18', yearSize: 'text-base', bgHeight: 'h-28' },
                      { year: '2019', title: 'Century Mark', desc: 'Achieved milestone of 100+ plants under digital transformation', icon: 'award', size: 'w-20 h-20', yearSize: 'text-base', bgHeight: 'h-32' },
                      { year: '2025', title: 'Future Vision', desc: 'Targeting 300+ plants with autonomous manufacturing capabilities', icon: 'rocket', size: 'w-24 h-24', yearSize: 'text-lg', bgHeight: 'h-36' }
                    ].map((milestone, index) => (
                      <div 
                        key={milestone.year} 
                        className="flex flex-col items-center group cursor-pointer relative"
                        style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                      >
                        {/* Milestone Node */}
                        <div className={`relative ${milestone.bgHeight} flex flex-col items-center justify-end mb-4 transition-all duration-300 group-hover:scale-110`}>
                          {/* Growth Bar (visual emphasis) */}
                          <div className={`${milestone.bgHeight} w-3 bg-gradient-to-t from-primary/20 to-primary/60 rounded-full mb-2 transition-all duration-300 group-hover:from-red-400 group-hover:to-red-600`}></div>
                          
                          {/* Icon Node */}
                          <div className={`${milestone.size} bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30 shadow-lg group-hover:border-red-500 group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-red-100 relative z-10`}>
                            {milestone.icon === 'lightbulb' && <Lightbulb className="w-5 h-5 text-primary group-hover:text-red-600 transition-colors" />}
                            {milestone.icon === 'factory' && <Factory className="w-6 h-6 text-primary group-hover:text-red-600 transition-colors" />}
                            {milestone.icon === 'network' && <Network className="w-6 h-6 text-primary group-hover:text-red-600 transition-colors" />}
                            {milestone.icon === 'globe' && <Globe className="w-7 h-7 text-primary group-hover:text-red-600 transition-colors" />}
                            {milestone.icon === 'award' && <Star className="w-7 h-7 text-primary group-hover:text-red-600 transition-colors" />}
                            {milestone.icon === 'rocket' && <TrendingUp className="w-8 h-8 text-secondary group-hover:text-red-600 transition-colors" />}
                          </div>
                        </div>
                        
                        {/* Year Badge */}
                        <div className={`${milestone.year === '2025' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-primary to-primary'} text-white px-3 py-1 rounded-full ${milestone.yearSize} font-bold mb-2 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                          {milestone.year}
                        </div>
                        
                        {/* Title */}
                        <h4 className="font-bold text-sm text-center text-foreground group-hover:text-red-600 transition-colors duration-300 mb-1 max-w-24">
                          {milestone.title}
                        </h4>
                        
                        {/* Hover Description Panel */}
                        <div className="absolute top-full mt-4 bg-white rounded-xl p-4 shadow-xl border max-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 transform translate-y-2 group-hover:translate-y-0">
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {milestone.desc}
                          </p>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t rotate-45"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mobile Slider Version */}
              <div className="md:hidden">
                <div className="flex overflow-x-scroll gap-6 pb-4 snap-x snap-mandatory">
                  {[
                    { year: '2000', title: 'Foundation', desc: 'Started with digital factory vision and early automation concepts', icon: 'lightbulb' },
                    { year: '2007', title: 'First Success', desc: 'First manufacturing plant fully digitalized with integrated systems', icon: 'factory' },
                    { year: '2013', title: 'Network Expansion', desc: '18 plants connected in integrated manufacturing network', icon: 'network' },
                    { year: '2016', title: 'Global Scale', desc: 'Scaled operations to 70 manufacturing plants globally', icon: 'globe' },
                    { year: '2019', title: 'Century Mark', desc: 'Achieved milestone of 100+ plants under digital transformation', icon: 'award' },
                    { year: '2025', title: 'Future Vision', desc: 'Targeting 300+ plants with autonomous manufacturing capabilities', icon: 'rocket' }
                  ].map((milestone, index) => (
                    <div key={milestone.year} className="flex-shrink-0 w-72 bg-card rounded-2xl p-6 border shadow-lg snap-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {milestone.icon === 'lightbulb' && <Lightbulb className="w-6 h-6 text-primary" />}
                          {milestone.icon === 'factory' && <Factory className="w-6 h-6 text-primary" />}
                          {milestone.icon === 'network' && <Network className="w-6 h-6 text-primary" />}
                          {milestone.icon === 'globe' && <Globe className="w-6 h-6 text-primary" />}
                          {milestone.icon === 'award' && <Star className="w-6 h-6 text-primary" />}
                          {milestone.icon === 'rocket' && <TrendingUp className="w-6 h-6 text-secondary" />}
                        </div>
                        <div className={`${milestone.year === '2025' ? 'bg-secondary' : 'bg-primary'} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                          {milestone.year}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Second Line: Strong Foundation for Innovation */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
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
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="body-base">Proven track record across 60+ countries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="body-base">24/7 global support infrastructure</span>
                  </div>
                </div>
              </div>
              
              {/* Image Content */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Global Partnerships & <span className="text-red-600">Big Wins</span></h2>
          </div>
          
          {/* Strategic Partnerships */}
          <div className="space-y-8 mb-16">
            <div className="bg-blue-100/80 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Hand className="w-6 h-6 text-blue-600" />
                <h3 className="heading-sm text-blue-900">Strategic Partnerships</h3>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg font-medium text-gray-800 mb-8">
                Trusted Long-Term Partner to Global Leaders in Chemicals & Manufacturing
              </p>
            </div>

            {/* Company Logos Grid */}
            <div className="flex justify-center mb-8">
              <img src="/lovable-uploads/85aadf10-6770-458d-a137-5836196e9f54.png" alt="Global partner company logos including ARKEMA, BASF, BELCO, BOSTIK, EMERSON, EVONIK, HENKEL, Saint-Gobain, SEP, Avery Dennison, SKF, SOLEX, Unilever, Vedanta, INDORAMA, JSL, JSW Steel, LG Electronics, MRCC, Target, and OKW" className="max-w-full h-auto" />
            </div>
          </div>

          {/* Implementation Excellence */}
          <div className="space-y-6 mb-16">
            <div className="bg-blue-100/80 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h3 className="heading-sm text-blue-900">Implementation Excellence</h3>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Comprehensive digital manufacturing operations management tools with proven track records of delivering sustained improvements across facilities worldwide.
              </p>
            </div>
          </div>

          {/* Continuous Support */}
          <div className="space-y-6">
            <div className="bg-blue-100/80 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="heading-sm text-blue-900">Continuous Support</h3>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                24/7 global support infrastructure ensuring optimal operations and rapid troubleshooting for mission-critical manufacturing systems across time zones.
              </p>
            </div>
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
      <section id="why-vegam" className="section-padding">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why <span className="text-red-600">Vegam?</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Core Enterprise Value Drivers */}
            <div className="bg-muted/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Core Enterprise Value Drivers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <Settings className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Modular & Scalable</h4>
                    <p className="text-sm text-muted-foreground">Designed to grow with enterprise needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <BarChart3 className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Digital Transformation Ready</h4>
                    <p className="text-sm text-muted-foreground">Roadmap toward Industry 4.0.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <Database className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Unified Data Management</h4>
                    <p className="text-sm text-muted-foreground">Integrated data to boost innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <Hand className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Complete Ownership</h4>
                    <p className="text-sm text-muted-foreground">On-premise deployment with full control.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center flex-shrink-0 border-2 border-border">
                    <Target className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Customized Optimization</h4>
                    <p className="text-sm text-muted-foreground">Proprietary algorithms for competitive edge.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Future-Ready, Autonomous Factories */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-white mb-8">Future-Ready, Autonomous Factories</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/95 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Cog className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Autonomous Operations</h4>
                  <p className="text-xs text-gray-600">Self-driven execution across plants & processes.</p>
                </div>
                
                <div className="bg-white/95 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Proactive Risk Mitigation</h4>
                  <p className="text-xs text-gray-600">AI-enabled robotics predict & prevent hazards.</p>
                </div>
                
                <div className="bg-white/95 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Hyper-Scalable Manufacturing</h4>
                  <p className="text-xs text-gray-600">Intelligent orchestration across geographies.</p>
                </div>
                
                <div className="bg-white/95 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Gauge className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Continuous Optimization</h4>
                  <p className="text-xs text-gray-600">Real-time workflow, energy & downtime efficiency.</p>
                </div>
                
                <div className="bg-white/95 rounded-xl p-4 text-center col-span-2">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Transformational Growth</h4>
                  <p className="text-xs text-gray-600">Unlock new business models & value creation.</p>
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

      {/* Future-Ready Autonomous Factories Section */}
      <section id="future-ready-autonomous" className="section-padding bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="section-header">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Future-Ready <span className="text-red-600">Autonomous Factories</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/lovable-uploads/307df0c7-0ffd-4137-837b-c62ab2530f85.png" alt="Precision manufacturing robotic arm with advanced sensors and lighting" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">The Lights-Out Vision</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
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