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
              The People Behind the <span className="text-primary">Robots</span>
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
        
        {/* 6×6 Matrix Team Structure */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-16">
          <div className="w-full">
            
            {/* Desktop: 6×6 Grid Layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-4 mb-16">
                
                {/* Leadership Team - Top Left (2x3 section) */}
                <div className="col-span-2 row-span-3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-6 text-center">Robotics Team</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Faizan Pathan", initials: "FP", role: "Autonomy & Embedded Systems" },
                      { name: "Rani Kinnal", initials: "RK", role: "Systems & Simulation" },
                      { name: "Amrut Kurtakoti", initials: "AK", role: "Coordination & Business" },
                      { name: "Samarth Vengurlekar", initials: "SV", role: "UI & Integration" },
                      { name: "Ashutosh Kangralkar", initials: "AS", role: "Mechanical Design" }
                    ].map((member, index) => (
                       <div key={index} className="flex items-center space-x-4 hover:bg-white/50 rounded-lg p-3 transition-all duration-200">
                         <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                           {member.initials}
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="text-base font-semibold leading-tight">{member.name}</h4>
                           <p className="text-sm text-primary/70 leading-tight">{member.role}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>

                {/* Software Architects - Top Right (2x3 section) */}
                <div className="col-span-2 row-span-3 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6 border border-secondary/10">
                  <h3 className="text-xl font-bold text-secondary mb-6 text-center">AI Team</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Tunga Santosh Kumar", initials: "TS", role: "Software Architect" },
                      { name: "Varadharajan N M", initials: "VN", role: "Software Architect" },
                      { name: "Sachin Vishwakarma", initials: "SV", role: "Software Architect" },
                      { name: "Pratish Gandhi", initials: "PG", role: "Software Architect" },
                      { name: "Vishweshwar Kapse", initials: "VK", role: "Software Architect" }
                    ].map((member, index) => (
                       <div key={index} className="flex items-center space-x-4 hover:bg-white/50 rounded-lg p-3 transition-all duration-200">
                         <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                           {member.initials}
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="text-base font-semibold leading-tight">{member.name}</h4>
                           <p className="text-sm text-secondary/70 leading-tight">{member.role}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>

                {/* Technical Leads - Middle Right (2x3 section) */}
                <div className="col-span-2 row-span-3 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/10">
                  <h3 className="text-xl font-bold text-accent mb-6 text-center">Embedded Team</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Sreenivasa Yarram", initials: "SY", role: "Software Architect" },
                      { name: "Sirajudheen NH", initials: "SN", role: "Software Architect" },
                      { name: "Sushin C", initials: "SC", role: "Software Architect" },
                      { name: "Ajay K", initials: "AJ", role: "Technical Lead" },
                      { name: "Shreeja M S", initials: "SM", role: "Senior Software Engineer" }
                    ].map((member, index) => (
                       <div key={index} className="flex items-center space-x-4 hover:bg-white/50 rounded-lg p-3 transition-all duration-200">
                         <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                           {member.initials}
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="text-base font-semibold leading-tight">{member.name}</h4>
                           <p className="text-sm text-accent/70 leading-tight">{member.role}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>

                {/* Functional Consultants - Bottom (6x3 section) */}
                <div className="col-span-6 row-span-3 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Subject Matter Experts – Digital Factory Module</h3>
                  <div className="grid grid-cols-5 gap-6">
                    {[
                      { name: "Aman Saxena", initials: "AS", role: "Senior Functional Consultant" },
                      { name: "Balaji Kumar", initials: "BK", role: "Senior Functional Consultant" },
                      { name: "Rohan Patil", initials: "RP", role: "Senior Functional Consultant" },
                      { name: "Ann Maria Jess Kurian", initials: "AJ", role: "Lead Functional Consultant" },
                      { name: "Kanakaraddi C Radder", initials: "KR", role: "Senior Functional Consultant" },
                      { name: "Pramod BP", initials: "PB", role: "Lead Functional Consultant" },
                      { name: "Subha J", initials: "SJ", role: "Lead Functional Consultant" },
                      { name: "Venkatesh HS", initials: "VH", role: "Lead Functional Consultant" },
                      { name: "Chaithra N", initials: "CN", role: "Lead Functional Consultant" },
                      { name: "Arun Kumar", initials: "AR", role: "Senior Consultant" },
                      { name: "Priya Sharma", initials: "PS", role: "Business Analyst" },
                      { name: "Ravi Mehta", initials: "RM", role: "Process Engineer" },
                      { name: "Kavya Reddy", initials: "KV", role: "Quality Analyst" },
                      { name: "Deepak Singh", initials: "DS", role: "Integration Specialist" },
                      { name: "Neha Gupta", initials: "NG", role: "System Administrator" },
                      { name: "Vikram Joshi", initials: "VJ", role: "Database Engineer" },
                      { name: "Anita Rao", initials: "AR", role: "UI/UX Designer" },
                      { name: "Suresh Kumar", initials: "SK", role: "DevOps Engineer" },
                      { name: "Pooja Nair", initials: "PN", role: "Project Coordinator" },
                      { name: "Manoj Verma", initials: "MV", role: "Security Analyst" }
                    ].map((member, index) => (
                      <div key={index} className="text-center group hover:scale-105 transition-all duration-200">
                        <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-xl transition-all duration-200">
                          {member.initials}
                        </div>
                        <h4 className="text-sm font-semibold leading-tight mb-1">{member.name}</h4>
                        <p className="text-xs text-foreground/60 leading-tight">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet: 2-Column Layout */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-8 mb-16">
                
                {/* Leadership Team */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-6 text-center">Leadership Team</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Faizan Pathan", initials: "FP", role: "Autonomy & Embedded Systems" },
                      { name: "Rani Kinnal", initials: "RK", role: "Systems & Simulation" },
                      { name: "Amrut Kurtakoti", initials: "AK", role: "Coordination & Business" },
                      { name: "Samarth Vengurlekar", initials: "SV", role: "UI & Integration" },
                      { name: "Ashutosh Kangralkar", initials: "AS", role: "Mechanical Design" }
                    ].map((member, index) => (
                       <div key={index} className="flex items-center space-x-4 hover:bg-white/50 rounded-lg p-3 transition-all duration-200">
                         <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-base font-bold">
                           {member.initials}
                         </div>
                         <div>
                           <h4 className="text-base font-semibold">{member.name}</h4>
                           <p className="text-sm text-primary/70">{member.role}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>

                {/* Software Architects */}
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6 border border-secondary/10">
                  <h3 className="text-xl font-bold text-secondary mb-6 text-center">Software Architects</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Tunga Santosh Kumar", initials: "TS", role: "Software Architect" },
                      { name: "Varadharajan N M", initials: "VN", role: "Software Architect" },
                      { name: "Sachin Vishwakarma", initials: "SV", role: "Software Architect" },
                      { name: "Pratish Gandhi", initials: "PG", role: "Software Architect" },
                      { name: "Vishweshwar Kapse", initials: "VK", role: "Software Architect" }
                    ].map((member, index) => (
                       <div key={index} className="flex items-center space-x-4 hover:bg-white/50 rounded-lg p-3 transition-all duration-200">
                         <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-base font-bold">
                           {member.initials}
                         </div>
                         <div>
                           <h4 className="text-base font-semibold">{member.name}</h4>
                           <p className="text-sm text-secondary/70">{member.role}</p>
                         </div>
                       </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Leads & Functional Consultants for Tablet */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/10">
                  <h3 className="text-xl font-bold text-accent mb-6 text-center">Technical Leads</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Sreenivasa Yarram", initials: "SY", role: "Software Architect" },
                      { name: "Sirajudheen NH", initials: "SN", role: "Software Architect" },
                      { name: "Sushin C", initials: "SC", role: "Software Architect" },
                      { name: "Ajay K", initials: "AJ", role: "Technical Lead" },
                      { name: "Shreeja M S", initials: "SM", role: "Senior Software Engineer" }
                    ].map((member, index) => (
                       <div key={index} className="text-center">
                         <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-3 flex items-center justify-center text-white text-base font-bold">
                           {member.initials}
                         </div>
                         <h4 className="text-base font-semibold">{member.name}</h4>
                         <p className="text-sm text-accent/70">{member.role}</p>
                       </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">Functional Consultants (Partial View)</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Aman Saxena", initials: "AS", role: "Senior Functional Consultant" },
                      { name: "Balaji Kumar", initials: "BK", role: "Senior Functional Consultant" },
                      { name: "Rohan Patil", initials: "RP", role: "Senior Functional Consultant" },
                      { name: "Ann Maria Jess", initials: "AJ", role: "Lead Functional Consultant" },
                      { name: "Kanakaraddi Radder", initials: "KR", role: "Senior Functional Consultant" },
                      { name: "And 15 more...", initials: "...", role: "Various Specialists" }
                    ].map((member, index) => (
                       <div key={index} className="text-center">
                         <div className="w-18 h-18 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-sm font-bold">
                           {member.initials}
                         </div>
                         <h4 className="text-sm font-semibold">{member.name}</h4>
                         <p className="text-sm text-foreground/60">{member.role}</p>
                       </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Stacked Layout */}
            <div className="md:hidden space-y-8">
              {[
                { title: "Leadership Team", color: "primary", members: [
                  { name: "Faizan Pathan", initials: "FP", role: "Autonomy & Embedded Systems" },
                  { name: "Rani Kinnal", initials: "RK", role: "Systems & Simulation" },
                  { name: "Amrut Kurtakoti", initials: "AK", role: "Coordination & Business" },
                  { name: "Samarth Vengurlekar", initials: "SV", role: "UI & Integration" },
                  { name: "Ashutosh Kangralkar", initials: "AS", role: "Mechanical Design" }
                ]},
                { title: "Software Architects", color: "secondary", members: [
                  { name: "Tunga Santosh Kumar", initials: "TS", role: "Software Architect" },
                  { name: "Varadharajan N M", initials: "VN", role: "Software Architect" },
                  { name: "Sachin Vishwakarma", initials: "SV", role: "Software Architect" },
                  { name: "Pratish Gandhi", initials: "PG", role: "Software Architect" },
                  { name: "Vishweshwar Kapse", initials: "VK", role: "Software Architect" }
                ]},
                { title: "Technical Leads", color: "accent", members: [
                  { name: "Sreenivasa Yarram", initials: "SY", role: "Software Architect" },
                  { name: "Sirajudheen NH", initials: "SN", role: "Software Architect" },
                  { name: "Sushin C", initials: "SC", role: "Software Architect" },
                  { name: "Ajay K", initials: "AJ", role: "Technical Lead" },
                  { name: "Shreeja M S", initials: "SM", role: "Senior Software Engineer" }
                ]}
              ].map((team, teamIndex) => (
                <div key={teamIndex} className={`bg-gradient-to-br from-${team.color}/5 to-${team.color}/10 rounded-2xl p-6 border border-${team.color}/10`}>
                  <h3 className={`text-lg font-bold text-${team.color} mb-4 text-center`}>{team.title}</h3>
                  <div className="space-y-3">
                    {team.members.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-lg p-3">
                         <div className={`w-16 h-16 bg-gradient-${team.color} rounded-full flex items-center justify-center text-white text-base font-bold`}>
                           {member.initials}
                         </div>
                         <div>
                           <h4 className="text-base font-semibold">{member.name}</h4>
                           <p className={`text-sm text-${team.color}/70`}>{member.role}</p>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Functional Consultants - Mobile */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-foreground mb-4 text-center">Functional Consultants</h3>
                <p className="text-center text-sm text-foreground/60 mb-4">20 specialists across various domains</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Aman Saxena", initials: "AS" },
                    { name: "Balaji Kumar", initials: "BK" },
                    { name: "Rohan Patil", initials: "RP" },
                    { name: "Ann Maria Jess", initials: "AJ" },
                    { name: "View All Team", initials: "..." }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white/50 rounded-lg p-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {member.initials}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold">{member.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Build Together Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-8 pt-6 border-t border-foreground/10">
            <h3 className="text-lg font-semibold mb-3 text-foreground/90">Building Together</h3>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-3xl mx-auto">Each of us brings unique skills and perspectives, but it's our shared spirit of exploration and problem-solving combined with the flexibility to wear any hat that powers Vegam Robotics. Together, we're shaping the future of robotics, one innovation at a time.</p>
          </div>
        </div>
      </div>

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
                From Learners to Guides
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
                    We co-create industry-grade problem statements in robotics and automation, and guide students and faculty in solving them.Creating a strong bridge between academia and industry.
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
                        Join Us
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