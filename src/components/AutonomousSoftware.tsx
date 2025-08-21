import { Network, Wrench, Eye, Shield, Zap, BarChart3, AlertTriangle, Lock, Activity } from "lucide-react";
const AutonomousSoftware = () => {
  const features = [{
    icon: Network,
    title: "Fleet Orchestration",
    description: "Coordinate AMRs, cobots, and conveyors with dynamic tasking, priorities, and dock/queue logic.",
    iconColor: "text-blue-500"
  }, {
    icon: Wrench,
    title: "WMS/ERP Integration",
    description: "Native connectors + REST/webhooks to SAP, Oracle, Manhattan, Blue Yonder, custom APIs.",
    iconColor: "text-blue-500"
  }, {
    icon: Eye,
    title: "Computer Vision + AI",
    description: "Box detection, trailer fill maps, hazard zones, barcode/label read, and anomaly alerts.",
    iconColor: "text-blue-500"
  }, {
    icon: Shield,
    title: "Safety & Compliance",
    description: "SIL-rated E‑stops, zone braking, ISO 3691‑4 / ANSI B56.5 guidance, audit trails & RBAC.",
    iconColor: "text-blue-500"
  }, {
    icon: Zap,
    title: "Optimization Engine",
    description: "Auto slotting, path planning, congestion control, and smart trailer sequencing.",
    iconColor: "text-blue-500"
  }, {
    icon: Activity,
    title: "Health & Telemetry",
    description: "Live KPIs, fleet health, battery SOC, MTBF/MTTR, and predictive maintenance.",
    iconColor: "text-blue-500"
  }, {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Throughput dashboards, dwell times, cost per trailer, CO₂ impact, exportable reports.",
    iconColor: "text-blue-500"
  }, {
    icon: AlertTriangle,
    title: "Alerts & Exceptions",
    description: "Rules engine for jams, mispicks, and blocked aisles with guided recovery workflows.",
    iconColor: "text-blue-500"
  }, {
    icon: Lock,
    title: "Security by Design",
    description: "SSO/SAML, OAuth2, SOC 2 controls, data encryption in transit/at rest, secure updates.",
    iconColor: "text-blue-500"
  }];
  const highlights = ["<200 ms command latency for responsive control", "Digital twin for simulation and what‑if planning", "Multi‑tenant + role‑based access with audit logs", "On‑prem or VPC deployment; air‑gapped option", "99.5%+ software uptime with active/active failover", "Zero‑touch OTA updates and rollbacks", "Multi‑language operator UI (EN/ES/FR/DE/HI)", "Open SDK for custom skills & plugins"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet the Brain: The Auto Dock Software Platform</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Real‑time task orchestration, safety, and insights to keep every dock moving.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
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