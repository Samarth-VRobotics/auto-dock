import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurJourneySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          Behind AutoDock is a team of dreamers and builders transforming bold ideas into real-world change
        </p>
        <Link to="/our-team">
          <Button>Read Our Journey</Button>
        </Link>
      </div>
    </section>
  );
};
export default OurJourneySection;