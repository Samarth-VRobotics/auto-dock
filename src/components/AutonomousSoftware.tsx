import { Network, Wrench, Eye, Shield, Zap, BarChart3, AlertTriangle, Lock, Activity } from "lucide-react";
const AutonomousSoftware = () => {
  const features = [{
    icon: Network,
    title: "Fleet Orchestration",
    description: "Seamlessly coordinate all robotic systems for optimal dock flow and efficiency.",
    iconColor: "text-primary"
  }, {
    icon: Wrench,
    title: "WMS/ERP Integration",
    description: "Connect directly with your existing warehouse management systems and ERPs.",
    iconColor: "text-primary"
  }, {
    icon: Eye,
    title: "Computer Vision + AI",
    description: "Intelligent detection and handling of boxes, bags, and irregular loads.",
    iconColor: "text-primary"
  }, {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Safety-certified systems that meet industry standards and regulations.",
    iconColor: "text-primary"
  }, {
    icon: Zap,
    title: "Smart Optimization",
    description: "AI-driven optimization for maximum throughput and minimal congestion.",
    iconColor: "text-primary"
  }, {
    icon: Activity,
    title: "Live Monitoring",
    description: "Real-time visibility into system health, performance, and maintenance needs.",
    iconColor: "text-primary"
  }];
  const highlights = ["<200 ms command latency for responsive control", "Digital twin for simulation and what‑if planning", "Multi‑tenant + role‑based access with audit logs", "On‑prem or VPC deployment; air‑gapped option", "99.5%+ software uptime with active/active failover", "Zero‑touch OTA updates and rollbacks", "Multi‑language operator UI (EN/ES/FR/DE/HI)", "Open SDK for custom skills & plugins"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-semibold text-sm">Vegam — The Safe Bet vs Risky New Entrants</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">The AutoDock Software Platform</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Safety-certified. Standards-compliant. Secure by design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>

        
      </div>
    </section>;
};
export default AutonomousSoftware;