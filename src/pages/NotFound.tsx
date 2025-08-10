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
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold mb-4 text-foreground">404</h1>
        <p className="text-lg text-muted-foreground mb-4">¡Ups! Página no encontrada</p>
        <a href="/" className="story-link text-primary">Volver al inicio</a>
      </div>
    </div>
  );
};

export default NotFound;
