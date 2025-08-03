# Theme Flex - React TypeScript Theme Switcher

A modern React application built with TypeScript that demonstrates dynamic theme switching with three distinct visual themes. The app features a responsive design, product catalog integration, and smooth theme transitions.

## 🎨 Features

### Theme System
- **Three Distinct Themes**:
  - **Theme 1 (Minimalist)**: Clean, light design with sans-serif fonts
  - **Theme 2 (Professional)**: Dark mode with sidebar layout and bold serif fonts
  - **Theme 3 (Creative)**: Colorful card-based grid layout with Google Font "Pacifico"
- **Persistent Theme Storage**: Theme selection saved in localStorage
- **Smooth Animations**: Subtle fade transitions when switching themes
- **Dynamic Layout Changes**: Each theme affects layout, fonts, spacing, and component structure

### Core Functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Catalog**: Integration with FakeStore API for dynamic content
- **Routing**: React Router with Home, About, and Contact pages
- **TypeScript**: Full type safety throughout the application
- **Modern UI Components**: Built with shadcn/ui components

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd folio-theme-flex
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Fixed header with theme selector
│   ├── Layout.tsx      # Main layout wrapper
│   ├── ProductCard.tsx # Product display component
│   ├── ProductGrid.tsx # Product grid layout
│   └── Sidebar.tsx     # Sidebar for Theme 2
├── contexts/           # React Context providers
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection hook
│   ├── use-toast.ts    # Toast notification hook
│   └── useProducts.ts  # Product data fetching hook
├── pages/              # Route components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎯 Theme System Architecture

### Theme Context (`src/contexts/ThemeContext.tsx`)
The theme system is built around React Context API with the following features:

- **Theme Types**: Three distinct themes (1, 2, 3) with different visual characteristics
- **LocalStorage Persistence**: Theme selection persists across browser sessions
- **Dynamic Class Application**: Themes are applied via CSS classes on the body element
- **Smooth Transitions**: CSS animations for theme switching

### Theme Configurations

```typescript
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
```

## 🎨 Theme Details

### Theme 1: Minimalist
- **Layout**: Standard centered layout
- **Colors**: Light background with subtle shadows
- **Typography**: Clean sans-serif fonts
- **Spacing**: Generous whitespace
- **Components**: Simple cards and buttons

### Theme 2: Professional
- **Layout**: Dark sidebar layout
- **Colors**: Dark background with accent colors
- **Typography**: Bold serif fonts for headings
- **Spacing**: Compact, professional spacing
- **Components**: Sidebar navigation with main content area

### Theme 3: Creative
- **Layout**: Colorful card-based grid
- **Colors**: Vibrant, playful color palette
- **Typography**: Google Font "Pacifico" for headings
- **Spacing**: Dynamic, varied spacing
- **Components**: Colorful cards with gradients

## 🔧 Customization

### Adding New Themes
1. Update the `ThemeType` union type in `ThemeContext.tsx`
2. Add new theme configuration to the `themes` object
3. Create corresponding CSS classes in your stylesheet
4. Update the theme selector component

### Modifying Existing Themes
- Edit theme configurations in `src/contexts/ThemeContext.tsx`
- Update CSS classes in `src/index.css`
- Modify component layouts in respective theme-specific components

## 📱 Responsive Design

The application is built with a mobile-first approach using Tailwind CSS:

- **Mobile**: Single column layout with stacked components
- **Tablet**: Two-column grid for product displays
- **Desktop**: Full sidebar layout for Theme 2, multi-column grids for others

## 🔌 API Integration

The app integrates with [FakeStore API](https://fakestoreapi.com/products) to display product data:

- **Data Fetching**: Custom `useProducts` hook with React Query
- **Error Handling**: Graceful fallbacks for API failures
- **Loading States**: Skeleton loaders during data fetching
- **Caching**: React Query provides automatic caching and background updates

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Animations**: Tailwind CSS animations



### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy


### Performance Tips

- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use React Query's caching effectively


**Built with ❤️ using React, TypeScript, and Tailwind CSS**
