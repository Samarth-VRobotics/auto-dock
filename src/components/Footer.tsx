const Footer = () => {
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              Making Factories Smarter
            </p>
            
            
            {/* Contact Information */}
            <div className="space-y-2 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Vegam Solutions Inc.</p>
                <p className="text-sm text-muted-foreground">16192, Coastal Highway</p>
                <p className="text-sm text-muted-foreground">Lewes, Delaware 19958, USA</p>
                <a href="mailto:info@aiintime.com" className="text-sm text-primary hover:text-primary/80 transition-colors block">
                  info@aiintime.com
                </a>
                <a href="tel:+19193326999" className="text-sm text-primary hover:text-primary/80 transition-colors block">
                  +1 (919) 332-6999
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <div className="space-y-2">
              <a href="#autodock" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AutoDock System
              </a>
              <a href="#loading" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Loading Solutions
              </a>
              <a href="#unloading" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Unloading Solutions
              </a>
              <a href="#software" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Software Platform
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#news" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                News & Press
              </a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <a href="#documentation" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Technical Support
              </a>
              <a href="#training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Training
              </a>
              <a href="#warranty" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vegam. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;