import ContactDialog from "@/components/ContactDialog";
const Footer = () => {
  return <footer className="bg-background border-t border-border section-padding-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-8">
          {/* Left Side - Logo */}
          <div className="flex-1 flex justify-end">
            <img src="/vegam-logo-optimized.png" alt="Vegam" className="h-16 w-auto object-contain" loading="lazy" />
          </div>
          
          {/* Vertical Line */}
          <div className="w-px h-24 bg-border"></div>
          
          {/* Right Side - Contact Info */}
          <div className="flex-1">
            <div className="space-y-2">
              <h3 className="heading-sm text-foreground">Contact Us</h3>
              <p className="body-sm font-medium text-foreground">Vegam Solutions Inc.</p>
              <p className="body-sm text-muted-foreground">16192, Coastal Highway</p>
              <p className="body-sm text-muted-foreground">Lewes, Delaware 19958, USA</p>
              <a href="mailto:sales@vegamrobotics.com" className="body-sm text-primary hover:text-primary/80 transition-colors block">sales@vegamrobotics.com</a>
              <a href="tel:+12056852550" className="body-sm text-primary hover:text-primary/80 transition-colors">+1 (205) 685-2550</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="body-sm text-muted-foreground">
            © 2024 AutoDock. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://vegam.co/privacy-policy" className="body-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="https://vegam.co/terms-of-use" className="body-sm text-muted-foreground hover:text-primary transition-colors">
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