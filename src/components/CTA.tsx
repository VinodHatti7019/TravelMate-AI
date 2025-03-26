
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Start Your Journey with <span className="text-gradient">TravelMate AI</span> Today
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of travelers who have discovered the perfect balance of exploration and relaxation with our AI-powered companion.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
