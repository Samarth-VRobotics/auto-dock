import { useEffect, useRef } from "react";

const Customers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Customer logos data - using placeholder logos for now
  const customers = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "FedEx", logo: "https://logos-world.net/wp-content/uploads/2020/11/FedEx-Logo.png" },
    { name: "UPS", logo: "https://logos-world.net/wp-content/uploads/2020/06/UPS-Logo.png" },
    { name: "DHL", logo: "https://logos-world.net/wp-content/uploads/2020/06/DHL-Logo.png" },
    { name: "Walmart", logo: "https://logos-world.net/wp-content/uploads/2020/04/Walmart-Logo.png" },
    { name: "Target", logo: "https://logos-world.net/wp-content/uploads/2020/04/Target-Logo.png" },
    { name: "Home Depot", logo: "https://logos-world.net/wp-content/uploads/2020/04/Home-Depot-Logo.png" },
    { name: "Costco", logo: "https://logos-world.net/wp-content/uploads/2020/04/Costco-Logo.png" },
    { name: "Kroger", logo: "https://logos-world.net/wp-content/uploads/2020/09/Kroger-Logo.png" },
    { name: "Sysco", logo: "https://logos-world.net/wp-content/uploads/2020/11/Sysco-Logo.png" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;
    const scrollStep = () => {
      scrollAmount += step;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollStep, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by 500+ Distribution Centers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading logistics companies rely on AutoDock to optimize their warehouse operations and reduce docking times.
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-hidden"
            style={{
              width: 'max-content',
            }}
          >
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 flex items-center justify-center bg-white/80 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm md:text-base text-muted-foreground">Distribution Centers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm md:text-base text-muted-foreground">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
            <div className="text-sm md:text-base text-muted-foreground">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;