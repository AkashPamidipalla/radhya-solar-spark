import { Award, Users, Wrench, Heart } from "lucide-react";
const AboutSection = () => {
  return <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Radhya Rama Energy Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're committed to bringing clean, affordable solar energy to homes and businesses across 
            Andhra Pradesh and Telangana. With cutting-edge technology and exceptional customer service, 
            we make the transition to solar simple and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quality First</h3>
            <p className="text-muted-foreground text-sm">
              Premium solar panels with 25-year warranties and industry-leading efficiency ratings.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Expert Team</h3>
            <p className="text-muted-foreground text-sm">
              Certified professionals with years of experience in solar installation and maintenance.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Full Support</h3>
            <p className="text-muted-foreground text-sm">
              Complete maintenance and support services to keep your system running at peak performance.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Customer Care</h3>
            <p className="text-muted-foreground text-sm">
              Dedicated to your satisfaction with personalized service and ongoing support.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        
      </div>
    </section>;
};
export default AboutSection;