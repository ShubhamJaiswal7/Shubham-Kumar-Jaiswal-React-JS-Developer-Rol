import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Theme System for Folio Theme Flex
 * 
 * This context provides theme management functionality with three distinct themes:
 * - Theme 1: Minimalist design with light colors and clean typography
 * - Theme 2: Professional dark mode with sidebar layout
 * - Theme 3: Creative colorful design with card-based grid layout
 * 
 * Features:
 * - Persistent theme storage in localStorage
 * - Smooth theme transitions with CSS animations
 * - Dynamic layout changes based on theme selection
 * - Type-safe theme configuration
 */

export type ThemeType = '1' | '2' | '3';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  description: string;
  layoutType: 'default' | 'sidebar' | 'grid';
}

/**
 * Theme configurations for each available theme
 * Each theme defines its visual characteristics and layout behavior
 */
export const themes: Record<ThemeType, ThemeConfig> = {
  '1': {
    id: '1',
    name: 'Minimalist',
    description: 'Clean and simple design',
    layoutType: 'default'
  },
  '2': {
    id: '2',
    name: 'Professional',
    description: 'Dark mode with sidebar',
    layoutType: 'sidebar'
  },
  '3': {
    id: '3',
    name: 'Creative',
    description: 'Colorful and playful',
    layoutType: 'grid'
  }
};

/**
 * Theme context interface defining the shape of theme-related data and functions
 */
interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themeConfig: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook to access theme context
 * @returns ThemeContextType - Current theme state and theme management functions
 * @throws Error if used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider component that manages theme state and provides theme context
 * 
 * Responsibilities:
 * - Initialize theme from localStorage on mount
 * - Apply theme classes to document body
 * - Handle theme transitions with animations
 * - Persist theme selection to localStorage
 * 
 * @param children - React components that will have access to theme context
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize with default theme (Theme 2 - Professional Dark)
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('2');

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeflex-theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Apply theme changes to DOM and localStorage
  useEffect(() => {
    // Remove existing theme classes and add new theme class
    document.body.className = document.body.className.replace(/theme-[1-3]/g, '');
    document.body.classList.add(`theme-${currentTheme}`, 'theme-fade-in');
    
    // Persist theme selection to localStorage
    localStorage.setItem('themeflex-theme', currentTheme);

    // Remove animation class after transition completes (400ms)
    const timer = setTimeout(() => {
      document.body.classList.remove('theme-fade-in');
    }, 400);

    return () => clearTimeout(timer);
  }, [currentTheme]);

  /**
   * Function to change the current theme
   * @param theme - The new theme to apply
   */
  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  // Get current theme configuration
  const themeConfig = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        themeConfig
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};