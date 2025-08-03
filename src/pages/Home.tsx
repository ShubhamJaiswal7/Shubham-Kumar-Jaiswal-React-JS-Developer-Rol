import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading, error } = useProducts();
  const [showAllProducts, setShowAllProducts] = useState(false);

  const getHeroClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border text-center py-16 px-6';
      case '3':
        return 'bg-theme3-gradient text-center py-20 px-6 text-white';
      default:
        return 'bg-gradient-to-b from-background to-secondary/20 text-center py-16 px-6';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-4xl md:text-6xl font-serif font-bold text-theme2-text mb-6';
      case '3':
        return 'text-4xl md:text-6xl font-display text-white mb-6';
      default:
        return 'text-4xl md:text-5xl font-sans font-bold text-foreground mb-6';
    }
  };

  const getButtonVariant = () => {
    switch (currentTheme) {
      case '3':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const displayProducts = showAllProducts ? products : products.slice(0, currentTheme === '3' ? 8 : 6);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className={`relative w-16 h-16 mx-auto mb-6 ${
              currentTheme === '3' ? 'animate-pulse' : ''
            }`}>
              <div className={`animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary ${
                currentTheme === '2' ? 'border-theme2-primary/20 border-t-theme2-primary' :
                currentTheme === '3' ? 'border-theme3-primary/20 border-t-theme3-primary glow-effect' :
                'glow-effect'
              }`}></div>
              {currentTheme === '3' && (
                <div className="absolute inset-2 animate-spin rounded-full border-2 border-theme3-secondary/30 border-t-theme3-secondary [animation-direction:reverse] [animation-duration:1.5s]"></div>
              )}
            </div>
            <p className={`text-lg font-medium ${
              currentTheme === '2' ? 'text-theme2-text' :
              currentTheme === '3' ? 'text-theme3-text' :
              'text-foreground'
            }`}>Loading amazing products...</p>
            <p className="text-muted-foreground text-sm mt-2">Preparing something beautiful for you</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-destructive mb-4">Error: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <div className="max-w-4xl mx-auto">
          <h1 className={getTitleClasses()}>
            Welcome to ThemeFlex
          </h1>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            currentTheme === '3' ? 'text-white/90' : 'text-muted-foreground'
          }`}>
            Experience the power of dynamic theming with our beautiful product showcase. 
            Switch between themes to see how design transforms experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" className="group">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {currentTheme === '3' && (
              <Button size="lg" variant="outline" className="group border-white/20 text-black hover:bg-white/10 hover:border-white/40">
                <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Get Creative
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`container mx-auto px-4 py-16 ${
        currentTheme === '2' ? 'bg-theme2-surface' : ''
      }`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            currentTheme === '2' ? 'text-theme2-text font-serif' :
            currentTheme === '3' ? 'text-theme3-text font-display' :
            'text-foreground'
          }`}>
            Featured Products
          </h2>
          <p className={`max-w-2xl mx-auto ${
            currentTheme === '2' ? 'text-theme2-text' : 'text-muted-foreground'
          }`}>
            Discover our curated collection of amazing products, 
            each one carefully selected for quality and style.
          </p>
        </div>

        {currentTheme === '3' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-theme3-card border border-theme3-border hover:shadow-xl hover:shadow-theme3-primary/20 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-theme3-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <Sparkles className="h-8 w-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="font-semibold text-theme3-text mb-3 text-lg">Creative Design</h3>
              <p className="text-theme3-muted text-sm leading-relaxed">Beautiful, inspiring designs that spark creativity and imagination</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-theme3-card border border-theme3-border hover:shadow-xl hover:shadow-theme3-secondary/20 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-r from-theme3-secondary to-theme3-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <Zap className="h-8 w-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="font-semibold text-theme3-text mb-3 text-lg">Fast & Responsive</h3>
              <p className="text-theme3-muted text-sm leading-relaxed">Lightning-fast performance on all devices and screen sizes</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-theme3-card border border-theme3-border hover:shadow-xl hover:shadow-theme3-success/20 transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-r from-theme3-success to-theme3-success/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <ArrowRight className="h-8 w-8 text-white group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-theme3-text mb-3 text-lg">Easy to Use</h3>
              <p className="text-theme3-muted text-sm leading-relaxed">Intuitive interface that anyone can master in minutes</p>
            </div>
          </div>
        )}

        <ProductGrid products={displayProducts} />

        {products.length > (currentTheme === '3' ? 8 : 6) && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="group"
            >
              {showAllProducts ? 'Show Less' : 'View All Products'}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAllProducts ? 'rotate-90' : ''}`} />
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;