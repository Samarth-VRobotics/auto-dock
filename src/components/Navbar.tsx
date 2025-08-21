import { Button } from "@/components/ui/button";
const Navbar = () => {
  return <>
      {/* Red line at the top */}
      <div className="w-full h-1 bg-destructive"></div>
      
      <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
        <div className="flex items-center space-x-6">
          {/* Vegam Logo */}
          <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-10" />
          
          {/* DockAuto branding */}
          
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#technology" className="text-foreground hover:text-primary transition-colors">
            Technology
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <Button variant="default" className="bg-primary hover:bg-primary/90">Contact sales</Button>
      </nav>
    </>;
};
export default Navbar;