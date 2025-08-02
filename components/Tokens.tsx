export function TokenRow({ symbol, amount, value, change }: {
    symbol: string;
    amount: number;
    value: number;
    change: number;
  }) {
    return (
      <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
        <td className="py-4">
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full mr-3 ${
              symbol === 'ETH' ? 'bg-blue-500' : 
              symbol === 'USDC' ? 'bg-blue-600' : 'bg-purple-500'
            }`}></div>
            <span className="font-medium">{symbol}</span>
          </div>
        </td>
        <td className="py-4 text-right">{amount.toLocaleString()}</td>
        <td className="py-4 text-right">${value.toLocaleString()}</td>
        <td className={`py-4 text-right ${
          change >= 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {change >= 0 ? '+' : ''}{change}%
        </td>
      </tr>
    );
  }