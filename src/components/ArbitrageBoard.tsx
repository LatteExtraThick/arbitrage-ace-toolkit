import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, ExternalLink, Percent } from "lucide-react";
import { useState, useEffect } from "react";

interface ArbitrageOpportunity {
  id: string;
  coin: string;
  symbol: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  profit: number;
  profitPercent: number;
  volume24h: number;
  lastUpdated: string;
}

const mockOpportunities: ArbitrageOpportunity[] = [
  {
    id: "1",
    coin: "Bitcoin",
    symbol: "BTC",
    buyExchange: "Binance",
    sellExchange: "Coinbase",
    buyPrice: 42850.32,
    sellPrice: 43120.75,
    profit: 270.43,
    profitPercent: 0.63,
    volume24h: 892340000,
    lastUpdated: "2 sec ago"
  },
  {
    id: "2", 
    coin: "Ethereum",
    symbol: "ETH",
    buyExchange: "Kraken",
    sellExchange: "Bitfinex",
    buyPrice: 2635.18,
    sellPrice: 2658.92,
    profit: 23.74,
    profitPercent: 0.90,
    volume24h: 156780000,
    lastUpdated: "5 sec ago"
  },
  {
    id: "3",
    coin: "Cardano", 
    symbol: "ADA",
    buyExchange: "KuCoin",
    sellExchange: "Gemini",
    buyPrice: 0.4123,
    sellPrice: 0.4167,
    profit: 0.0044,
    profitPercent: 1.07,
    volume24h: 42150000,
    lastUpdated: "8 sec ago"
  },
  {
    id: "4",
    coin: "Solana",
    symbol: "SOL", 
    buyExchange: "OKX",
    sellExchange: "Binance",
    buyPrice: 98.32,
    sellPrice: 99.14,
    profit: 0.82,
    profitPercent: 0.83,
    volume24h: 78960000,
    lastUpdated: "12 sec ago"
  }
];

const ArbitrageBoard = () => {
  const [opportunities, setOpportunities] = useState(mockOpportunities);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOpportunities(prev => prev.map(opp => ({
        ...opp,
        buyPrice: opp.buyPrice + (Math.random() - 0.5) * opp.buyPrice * 0.01,
        sellPrice: opp.sellPrice + (Math.random() - 0.5) * opp.sellPrice * 0.01,
        lastUpdated: "Just now"
      })).map(opp => ({
        ...opp,
        profit: opp.sellPrice - opp.buyPrice,
        profitPercent: ((opp.sellPrice - opp.buyPrice) / opp.buyPrice) * 100
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6 
    }).format(amount);
  };

  const formatVolume = (volume: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact'
    }).format(volume);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Live Arbitrage Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time price differences across major cryptocurrency exchanges
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {opportunities.map((opp, index) => (
            <Card 
              key={opp.id} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  {/* Coin Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {opp.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{opp.coin}</div>
                      <div className="text-sm text-muted-foreground">{opp.symbol}</div>
                    </div>
                  </div>

                  {/* Buy Exchange */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Buy from</div>
                    <Badge variant="outline" className="border-border/50">
                      {opp.buyExchange}
                    </Badge>
                    <div className="text-sm font-medium mt-1">{formatCurrency(opp.buyPrice)}</div>
                  </div>

                  {/* Sell Exchange */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Sell to</div>
                    <Badge variant="outline" className="border-border/50">
                      {opp.sellExchange}
                    </Badge>
                    <div className="text-sm font-medium mt-1">{formatCurrency(opp.sellPrice)}</div>
                  </div>

                  {/* Profit */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Profit</div>
                    <div className="text-lg font-bold text-profit">
                      {formatCurrency(opp.profit)}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm text-profit">
                      <Percent className="w-3 h-3" />
                      {opp.profitPercent.toFixed(2)}%
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">24h Volume</div>
                    <div className="text-sm font-medium">{formatVolume(opp.volume24h)}</div>
                    <div className="text-xs text-muted-foreground mt-1">{opp.lastUpdated}</div>
                  </div>

                  {/* Action */}
                  <div className="text-center">
                    <Button 
                      size="sm" 
                      className="bg-gradient-profit hover:shadow-profit-glow transition-all duration-300 group-hover:scale-105"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Execute
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 group"
          >
            View All Opportunities
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArbitrageBoard;