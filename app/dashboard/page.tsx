import { BarChart, PieChart } from "@/components/Charts";
import { TokenRow } from "@/components/Tokens";
import { ArrowUpRight, ArrowRightLeft, Clock, Coins, PieChart as PieChartIcon, RefreshCw, Wallet } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Overview of your SwapX activity and portfolio</p>
          </div>
          <button className="flex items-center text-sm bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-4 py-2 mt-4 md:mt-0">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </button>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-blue-400" />
                Portfolio Value
              </h2>
              <span className={`text-sm flex items-center ${
                portfolioChange >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {portfolioChange >= 0 ? '+' : ''}{portfolioChange}%
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </span>
            </div>
            <p className="text-3xl font-bold mb-2">${portfolioValue.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Across all chains and tokens</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <PieChartIcon className="h-5 w-5 mr-2 text-purple-400" />
              Asset Allocation
            </h2>
            <div className="h-[120px]">
              <PieChart data={[
                { name: 'ETH', value: 6050, color: '#3B82F6' },
                { name: 'USDC', value: 3500, color: '#2775CA' },
                { name: 'SWAPX', value: 2500, color: '#8B5CF6' },
              ]} />
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <Coins className="h-5 w-5 mr-2 text-yellow-400" />
              Liquidity Positions
            </h2>
            <p className="text-3xl font-bold mb-2">${(8420.50 + 3120.75).toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Across {liquidityPositions.length} pools</p>
          </div>
        </div>

        {/* Token Balances */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Token Balances</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">
              View All
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
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
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Swaps */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <ArrowRightLeft className="h-5 w-5 mr-2 text-green-400" />
                Recent Swaps
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentSwaps.map((swap, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div>
                    <div className="font-medium">
                      {swap.amount} {swap.from} → {swap.to}
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {swap.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${swap.value.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Completed</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liquidity Positions */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Coins className="h-5 w-5 mr-2 text-yellow-400" />
                Your Liquidity
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>
            
            <div className="h-[250px]">
              <BarChart data={liquidityPositions.map(pos => ({
                name: pos.pair,
                value: pos.value,
                fees: pos.fees
              }))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}