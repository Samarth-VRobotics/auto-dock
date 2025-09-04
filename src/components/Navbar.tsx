import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };
  return <>
      {/* Professional accent line */}
      <div className="w-full h-1 bg-gradient-primary"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center">
                <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-14 transition-transform duration-200 hover:scale-105" />
              </a>
            </div>
            
            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation - Jump Nav */}
              <div className="hidden xl:flex items-center space-x-6">
                <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Hero
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('future-manufacturing')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Future of Manufacturing
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('industry-evolution')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Industry Evolution
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('key-technologies')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Key Technologies
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('vegam-journey')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Vegam Journey
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('global-partnerships')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Partnerships
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('offerings')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Offerings
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('automation-portfolio')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Automation Portfolio
                </button>
                <span className="text-muted-foreground">•</span>
                <button onClick={() => scrollToSection('why-vegam')} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                  Why Vegam
                </button>
              </div>
              
              <ContactDialog>
                <Button className="hidden sm:flex bg-gradient-primary hover:shadow-glow text-white font-semibold px-6 py-2 transition-all duration-200 hover:scale-105">
                  Contact Us
                </Button>
              </ContactDialog>
              
              {/* Mobile menu button */}
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Hero
              </button>
              <button onClick={() => scrollToSection('future-manufacturing')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Future of Manufacturing
              </button>
              <button onClick={() => scrollToSection('industry-evolution')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Industry Evolution
              </button>
              <button onClick={() => scrollToSection('key-technologies')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Key Technologies
              </button>
              <button onClick={() => scrollToSection('vegam-journey')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Vegam Journey
              </button>
              <button onClick={() => scrollToSection('global-partnerships')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Partnerships
              </button>
              <button onClick={() => scrollToSection('offerings')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Offerings
              </button>
              <button onClick={() => scrollToSection('automation-portfolio')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Automation Portfolio
              </button>
              <button onClick={() => scrollToSection('why-vegam')} className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-left w-full">
                Why Vegam
              </button>
              <ContactDialog>
                <Button className="w-full mt-4 bg-gradient-primary hover:shadow-glow text-white font-semibold">
                  Contact Us
                </Button>
              </ContactDialog>
            </div>
          </div>}
      </nav>
    </>;
};
export default Navbar;