import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="bg-card rounded-xl p-8 shadow-elegant border border-border/50">
          {/* 404 Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-primary" />
          </div>
          
          {/* Error Code */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="text-2xl font-semibold text-card-foreground mb-2">
            Page introuvable
          </h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Page précédente
            </Button>
          </div>
          
          {/* Path info */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Chemin demandé: <code className="bg-muted px-2 py-1 rounded text-primary">{location.pathname}</code>
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
