import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-primary">
          Dock<span className="text-secondary">Auto</span>
        </div>
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

      <Button variant="default" className="bg-primary hover:bg-primary/90">
        Book a Demo
      </Button>
    </nav>
  );
};

export default Navbar;