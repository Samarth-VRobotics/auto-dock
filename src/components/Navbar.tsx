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
              <a href="/" className="flex items-center">
                <img src="/lovable-uploads/714d52e8-240b-4dbc-a80b-4aeefd614424.png" alt="Vegam" className="h-14 transition-transform duration-200 hover:scale-105" />
              </a>
            </div>
            
            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {/* Solutions Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium relative group flex items-center gap-1 focus:outline-none">
                    Robotics Solutions
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 bg-white/95 backdrop-blur-lg border border-slate-200/50 shadow-xl rounded-xl p-2 z-50">
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10 rounded-lg p-4 transition-all duration-200 focus:bg-primary/10">
                      <a href="/autodock" className="block w-full group">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">AutoDock</div>
                            <div className="text-sm text-muted-foreground">Automated loading and unloading</div>
                          </div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10 rounded-lg p-4 transition-all duration-200 focus:bg-primary/10">
                      <a href="/asrs" className="block w-full group">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">ASRS</div>
                            <div className="text-sm text-muted-foreground">Automatic Storage and Retrieval System</div>
                          </div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10 rounded-lg p-4 transition-all duration-200 focus:bg-primary/10">
                      <a href="/amrs" className="block w-full group">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">AMRs</div>
                            <div className="text-sm text-muted-foreground">Autonomous Mobile Robots</div>
                          </div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <a href="/our-team" className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  Robotics Team
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
              {/* Mobile Robotics Solutions */}
              <div className="space-y-2">
                <div className="font-medium text-foreground py-2">Robotics Solutions</div>
                <div className="pl-4 space-y-2">
                  <a href="/autodock" className="block py-2 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <div className="font-medium">AutoDock</div>
                        <div className="text-xs text-muted-foreground">Automated loading and unloading</div>
                      </div>
                    </div>
                  </a>
                  <a href="/asrs" className="block py-2 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <div className="font-medium">ASRS</div>
                        <div className="text-xs text-muted-foreground">Automatic Storage and Retrieval System</div>
                      </div>
                    </div>
                  </a>
                  <a href="/amrs" className="block py-2 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <div className="font-medium">AMRs</div>
                        <div className="text-xs text-muted-foreground">Autonomous Mobile Robots</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              
              <a href="/our-team" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
                Robotics Team
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