import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const TeamIntro = () => {
  return <section className="py-16 bg-gradient-to-br from-background via-muted/50 to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/10 opacity-40"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our journey began at KLE Tech, shaped by mentorship, innovation, and the drive to push boundaries.</h2>
          
          <Link to="/our-team">
            <Button size="lg" className="text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              Read Our Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default TeamIntro;