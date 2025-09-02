import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import OurJourneySection from "@/components/OurJourneySection";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import mentorshipScene from "@/assets/mentorship-scene.jpg";
const OurTeam = () => {
  // First row: Faizan, Rani, Amrut
  const firstRowMembers = [{
    initials: "FP",
    name: "Faizan Pathan",
    role: "Autonomy & Embedded Systems",
    description: "Multidisciplinary engineer with expertise in autonomous systems and embedded technologies.",
    quote: "Being multidisciplinary builds the mindset to tackle challenges across diverse fields, no matter the problem."
  }, {
    initials: "RK",
    name: "Rani Kinnal",
    role: "Systems & Simulation",
    description: "Expert in systems integration and simulation technologies, orchestrating complex robotic solutions.",
    quote: "KLETU gave us the stage, Arun Sir gave us the courage, and Vegam gave us the platform to apply what we learned."
  }, {
    initials: "AK",
    name: "Amrut Kurtakoti",
    role: "Coordination & Business Development",
    description: "Drives business growth and coordinates cross-functional teams to deliver impactful solutions.",
    quote: "Collaboration and organization amplify our impact and speed of delivery."
  }];

  // Second row: Samarth, Ashutosh
  const secondRowMembers = [{
    initials: "SV",
    name: "Samarth Vengurlekar",
    role: "UI & Integration",
    description: "Specializes in user interface design and system integration, bringing complex systems to life through intuitive design.",
    quote: "Clear and simple design brings complex systems to life."
  }, {
    initials: "AK",
    name: "Ashutosh Kangralkar",
    role: "Mechanical Design & Hardware",
    description: "Mechanical design expert focused on hardware development and robust system foundations.",
    quote: "Strong foundations support everything we build."
  }];
  return <div className="min-h-screen bg-background">
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

      <OurJourneySection />

      {/* Core Team Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Team Header with Visual */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Team</h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Vegam is more than a company — it's the continuation of friendships, shared dreams, and late-night breakthroughs from our university days. While everyone wears many hats, from robotics and software to business and operations, each has a superpower that anchors the team.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src={teamCollaboration} alt="Team collaboration on robotics projects" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold">Building Together</h4>
                  <p className="text-sm">Innovation through collaboration</p>
                </div>
              </div>
            </div>
            
            {/* First Row - Senior Engineers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {firstRowMembers.map((member, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    
                    <blockquote className="text-sm italic text-foreground/80 border-l-2 border-primary pl-3 mb-6 font-medium">
                      "{member.quote}"
                    </blockquote>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            {/* Second Row - Junior Engineers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {secondRowMembers.map((member, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    
                    <blockquote className="text-sm italic text-foreground/80 border-l-2 border-primary pl-3 mb-6 font-medium">
                      "{member.quote}"
                    </blockquote>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            {/* Why We Build Together Section */}
            <div className="mt-16 text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">Building Together</h3>
                <p className="text-foreground/80 leading-relaxed">Each of us brings unique skills and perspectives, but it's our shared spirit of exploration and problem-solving combined with the flexibility to wear any hat that powers Vegam Robotics. Together, we're shaping the future of robotics, one innovation at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vegam Robotics: Scaling Innovation */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Vegam Robotics: Scaling Innovation</h2>
            
            {/* Key Stats */}
            

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                Vegam today is not just about robotics — it is about building end-to-end solutions for the future of manufacturing. With over 300+ plants powered by Vegam's digital backbone, we are integrating robotics into smart factory software, creating safer workplaces, improving quality, and reducing risk in industries dealing with high complexities and hazardous environments.
              </p>
              <p className="text-lg">
                With clarity of thought and a strong belief in robotics as a natural extension of digital manufacturing, this vision continues to guide and inspire the way we scale our solutions globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Mentorship */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Supported by Mentorship & Leadership</h2>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                At KLE, we were nurtured by a culture of innovation, world-class labs, and constant encouragement to push boundaries.
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
                    Our lifelong mentor who believed in our potential and shaped the values we carry as engineers today.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    AS
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dr. Ashok Shetter</h3>
                  <p className="text-primary font-medium mb-4">Chancellor, KLE Tech</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Elevated KLE Tech into an innovation hub, creating an ecosystem that bridges academia and industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/20 opacity-30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Giving Back: ConnectNext Mentorship
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Building bridges between academia and industry through mentorship and collaboration
              </p>
            </div>

            {/* Main Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Merged ConnectNext Program Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">ConnectNext Program</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    At Vegam, building robots goes hand in hand with giving back. Through the ConnectNext Program, an initiative by La Fondation Dassault Systèmes, we collaborate with universities to inspire the next generation of innovators.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    We co-create industry-grade problem statements in robotics and automation, and guide students and faculty in solving them. Experts from La Fondation Dassault Systèmes mentor and monitor these projects, creating a strong bridge between academia and industry.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    For us, it is about keeping the cycle of learning alive, just as our own mentors once did for us.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Industry-Grade Problem Statements
                    </div>
                    <div className="flex items-center text-sm text-secondary font-medium">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      Continuous Learning Cycle
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call for Students Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Calling All Students</h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Are you a student or faculty member passionate about robotics? We're always open to mentor, collaborate, and guide the next generation of innovators.
                    </p>
                    <p className="text-primary font-semibold mb-6">
                      We started as students with a dream — today, we're building that dream into reality. Tomorrow, it could be you.
                    </p>
                    <ContactDialog>
                      <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        Get Mentorship
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </ContactDialog>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Philosophy Section */}
            <div className="text-center mb-12">
              
            </div>

            {/* Call to Action */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur opacity-20"></div>
              <Card className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white border-0 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurTeam;