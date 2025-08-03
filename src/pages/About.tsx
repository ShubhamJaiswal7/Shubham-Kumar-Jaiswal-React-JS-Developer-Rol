import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading } = useProducts();

  const getHeroClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border py-16 px-6';
      case '3':
        return 'bg-theme3-gradient py-20 px-6 text-white';
      default:
        return 'bg-gradient-to-b from-background to-secondary/20 py-16 px-6';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-3xl md:text-4xl font-serif font-bold text-theme2-text mb-6';
      case '3':
        return 'text-3xl md:text-4xl font-display text-white mb-6';
      default:
        return 'text-3xl md:text-4xl font-sans font-bold text-foreground mb-6';
    }
  };

  const getStatsClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border';
      case '3':
        return 'bg-theme3-card border-theme3-border';
      default:
        return 'bg-card border-border';
    }
  };

  const getSectionClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface';
      case '3':
        return 'bg-theme3-bg';
      default:
        return 'bg-secondary/20';
    }
  };

  const getTextClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text';
      case '3':
        return 'text-theme3-text';
      default:
        return 'text-foreground';
    }
  };

  const getMutedTextClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text';
      case '3':
        return 'text-theme3-muted';
      default:
        return 'text-muted-foreground';
    }
  };

  const featuredProducts = products.slice(0, 4);

  const stats = [
    { label: 'Happy Customers', value: '10K+', icon: Users },
    { label: 'Products Sold', value: '50K+', icon: Target },
    { label: 'Reviews', value: '4.9/5', icon: Heart },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={getTitleClasses()}>
              About ThemeFlex
            </h1>
            <p className={`text-lg ${getMutedTextClasses()} mb-8 max-w-2xl mx-auto leading-relaxed`}>
              We're passionate about creating beautiful, functional products that enhance your daily life. 
              Our team combines innovation with craftsmanship to deliver exceptional experiences.
            </p>
            <Button size="lg" className="mb-16">
              Learn More About Our Mission
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center p-6 rounded-lg border ${getStatsClasses()}`}>
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    currentTheme === '2' ? 'bg-theme2-primary' :
                    currentTheme === '3' ? 'bg-theme3-primary' :
                    'bg-primary'
                  }`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${getTextClasses()}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${getMutedTextClasses()}`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-16 ${getSectionClasses()}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${getTextClasses()} ${
              currentTheme === '2' ? 'font-serif' :
              currentTheme === '3' ? 'font-display' :
              ''
            }`}>
              Our Story
            </h2>
            <div className={`prose prose-lg mx-auto ${getMutedTextClasses()}`}>
              <p className="mb-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {!loading && featuredProducts.length > 0 && (
        <section className={`container mx-auto px-4 py-16 ${
          currentTheme === '2' ? 'bg-theme2-surface' : ''
        }`}>
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${getTextClasses()} ${
              currentTheme === '2' ? 'font-serif' :
              currentTheme === '3' ? 'font-display' :
              ''
            }`}>
              Customer Favorites
            </h2>
            <p className={`${getMutedTextClasses()} max-w-2xl mx-auto`}>
              See what our customers love most. These top-rated products showcase 
              the quality and design excellence we're known for.
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
      )}
    </div>
  );
};

export default About;