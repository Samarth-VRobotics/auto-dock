import { Shuffle, Brain, Shield, TrendingUp } from "lucide-react";

const ValueProps = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Choose Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four key advantages that make our autonomous dock solution the optimal choice for modern logistics operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shuffle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Flexible</h3>
            <p className="text-muted-foreground">
              Serves multiple dock doors simultaneously, optimizing resource allocation across your facility.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Adaptive</h3>
            <p className="text-muted-foreground">
              Handles unstructured loads with varying package sizes, weights, and orientations intelligently.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Safe</h3>
            <p className="text-muted-foreground">
              Removes workers from heavy manual labor, significantly reducing workplace injuries and liability.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Scalable</h3>
            <p className="text-muted-foreground">
              Easily handles seasonal peaks and volume fluctuations without additional staffing concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;