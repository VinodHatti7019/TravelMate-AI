
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      content: "TravelMate AI completely transformed our family vacation planning. The personalized itinerary saved us hours of research and led us to experiences we would have never found on our own.",
      author: {
        name: "Sarah Johnson",
        role: "Family Traveler",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      rating: 5
    },
    {
      content: "As a business traveler, efficiency is everything to me. This app optimizes my routes and adapts in real-time when flights are delayed. It's like having a personal travel assistant always looking out for me.",
      author: {
        name: "David Chen",
        role: "Business Executive",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
      },
      rating: 5
    },
    {
      content: "I was skeptical about AI travel planning, but the recommendations were spot-on. It suggested a small local festival that became the highlight of my trip to Japan.",
      author: {
        name: "Emily Rodriguez",
        role: "Solo Adventurer",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      rating: 4
    }
  ];
  
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Loved by Travelers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how TravelMate AI is changing the way people experience travel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm border border-border relative hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-3 right-4 flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="mt-4">
                <p className="text-foreground">{testimonial.content}</p>
              </blockquote>
              
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{testimonial.author.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-secondary/80 px-6 py-2">
            <div className="text-sm font-medium">
              <span className="text-primary font-semibold">4.9/5</span> average rating from <span className="font-semibold">2,000+</span> travelers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
