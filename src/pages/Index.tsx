import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
