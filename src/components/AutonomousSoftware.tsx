const AutonomousSoftware = () => {
  const features = [
    {
      title: "Fleet Orchestration",
      description: "Coordinate AMRs, cobots, and conveyors with dynamic tasking, priorities, and dock/queue logic."
    },
    {
      title: "WMS/ERP Integration", 
      description: "Native connectors + REST/webhooks to SAP, Oracle, Manhattan, Blue Yonder, custom APIs."
    },
    {
      title: "Computer Vision + AI",
      description: "Box detection, trailer fill maps, hazard zones, barcode/label read, and anomaly alerts."
    },
    {
      title: "Safety & Compliance",
      description: "SIL-rated E‑stops, zone braking, ISO 3691‑4 / ANSI B56.5 guidance, audit trails & RBAC."
    },
    {
      title: "Optimization Engine",
      description: "Auto slotting, path planning, congestion control, and smart trailer sequencing."
    },
    {
      title: "Health & Telemetry",
      description: "Live KPIs, fleet health, battery SOC, MTBF/MTTR, and predictive maintenance."
    },
    {
      title: "Analytics & Reporting",
      description: "Throughput dashboards, dwell times, cost per trailer, CO₂ impact, exportable reports."
    },
    {
      title: "Alerts & Exceptions",
      description: "Rules engine for jams, mispicks, and blocked aisles with guided recovery workflows."
    },
    {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-muted/20 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-foreground max-w-4xl mx-auto">
            Orchestrate every move—from the first scan to the last loaded box. See how the platform adapts in real time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSoftware;