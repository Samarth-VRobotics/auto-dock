import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OurJourneySection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-primary/10">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Meet Our <span className="text-primary">Team</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the passionate engineers and innovators behind Vegam Robotics. 
              Learn about our journey, expertise, and commitment to giving back to the community.
            </p>
            <Link to="/our-team">
              <Button size="lg" className="group">
                Learn About Our Team
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurJourneySection;