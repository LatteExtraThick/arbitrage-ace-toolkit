import { Card, CardContent } from "@/components/ui/card";
import { Search, Zap, TrendingUp, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Scan Markets",
      description: "Our AI continuously monitors 15+ major cryptocurrency exchanges for price discrepancies across hundreds of trading pairs.",
      color: "text-primary"
    },
    {
      icon: Zap, 
      title: "Instant Alerts",
      description: "Get real-time notifications when profitable arbitrage opportunities are detected, with detailed profit calculations and execution guidance.",
      color: "text-profit"
    },
    {
      icon: TrendingUp,
      title: "Execute Trades", 
      description: "Use our integrated trading tools to execute simultaneous buy/sell orders across exchanges, maximizing your profit potential.",
      color: "text-loss"
    },
    {
      icon: Shield,
      title: "Secure Profits",
      description: "Track your portfolio performance, analyze successful trades, and reinvest profits to compound your arbitrage returns.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How Arbitrage Ace Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intelligent platform automates the complex process of finding and executing profitable arbitrage trades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary text-sm font-bold rounded-full mb-6">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-secondary/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-40 mb-40">
          <div className="absolute top-1/2 left-1/4 right-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-1/2 left-2/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute top-1/2 left-3/4 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Profiting?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of traders already using Arbitrage Ace to maximize their crypto profits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-profit">$2.3M+</div>
                <div className="text-sm text-muted-foreground">Total Profits Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4,892</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-profit">15+</div>
                <div className="text-sm text-muted-foreground">Exchanges Connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;