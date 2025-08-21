import { ShoppingCart, Truck, Coffee, Factory } from "lucide-react";
const Industries = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg bg-muted/50 border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Factory className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Manufacturing</h3>
            <p className="text-sm text-muted-foreground">
              Seasonal volume variations with soft goods and irregular package shapes.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-muted/50 border border-border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">E-commerce & Retail</h3>
            <p className="text-sm text-muted-foreground">
              Diverse product mix handling for online fulfillment and retail distribution.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-muted/50 border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">3PL</h3>
            <p className="text-sm text-muted-foreground">
              Multi-client operations requiring flexible and efficient cargo handling solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-muted/50 border border-border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">FMCG</h3>
            <p className="text-sm text-muted-foreground">
              Temperature-sensitive products with strict handling and safety requirements.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Industries;