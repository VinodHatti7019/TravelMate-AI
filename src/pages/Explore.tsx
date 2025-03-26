
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Search, MapPin, Calendar, User, ChevronDown, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Explore = () => {
  // Smooth scrolling for page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Sample destinations data
  const destinations = [
    {
      id: 1,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Experience the perfect blend of traditional culture and cutting-edge technology.",
      rating: 4.9,
      reviews: 2845,
      aiRecommended: true,
      category: "Urban Exploration"
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Stunning sunsets, white-washed buildings, and crystal clear waters await.",
      rating: 4.8,
      reviews: 1986,
      aiRecommended: true,
      category: "Island Paradise"
    },
    {
      id: 3,
      name: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Architectural marvels, vibrant street life, and exceptional cuisine.",
      rating: 4.7,
      reviews: 2156,
      aiRecommended: false,
      category: "Cultural Hub"
    },
    {
      id: 4,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Ancient temples, traditional tea houses, and serene gardens.",
      rating: 4.8,
      reviews: 1785,
      aiRecommended: true,
      category: "Historical"
    },
    {
      id: 5,
      name: "New York City, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "The city that never sleeps offers endless entertainment and culture.",
      rating: 4.6,
      reviews: 3245,
      aiRecommended: false,
      category: "Urban Exploration"
    },
    {
      id: 6,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      description: "Tropical paradise with lush rice terraces, ancient temples, and pristine beaches.",
      rating: 4.7,
      reviews: 2489,
      aiRecommended: true,
      category: "Island Paradise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Explore Destinations</h1>
            <p className="mt-2 text-muted-foreground">Discover your next adventure with AI-powered recommendations</p>
          </div>
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search destinations, experiences, or activities..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Dates</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Travelers</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex overflow-x-auto scrollbar-none gap-3 mb-8 pb-2">
            {["Trending", "AI Recommended", "Beach", "Mountains", "Cities", "Cultural", "Adventure", "Food", "Relaxation"].map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className={`rounded-full px-4 whitespace-nowrap ${category === "AI Recommended" ? "bg-primary/10 border-primary text-primary hover:bg-primary/20" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Destinations grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div 
                key={destination.id} 
                className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {destination.aiRecommended && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      AI Recommended
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-white mr-1" />
                      <span className="text-white font-medium">{destination.name}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                      {destination.category}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({destination.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Button size="sm" variant="outline" className="text-primary">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary/20">
                      Quick Plan
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load more button */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Destinations
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
