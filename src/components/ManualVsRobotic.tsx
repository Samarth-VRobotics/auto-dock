import { User, Bot, X, Check } from "lucide-react";
const ManualVsRobotic = () => {
  const capabilities = ["24/7 Operations", "Consistent Speed", "Safety Compliance", "Scalable Capacity", "Data Analytics", "Ergonomic Benefits", "Weather Independence", "Predictable Costs"];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Traditional vs Automated systems</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare traditional manual loading processes with our advanced robotic solution
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-card rounded-lg shadow-sm border">
            <thead>
              <tr className="border-b bg-muted/20">
                <th className="text-left p-6 text-lg font-semibold text-foreground w-1/3">Capability</th>
                <th className="text-center p-6 text-lg font-semibold text-foreground w-1/3">
                  <div className="flex items-center justify-center space-x-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span>Traditional Systems</span>
                  </div>
                </th>
                <th className="text-center p-6 text-lg font-semibold text-foreground w-1/3">
                  <div className="flex items-center justify-center space-x-2">
                    <Bot className="w-5 h-5 text-primary" />
                    <span>vAuto-Dock</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((capability, index) => <tr key={index} className="border-b last:border-b-0 hover:bg-muted/10 transition-colors">
                  <td className="p-6 font-medium text-foreground">{capability}</td>
                  <td className="p-6 text-center">
                    <X className="w-6 h-6 text-destructive mx-auto" strokeWidth={2} />
                  </td>
                  <td className="p-6 text-center">
                    <Check className="w-6 h-6 text-green-500 mx-auto" strokeWidth={2} />
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold text-foreground">
            Experience the future of dock operations with consistent, safe, and scalable robotic loading
          </p>
        </div>
      </div>
    </section>;
};
export default ManualVsRobotic;