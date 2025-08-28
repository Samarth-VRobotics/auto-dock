const IndustryCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-slate-200/50 shadow-xl">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                Ready to Transform Your Industry?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Discover how AutoDock's adaptive technology can revolutionize your dock operations, regardless of your industry's unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 border-2 border-slate-300 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                  Download Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCTA;