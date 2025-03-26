
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, MapPin, ArrowRight, Plus, Map, Calendar as CalendarIcon, Info, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Planner = () => {
  // Smooth scrolling for page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Trip Planner</h1>
              <p className="mt-2 text-muted-foreground">Create and manage your personalized travel itineraries</p>
            </div>
            <Button className="group">
              <Plus className="h-4 w-4 mr-2" />
              Create New Trip
            </Button>
          </div>
          
          {/* AI Trip Builder */}
          <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  <Sparkles className="h-3.5 w-3.5 mr-1" />
                  <span>AI-Powered Planning</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Let AI design your perfect itinerary
                </h2>
                <p className="text-muted-foreground mb-6">
                  Simply describe your dream trip, and our AI will create a personalized day-by-day plan tailored to your preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="group">
                    Try AI Trip Builder
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <div className="bg-white shadow-lg rounded-xl p-5 border border-border relative">
                  <div className="absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    <Info className="h-3.5 w-3.5" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">AI Trip Assistant</div>
                      <div className="text-xs text-muted-foreground">Tell me about your trip</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="bg-primary/5 rounded-xl rounded-tl-none p-3 text-sm max-w-[85%]">
                      I'd like to visit Paris for 5 days in June with my partner. We love art, food, and want some romantic experiences but avoid tourist traps.
                    </div>
                    
                    <div className="bg-secondary text-foreground rounded-xl rounded-tr-none p-3 text-sm max-w-[85%] ml-auto">
                      Creating your personalized 5-day Paris itinerary <span className="loading-dots"></span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Describe your ideal trip..." 
                      className="w-full rounded-full border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary pr-10"
                    />
                    <Button size="icon" className="absolute right-1 top-1 h-6 w-6 rounded-full">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Your trips */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Trips</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Active trip */}
              <div className="border border-primary bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-40 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1520939817895-060bdaf4bc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80" 
                    alt="Paris Trip" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">Paris Getaway</div>
                        <div className="text-white/80 text-sm flex items-center mt-1">
                          <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                          June 15-20, 2023
                        </div>
                      </div>
                      <div className="bg-primary/90 text-white text-xs rounded-full px-2 py-1">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 days</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Paris, France</span>
                  </div>
                  
                  <div className="flex space-x-2 mb-4">
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Romantic</div>
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Arts & Culture</div>
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Food</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      Continue Planning
                    </Button>
                    <Button variant="outline" size="icon">
                      <Map className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Past trip */}
              <div className="border border-border bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all opacity-80">
                <div className="h-40 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576439129169-74fea02f0296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80" 
                    alt="Tokyo Trip" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">Tokyo Adventure</div>
                        <div className="text-white/80 text-sm flex items-center mt-1">
                          <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                          March 5-12, 2023
                        </div>
                      </div>
                      <div className="bg-gray-500 text-white text-xs rounded-full px-2 py-1">
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>7 days</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Tokyo, Japan</span>
                  </div>
                  
                  <div className="flex space-x-2 mb-4">
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Adventure</div>
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Tech</div>
                    <div className="text-xs bg-secondary rounded-full px-2 py-1">Food</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      View Trip
                    </Button>
                    <Button variant="outline" size="icon">
                      <Map className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Create new trip card */}
              <div className="border border-dashed border-border rounded-xl flex flex-col items-center justify-center p-8 hover:bg-secondary/50 transition-colors cursor-pointer">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Create New Trip</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Start planning your next adventure
                </p>
                <Button variant="outline">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          
          {/* Trip templates */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recommended Templates</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Weekend City Escape",
                  image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
                  duration: "3 days"
                },
                {
                  name: "Cultural Immersion",
                  image: "https://images.unsplash.com/photo-1605649461111-4642180dab5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
                  duration: "7 days"
                },
                {
                  name: "Romantic Getaway",
                  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
                  duration: "5 days"
                },
                {
                  name: "Adventure Journey",
                  image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300&q=80",
                  duration: "10 days"
                }
              ].map((template, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="h-36 relative">
                    <img 
                      src={template.image} 
                      alt={template.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs shadow-sm">
                      {template.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{template.name}</h3>
                    <Button size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Planner;
