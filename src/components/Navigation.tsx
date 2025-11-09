import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Activity, User, TrendingUp, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

export function Navigation() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close sheet when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location, isMobile]);

  const NavItems = () => (
    <>
      <Button
        variant={isActive("/") ? "default" : "ghost"}
        size="sm"
        asChild
        className="w-full justify-start"
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
        className="w-full justify-start"
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
        className="w-full justify-start"
      >
        <Link to="/progress">
          <TrendingUp className="mr-2 h-4 w-4" />
          Progress
        </Link>
      </Button>
      <Button
        variant={isActive("/about") ? "default" : "ghost"}
        size="sm"
        asChild
        className="w-full justify-start"
      >
        <Link to="/about">
          <User className="mr-2 h-4 w-4" />
          About
        </Link>
      </Button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">CalmSpace</span>
          </Link>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-6">
                <div className="flex flex-col gap-4 mt-8">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-2">
              <NavItems />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
