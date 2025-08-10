import { BarChart, PieChart } from "@/components/Charts";
import { TokenRow } from "@/components/Tokens";
import { ArrowUpRight, ArrowRightLeft, Clock, Coins, PieChart as PieChartIcon, RefreshCw, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  // Mock data - replace with real data from your app
  const portfolioValue = 12542.38;
  const portfolioChange = 4.2;
  const recentSwaps = [
    { from: "ETH", to: "USDC", amount: 0.5, value: 1250, time: "2 mins ago" },
    { from: "SWAPX", to: "ETH", amount: 250, value: 0.75, time: "15 mins ago" },
    { from: "USDC", to: "SWAPX", amount: 500, value: 250, time: "1 hour ago" },
  ];
  
  const liquidityPositions = [
    { pair: "ETH/USDC", value: 8420.50, share: 0.42, fees: 125.30 },
    { pair: "SWAPX/ETH", value: 3120.75, share: 0.18, fees: 42.50 },
  ];

  const tokenBalances = [
    { symbol: "ETH", amount: 2.42, value: 6050.00, change: 3.2 },
    { symbol: "USDC", amount: 3500, value: 3500.00, change: 0 },
    { symbol: "SWAPX", amount: 1250, value: 2500.00, change: 8.5 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted">Overview of your SwapX activity and portfolio</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/80 border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-blue-400" />
                  Portfolio Value
                </h2>
                <span className={`text-sm flex items-center ${
                  portfolioChange >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {portfolioChange >= 0 ? '+' : ''}{portfolioChange}%
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">${portfolioValue.toLocaleString()}</p>
              <p className="text-muted text-sm">Across all chains and tokens</p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border">
            <CardHeader>
              <h2 className="text-lg font-semibold flex items-center">
                <PieChartIcon className="h-5 w-5 mr-2 text-purple-400" />
                Asset Allocation
              </h2>
            </CardHeader>
            <CardContent>
              <div className="h-[120px]">
                <PieChart data={[
                  { name: 'ETH', value: 6050, color: '#3B82F6' },
                  { name: 'USDC', value: 3500, color: '#2775CA' },
                  { name: 'SWAPX', value: 2500, color: '#8B5CF6' },
                ]} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border">
            <CardHeader>
              <h2 className="text-lg font-semibold flex items-center">
                <Coins className="h-5 w-5 mr-2 text-yellow-400" />
                Liquidity Positions
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-2">${(8420.50 + 3120.75).toLocaleString()}</p>
              <p className="text-muted text-sm">Across {liquidityPositions.length} pools</p>
            </CardContent>
          </Card>
        </div>

        {/* Token Balances */}
        <Card className="bg-card/80 border-border mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Your Token Balances</CardTitle>
            <Button variant="ghost" className="text-blue-500 hover:text-blue-400">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-muted border-b border-border">
                    <th className="pb-3">Asset</th>
                    <th className="pb-3 text-right">Amount</th>
                    <th className="pb-3 text-right">Value</th>
                    <th className="pb-3 text-right">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenBalances.map((token) => (
                    <TokenRow key={token.symbol} {...token} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Swaps */}
          <Card className="bg-card/80 border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center">
                <ArrowRightLeft className="h-5 w-5 mr-2 text-green-400" />
                Recent Swaps
              </h2>
              <Button variant="ghost" className="text-blue-500 hover:text-blue-400">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSwaps.map((swap, index) => (
                  <div key={index} className="flex justify-between items-center p-3 hover:bg-background rounded-lg transition-colors border border-transparent hover:border-border">
                    <div>
                      <div className="font-medium">
                        {swap.amount} {swap.from} → {swap.to}
                      </div>
                      <div className="flex items-center text-sm text-muted mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {swap.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${swap.value.toLocaleString()}</div>
                      <div className="text-sm text-muted">Completed</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Liquidity Positions */}
          <Card className="bg-card/80 border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center">
                <Coins className="h-5 w-5 mr-2 text-yellow-400" />
                Your Liquidity
              </h2>
              <Button variant="ghost" className="text-blue-500 hover:text-blue-400">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <BarChart data={liquidityPositions.map(pos => ({
                  name: pos.pair,
                  value: pos.value,
                  fees: pos.fees
                }))} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}