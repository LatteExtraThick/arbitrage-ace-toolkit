import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-profit/10 rounded-full blur-3xl animate-profit-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm border border-border rounded-full px-6 py-2 mb-8 animate-slide-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Lightning-Fast Arbitrage Opportunities
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-profit bg-clip-text text-transparent animate-slide-up">
            Arbitrage Ace
            <span className="block text-4xl md:text-6xl mt-2">Toolkit</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover profitable cryptocurrency arbitrage opportunities across exchanges. 
            <span className="text-primary font-semibold"> Maximize your profits</span> with 
            real-time price differences and automated alerts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              Start Trading
              <TrendingUp className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg group"
            >
              Watch Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.3M+</div>
              <div className="text-sm text-muted-foreground">Profit Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-profit mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Exchanges Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;