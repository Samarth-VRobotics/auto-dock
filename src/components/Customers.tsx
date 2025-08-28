import { useEffect, useRef } from "react";

const Customers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Customer logos data from vegam website
  const customers = [
    { name: "Bostik", logo: "https://vegam.co/lovable-uploads/1a590db5-6790-4c96-846f-1908fd8142ea.png" },
    { name: "Emerson", logo: "https://vegam.co/lovable-uploads/a130b90f-7ac1-4960-920e-a0474132e26f.png" },
    { name: "JSL Jindal Stainless", logo: "https://vegam.co/lovable-uploads/a566f628-b7a5-488d-ae06-e4f4dc306e28.png" },
    { name: "Indorama", logo: "https://vegam.co/lovable-uploads/83bbbced-e06e-48c3-b1e2-1a0879172c1c.png" },
    { name: "LG Electronics", logo: "https://vegam.co/lovable-uploads/c0b6dbaa-39e8-4181-8f27-a1e1e3a63bda.png" },
    { name: "JSW Steel", logo: "https://vegam.co/lovable-uploads/3a453a0d-1d64-4438-b964-ce77b954bdb1.png" },
    { name: "Saint-Gobain", logo: "https://vegam.co/lovable-uploads/fcf8d687-3ef1-4c16-993e-16dd3eb46b83.png" },
    { name: "SEP India", logo: "https://vegam.co/lovable-uploads/5693a6a3-2dff-454a-9982-d16213261092.png" },
    { name: "SKF", logo: "https://vegam.co/lovable-uploads/28ac4552-9267-4e43-9929-9dff1c9e7f86.png" },
    { name: "Solex Logistics", logo: "https://vegam.co/lovable-uploads/66fde0cf-949d-4508-81a6-02eeeb41e212.png" },
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
            Trusted by 300+ Plants Across the Globe
          </h2>
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
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">300+</div>
            <div className="text-sm md:text-base text-muted-foreground">Plants</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">60+</div>
            <div className="text-sm md:text-base text-muted-foreground">Countries</div>
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