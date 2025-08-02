'use client';

import TokenInput from '@/components/TokenInput';
import SwapButton from '@/components/SwapButton';
import { useTokenStore } from '@/stores/tokenStore';
import { useSwapStore } from '@/stores/swapStore';
import { useSwap } from '@/hooks/useSwap';
import { useState } from 'react';
import { ChevronsDown, ArrowRightLeft } from 'lucide-react';
import { formatTokenAmount } from '@/lib/formatters';

export default function SwapPage() {
  const { fromToken, toToken, setFromToken, setToToken } = useTokenStore();
  const { isSwapping, startSwap, completeSwap, failSwap } = useSwapStore();
  const { executeSwap } = useSwap();
  const [amountIn, setAmountIn] = useState<bigint>(0n);
  const [amountOut, setAmountOut] = useState<bigint>(0n);

  const handleAmountChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** fromToken.decimals);
    setAmountIn(amount);
    
    // Calculate expected output (mock implementation)
    const output = amount > 0n ? amount * 95n / 100n : 0n; // 5% slippage
    setAmountOut(output);
  };

  const handleSwap = async () => {
    if (!amountIn || amountIn === 0n) return;
    
    startSwap();
    try {
      const hash = await executeSwap();
      if (hash) {
        completeSwap(hash);
      } else {
        failSwap('Swap failed');
      }
    } catch (error) {
      failSwap(error instanceof Error ? error.message : 'Swap failed');
    }
  };

  const swapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    
    // Also swap amounts
    const tempAmount = amountIn;
    setAmountIn(amountOut);
    setAmountOut(tempAmount);
  };

  const formattedAmountIn = amountIn ? formatTokenAmount(amountIn, fromToken.decimals, 6) : '0.0';
  const formattedAmountOut = amountOut ? formatTokenAmount(amountOut, toToken.decimals, 6) : '0.0';
  const price = amountIn && amountOut ? Number(amountOut) / Number(amountIn) : 0;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-md mx-auto py-12 px-4">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold flex items-center">
              <ArrowRightLeft className="mr-2 text-blue-400" />
              Swap Tokens
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Trade tokens instantly with minimal slippage
            </p>
          </div>
          
          <div className="p-6">
            {/* From Token Input */}
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">You pay</span>
                <span className="text-sm text-gray-500">
                  Balance: {formatTokenAmount(1000000000000000000n, fromToken.decimals, 4)}
                </span>
              </div>
              <TokenInput 
                token={fromToken} 
                onChangeToken={setFromToken} 
                amount={amountIn}
                displayValue={formattedAmountIn}
                onAmountChange={handleAmountChange}
                theme="dark"
              />
            </div>
            
            {/* Swap Direction */}
            <div className="flex justify-center my-3 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gray-700"></div>
              </div>
              <button 
                onClick={swapTokens}
                className="relative z-10 bg-gray-800 border border-gray-700 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronsDown className="h-5 w-5 text-blue-400" />
              </button>
            </div>
            
            {/* To Token Input */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">You receive</span>
                <span className="text-sm text-gray-500">
                  Balance: {formatTokenAmount(500000000000000000n, toToken.decimals, 4)}
                </span>
              </div>
              <TokenInput 
                token={toToken} 
                onChangeToken={setToToken} 
                amount={amountOut}
                displayValue={formattedAmountOut}
                readOnly
                theme="dark"
              />
            </div>
            
            {/* Price Info */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Price</span>
                <span className="font-medium">
                  1 {fromToken.symbol} = {price.toFixed(6)} {toToken.symbol}
                </span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-400">Slippage</span>
                <span className="font-medium">0.5%</span>
              </div>
            </div>
            
            {/* Swap Button */}
            <SwapButton 
              onClick={handleSwap}
              isLoading={isSwapping}
              disabled={!amountIn || amountIn === 0n}
              theme="gradient"
            />
          </div>
        </div>
        
        {/* Liquidity Provider Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mt-6">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            Become a Liquidity Provider
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Provide liquidity to pools and earn trading fees. Lower fees for liquidity providers.
          </p>
          <button className="w-full py-3 px-4 rounded-xl text-white font-semibold bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 hover:from-gray-600 hover:to-gray-700 transition-colors">
            Add Liquidity
          </button>
        </div>
      </div>
    </div>
  );
}