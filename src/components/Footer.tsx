import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Collections': [
      'Tote Bags',
      'Crossbody Bags',
      'Evening Clutches',
      'Business Bags',
      'Travel Collection'
    ],
    'Customer Care': [
      'Size Guide',
      'Care Instructions',
      'Shipping Info',
      'Returns & Exchanges',
      'FAQ'
    ],
    'Company': [
      'About Us',
      'Our Story',
      'Careers',
      'Press',
      'Contact'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif font-bold mb-4 text-accent">
                BZoot Inn
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Crafting luxury leather bags with uncompromising quality and timeless elegance. 
                Each piece tells a story of artisan excellence and sophisticated design.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent">
                  Stay Updated
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  Subscribe to receive exclusive offers and new collection updates.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <Button 
                    variant="secondary" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-accent">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/70 text-sm">
              © 2024 BZoot Inn. All rights reserved. Crafted with excellence.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/70 text-sm mr-2">
                Follow us:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;