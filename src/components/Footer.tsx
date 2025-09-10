import ContactDialog from "@/components/ContactDialog";
const Footer = () => {
  return <footer className="bg-background border-t border-border section-padding-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Centered Logo and Contact Button */}
          <div className="text-center space-y-4">
            <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-16 mx-auto" />
            <p className="text-lg text-muted-foreground">Making factories smarter</p>
          </div>
          
          <ContactDialog>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">Contact Us</button>
          </ContactDialog>
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