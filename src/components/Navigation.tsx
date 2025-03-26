
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Map, Compass, Calendar, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ease-in-out",
        scrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-subtle" : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Map className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">TravelMate AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/explore" icon={<Compass className="h-4 w-4" />} label="Explore" />
          <NavLink to="/planner" icon={<Calendar className="h-4 w-4" />} label="Planner" />
          <NavLink to="/discover" icon={<Search className="h-4 w-4" />} label="Discover" />
          <NavLink to="/profile" icon={<User className="h-4 w-4" />} label="Profile" />
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="px-4 h-9">
            Log in
          </Button>
          <Button className="px-4 h-9">
            Try Free
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg animate-slide-down border-b border-border">
          <div className="flex flex-col p-6 space-y-4">
            <MobileNavLink to="/explore" icon={<Compass className="h-5 w-5" />} label="Explore" />
            <MobileNavLink to="/planner" icon={<Calendar className="h-5 w-5" />} label="Planner" />
            <MobileNavLink to="/discover" icon={<Search className="h-5 w-5" />} label="Discover" />
            <MobileNavLink to="/profile" icon={<User className="h-5 w-5" />} label="Profile" />
            
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center">
                Try Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-3 text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
    >
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
