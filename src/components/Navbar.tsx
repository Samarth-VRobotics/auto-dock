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
  return <>
      {/* Professional accent line */}
      <div className="w-full h-1 bg-gradient-primary"></div>
      
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-8">
              <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-14 transition-transform duration-200 hover:scale-105" />
              
              
            </div>
            
            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {/* Solutions Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium relative group flex items-center gap-1">
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 bg-white">
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <div className="block w-full">
                        <div className="font-semibold text-foreground">AMRs</div>
                        <div className="text-sm text-muted-foreground">Autonomous Mobile Robots</div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <div className="block w-full">
                        <div className="font-semibold text-foreground">ASRS</div>
                        <div className="text-sm text-muted-foreground">Automatic Storage and Retrieval System</div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <a href="/our-team" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  Our Team
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </a>
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
              <a href="#solutions" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#technology" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Technology
              </a>
              <a href="#industries" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Industries
              </a>
              <a href="https://vegam.co/about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#our-journey" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Our Journey
              </a>
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