
import { ArrowRight, Calendar, Compass, MapPin, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm mb-6 text-primary bg-primary/5 border-primary/20">
              <span className="font-medium">Introducing TravelMate AI</span>
              <div className="ml-1 h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Your AI Travel Companion for{' '}
              <span className="text-gradient">Seamless Adventures</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              Personalized itineraries, real-time recommendations, and optimized routes powered by AI. Plan your perfect trip with minimal effort.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Planning
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Calendar className="h-5 w-5 text-primary" />, text: "Smart Itineraries" },
                { icon: <Compass className="h-5 w-5 text-primary" />, text: "Real-time Tips" },
                { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Local Insights" },
                { icon: <Star className="h-5 w-5 text-primary" />, text: "Personalized" }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <p className="mt-3 text-sm font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative h-[600px] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background rounded-3xl"></div>
              
              {/* Phone mockup */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-xl overflow-hidden">
                {/* Screen content */}
                <div className="h-full w-full bg-gray-50 p-4 flex flex-col">
                  {/* App header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="text-xs text-gray-500">Good morning</div>
                      <div className="font-semibold">Plan your next trip</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                  </div>
                  
                  {/* Search bar */}
                  <div className="bg-white rounded-full py-2.5 px-4 flex items-center shadow-sm mb-6">
                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                    <div className="text-sm text-gray-500">Where to?</div>
                  </div>
                  
                  {/* Destination cards */}
                  <div className="space-y-4 overflow-auto flex-1">
                    <DestinationCard
                      image="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200&q=80"
                      name="Paris, France"
                      rating={4.8}
                      duration="5 days"
                    />
                    <DestinationCard
                      image="https://images.unsplash.com/photo-1542085562-5c538685befc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200&q=80"
                      name="Tokyo, Japan"
                      rating={4.9}
                      duration="7 days"
                    />
                    <DestinationCard
                      image="https://images.unsplash.com/photo-1617978241328-8a96d809ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200&q=80"
                      name="Venice, Italy"
                      rating={4.7}
                      duration="4 days"
                    />
                  </div>
                  
                  {/* Bottom navigation */}
                  <div className="h-14 pt-2 flex justify-around">
                    {['home', 'search', 'trips', 'profile'].map((item) => (
                      <div key={item} className="w-10 h-10 flex flex-col items-center justify-center">
                        <div className={`h-6 w-6 rounded-full ${item === 'home' ? 'bg-primary' : 'bg-gray-200'}`}></div>
                        <div className={`w-4 h-0.5 mt-1 ${item === 'home' ? 'bg-primary' : 'bg-transparent'}`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-40 -left-10 h-20 w-20 rounded-full bg-primary/30 animate-float delay-100"></div>
              <div className="absolute bottom-40 -right-5 h-16 w-16 rounded-full bg-primary/20 animate-float delay-300"></div>
              <div className="absolute top-1/4 right-0 h-24 w-24 rounded-full bg-primary/10 animate-float delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ image, name, rating, duration }: { 
  image: string; 
  name: string; 
  rating: number; 
  duration: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm relative card-hover">
      <div className="h-32 w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm">{name}</div>
          <div className="flex items-center text-xs">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            {rating}
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1">Optimal duration: {duration}</div>
      </div>
      <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 text-xs shadow-sm backdrop-blur-sm">
        AI Recommended
      </div>
    </div>
  );
}

function Search(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
