import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import OurJourneySection from "@/components/OurJourneySection";
import { MasonryGallery } from "@/components/GalleryVariants";
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
      <section className="pt-20 pb-2 relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src="https://vascdmsrhvsqlfmqpvxg.supabase.co/storage/v1/object/public/videos/ASRS%20timelasp.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
              Meet the Humans Behind the <span className="text-primary-foreground">Robots</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in px-4 drop-shadow-md">
              A multidisciplinary team of engineers, creators, and problem-solvers building robots with purpose.
            </p>
          </div>
        </div>
        
        {/* Bottom Positioned Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div 
            className="flex flex-col items-center space-y-3 transition-all duration-500 hover:scale-110 cursor-pointer animate-bounce"
            onClick={() => {
              const nextSection = document.querySelector('#our-journey-section');
              nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg">
              <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white/90 rounded-full mt-2 animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
            <div className="animate-[bounce_2s_infinite]">
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 drop-shadow-lg transition-colors duration-300 hover:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-wider drop-shadow-md animate-fade-in">Scroll to explore</p>
          </div>
        </div>
      </section>

      <div id="our-journey-section">
        <OurJourneySection />
      </div>

      {/* Our Team Collage Section */}
      <section className="py-16 bg-background">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Team</h2>
            <p className="text-foreground/60 text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-2 sm:px-6 leading-relaxed">
              Vegam is more than a company — it's the continuation of friendships, shared dreams, and late-night breakthroughs from our university days. While everyone wears many hats, from robotics and software to business and operations, each has a superpower that anchors the team.
            </p>
          </div>

          {/* Desktop: Dynamic Collage Grid */}
          <div className="hidden lg:block w-full px-6">
            
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        {member.initials}
                      </div>
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-4">{member.role}</p>
                      <Linkedin className="w-5 h-5 text-primary hover:text-secondary transition-colors cursor-pointer" />
                    </div>)}
                </div>
              </div>

              {/* AI Experts */}
              <div className="bg-blue-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-3">AI Experts</h3>
                  <p className="text-foreground/60 text-lg">Developing intelligent software architectures and automation solutions</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {[{
                  name: "Falgun",
                  initials: "F",
                  role: "Software Architect",
                  image: "/lovable-uploads/c7f3629b-de5b-4d24-b053-24ac3ecf879f.png"
                }, {
                  name: "J. S. Ranjith",
                  initials: "JSR",
                  role: "Software Architect"
                }, {
                  name: "Parikshith Palegar",
                  initials: "PP",
                  role: "Software Architect",
                  image: "/lovable-uploads/dccb7189-5c8d-4a95-b2c2-1cafdba7fb45.png"
                }, {
                  name: "MANOKARTHI J",
                  initials: "MJ",
                  role: "Software Architect"
                }, {
                  name: "Nieander Pranesh",
                  initials: "NP",
                  role: "Software Architect",
                  image: "/lovable-uploads/56cc3bd2-28b1-49c7-94be-6eb09506c3c8.png"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-secondary text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-4">{member.role}</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {[{
                  name: "Vishwanath Garagad",
                  initials: "VG",
                  role: "Product Architect",
                  image: "/lovable-uploads/d86864c8-a1db-485e-ba3c-628a4d873a12.png"
                }, {
                  name: "Vijaylakshmi",
                  initials: "VL",
                  role: "Firmware Architect"
                }, {
                  name: "Samuel Mara",
                  initials: "SM",
                  role: "PCB Design Engineer",
                  image: "/lovable-uploads/acf270f5-7ca6-4283-abc0-8b33227fc799.png"
                }, {
                  name: "Sarvanan",
                  initials: "SV",
                  role: "Systems Integration Engineer",
                  image: "/lovable-uploads/3616a756-548d-420e-ba06-b93f9a1fa6bd.png"
                }, {
                  name: "Shridhar",
                  initials: "SH",
                  role: "Senior Software Engineer",
                  image: "/lovable-uploads/e6dcb3fb-9309-445f-b034-b0c52e068181.png"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-accent text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-4">{member.role}</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {[{
                  name: "Aman Saxena",
                  initials: "AS",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/d442dbd3-0500-46ee-b83b-55f2da49f55c.png"
                }, {
                  name: "Balaji Kumar",
                  initials: "BK",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/352f28fa-76b2-4fca-843a-8124d22ea580.png"
                }, {
                  name: "Rohan Patil",
                  initials: "RP",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/9410d024-f7c2-40be-9ae5-2dce6cdae3ec.png"
                }, {
                  name: "Shreeja M S",
                  initials: "SMS",
                  role: "Senior Software Engineer",
                  image: "/lovable-uploads/e50606a0-da85-43fa-ba84-e9fa043c459b.png"
                }, {
                  name: "Ann Maria Jess Kurian",
                  initials: "AJ",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/c3c6caf6-4edb-45d1-b318-3e024e67e623.png"
                }, {
                  name: "Kanakaraddi C Radder",
                  initials: "KR",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/e410257f-58da-483b-b232-679ecee0a73d.png"
                }, {
                  name: "Pramod BP",
                  initials: "PB",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/9ed852e5-407a-4b29-8eae-29f48055e52c.png"
                }, {
                  name: "Subha J",
                  initials: "SJ",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/8884082c-70c9-40f7-b1e5-daa47dd94d21.png"
                }, {
                  name: "Ajay K",
                  initials: "AK",
                  role: "Technical Lead",
                  image: "/lovable-uploads/de81c39a-3c55-4b86-b164-e91bed668082.png"
                }, {
                  name: "Chaithra N",
                  initials: "CN",
                  role: "Lead Functional Consultant"
                }, {
                  name: "Venkatesh HS",
                  initials: "VH",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/79c22532-d762-481d-a996-4f13deb1878d.png"
                }, {
                  name: "Tunga Santosh Kumar Reddy",
                  initials: "TSR",
                  role: "Software Architect",
                  image: "/lovable-uploads/3d63daaa-3e71-42b1-af1b-f18016227d10.png"
                }, {
                  name: "Varadharajan N M",
                  initials: "VN",
                  role: "Software Architect",
                  image: "/lovable-uploads/27f82965-f871-462e-9d19-dfe00fc021bd.png"
                }, {
                  name: "Sachin Vishwakarma",
                  initials: "SV",
                  role: "Software Architect",
                  image: "/lovable-uploads/b893342a-f6f5-4d8a-b6f0-6c2ba15fa002.png"
                }, {
                  name: "Pratish RameshChandra Gandhi",
                  initials: "PRG",
                  role: "Software Architect",
                  image: "/lovable-uploads/5b0d2e84-1357-4b91-862b-84b8878527f9.png"
                }, {
                  name: "Vishweshwar Kapse",
                  initials: "VK",
                  role: "Software Architect",
                  image: "/lovable-uploads/9a4c8e4c-3359-4f38-982c-675544f01a4a.png"
                }, {
                  name: "Sreenivasa Yarram",
                  initials: "SY",
                  role: "Software Architect",
                  image: "/lovable-uploads/1ef3df60-aed7-4450-b3be-a92ffd78423c.png"
                }, {
                  name: "Sirajudheen NH",
                  initials: "SN",
                  role: "Software Architect",
                  image: "/lovable-uploads/aaba0cb6-b9cd-4fca-95c1-3cfa2ebf16bc.png"
                }, {
                  name: "Sushin C",
                  initials: "SC",
                  role: "Software Architect",
                  image: "/lovable-uploads/deb7b8e5-9c2d-4e19-bead-676533360f9d.png"
                }, {
                  name: "Ramesh Kumar",
                  initials: "RK",
                  role: "Project Coordinator"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-4">{member.role}</p>
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

          {/* Masonry Gallery Layout */}
          <MasonryGallery />
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurTeam;