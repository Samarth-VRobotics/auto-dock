import React from 'react';
const SampleRunIndustries = () => {
  return <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-8 bg-gradient-to-r from-foreground via-foreground to-destructive bg-clip-text text-transparent leading-tight">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Trusted sample transport solutions across critical industries</p>
        </div>

        {/* Industries Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Pharma & Biotech</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Stable, traceable QA samples across labs and production.
              </p>
            </div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{
          animationDelay: '0.1s',
          animationFillMode: 'both'
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Electronics & Semiconductors</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cross-building sample delivery in cleanrooms.
              </p>
            </div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Manufacturing & R&D</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quality samples between testing, QA, and production.
              </p>
            </div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:shadow-xl hover:bg-card/70 transition-all duration-300 animate-fade-in" style={{
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold text-foreground mb-3">FMCG & Food</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Traceable QA handling across floors and processing units.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SampleRunIndustries;