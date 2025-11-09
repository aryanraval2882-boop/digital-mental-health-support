import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Activity, TrendingUp } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">CalmSpace</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button
              variant={isActive("/techniques") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/techniques">
                <BookOpen className="mr-2 h-4 w-4" />
                Techniques
              </Link>
            </Button>
            <Button
              variant={isActive("/progress") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/progress">
                <TrendingUp className="mr-2 h-4 w-4" />
                Progress
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
