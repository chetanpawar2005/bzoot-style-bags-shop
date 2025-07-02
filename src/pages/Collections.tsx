import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, SortAsc } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import bagCollection from '@/assets/bag-collection.jpg';

const Collections = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Executive Tote',
      price: '₹12,999',
      originalPrice: '₹15,999',
      image: bagCollection,
      description: 'Premium leather tote perfect for professionals',
      badge: 'Bestseller',
      category: 'totes'
    },
    {
      id: 2,
      name: 'Classic Crossbody',
      price: '₹8,999',
      originalPrice: '₹10,999',
      image: bagCollection,
      description: 'Versatile crossbody bag for everyday elegance',
      badge: 'New',
      category: 'crossbody'
    },
    {
      id: 3,
      name: 'Evening Clutch',
      price: '₹6,999',
      originalPrice: '₹8,999',
      image: bagCollection,
      description: 'Sophisticated clutch for special occasions',
      badge: 'Limited',
      category: 'clutches'
    },
    {
      id: 4,
      name: 'Business Briefcase',
      price: '₹18,999',
      originalPrice: '₹22,999',
      image: bagCollection,
      description: 'Professional briefcase for modern executives',
      badge: 'Premium',
      category: 'briefcases'
    },
    {
      id: 5,
      name: 'Travel Duffle',
      price: '₹16,999',
      originalPrice: '₹19,999',
      image: bagCollection,
      description: 'Spacious duffle bag for weekend getaways',
      badge: 'Popular',
      category: 'travel'
    },
    {
      id: 6,
      name: 'Mini Shoulder Bag',
      price: '₹7,999',
      originalPrice: '₹9,999',
      image: bagCollection,
      description: 'Compact shoulder bag for daily essentials',
      badge: 'Trending',
      category: 'shoulder'
    },
    {
      id: 7,
      name: 'Laptop Messenger',
      price: '₹14,999',
      originalPrice: '₹17,999',
      image: bagCollection,
      description: 'Protective messenger bag for laptops and documents',
      badge: 'Tech',
      category: 'messenger'
    },
    {
      id: 8,
      name: 'Designer Handbag',
      price: '₹24,999',
      originalPrice: '₹29,999',
      image: bagCollection,
      description: 'Exclusive designer handbag for special occasions',
      badge: 'Luxury',
      category: 'handbags'
    },
    {
      id: 9,
      name: 'Casual Backpack',
      price: '₹11,999',
      originalPrice: '₹13,999',
      image: bagCollection,
      description: 'Stylish backpack for casual outings',
      badge: 'Comfort',
      category: 'backpacks'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Bags' },
    { value: 'totes', label: 'Totes' },
    { value: 'crossbody', label: 'Crossbody' },
    { value: 'clutches', label: 'Clutches' },
    { value: 'briefcases', label: 'Briefcases' },
    { value: 'travel', label: 'Travel' },
    { value: 'shoulder', label: 'Shoulder' },
    { value: 'messenger', label: 'Messenger' },
    { value: 'handbags', label: 'Handbags' },
    { value: 'backpacks', label: 'Backpacks' }
  ];

  const filteredProducts = filterBy === 'all' 
    ? products 
    : products.filter(product => product.category === filterBy);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
    if (sortBy === 'price-high') return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0; // featured (default order)
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb & Header */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 heading-luxury">
                Our Complete Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-luxury">
                Explore our entire range of handcrafted leather bags, designed for every occasion and lifestyle.
              </p>
            </div>

            {/* Filter & Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <select 
                    value={filterBy} 
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <SortAsc className="h-5 w-5 text-muted-foreground" />
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground mb-8">
              Showing {sortedProducts.length} of {products.length} products
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="card-luxury product-hover overflow-hidden group animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm text-luxury">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-accent">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;