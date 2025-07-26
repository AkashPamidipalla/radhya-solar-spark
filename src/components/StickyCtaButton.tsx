import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={scrollToContact}
        className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-full shadow-strong hover:shadow-xl transition-all duration-300 hover:scale-105"
        size="lg"
      >
        <Phone className="w-5 h-5 mr-2" />
        Get Free Quote
      </Button>
    </div>
  );
};

export default StickyCtaButton;