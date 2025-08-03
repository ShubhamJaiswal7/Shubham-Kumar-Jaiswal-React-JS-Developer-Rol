import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Palette } from 'lucide-react';
import { useTheme, themes, ThemeType } from '../contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { currentTheme, setTheme, themeConfig } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const getHeaderClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border';
      case '3':
        return 'bg-theme3-surface border-theme3-border shadow-lg';
      default:
        return 'bg-card border-border shadow-sm';
    }
  };

  const getLogoClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text font-serif text-2xl font-bold';
      case '3':
        return 'text-theme3-primary font-display text-2xl';
      default:
        return 'text-primary font-sans text-2xl font-semibold';
    }
  };

  const getNavClasses = (active: boolean) => {
    const base = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
    switch (currentTheme) {
      case '2':
        return `${base} ${active 
          ? 'bg-theme2-primary text-theme2-primary-fg' 
          : 'text-theme2-muted hover:text-theme2-text hover:bg-theme2-accent'
        }`;
      case '3':
        return `${base} ${active 
          ? 'bg-theme3-primary text-white' 
          : 'text-theme3-muted hover:text-theme3-text hover:bg-theme3-accent'
        }`;
      default:
        return `${base} ${active 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
        }`;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b ${getHeaderClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={getLogoClasses()}>
            ThemeFlex
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={getNavClasses(isActive(item.href))}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className={`gap-2 transition-all duration-300 hover:scale-105 ${
                  currentTheme === '2' 
                    ? 'border-theme2-border bg-theme2-surface hover:bg-theme2-accent text-theme2-text' 
                    : currentTheme === '3'
                    ? 'border-theme3-border bg-theme3-surface hover:bg-theme3-accent text-theme3-text shadow-lg'
                    : 'hover:shadow-md'
                }`}
              >
                <Palette className="h-4 w-4" />
                {themeConfig.name}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className={`w-48 ${
                currentTheme === '2' 
                  ? 'bg-white border-gray-200 text-black shadow-xl' 
                  : currentTheme === '3'
                  ? 'bg-white border-theme3-border shadow-xl'
                  : 'shadow-lg'
              }`}
            >
              {Object.values(themes).map((theme) => (
                <DropdownMenuItem
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`transition-colors duration-200 cursor-pointer ${
                    currentTheme === theme.id 
                      ? currentTheme === '2'
                        ? 'bg-blue-50 text-blue-900 font-medium'
                        : 'bg-secondary text-foreground font-medium' 
                      : currentTheme === '2'
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'hover:bg-secondary/80'
                  }`}
                >
                  <div>
                    <div className="font-medium">{theme.name}</div>
                    <div className={`text-sm ${
                      currentTheme === '2' ? 'text-gray-500' : 'text-muted-foreground'
                    }`}>
                      {theme.description}
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Navigation */}
          <nav className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Menu
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;