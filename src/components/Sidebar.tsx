import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Mail, Palette } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-theme2-sidebar border-r border-theme2-border backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8 group">
          <div className="w-10 h-10 bg-theme2-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Palette className="h-6 w-6 text-theme2-primary-fg" />
          </div>
          <span className="text-theme2-text font-serif text-xl font-semibold group-hover:text-theme2-primary transition-colors duration-300">
            Navigation
          </span>
        </div>
        
        <nav className="space-y-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'bg-theme2-primary text-theme2-primary-fg shadow-lg shadow-theme2-primary/25'
                    : 'text-theme2-muted hover:text-theme2-text hover:bg-theme2-accent hover:shadow-md hover:translate-x-1'
                }`}
              >
                <Icon className={`h-5 w-5 transition-transform duration-300 ${
                  !isActive(item.href) ? 'group-hover:scale-110' : ''
                }`} />
                <span className="group-hover:font-semibold transition-all duration-300">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;