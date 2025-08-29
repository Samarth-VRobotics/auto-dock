import { ShoppingCart, Truck, Coffee, Factory } from "lucide-react";
const Industries = () => {
  const industries = [{
    icon: Factory,
    title: "Manufacturing",
    description: "Seasonal volume variations with soft goods and irregular package shapes.",
    color: "primary"
  }, {
    icon: Truck,
    title: "3PL",
    description: "Multi-client operations requiring flexible and efficient cargo handling solutions.",
    color: "secondary"
  }, {
    icon: Coffee,
    title: "FMCG",
    description: "Temperature-sensitive products with strict handling and safety requirements.",
    color: "primary"
  }, {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Diverse product mix handling for online fulfillment and retail distribution.",
    color: "secondary"
  }];
  return <section className="py-24 bg-gradient-hero relative overflow-hidden" id="industries">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            
            <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-8 leading-tight">
              Industries We 
              <span className="gradient-text"> Serve</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From manufacturing to e-commerce, our autonomous dock solutions adapt to your industry's unique challenges
            </p>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}>
            {industries.map((industry, index) => <div key={industry.title} className="group hover-lift bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-primary/30 transition-all duration-300 text-center relative overflow-hidden" style={{
            animationDelay: `${0.1 * index}s`,
            animationFillMode: 'both'
          }}>
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-${industry.color} opacity-5 rounded-full -translate-y-12 translate-x-12`}></div>
                
                <div className={`w-20 h-20 bg-gradient-${industry.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                  <industry.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Industries;