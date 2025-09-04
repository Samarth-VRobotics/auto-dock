import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-md mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary animate-bounce-subtle">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <p className="text-base md:text-lg text-muted-foreground/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
