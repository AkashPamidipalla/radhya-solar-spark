import { useEffect } from "react";
import FloatingNavigation from "@/components/FloatingNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyCtaButton from "@/components/StickyCtaButton";

const Index = () => {
  useEffect(() => {
    // Add scroll animation effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll(".fade-in-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SavingsCalculator />
      <ContactSection />
      <Footer />
      <StickyCtaButton />
    </div>
  );
};

export default Index;
