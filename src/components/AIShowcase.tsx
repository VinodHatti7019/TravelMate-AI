
import { ChevronsUp, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function AIShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative max-w-lg mx-auto">
              {/* AI Interface Mockup */}
              <div className="rounded-2xl border shadow-lg bg-white p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Travel Assistant</div>
                      <div className="text-xs text-muted-foreground">AI-powered planning</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full px-3">
                    <ChevronsUp className="h-4 w-4 mr-1" /> Upgrade
                  </Button>
                </div>
                
                {/* Conversation */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%]">
                      I'd like to plan a 5-day trip to Tokyo in March with focus on food and culture.
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end">
                    <div className="bg-primary/10 text-foreground rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
                      <p>I'll create an optimal 5-day Tokyo itinerary for March focusing on food and culture.</p>
                      <p className="mt-2">March is excellent for cherry blossoms. Would you like me to include some sakura viewing spots?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%]">
                      Yes, that would be perfect! Also, I prefer to avoid crowds if possible.
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end">
                    <div className="bg-primary/10 text-foreground rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
                      <p>Perfect! I'll suggest less crowded sakura spots and authentic local restaurants. Your itinerary will include:</p>
                      <ul className="mt-2 ml-4 list-disc space-y-1">
                        <li>Hidden food gems in Yanaka and Koenji</li>
                        <li>Early morning temple visits to avoid tourists</li>
                        <li>Sakura viewing in quieter gardens like Koishikawa</li>
                        <li>Special seasonal food experiences</li>
                      </ul>
                      <p className="mt-2">Would you like accommodation recommendations as well?</p>
                    </div>
                  </div>
                </div>
                
                {/* Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask anything about your trip..." 
                    className="w-full rounded-full border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary pr-10"
                  />
                  <Button size="icon" className="absolute right-1 top-1 h-7 w-7 rounded-full">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-4 h-8 w-8 rounded-full bg-primary/30 animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-0 h-20 w-20 rounded-full bg-primary/20 filter blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 filter blur-2xl"></div>
              
              {/* Map marker pins */}
              <div className="absolute -top-4 right-20">
                <MapPin className="h-10 w-10 text-red-500 animate-float" />
              </div>
              <div className="absolute top-1/3 -right-6">
                <MapPin className="h-8 w-8 text-yellow-500 animate-float delay-100" />
              </div>
              <div className="absolute -bottom-2 left-10">
                <MapPin className="h-6 w-6 text-green-500 animate-float delay-200" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Experience the Power of <span className="text-gradient">AI-Driven Travel</span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground">
              Our advanced AI doesn't just suggest destinations—it crafts complete experiences tailored to your unique preferences and adapts in real-time.
            </p>
            
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Natural Conversation",
                  description: "Simply tell the AI what you're looking for in your own words—no complex forms or specific formats required."
                },
                {
                  title: "Contextual Understanding",
                  description: "The AI remembers your preferences, past trips, and current conversation to make increasingly relevant suggestions."
                },
                {
                  title: "Adaptive Planning",
                  description: "As your needs change or unexpected events occur, the AI adjusts your itinerary while maintaining your priorities."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button size="lg">
                Try the AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
