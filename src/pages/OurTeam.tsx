import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet the Minds Behind <span className="text-primary">Vegam Robotics</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              A passionate team of engineers, dreamers, and doers shaping the future of robotics
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey Into Robotics</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">From Curiosity to Collaboration</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We are a young team of robotics engineers, united by one belief: robotics belongs beyond labs and classrooms — solving real-world challenges.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Our story began at KLE Technological University, where late-night experiments and wild ideas turned into working prototypes. From humanoids to mobile robots, from precision parallel mechanisms to vision-based inspection systems — each project taught us to dream big, fail fast, and build better.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-blue-50/50 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold mb-4 text-primary">Projects That Shaped Us</h4>
                <ul className="space-y-3 text-foreground/80">
                  <li>• <strong>Humanoids</strong> → balancing dynamics, actuation, stability control</li>
                  <li>• <strong>Autonomous Mobile Robots (AMRs)</strong> → navigation, stair-climbing, obstacle negotiation</li>
                  <li>• <strong>Parallel Robots</strong> → high-precision mechanics, control theory in practice</li>
                  <li>• <strong>Industrial Inspection Systems</strong> → computer vision, AI, reliability at scale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mentorship */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Supported by Mentorship & Leadership</h2>
            <p className="text-foreground/80 leading-relaxed">
              None of this happened in isolation. At KLE, we were nurtured by a culture of innovation, world-class labs, and the constant encouragement to push boundaries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  PG
                </div>
                <h3 className="text-xl font-semibold mb-2">Prof. Arun Giriyapur</h3>
                <p className="text-primary font-medium mb-4">Mentor & Former HOD</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Guiding us from the start as Head of Department, now a lifelong mentor. His belief in our potential shaped not only our projects, but also the values we carry as engineers today.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  AS
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Ashok Shetter</h3>
                <p className="text-primary font-medium mb-4">Vice-Chancellor, KLE Tech</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Commitment to excellence has elevated KLE Tech into a hub of innovation, creating an ecosystem that bridges academia and industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Core Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    FP
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Faizan Pathan</h3>
                  <p className="text-primary font-medium mb-4">Robotics Engineer & System Architect</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Multidisciplinary builder with expertise spanning humanoids, AMRs, ASRS, delta robots, and advanced vision systems.
                  </p>
                  <blockquote className="text-xs italic text-foreground/60 border-l-2 border-primary pl-3">
                    "Robotics isn't just about machines; it's about creating systems that amplify human potential and transform industries."
                  </blockquote>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    R
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rani</h3>
                  <p className="text-primary font-medium mb-4">Robotics Engineer - Vision Systems</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Strong technical depth, specializing in robotic vision pipelines, inspection systems, and intelligent automation.
                  </p>
                  <blockquote className="text-xs italic text-foreground/60 border-l-2 border-primary pl-3">
                    "What excites me most is when engineering and vision come together — when a robot can see, think, and act with precision."
                  </blockquote>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Amrut</h3>
                  <p className="text-primary font-medium mb-4">Robotics Engineer - AMRs & Motion</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Expertise in AMRs, motion systems, and behavior-tree-based robot control for autonomous navigation.
                  </p>
                  <blockquote className="text-xs italic text-foreground/60 border-l-2 border-primary pl-3">
                    "For me, robotics is about autonomy — systems that can adapt, respond, and evolve in real-world environments."
                  </blockquote>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Junior Engineers */}
            <div className="bg-gradient-to-br from-primary/5 to-blue-50/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-center mb-6">Rising Stars</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <h4 className="font-semibold mb-2">Ashutosh</h4>
                  <p className="text-sm text-foreground/70">Junior Engineer bringing fresh energy and problem-solving skills</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <h4 className="font-semibold mb-2">Samarth</h4>
                  <p className="text-sm text-foreground/70">Junior Engineer adding execution strength and new perspectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Giving Back</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Through the Law Foundation and Sol Systems' ConnectNext Program, our lead engineers actively volunteer to mentor the next generation of roboticists.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">ConnectNext Program</h3>
              <ul className="text-left space-y-3 text-foreground/80 max-w-2xl mx-auto">
                <li>• Float industry-based problem statements in robotics and automation</li>
                <li>• Mentor students and faculty in solving real-world challenges</li>
                <li>• Bridge the gap between academia and industry</li>
                <li>• Provide oversight and guidance through established foundations</li>
              </ul>
            </div>
            
            <div className="bg-gradient-primary text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">An Open Call to Students</h3>
              <p className="leading-relaxed mb-6">
                If you are passionate about robotics and looking for mentorship, guidance, or a platform to test your ideas, reach out to us. We are always open to support and collaborate with those who dare to dream big.
              </p>
              <ContactDialog>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Connect With Us
                </Button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;