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
              Meet the Humans Behind the <span className="text-primary">Robots</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              A multidisciplinary team of engineers, creators, and problem-solvers building robots with purpose.
            </p>
          </div>
        </div>
      </section>

      <OurJourneySection />

      {/* Our Team Collage Section */}
      <section className="py-16 bg-background">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h2>
            <p className="text-foreground/60 text-sm md:text-base max-w-4xl mx-auto px-6 leading-relaxed">
              Vegam is more than a company — it's the continuation of friendships, shared dreams, and late-night breakthroughs from our university days. While everyone wears many hats, from robotics and software to business and operations, each has a superpower that anchors the team.
            </p>
          </div>

          {/* Desktop: Dynamic Collage Grid */}
          <div className="hidden lg:block w-full px-6">
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[600px] max-w-7xl mx-auto">
              {/* Large landscape image - spans 2x2 */}
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img src={teamCollaboration} alt="Team collaboration session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-lg font-bold mb-1">Team Collaboration</h4>
                  <p className="text-sm text-white/80">Innovation through partnership</p>
                </div>
              </div>

              {/* Square video placeholder */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/30 to-secondary/30 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-medium">Innovation</p>
                  </div>
                </div>
              </div>

              {/* Portrait image */}
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img src={mentorshipScene} alt="Mentorship session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium">Mentorship</p>
                </div>
              </div>

              {/* Wide landscape spanning 2 columns */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-3 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-foreground/80 text-sm font-medium">Rapid Development</p>
                  </div>
                </div>
              </div>

              {/* Square elements filling remaining spaces */}
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-accent/30 to-primary/30 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-medium">Quality</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/40 to-accent/40 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-medium">Team</p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-secondary/30 to-primary/30 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-accent rounded-full mx-auto mb-3 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium">Research & Development</p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-accent/20 to-secondary/20 group hover:shadow-xl transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium">Smart Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet: Simplified Grid */}
          <div className="hidden md:block lg:hidden px-4">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[400px] max-w-4xl mx-auto">
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img src={teamCollaboration} alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium">Collaboration</p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                <img src={mentorshipScene} alt="Mentorship" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-accent/30 to-primary/30"></div>
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-secondary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="md:hidden px-4">
            <div className="space-y-4 max-w-sm mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-48">
                <img src={teamCollaboration} alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">Team Collaboration</h4>
                  <p className="text-sm text-white/80">Building together</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-32 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-medium">Innovation</p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-32 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white text-xs font-medium">Quality</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl group h-40">
                <img src={mentorshipScene} alt="Mentorship session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-base font-bold">Mentorship</h4>
                  <p className="text-sm text-white/80">Learning & growth</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg h-24 bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground/80 text-sm font-medium">Research & Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Structure - Professional Grid Layout */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Team Categories with Professional Grid */}
            <div className="space-y-16">
              
              {/* Robotics Experts */}
              <div className="bg-slate-50/50 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-3">Robotics Experts</h3>
                  <p className="text-foreground/60 text-lg">Building autonomous systems that redefine industrial operations</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {[{
                  name: "Faizan Pathan",
                  initials: "FP",
                  role: "Autonomy & Embedded Systems"
                }, {
                  name: "Rani Kinnal",
                  initials: "RK",
                  role: "Systems & Simulation"
                }, {
                  name: "Amrut Kurtakoti",
                  initials: "AK",
                  role: "Coordination & Business"
                }, {
                  name: "Samarth Vengurlekar",
                  initials: "SV",
                  role: "UI & Integration"
                }, {
                  name: "Ashutosh Kangralkar",
                  initials: "AS",
                  role: "Mechanical Design"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {member.initials}
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{member.name}</h4>
                      
                    </div>)}
                </div>
              </div>

              {/* AI Experts */}
              <div className="bg-blue-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-3">AI Experts</h3>
                  <p className="text-foreground/60 text-lg">Developing intelligent software architectures and automation solutions</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {[{
                  name: "Tunga Santosh Kumar",
                  initials: "TS",
                  role: "Software Architect"
                }, {
                  name: "Varadharajan N M",
                  initials: "VN",
                  role: "Software Architect"
                }, {
                  name: "Sachin Vishwakarma",
                  initials: "SV",
                  role: "Software Architect"
                }, {
                  name: "Pratish Gandhi",
                  initials: "PG",
                  role: "Software Architect"
                }, {
                  name: "Vishweshwar Kapse",
                  initials: "VK",
                  role: "Software Architect"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {member.initials}
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{member.name}</h4>
                      <Linkedin className="w-5 h-5 text-primary hover:text-secondary transition-colors cursor-pointer" />
                    </div>)}
                </div>
              </div>

              {/* Embedded Experts */}
              <div className="bg-green-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-accent mb-3">Embedded Experts</h3>
                  <p className="text-foreground/60 text-lg">Specializing in hardware-software integration and embedded systems</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {[{
                  name: "Sreenivasa Yarram",
                  initials: "SY",
                  role: "Software Architect"
                }, {
                  name: "Sirajudheen NH",
                  initials: "SN",
                  role: "Software Architect"
                }, {
                  name: "Sushin C",
                  initials: "SC",
                  role: "Software Architect"
                }, {
                  name: "Ajay K",
                  initials: "AJ",
                  role: "Technical Lead"
                }, {
                  name: "Shreeja M S",
                  initials: "SM",
                  role: "Senior Software Engineer"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {member.initials}
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{member.name}</h4>
                      <Linkedin className="w-5 h-5 text-primary hover:text-secondary transition-colors cursor-pointer" />
                    </div>)}
                </div>
              </div>

              {/* Manufacturing Experts */}
              <div className="bg-purple-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Smart Factory Experts</h3>
                  <p className="text-foreground/60 text-lg">Digital factory solutions and process optimization specialists</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {[{
                  name: "Aman Saxena",
                  initials: "AS",
                  role: "Senior Functional Consultant"
                }, {
                  name: "Balaji Kumar",
                  initials: "BK",
                  role: "Senior Functional Consultant"
                }, {
                  name: "Rohan Patil",
                  initials: "RP",
                  role: "Senior Functional Consultant"
                }, {
                  name: "Ann Maria Jess Kurian",
                  initials: "AJ",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Kanakaraddi C Radder",
                  initials: "KR",
                  role: "Senior Functional Consultant"
                }, {
                  name: "Pramod BP",
                  initials: "PB",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Subha J",
                  initials: "SJ",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Venkatesh HS",
                  initials: "VH",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Chaithra N",
                  initials: "CN",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Arun Kumar",
                  initials: "AR",
                  role: "Senior Consultant"
                }, {
                  name: "Priya Sharma",
                  initials: "PS",
                  role: "Business Analyst"
                }, {
                  name: "Ravi Mehta",
                  initials: "RM",
                  role: "Process Engineer"
                }, {
                  name: "Kavya Reddy",
                  initials: "KV",
                  role: "Quality Analyst"
                }, {
                  name: "Deepak Singh",
                  initials: "DS",
                  role: "Integration Specialist"
                }, {
                  name: "Neha Gupta",
                  initials: "NG",
                  role: "System Administrator"
                }, {
                  name: "Vikram Joshi",
                  initials: "VJ",
                  role: "Database Engineer"
                }, {
                  name: "Anita Rao",
                  initials: "AR",
                  role: "UI/UX Designer"
                }, {
                  name: "Suresh Kumar",
                  initials: "SK",
                  role: "DevOps Engineer"
                }, {
                  name: "Pooja Nair",
                  initials: "PN",
                  role: "Project Coordinator"
                }, {
                  name: "Manoj Verma",
                  initials: "MV",
                  role: "Security Analyst"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {member.initials}
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{member.name}</h4>
                      <Linkedin className="w-5 h-5 text-primary hover:text-secondary transition-colors cursor-pointer" />
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Our Vision: Lights Out Manufacturing</h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                At Vegam, we are shaping the future of manufacturing with fully autonomous factories that run continuously with minimal human intervention. By uniting robotics, AI, and digital intelligence, we create production ecosystems that are safer, smarter, and self-optimizing.
              </p>
              
              <p className="text-base">
                With 300+ plants powered by our digital backbone, we are driving the shift from connected factories to truly autonomous ones. Through adaptive robotics, generative AI, and predictive intelligence, we are pioneering a new era where risks are anticipated, quality is built-in, and efficiency has no limits.
              </p>
              
              <p className="text-base">
                For us, robotics is the foundation of a world where factories never stop, innovation never slows, and the Lights-Out vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Photo Gallery</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Behind every innovation is a story of collaboration, late-night breakthroughs, and shared determination.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Team Photo 1 - BASF Shanghai Visit */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <img src="/lovable-uploads/be5327f8-cabf-4af1-8479-1c505ef76db1.png" alt="Team visit to BASF Shanghai Coatings Co., Ltd." className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">BASF Shanghai Visit</h4>
                <p className="text-sm text-white/80">Industrial collaboration</p>
              </div>
            </div>

            {/* Team Photo 2 - Industrial Site Visit */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <img src="/lovable-uploads/a17db9f5-0af1-464d-b5fc-093a1f4cd328.png" alt="Team at industrial facility with safety gear" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">Plant Operations</h4>
                <p className="text-sm text-white/80">Safety first approach</p>
              </div>
            </div>

            {/* Team Photo 3 - Office Meeting */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <img src="/lovable-uploads/127f84ed-6feb-4a52-8312-09490f83dda7.png" alt="Team meeting in modern office with colorful wall art" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">Strategy Session</h4>
                <p className="text-sm text-white/80">Creative collaboration</p>
              </div>
            </div>

            {/* Team Photo 4 - Industrial Facility Visit */}
            

            {/* Team Photo 5 - Warehouse Operations */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <img src="/lovable-uploads/5a563870-000a-4169-ba13-0bbccd419c59.png" alt="Team observing warehouse operations and automated systems" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">Automation Study</h4>
                <p className="text-sm text-white/80">Warehouse innovation</p>
              </div>
            </div>

            {/* Team Photo 6 - Team Meeting */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300">
              <img src="/lovable-uploads/f8bf2e89-5b97-41d1-a7f7-c96c9eae7c6c.png" alt="Team collaborative session in conference room" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">Team Collaboration</h4>
                <p className="text-sm text-white/80">Knowledge sharing</p>
              </div>
            </div>

            {/* Team Photo 7 - BASF India Visit */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <img src="/lovable-uploads/9734a9ad-6047-47eb-922d-60db9a4177ce.png" alt="Team at BASF India Limited facility" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-lg font-bold mb-1">BASF India Visit</h4>
                <p className="text-sm text-white/80">Global partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurTeam;