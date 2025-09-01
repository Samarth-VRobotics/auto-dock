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
              <a href="https://vegam.co/oee" className="block body-sm text-muted-foreground hover:text-primary transition-colors">vMaxOEE</a>
              <a href="https://vegam.co/cms" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vCMS
              </a>
              <a href="https://vegam.co/vwms" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                vWMS
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="heading-sm text-foreground">Company</h3>
            <div className="space-y-2">
              <a href="https://vegam.co/about" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="https://vegam.co/partners" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Partners
              </a>
              <a href="https://vegam.co/partners/partnerconnect2025" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                PartnerConnect2025
              </a>
              <a href="https://vegam.co/brochure" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Brochure
              </a>
              <a href="https://vegam.co/quality-policy" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Quality Policy
              </a>
              <a href="https://vegam.co/information-security" className="block body-sm text-muted-foreground hover:text-primary transition-colors">
                Information Security
              </a>
            </div>
          </div>

          {/* Contact Info */}
          
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
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;