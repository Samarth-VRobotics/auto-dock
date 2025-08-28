import { Button } from "@/components/ui/button";

const IndustryCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to Transform Your Industry?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join the leaders who are revolutionizing their dock operations with AutoDock's intelligent automation platform.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          Schedule Your Demo Today
        </Button>
      </div>
    </section>
  );
};

export default IndustryCTA;