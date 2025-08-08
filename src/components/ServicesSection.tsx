import { Home, Building, Droplets, Lightbulb, Wrench } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete solar solutions for homes with rooftop installations, grid-tied systems, and battery backup options.",
      features: ["Rooftop Installation", "Net Metering", "Battery Backup", "Monitoring System"]
    },
    {
      icon: Building,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses, industries, and commercial properties to reduce operational costs.",
      features: ["Industrial Scale", "Cost Reduction", "Tax Benefits", "ROI Analysis"]
    },
    {
      icon: Lightbulb,
      title: "Solar Street Lighting",
      description: "Autonomous solar-powered street lighting solutions for roads, parks, and public spaces.",
      features: ["Auto On/Off", "Weather Resistant", "Long Battery Life", "Smart Controls"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services to ensure optimal performance and longevity of your solar systems.",
      features: ["Regular Cleaning", "Performance Monitoring", "Repair Services", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Solar Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential rooftops to large commercial installations, we provide 
            comprehensive solar energy solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 shadow-medium group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Go Solar?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Get a customized solar solution designed specifically for your energy needs and budget.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;