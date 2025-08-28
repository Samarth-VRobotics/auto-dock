import React from "react";

const Customers = () => {
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

  return (
    <section className="section-padding bg-gradient-surface relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),transparent_1px)] bg-[length:24px_24px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <div className="section-header">
          <div className="badge badge-primary mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
            Global Trust & Recognition
          </div>
          <h2 className="heading-xl gradient-text mb-6">
            Trusted by 300+ Plants
            <br />
            <span className="text-primary">across 60+ countries</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Enhanced scrolling logos */}
        <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 shadow-2xl p-8 mb-16">
          <div className="flex gap-10 md:gap-16 animate-scroll">
            {/* First set of logos */}
            {customers.map((customer, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 dark:bg-slate-700/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 dark:border-slate-600/50 group"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center bg-white/90 dark:bg-slate-700/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 border border-slate-200/50 dark:border-slate-600/50 group"
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;