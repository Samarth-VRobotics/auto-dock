import React from 'react';
import { Target, Cog, Users } from 'lucide-react';

const WhyVegam = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            Why Vegam?
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-12 relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
                We're not selling "a robotic dog."
              </div>
              
              <div className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                We're delivering practical, integrated solutions that solve real operational challenges.
              </div>
              
              <div className="text-lg lg:text-xl text-foreground leading-relaxed">
                SampleRun leverages proven quadruped platforms to redefine intra-facility sample logistics, 
                built around your real operational needs.
              </div>
            </div>
          </div>

          {/* Three Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border p-6 hover:shadow-lg hover:bg-card/50 transition-all duration-300">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Problem-First Approach</h3>
              <p className="text-muted-foreground">We start with your operational challenges, not our technology.</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border p-6 hover:shadow-lg hover:bg-card/50 transition-all duration-300">
              <Cog className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Fully Integrated</h3>
              <p className="text-muted-foreground">Seamlessly works with your existing MOM and MES systems.</p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border p-6 hover:shadow-lg hover:bg-card/50 transition-all duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Built on trusted platforms with real-world validation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVegam;