import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? "glass-nav" : "bg-white/60 backdrop-blur-md"
    } rounded-full px-6 py-3 shadow-lg w-11/12 max-w-6xl`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src="/lovable-uploads/8ec96560-b1d0-4527-93dc-bba15dbe23c0.png" 
              alt="Radhya Rama Energy Logo"
              className="h-10 w-auto transition-all duration-300 hover:drop-shadow-lg"
            />
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Radhya Rama Energy
            </span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("calculator")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Calculator
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Contact
          </button>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            Get Free Quote
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 py-4">
          <div className="flex flex-col space-y-2 px-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("calculator")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingNavigation;