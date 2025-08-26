import { Brain, Shield, Network, Lock } from "lucide-react";
const AutonomousSoftware = () => {
  const pillars = [{
    icon: Brain,
    title: "Intelligence & Orchestration",
    capabilities: [
      "Real-time tasking for AMRs, cobots, conveyors",
      "AI-driven slotting, path planning, and congestion control", 
      "Dynamic dock/queue logic with recovery workflows"
    ]
  }, {
    icon: Shield,
    title: "Safety & Compliance",
    capabilities: [
      "SIL-rated E-stops, zone braking, ISO/ANSI standards",
      "Computer vision for hazard zones + anomaly detection",
      "Built-in audit trails and role-based access"
    ]
  }, {
    icon: Network,
    title: "Integration & Insights", 
    capabilities: [
      "Native WMS/ERP connectors (SAP, Oracle, Blue Yonder)",
      "Throughput dashboards, CO₂ impact, and cost per trailer",
      "REST/webhook APIs for custom workflows"
    ]
  }, {
    icon: Lock,
    title: "Reliability & Security",
    capabilities: [
      "Live fleet health, predictive maintenance, MTBF/MTTR",
      "Rules engine for alerts/exceptions (jams, blocked aisles)",
      "Security-by-design: SSO, SOC 2, encrypted updates"
    ]
  }];
  const highlights = ["<200 ms command latency for responsive control", "Digital twin for simulation and what‑if planning", "Multi‑tenant + role‑based access with audit logs", "On‑prem or VPC deployment; air‑gapped option", "99.5%+ software uptime with active/active failover", "Zero‑touch OTA updates and rollbacks", "Multi‑language operator UI (EN/ES/FR/DE/HI)", "Open SDK for custom skills & plugins"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet the Brain: The Auto Dock Software Platform</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Real‑time task orchestration, safety, and insights to keep every dock moving.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          return <div key={index} className="bg-card rounded-lg p-8 border shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {pillar.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>;
        })}
        </div>

        
      </div>
    </section>;
};
export default AutonomousSoftware;