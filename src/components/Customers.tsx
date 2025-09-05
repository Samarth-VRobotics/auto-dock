import React from "react";
import { Handshake, Settings, Headphones } from "lucide-react";

const Customers = () => {
  // Customer logos data matching the reference image
  const customers = [{
    name: "ARKEMA",
    logo: "https://vegam.co/lovable-uploads/1a590db5-6790-4c96-846f-1908fd8142ea.png"
  }, {
    name: "BASF",
    logo: "https://vegam.co/lovable-uploads/a130b90f-7ac1-4960-920e-a0474132e26f.png"
  }, {
    name: "Bostik",
    logo: "https://vegam.co/lovable-uploads/fcf8d687-3ef1-4c16-993e-16dd3eb46b83.png"
  }, {
    name: "Emerson",
    logo: "https://vegam.co/lovable-uploads/c0b6dbaa-39e8-4181-8f27-a1e1e3a63bda.png"
  }, {
    name: "Evonik",
    logo: "https://vegam.co/lovable-uploads/83bbbced-e06e-48c3-b1e2-1a0879172c1c.png"
  }, {
    name: "Henkel",
    logo: "https://vegam.co/lovable-uploads/3a453a0d-1d64-4438-b964-ce77b954bdb1.png"
  }, {
    name: "Unilever",
    logo: "https://vegam.co/lovable-uploads/a566f628-b7a5-488d-ae06-e4f4dc306e28.png"
  }, {
    name: "SEP",
    logo: "https://vegam.co/lovable-uploads/5693a6a3-2dff-454a-9982-d16213261092.png"
  }, {
    name: "SKF",
    logo: "https://vegam.co/lovable-uploads/28ac4552-9267-4e43-9929-9dff1c9e7f86.png"
  }, {
    name: "JSW Steel",
    logo: "https://vegam.co/lovable-uploads/66fde0cf-949d-4508-81a6-02eeeb41e212.png"
  }, {
    name: "LG Electronics",
    logo: "https://vegam.co/lovable-uploads/1a590db5-6790-4c96-846f-1908fd8142ea.png"
  }, {
    name: "MBCC Group",
    logo: "https://vegam.co/lovable-uploads/a130b90f-7ac1-4960-920e-a0474132e26f.png"
  }, {
    name: "Target",
    logo: "https://vegam.co/lovable-uploads/fcf8d687-3ef1-4c16-993e-16dd3eb46b83.png"
  }, {
    name: "OKW",
    logo: "https://vegam.co/lovable-uploads/c0b6dbaa-39e8-4181-8f27-a1e1e3a63bda.png"
  }, {
    name: "Indorama",
    logo: "https://vegam.co/lovable-uploads/83bbbced-e06e-48c3-b1e2-1a0879172c1c.png"
  }, {
    name: "JSL",
    logo: "https://vegam.co/lovable-uploads/3a453a0d-1d64-4438-b964-ce77b954bdb1.png"
  }, {
    name: "Vedanta",
    logo: "https://vegam.co/lovable-uploads/a566f628-b7a5-488d-ae06-e4f4dc306e28.png"
  }, {
    name: "Vguard",
    logo: "https://vegam.co/lovable-uploads/5693a6a3-2dff-454a-9982-d16213261092.png"
  }];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Strategic Partnerships Header */}
        <div className="bg-blue-100 rounded-lg px-6 py-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Handshake className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Strategic Partnerships</h2>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-6">
            Trusted Long-Term Partner to Global Leaders in Chemicals & Manufacturing
          </h3>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-7 gap-4 mb-12">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-center h-16 hover:shadow-sm transition-shadow"
            >
              <img 
                src={customer.logo} 
                alt={`${customer.name} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Implementation Excellence Header */}
        <div className="bg-blue-100 rounded-lg px-6 py-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Settings className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Implementation Excellence</h2>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-base text-gray-700 max-w-4xl mx-auto">
            Comprehensive digital manufacturing operations management tools with proven track records of delivering sustained improvements across facilities worldwide.
          </p>
        </div>

        {/* Continuous Support Header */}
        <div className="bg-blue-100 rounded-lg px-6 py-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <Headphones className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Continuous Support</h2>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-base text-gray-700 max-w-4xl mx-auto">
            24/7 global support infrastructure ensuring optimal operations and rapid troubleshooting for mission-critical manufacturing systems across time zones.
          </p>
        </div>

      </div>
    </section>
  );
};
export default Customers;