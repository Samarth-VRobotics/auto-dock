const ManualVsRobotic = () => {
  const capabilities = [
    "24/7 Operations",
    "Consistent Speed", 
    "Safety Compliance",
    "Scalable Capacity",
    "Data Analytics",
    "Ergonomic Benefits",
    "Weather Independence",
    "Predictable Costs"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Manual vs. Robotic Loading
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare traditional manual loading processes with our advanced robotic solution
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-sm border">
            <thead>
              <tr className="border-b">
                <th className="text-left p-6 text-lg font-semibold text-foreground">Capability</th>
                <th className="text-center p-6 text-lg font-semibold text-foreground">Manual Loading</th>
                <th className="text-center p-6 text-lg font-semibold text-foreground">Robotic Loading</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((capability, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="p-6 font-medium text-foreground">{capability}</td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10">
                      <span className="text-destructive font-bold">✗</span>
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <span className="text-primary font-bold">✓</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold text-foreground">
            Experience the future of dock operations with consistent, safe, and scalable robotic loading
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManualVsRobotic;