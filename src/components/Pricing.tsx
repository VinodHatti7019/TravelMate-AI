
import { Check, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const tiers = [
    {
      name: "Free",
      id: "free",
      price: { monthly: "$0", annually: "$0" },
      description: "Essential features for occasional travelers.",
      features: [
        "Basic itinerary planning",
        "Limited destination information",
        "Standard recommendations",
        "Community forums access",
        "Email support"
      ],
      mostPopular: false
    },
    {
      name: "Premium",
      id: "premium",
      price: { monthly: "$12", annually: "$120" },
      description: "Enhanced features for regular travelers.",
      features: [
        "Advanced AI itinerary planning",
        "Unlimited trip creation",
        "Real-time updates & alerts",
        "Offline access to plans",
        "Hidden gems & local recommendations",
        "Priority customer support",
        "Ad-free experience"
      ],
      mostPopular: true
    },
    {
      name: "Business",
      id: "business",
      price: { monthly: "$29", annually: "$290" },
      description: "Complete solution for frequent travelers.",
      features: [
        "Everything in Premium",
        "Team collaboration features",
        "Advanced analytics",
        "Expense tracking",
        "Custom branding",
        "API access",
        "Dedicated account manager",
        "24/7 phone & email support"
      ],
      mostPopular: false
    }
  ];
  
  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your travel needs, with no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={cn(
                "rounded-2xl p-8 relative", 
                tier.mostPopular 
                  ? "bg-white border-primary border-2 shadow-lg" 
                  : "bg-white border border-border"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-md">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">{tier.price.monthly}</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
              </div>
              
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button 
                  className={cn(
                    "w-full", 
                    !tier.mostPopular && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                  variant={tier.mostPopular ? "default" : "outline"}
                >
                  {tier.mostPopular ? "Start 14-day free trial" : `Get ${tier.name}`}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          All plans include a 14-day money-back guarantee. No credit card required for trial.
        </div>
      </div>
    </section>
  );
}
