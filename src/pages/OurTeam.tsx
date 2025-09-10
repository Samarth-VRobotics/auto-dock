import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import OurJourneySection from "@/components/OurJourneySection";
import VideoSlideshow from "@/components/VideoSlideshow";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import mentorshipScene from "@/assets/mentorship-scene.jpg";
import { useState, useEffect } from "react";
const OurTeam = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScrollIndicator(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        
        {/* Bottom Positioned Scroll Indicator - Smaller and More Visible */}
        {showScrollIndicator && <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex flex-col items-center space-y-2 transition-all duration-500 hover:scale-110 cursor-pointer animate-bounce" onClick={() => {
          const nextSection = document.querySelector('#our-journey-section');
          nextSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }}>
              <div className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-md bg-white/20 shadow-2xl">
                <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full mt-1.5 animate-[pulse_2s_ease-in-out_infinite]"></div>
              </div>
              <div className="animate-[bounce_2s_infinite]">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-2xl transition-colors duration-300 hover:text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-white text-xs font-bold tracking-wider drop-shadow-2xl animate-fade-in bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">Our Journey</p>
            </div>
          </div>}
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
            
          </div>

          {/* Mobile: Stacked Cards */}
          
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
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {[{
                  name: "Faizan Pathan",
                  initials: "FP",
                  role: "Robotics Engineer",
                  image: "/lovable-uploads/ec6ab3f2-84b4-41a2-9fc8-3f2a26bf69e9.png",
                  linkedinUrl: "https://www.linkedin.com/in/faizan-pathan-6b8ab51aa/"
                }, {
                  name: "Rani\nKinnal",
                  initials: "RK",
                  role: "Robotics Engineer",
                  image: "/lovable-uploads/fb9654bd-cc20-4b43-80d0-bc2007022b1b.png",
                  linkedinUrl: "https://www.linkedin.com/in/rani-r-kinnal/"
                }, {
                  name: "Amrut Kurtkoti",
                  initials: "AK",
                  role: "Business Development",
                  image: "/lovable-uploads/727e42af-80a4-4b73-8d02-12ed7f28a40f.png",
                  linkedinUrl: "https://www.linkedin.com/in/amrutsk/"
                }, {
                  name: "Samarth Vengurlekar",
                  initials: "SV",
                  role: "Robotics Frontend Developer",
                  image: "/lovable-uploads/4f37e379-47b3-4f19-b3b3-109f70a97148.png",
                  linkedinUrl: "https://www.linkedin.com/in/samarth-vengurlekar/"
                }, {
                  name: "Ashutosh Kangralkar",
                  initials: "AS",
                  role: "Robotics Hardware Engineer",
                  image: "/lovable-uploads/f60531ed-5e73-4d78-bce3-4dbccbbcb92c.png",
                  linkedinUrl: "https://www.linkedin.com/in/ashutosh-kangralkar-841584243/"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-primary text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2 whitespace-pre-line">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-6 flex-grow">{member.role}</p>
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077B5] hover:bg-[#005885] transition-colors cursor-pointer mt-auto">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>)}
                </div>
              </div>

              {/* AI Experts */}
              <div className="bg-blue-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-3">AI Experts</h3>
                  <p className="text-foreground/60 text-lg">Developing intelligent software architectures and automation solutions</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                  {[{
                  name: "Falgun",
                  initials: "F",
                  role: "GenAI architect",
                  image: "/lovable-uploads/c7f3629b-de5b-4d24-b053-24ac3ecf879f.png",
                  linkedinUrl: "https://www.linkedin.com/in/falgun-aghera/"
                }, {
                  name: "Parikshith Palegar",
                  initials: "PP",
                  role: "AI engineer",
                  image: "/lovable-uploads/dccb7189-5c8d-4a95-b2c2-1cafdba7fb45.png",
                  linkedinUrl: "https://www.linkedin.com/in/parikshith078/"
                }, {
                  name: "Nieander Pranesh",
                  initials: "NP",
                  role: "AI Solutions Engineer",
                  image: "/lovable-uploads/56cc3bd2-28b1-49c7-94be-6eb09506c3c8.png",
                  linkedinUrl: "https://www.linkedin.com/in/nieander/"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full w-full max-w-sm">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-secondary text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-6 flex-grow">{member.role}</p>
                      <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077B5] hover:bg-[#005885] transition-colors cursor-pointer mt-auto">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>)}
                </div>
              </div>

              {/* Embedded Experts */}
              <div className="bg-green-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-accent mb-3">Embedded Experts</h3>
                  <p className="text-foreground/60 text-lg">Specializing in hardware-software integration and embedded systems</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
                  {[{
                  name: "Vishwanath Garagad",
                  initials: "VG",
                  role: "Product Architect",
                  image: "/lovable-uploads/d86864c8-a1db-485e-ba3c-628a4d873a12.png",
                  linkedinUrl: "https://www.linkedin.com/in/vishwanath-g-garagad-7a54a338/"
                }, {
                  name: "Vijaylakshmi",
                  initials: "VL",
                  role: "Firmware Architect",
                  image: "/lovable-uploads/665ffeb7-0536-4a0e-83d9-359b48f56e48.png"
                }, {
                  name: "Samuel Mara",
                  initials: "SM",
                  role: "PCB Design Engineer",
                  image: "/lovable-uploads/acf270f5-7ca6-4283-abc0-8b33227fc799.png",
                  linkedinUrl: "https://www.linkedin.com/in/samuel-mara-17a9b0192/"
                }, {
                  name: "Sarvanan",
                  initials: "SV",
                  role: "Systems Integration Engineer",
                  image: "/lovable-uploads/3616a756-548d-420e-ba06-b93f9a1fa6bd.png"
                }, {
                  name: "Shridhar",
                  initials: "SH",
                  role: "Senior Software Engineer",
                  image: "/lovable-uploads/e6dcb3fb-9309-445f-b034-b0c52e068181.png",
                  linkedinUrl: "https://www.linkedin.com/in/shridhar-samay-a18598223/"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-accent text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-6 flex-grow">{member.role}</p>
                      {member.linkedinUrl ? <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077B5] hover:bg-[#005885] transition-colors cursor-pointer mt-auto">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a> : <div className="inline-flex items-center justify-center w-8 h-8 rounded bg-gray-400 cursor-default mt-auto">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5-569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>}
                    </div>)}
                </div>
              </div>

              {/* Manufacturing Experts */}
              <div className="bg-purple-50/30 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Smart Factory Experts</h3>
                  <p className="text-foreground/60 text-lg">Digital factory solutions and process optimization specialists</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                  {[{
                  name: "Aman Saxena",
                  initials: "AS",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/d442dbd3-0500-46ee-b83b-55f2da49f55c.png",
                  linkedinUrl: "https://www.linkedin.com/in/aman-saxena-7167281bb/"
                }, {
                  name: "Balaji Kumar",
                  initials: "BK",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/352f28fa-76b2-4fca-843a-8124d22ea580.png",
                  linkedinUrl: "https://www.linkedin.com/in/balaji-kumar-a466b277/"
                }, {
                  name: "Rohan Patil",
                  initials: "RP",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/9410d024-f7c2-40be-9ae5-2dce6cdae3ec.png",
                  linkedinUrl: "https://www.linkedin.com/in/rohan-patil-a3125b102/"
                }, {
                  name: "Shreeja M S",
                  initials: "SMS",
                  role: "Senior Software Engineer",
                  image: "/lovable-uploads/e50606a0-da85-43fa-ba84-e9fa043c459b.png",
                  linkedinUrl: "https://www.linkedin.com/in/shreeja-m-s-303710117/"
                }, {
                  name: "Ann Maria Jess Kurian",
                  initials: "AJ",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/c3c6caf6-4edb-45d1-b318-3e024e67e623.png",
                  linkedinUrl: "https://www.linkedin.com/in/ann-maria-jess-kurian-a22066170/"
                }, {
                  name: "Kanakaraddi C Radder",
                  initials: "KR",
                  role: "Senior Functional Consultant",
                  image: "/lovable-uploads/e410257f-58da-483b-b232-679ecee0a73d.png",
                  linkedinUrl: "https://www.linkedin.com/in/kanakreddycr/"
                }, {
                  name: "Pramod BP",
                  initials: "PB",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/9ed852e5-407a-4b29-8eae-29f48055e52c.png",
                  linkedinUrl: "https://www.linkedin.com/in/pramod-b-p-a1979097/"
                }, {
                  name: "Subha J",
                  initials: "SJ",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/90a6e052-8027-43c2-80d6-aef85a810757.png",
                  linkedinUrl: "https://www.linkedin.com/in/j-subha-68117312a/"
                }, {
                  name: "Ajay K",
                  initials: "AK",
                  role: "Technical Lead",
                  image: "/lovable-uploads/de81c39a-3c55-4b86-b164-e91bed668082.png",
                  linkedinUrl: "https://www.linkedin.com/in/ajay-moorthy-kartheesan-11115136/"
                }, {
                  name: "Chaithra N",
                  initials: "CN",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/bf479e87-a27e-40c7-ae1f-8f61216d7ed8.png",
                  linkedinUrl: "https://www.linkedin.com/in/chaithra-nagesh-848735200/"
                }, {
                  name: "Venkatesh HS",
                  initials: "VH",
                  role: "Lead Functional Consultant",
                  image: "/lovable-uploads/79c22532-d762-481d-a996-4f13deb1878d.png",
                  linkedinUrl: "https://www.linkedin.com/in/venkatesh-srinath-5a2307120/"
                }, {
                  name: "Tunga Santosh Kumar Reddy",
                  initials: "TSR",
                  role: "Software Architect",
                  image: "/lovable-uploads/3d63daaa-3e71-42b1-af1b-f18016227d10.png",
                  linkedinUrl: "https://www.linkedin.com/in/santhoshtunga/"
                }, {
                  name: "Varadharajan N M",
                  initials: "VN",
                  role: "Software Architect",
                  image: "/lovable-uploads/27f82965-f871-462e-9d19-dfe00fc021bd.png",
                  linkedinUrl: "https://www.linkedin.com/in/varadharajanmadhavan/"
                }, {
                  name: "Sachin Vishwakarma",
                  initials: "SV",
                  role: "Software Architect",
                  image: "/lovable-uploads/b893342a-f6f5-4d8a-b6f0-6c2ba15fa002.png",
                  linkedinUrl: "https://www.linkedin.com/in/sachin-vishwakarma-5b652b41/"
                }, {
                  name: "Pratish RameshChandra Gandhi",
                  initials: "PRG",
                  role: "Software Architect",
                  image: "/lovable-uploads/5b0d2e84-1357-4b91-862b-84b8878527f9.png",
                  linkedinUrl: "https://www.linkedin.com/in/pratish-gandhi-41635144/"
                }, {
                  name: "Vishweshwar Kapse",
                  initials: "VK",
                  role: "Software Architect",
                  image: "/lovable-uploads/9a4c8e4c-3359-4f38-982c-675544f01a4a.png",
                  linkedinUrl: "https://www.linkedin.com/in/vishweshwar-kapse/"
                }, {
                  name: "Sreenivasa Yarram",
                  initials: "SY",
                  role: "Software Architect",
                  image: "/lovable-uploads/1ef3df60-aed7-4450-b3be-a92ffd78423c.png",
                  linkedinUrl: "https://www.linkedin.com/in/sreenivasa-yarram-2b9143116/"
                }, {
                  name: "Sirajudheen NH",
                  initials: "SN",
                  role: "Software Architect",
                  image: "/lovable-uploads/aaba0cb6-b9cd-4fca-95c1-3cfa2ebf16bc.png",
                  linkedinUrl: "https://www.linkedin.com/in/sirajudheen-nh-9734b670/"
                }, {
                  name: "Sushin C",
                  initials: "SC",
                  role: "Software Architect",
                  image: "/lovable-uploads/deb7b8e5-9c2d-4e19-bead-676533360f9d.png",
                  linkedinUrl: "https://www.linkedin.com/in/sushin-c-b7473223/"
                }].map((member, index) => <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full">
                      {member.image ? <Avatar className="w-32 h-32 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                          <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-2xl">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar> : <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          {member.initials}
                        </div>}
                      <h4 className="font-bold text-foreground text-xl mb-2">{member.name}</h4>
                      <p className="text-foreground/60 text-sm mb-6 flex-grow">{member.role}</p>
                      {member.linkedinUrl ? <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077B5] hover:bg-[#005885] transition-colors cursor-pointer mt-auto">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a> : <div className="inline-flex items-center justify-center w-8 h-8 rounded bg-gray-400 cursor-default mt-auto">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Behind every innovation is a story of collaboration, late-night breakthroughs, and shared determination.
            </p>
          </div>

          {/* Video Slideshow Layout */}
          <VideoSlideshow />
        </div>
      </section>

      <Footer />
    </div>;
};
export default OurTeam;