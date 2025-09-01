import ContactDialog from "@/components/ContactDialog";

const Footer = () => {
  return <footer className="bg-background border-t border-border section-padding-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Side - Vegam Brand */}
          <div className="space-y-6">
            <div className="space-y-2">
              <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-12" />
              <p className="body-sm text-muted-foreground">Making factories smarter</p>
            </div>
            <ContactDialog>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">Contact Us</button>
            </ContactDialog>
          </div>

          {/* Solutions Section */}
          <div className="space-y-4">
            <h3 className="heading-sm text-foreground">Solutions</h3>
            <div className="space-y-2">
              <a href="https://vegam.co/sfs" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vSFS
              </a>
              <a href="#vmaxoee" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vMaxOEE
              </a>
              <a href="#vcms" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vCMS
              </a>
              <a href="#vwms" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vWMS
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="heading-sm text-foreground">Company</h3>
            <div className="space-y-2">
              <a href="#about" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#partners" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Partners
              </a>
              <a href="#partner-connect" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                PartnerConnect2025
              </a>
              <a href="#brochure" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Brochure
              </a>
              <a href="#quality" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Quality Policy
              </a>
              <a href="#security" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Information Security
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="heading-sm text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 mt-1 flex-shrink-0 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="body-sm font-medium text-foreground">Vegam Solutions Inc.</p>
                  <p className="body-sm text-muted-foreground">16192, Coastal Highway</p>
                  <p className="body-sm text-muted-foreground">Lewes, Delaware 19958, USA</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a href="mailto:info@aiintime.com" className="body-sm text-primary hover:text-primary/80 transition-colors">info@vegamrobotics.com</a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex-shrink-0 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <a href="tel:+19193326999" className="body-sm text-primary hover:text-primary/80 transition-colors">
                  +1 (919) 332-6999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="body-sm text-muted-foreground">
            © 2024 AutoDock. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="body-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="body-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="body-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;