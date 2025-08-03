import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../hooks/useProducts';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const getCardClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border hover:border-theme2-primary transition-all duration-500 rounded-lg hover:shadow-xl hover:shadow-theme2-primary/20 hover:-translate-y-2';
      case '3':
        return 'bg-theme3-card border-theme3-border hover:shadow-2xl hover:shadow-theme3-primary/30 hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden group';
      default:
        return 'bg-card border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-lg hover:-translate-y-1 group';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text font-serif font-semibold';
      case '3':
        return 'text-theme3-text font-sans font-semibold';
      default:
        return 'text-foreground font-sans font-medium';
    }
  };

  const getPriceClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-primary font-bold text-xl';
      case '3':
        return 'text-theme3-primary font-bold text-xl';
      default:
        return 'text-primary font-semibold text-lg';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <div className={`border p-6 ${getCardClasses()}`}>
      <div className={`aspect-square mb-4 overflow-hidden rounded-lg relative ${
        currentTheme === '3' ? 'group-hover:shadow-lg group-hover:shadow-theme3-primary/20' : ''
      }`}>
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-contain transition-all duration-500 ${
            currentTheme === '2' ? 'hover:scale-110 hover:rotate-1' :
            currentTheme === '3' ? 'group-hover:scale-125 group-hover:brightness-110' :
            'hover:scale-110'
          }`}
        />
        {currentTheme === '3' && (
          <div className="absolute inset-0 bg-gradient-to-t from-theme3-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>
      
      <div className="space-y-3">
        <h3 className={`text-lg line-clamp-2 transition-colors duration-300 ${getTitleClasses()} ${
          currentTheme === '3' ? 'group-hover:gradient-text' : ''
        }`}>
          {product.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 transition-colors duration-300">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating.count} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={getPriceClasses()}>
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;