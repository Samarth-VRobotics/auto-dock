import { ArrowRight, CheckCircle } from "lucide-react";

const Challenge = () => {
  const challengeSolutions = [
    {
      challenge: "Floor-loaded cartons",
      solution: "Intelligent robotic manipulators handle boxes & bags directly"
    },
    {
      challenge: "Peak season pressure", 
      solution: "24/7 autonomous operation keeps docks flowing"
    },
    {
      challenge: "Different truck types",
      solution: "Adaptive conveyors + AMRs fit any trailer"
    },
    {
      challenge: "Unpredictable throughput",
      solution: "AI-driven optimization ensures steady flow"
    },
    {
      challenge: "Rigid layouts",
      solution: "Layout-friendly system deploys with minimal changes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">Built on 20 years of digital factory automation experience</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From Challenges to Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how AutoDock transforms every dock operation challenge into a competitive advantage
            </p>
          </div>

          {/* Challenge → Solution Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-slate-50">
                    <th className="text-left p-6 text-lg font-bold text-foreground w-1/2">The Challenge</th>
                    <th className="text-left p-6 text-lg font-bold text-primary w-1/2">How AutoDock Solves It</th>
                  </tr>
                </thead>
                <tbody>
                  {challengeSolutions.map((item, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 font-medium text-slate-700">{item.challenge}</td>
                      <td className="p-6 text-foreground flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{item.solution}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-primary font-semibold">
              <span>Proven in manufacturing, now at your dock</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;