import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import bagCollection from '@/assets/bag-collection.jpg';

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: 'Executive Tote',
      price: '₹12,999',
      originalPrice: '₹15,999',
      image: bagCollection,
      description: 'Premium leather tote perfect for professionals',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Classic Crossbody',
      price: '₹8,999',
      originalPrice: '₹10,999',
      image: bagCollection,
      description: 'Versatile crossbody bag for everyday elegance',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Evening Clutch',
      price: '₹6,999',
      originalPrice: '₹8,999',
      image: bagCollection,
      description: 'Sophisticated clutch for special occasions',
      badge: 'Limited'
    }
  ];

  return (
    <section id="collections" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 heading-luxury">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-luxury">
            Discover our carefully curated selection of premium leather bags, 
            each piece crafted with meticulous attention to detail.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="card-luxury product-hover overflow-hidden group"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-luxury">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-accent">
                      {product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                <Button className="w-full btn-luxury">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="btn-outline-luxury">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;