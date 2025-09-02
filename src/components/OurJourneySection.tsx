import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Code, Eye } from "lucide-react";
import { useState } from "react";

const OurJourneySection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Humanoid Robots",
      category: "Advanced Robotics",
      description: "Balancing dynamics, actuation, and stability control",
      details: "Our journey began with humanoid robots, where we learned the fundamentals of bipedal locomotion, dynamic balance, and real-time control systems. This project taught us the importance of precision in mechanical design and the complexity of human-like movement.",
      technologies: ["ROS", "Python", "Control Theory", "Kinematics"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      achievements: ["Stable walking gait", "Dynamic balance control", "Real-time sensor integration"]
    },
    {
      title: "Autonomous Mobile Robots",
      category: "Navigation & AI",
      description: "Navigation, stair-climbing, obstacle negotiation",
      details: "We developed AMRs capable of autonomous navigation in complex environments. From SLAM algorithms to stair-climbing mechanisms, these robots pushed us to think beyond traditional wheeled systems.",
      technologies: ["SLAM", "Computer Vision", "Path Planning", "Sensors"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      achievements: ["Autonomous navigation", "Stair climbing capability", "Obstacle avoidance"]
    },
    {
      title: "Parallel Robots",
      category: "Precision Engineering",
      description: "High-precision mechanics, control theory in practice",
      details: "Working with parallel mechanisms taught us about precision engineering and the mathematical beauty of Stewart platforms. These projects refined our understanding of forward and inverse kinematics.",
      technologies: ["MATLAB", "Precision Mechanics", "Control Systems", "CAD"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      achievements: ["Sub-millimeter precision", "6-DOF control", "Real-time feedback"]
    },
    {
      title: "Industrial Inspection Systems",
      category: "Computer Vision",
      description: "Computer vision, AI, reliability at scale",
      details: "Our latest venture into industrial automation combines computer vision with AI to create robust inspection systems. This project bridges the gap between academic research and industry applications.",
      technologies: ["OpenCV", "Machine Learning", "Industrial Cameras", "Quality Control"],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      achievements: ["99.9% detection accuracy", "Real-time processing", "Industry deployment"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/25 opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Journey Into <span className="text-primary">Robotics</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              From curious students to innovation pioneers — every project shaped our vision of what robotics can achieve
            </p>
          </div>

          {/* Story Introduction */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">From Curiosity to Innovation</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  It all started with late-night experiments at KLE Technological University. What began as academic projects 
                  quickly evolved into a passion for solving real-world challenges through robotics.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Each project taught us something new — from the elegant mathematics of parallel mechanisms to the 
                  gritty reality of making robots work in unpredictable environments.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center text-white">
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Our Journey Video</p>
                    <p className="text-sm opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-12">Projects That Shaped Us</h3>
            
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {projects.map((project, index) => (
                <Button
                  key={index}
                  variant={activeProject === index ? "default" : "outline"}
                  onClick={() => setActiveProject(index)}
                  className="transition-all duration-300"
                >
                  {project.title}
                </Button>
              ))}
            </div>

            {/* Active Project Display */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-primary/10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Media Section */}
                <div className="bg-slate-900 relative">
                  <div className="aspect-video flex items-center justify-center">
                    <iframe
                      src={projects[activeProject].videoUrl}
                      title={projects[activeProject].title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {projects[activeProject].category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {projects[activeProject].title}
                  </h4>
                  <p className="text-lg font-medium text-foreground/70 mb-6">
                    {projects[activeProject].description}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-8">
                    {projects[activeProject].details}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {projects[activeProject].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm" className="group">
                      <Code className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm" className="group">
                      <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Case Study
                    </Button>
                    <Button variant="outline" size="sm" className="group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-30"></div>
            
            <div className="space-y-12">
              {[
                { year: "2021", title: "First Steps", desc: "Started with basic robotics concepts and simple mechanisms" },
                { year: "2022", title: "Deep Dive", desc: "Advanced projects in humanoids and parallel robotics" },
                { year: "2023", title: "Real World", desc: "Industrial applications and autonomous systems" },
                { year: "2024", title: "Vegam Born", desc: "Founded Vegam Robotics to bring innovations to market" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        <h4 className="font-semibold text-lg mb-2">{milestone.title}</h4>
                        <p className="text-foreground/70">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;