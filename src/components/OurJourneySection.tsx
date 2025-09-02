import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurJourneySection = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-foreground/90">
            Our Journey Into <span className="text-primary">Robotics</span>
          </h3>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            Behind AutoDock is a team of dreamers and builders transforming bold ideas into real-world change
          </p>
          
          <Link to="/our-team">
            <Button size="lg" className="text-lg px-8 py-4">
              Read Our Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default OurJourneySection;