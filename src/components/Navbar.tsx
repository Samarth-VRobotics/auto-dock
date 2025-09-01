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
                      <a href="https://vegam.co/sfs" className="block w-full">
                        <div className="font-semibold text-foreground">vSFS</div>
                        <div className="text-sm text-muted-foreground">Smart Factory Suite</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/oee" className="block w-full">
                        <div className="font-semibold text-foreground">vMaxOEE</div>
                        <div className="text-sm text-muted-foreground">Overall Equipment Effectiveness</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/cms" className="block w-full">
                        <div className="font-semibold text-foreground">vCMS</div>
                        <div className="text-sm text-muted-foreground">Condition Monitoring System</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/vwms" className="block w-full">
                        <div className="font-semibold text-foreground">vWMS</div>
                        <div className="text-sm text-muted-foreground">Warehouse Management System</div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <a href="#technology" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  Technology
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </a>
                
                {/* Industries Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium relative group flex items-center gap-1">
                    Industries
                    <ChevronDown className="h-4 w-4" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white">
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/chemical" className="block w-full">
                        <div className="font-semibold text-foreground">Chemical</div>
                        <div className="text-sm text-muted-foreground">Chemical Processing</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/steel" className="block w-full">
                        <div className="font-semibold text-foreground">Steel</div>
                        <div className="text-sm text-muted-foreground">Steel Manufacturing</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/discrete" className="block w-full">
                        <div className="font-semibold text-foreground">Discrete</div>
                        <div className="text-sm text-muted-foreground">Discrete Manufacturing</div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-primary/10 p-4">
                      <a href="https://vegam.co/pharma" className="block w-full">
                        <div className="font-semibold text-foreground">Pharma</div>
                        <div className="text-sm text-muted-foreground">Pharmaceutical</div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <a href="https://vegam.co/about" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </a>
                
                <a href="#our-journey" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  Our Journey
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