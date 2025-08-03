import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const getTitleClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-6xl md:text-8xl font-serif font-bold text-theme2-text mb-4';
      case '3':
        return 'text-6xl md:text-8xl font-display text-theme3-primary mb-4';
      default:
        return 'text-6xl md:text-8xl font-sans font-bold text-foreground mb-4';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className={getTitleClasses()}>
          404
        </h1>
        <h2 className={`text-2xl font-semibold mb-4 ${
          currentTheme === '2' ? 'text-theme2-text font-serif' :
          currentTheme === '3' ? 'text-theme3-text font-display' :
          'text-foreground'
        }`}>
          Oops! Page not found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
