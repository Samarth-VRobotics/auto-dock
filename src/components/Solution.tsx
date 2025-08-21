import { Bot, ArrowRight, Zap } from "lucide-react";
const Solution = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">4-System Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Integrated autonomous components working together to revolutionize dock operations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Robot Platform</h3>
                <p className="text-muted-foreground">Advanced AMRs with precise navigation and positioning, orchestrating autonomous movement at the dock for both inbound and outbound operations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Intelligent Manipulator</h3>
                <p className="text-muted-foreground">Robotic arms with modular, swappable grippers to handle boxes, bags, and irregular goods safely and efficiently.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Controlled Flexible Conveyor</h3>
                <p className="text-muted-foreground">Adaptive conveyor system dynamically adjusting length and angle to match truck, dock, and staging layouts, enabling multi-drop, bi-directional flow.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrated Vegam Smart Factory System (SFS)</h3>
                <p className="text-muted-foreground">End-to-end digital integration with Vegam Smart Factory platform for real-time task orchestration, WMS/ERP connectivity, analytics, and AI-driven optimization.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Bot className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Autonomous Unloading in Action</p>
                <p className="text-muted-foreground">Real-time demonstration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Solution;