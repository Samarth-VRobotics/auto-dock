import { Button } from "@/components/ui/button";

const IndustryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Industry?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Join leading companies who trust AutoDock to revolutionize their operations with cutting-edge autonomous docking solutions.
        </p>
        <Button size="lg" className="px-10 py-5 text-lg font-semibold">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default IndustryCTA;