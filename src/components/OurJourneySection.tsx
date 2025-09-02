import { Card, CardContent } from "@/components/ui/card";

export default function OurJourneySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/20 opacity-30"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Journey in Robotics
            </h2>
          </div>

          {/* Journey Content */}
          <div className="space-y-12">
            {/* University Roots */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  At Vegam Robotics, our story is deeply rooted in KLE Technological University (KLETU), the university that has shaped us into who we are today. We take immense pride in calling it our alma mater — a place that not only gave us knowledge but also a thriving ecosystem of mentorship, opportunities, and vision.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  KLETU has long been a space where innovation thrives. Under the leadership of Dr. Ashok Shetter, the university has built a culture that inspires innovation and celebrates research-driven excellence. Today, the Department of Automation and Robotics, led by Mr. Vinayak, continues to carry that vision forward, shaping the next generation of engineers.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Among the many guiding lights on our path, Prof. Arun Giriyapur, former HOD, has been far more than just a teacher. He has been a steady, lifelong mentor — guiding us with his wisdom, encouraging our wildest ideas, and inspiring us to keep pushing the boundaries of robotics. The faith he placed in us during our university days still anchors our journey, reminding us of where we started and why we continue to build.
                </p>
              </CardContent>
            </Card>

            {/* From University to Industry */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">From University Academia to Industry</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Our journey began in university labs, where we worked late into the night on projects that challenged us — humanoids, mobile robots, automated storage systems, and vision-based inspection platforms. Each build was more than just a technical exercise; it was a spark, showing us how engineering could solve real problems.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  The bridge from academia to industry wasn't built overnight. It was shaped by mentors like Prof. Giriyapur, who pushed us to think beyond textbooks, and by the guidance of our CEO, Subramanyam Kasibhat, whose belief in robotics as a force for manufacturing transformation encouraged us to take our work into the real world.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  What began as passion-driven projects within university walls gradually matured into scalable, industry-grade solutions. Those countless hours of experimentation, problem-solving, and small wins laid the foundation for Vegam Robotics. Even today, the values we absorbed at KLETU — rigor, practicality, and impact — continue to guide the way we design, build, and innovate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}