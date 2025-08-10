import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Modern solar installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/lovable-uploads/20e1a766-295a-45ae-ba50-55edc7533695.png" alt="Radhya Rama Energy Solutions Logo" className="h-10 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Light up your life —{" "}
            <span className="bg-gradient-to-r from-primary-light to-yellow-400 bg-clip-text text-transparent">
              power it with solar
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Affordable. Sustainable. Powerful.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={() => scrollToSection("contact")} className="hero-btn group">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Shield className="w-6 h-6 text-primary-light" />
              <span className="font-medium">25 Year Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="font-medium">100% Clean Energy</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-medium">Zero Maintenance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>
    </section>;
};
export default HeroSection;