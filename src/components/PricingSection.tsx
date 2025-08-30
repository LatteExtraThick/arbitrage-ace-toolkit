import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners exploring arbitrage",
      icon: Zap,
      features: [
        "Manual price alerts",
        "5 exchange connections", 
        "Basic analytics dashboard",
        "Email notifications",
        "Community support"
      ],
      buttonText: "Start Basic",
      popular: false
    },
    {
      name: "Pro", 
      price: 79,
      period: "month",
      description: "Advanced tools for serious traders",
      icon: Crown,
      features: [
        "Automated alerts & notifications",
        "15+ exchange connections",
        "Advanced analytics & insights",
        "Real-time profit calculator",
        "Priority support",
        "Portfolio tracking",
        "API access"
      ],
      buttonText: "Go Pro",
      popular: true
    },
    {
      name: "Elite",
      price: 199,
      period: "month", 
      description: "Enterprise-grade arbitrage suite",
      icon: Rocket,
      features: [
        "Flash loan integration",
        "Unlimited exchange connections",
        "AI-powered opportunity detection",
        "Custom trading algorithms",
        "Dedicated account manager",
        "White-label solutions",
        "Direct exchange APIs"
      ],
      buttonText: "Go Elite",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Choose Your Trading Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scale your arbitrage operations with plans designed for every level of trader
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-card border-primary shadow-glow' 
                    : 'bg-gradient-card border-border/50 hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-gradient-primary' : 'bg-secondary'
                  }`}>
                    <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'bg-secondary hover:bg-primary hover:text-primary-foreground'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-profit/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-profit" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include a 14-day free trial • No setup fees • Cancel anytime
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;