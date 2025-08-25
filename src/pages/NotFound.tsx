import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background hero-gradient">
      <Card className="card-gradient shadow-large border-0 max-w-lg mx-auto m-6">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <div className="text-8xl font-bold text-accent mb-4">404</div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
            <p className="text-muted-foreground">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="shadow-medium glow-on-hover">
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="shadow-medium glow-on-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
