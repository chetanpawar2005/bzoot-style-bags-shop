import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Shield, Truck } from 'lucide-react';
import craftsmanshipImage from '@/assets/craftsmanship.jpg';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Craftsmanship',
      description: 'Each bag is meticulously handcrafted by skilled artisans using traditional techniques.'
    },
    {
      icon: Shield,
      title: 'Lifetime Quality',
      description: 'We use only the finest materials to ensure your bag stands the test of time.'
    },
    {
      icon: Heart,
      title: 'Sustainable Luxury',
      description: 'Ethically sourced materials and environmentally conscious production methods.'
    },
    {
      icon: Truck,
      title: 'Global Delivery',
      description: 'Free worldwide shipping with secure packaging for your precious purchase.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 heading-luxury">
              Luxury in Every Stitch
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-luxury leading-relaxed">
              At BZoot Inn, we believe that a bag is more than just an accessory—it's a statement of your 
              refined taste and appreciation for quality. Our master craftsmen pour decades of experience 
              into every piece, creating bags that are not just beautiful, but built to last generations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-luxury leading-relaxed">
              From the selection of the finest leather to the final hand-stitched details, every step 
              of our process is guided by an unwavering commitment to excellence. When you choose BZoot Inn, 
              you're choosing a legacy of luxury.
            </p>
            <Button size="lg" className="btn-luxury">
              Discover Our Story
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img 
                src={craftsmanshipImage} 
                alt="Leather craftsmanship"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-luxury text-center group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-luxury">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;