import { AlertTriangle, Users, TrendingDown } from "lucide-react";

const Challenge = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            The Challenge at the Dock
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional truck unloading operations face critical challenges that impact efficiency, safety, and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Labor Shortage</h3>
            <p className="text-muted-foreground">
              Critical shortage of dock workers leading to operational delays and increased labor costs across the industry.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Worker Injuries</h3>
            <p className="text-muted-foreground">
              High rates of workplace injuries from repetitive heavy lifting and awkward positions in truck unloading operations.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Unpredictable Throughput</h3>
            <p className="text-muted-foreground">
              Inconsistent unloading speeds and capacity limitations that create bottlenecks in supply chain operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;