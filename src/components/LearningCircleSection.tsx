import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const LearningCircleSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Keeping the Learning Circle Alive
          </h2>
          
          {/* Centered Quote */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <blockquote className="text-lg md:text-xl leading-relaxed italic text-foreground/90 mb-6">
              "We Faizan, Rani, and Amrut began our journey as students at KLE Tech, driven by a passion for robotics and automation. Our path led us to Vegam, where we are exposed to industry challenges, innovation, and building real-world robotic systems.
              <br /><br />
              With the guidance of our mentors, we developed not only our technical skills but also a mindset of continuous learning. Today, we are committed to keeping that circle of learning alive by giving back to the student community, inspiring, mentoring, and collaborating with the next generation of innovators."
            </blockquote>
            <cite className="text-base font-bold text-foreground">Faizan, Rani & Amrut</cite>
          </div>
          
          {/* Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: ConnectNext Program */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  <a 
                    href="https://www.lafondation3ds.org/projects/connectnext-students-be-industry-ready/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    ConnectNext Program
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </h3>
                <p className="text-foreground/80 leading-relaxed flex-grow">
                  We are proud to be part of the ConnectNext initiative by La Fondation Dassault Systèmes, which bridges the gap between academia and industry. Through this program we work with Dassault experts to co-create industry-grade problem statements in robotics and automation, and guide students and faculty in solving them.
                </p>
              </CardContent>
            </Card>
            
            {/* Card 2: Calling the Student Community */}
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Calling the Student Community
                </h3>
                <p className="text-foreground/80 leading-relaxed flex-grow">
                  Beyond programs, we welcome opportunities to engage directly with students and faculty — whether through mentorship, collaboration, or simply guiding curious minds in robotics and automation. We started as students with a dream at KLE Tech. Today, we're building that dream into reality. Tomorrow, it could be you.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningCircleSection;