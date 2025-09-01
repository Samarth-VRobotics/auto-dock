import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
              <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="space-x-8">
                  {/* Solutions Navigation */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium relative group bg-transparent">
                      Solutions
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-80 bg-white border shadow-lg">
                      <div className="p-2">
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">vSFS</div>
                            <div className="text-sm text-muted-foreground">Smart Factory Suite</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">vMaxOEE</div>
                            <div className="text-sm text-muted-foreground">Overall Equipment Effectiveness</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">vCMS</div>
                            <div className="text-sm text-muted-foreground">Condition Monitoring System</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">vWMS</div>
                            <div className="text-sm text-muted-foreground">Warehouse Management System</div>
                          </div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#technology" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                      Technology
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  {/* Industries Navigation */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium relative group bg-transparent">
                      Industries
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64 bg-white border shadow-lg">
                      <div className="p-2">
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">Chemical</div>
                            <div className="text-sm text-muted-foreground">Chemical Processing</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">Steel</div>
                            <div className="text-sm text-muted-foreground">Steel Manufacturing</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">Discrete</div>
                            <div className="text-sm text-muted-foreground">Discrete Manufacturing</div>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block cursor-pointer hover:bg-slate-50 p-4 rounded-md">
                          <div>
                            <div className="font-semibold text-foreground">Pharma</div>
                            <div className="text-sm text-muted-foreground">Pharmaceutical</div>
                          </div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink href="#about" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                      About
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
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
              <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                About
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