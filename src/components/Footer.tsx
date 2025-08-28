const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-40 w-32 h-32 bg-white rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h2 className="text-2xl font-bold">AutoDock</h2>
            </div>
            <p className="text-lg leading-relaxed max-w-md text-blue-100">
              Secure knowledge management for companies. Transform scattered 
              knowledge into instant insights.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Vegam Solutions Inc.</p>
                  <p className="text-blue-100">16192, Coastal Highway</p>
                  <p className="text-blue-100">Lewes, Delaware 19958, USA</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href="mailto:info@aiintime.com" className="text-blue-100 hover:text-white transition-colors">
                  info@aiintime.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <a href="tel:+19193326999" className="text-blue-100 hover:text-white transition-colors">
                  +1 (919) 332-6999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;