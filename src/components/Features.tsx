
import { Calendar, Compass, Map, Zap, Clock, Palette, Lock, Globe } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Discover the Perfect Journey with AI-Powered Assistance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our intelligent platform adapts to your preferences, creating seamless travel experiences tailored just for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="h-6 w-6" />,
              title: "AI-Driven Planning",
              description: "Advanced algorithms learn your preferences to suggest personalized itineraries and destinations."
            },
            {
              icon: <Map className="h-6 w-6" />,
              title: "Smart Navigation",
              description: "Real-time route optimization with traffic updates and alternative pathways."
            },
            {
              icon: <Calendar className="h-6 w-6" />,
              title: "Custom Itineraries",
              description: "Effortlessly create and modify your travel plans with intelligent scheduling."
            },
            {
              icon: <Compass className="h-6 w-6" />,
              title: "Local Discoveries",
              description: "Uncover hidden gems and authentic experiences beyond typical tourist attractions."
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Real-Time Updates",
              description: "Stay informed with instant alerts about flight changes, weather, and safety conditions."
            },
            {
              icon: <Palette className="h-6 w-6" />,
              title: "Preference Learning",
              description: "Our AI continuously adapts to your feedback, improving recommendations over time."
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: "Travel Protection",
              description: "Safety-first guidance with neighborhood advisories and emergency assistance."
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Global Coverage",
              description: "Comprehensive data for destinations worldwide, from major cities to remote locations."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
