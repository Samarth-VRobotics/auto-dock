import { Bot, Database, Eye, Shield, Zap, BarChart3, AlertTriangle, Lock } from "lucide-react";

const AutonomousSoftware = () => {
  const features = [
    {
      icon: Bot,
      title: "Fleet Orchestration",
      description: "Coordinate AMRs, cobots, and conveyors with dynamic tasking, priorities, and dock/queue logic."
    },
    {
      icon: Database,
      title: "WMS/ERP Integration",
      description: "Native connectors + REST/webhooks to SAP, Oracle, Manhattan, Blue Yonder, custom APIs."
    },
    {
      icon: Eye,
      title: "Computer Vision + AI",
      description: "Box detection, trailer fill maps, hazard zones, barcode/label read, and anomaly alerts."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "SIL-rated E‑stops, zone braking, ISO 3691‑4 / ANSI B56.5 guidance, audit trails & RBAC."
    },
    {
      icon: Zap,
      title: "Optimization Engine",
      description: "Auto slotting, path planning, congestion control, and smart trailer sequencing."
    },
    {
      icon: BarChart3,
      title: "Health & Telemetry",
      description: "Live KPIs, fleet health, battery SOC, MTBF/MTTR, and predictive maintenance."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Throughput dashboards, dwell times, cost per trailer, CO₂ impact, exportable reports."
    },
    {
      icon: AlertTriangle,
      title: "Alerts & Exceptions",
      description: "Rules engine for jams, mispicks, and blocked aisles with guided recovery workflows."
    },
    {
      icon: Lock,
      title: "Security by Design",
      description: "SSO/SAML, OAuth2, SOC 2 controls, data encryption in transit/at rest, secure updates."
    }
  ];

  const highlights = [
    "<200 ms command latency for responsive control",
    "99.5%+ software uptime with active/active failover",
    "Digital twin for simulation and what‑if planning",
    "Zero‑touch OTA updates and rollbacks",
    "Multi‑tenant + role‑based access with audit logs",
    "Multi‑language operator UI (EN/ES/FR/DE/HI)",
    "On‑prem or VPC deployment; air‑gapped option",
    "Open SDK for custom skills & plugins"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Meet the Brain: Autonomous Conveyor Software
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real‑time orchestration, safety, and insights to keep every dock moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold text-foreground">
            Orchestrate every move—from the first scan to the last loaded box. See how the platform adapts in real time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSoftware;