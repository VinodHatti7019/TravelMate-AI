
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Search, ArrowRight, MapPin, Heart, Star, Calendar, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Discover = () => {
  // Smooth scrolling for page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sample experiences data
  const experiences = [
    {
      id: 1,
      title: "Private Tokyo Food Tour with Local Guide",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.9,
      reviews: 182,
      price: "$89",
      category: "Food & Drink",
      duration: "3 hours"
    },
    {
      id: 2,
      title: "Skip-the-Line Louvre Museum Guided Tour",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1565782298286-cb6e6d8be507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.8,
      reviews: 352,
      price: "$62",
      category: "Arts & Culture",
      duration: "2.5 hours"
    },
    {
      id: 3,
      title: "Santorini Sunset Sailing Cruise with Dinner",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1551268901-7ba7aab07a4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.9,
      reviews: 218,
      price: "$135",
      category: "Adventure",
      duration: "5 hours"
    },
    {
      id: 4,
      title: "Mount Fuji Full-Day Scenic Tour",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.7,
      reviews: 165,
      price: "$110",
      category: "Nature",
      duration: "8 hours"
    },
    {
      id: 5,
      title: "Barcelona Tapas Walking Tour",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.8,
      reviews: 236,
      price: "$75",
      category: "Food & Drink",
      duration: "3.5 hours"
    },
    {
      id: 6,
      title: "Golden Circle and Blue Lagoon Day Tour",
      location: "Reykjavik, Iceland",
      image: "https://images.unsplash.com/photo-1523246346634-a55abe8e29c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
      rating: 4.9,
      reviews: 197,
      price: "$195",
      category: "Nature",
      duration: "10 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Discover Experiences</h1>
            <p className="mt-2 text-muted-foreground">Find unique activities and unforgettable things to do</p>
          </div>
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search experiences, activities, or attractions..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>When</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Where</span>
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
            {["All", "AI Recommended", "Food & Drink", "Arts & Culture", "Nature", "Adventure", "Wellness", "History", "Family Friendly"].map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className={`rounded-full px-4 whitespace-nowrap ${category === "AI Recommended" ? "bg-primary/10 border-primary text-primary hover:bg-primary/20" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Experiences grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <div 
                key={experience.id} 
                className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                    <Heart className="h-4 w-4 text-foreground" />
                  </button>
                  
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs shadow-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {experience.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-1">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">{experience.location}</span>
                  </div>
                  
                  <h3 className="font-medium mb-2 line-clamp-2">{experience.title}</h3>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{experience.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({experience.reviews})</span>
                    </div>
                    <div className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
                      {experience.category}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="font-medium">
                      {experience.price}
                      <span className="text-xs text-muted-foreground ml-1">per person</span>
                    </div>
                    <Button size="sm" className="group">
                      Book Now
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load more button */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              Load More Experiences
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Discover;

function Clock(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
