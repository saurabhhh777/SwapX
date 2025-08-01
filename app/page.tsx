'use client';

import TokenInput from '@/components/TokenInput';
import SwapButton from '@/components/SwapButton';
import { useTokenStore } from '@/stores/tokenStore';
import { useTokenBalance } from '@/hooks/useTokenBalance';
import { useSwap } from '@/hooks/useSwap';
import { useState } from 'react';
import { AMMMath } from '@/lib/ammMath';

export default function Home() {
  const { 
    fromToken, 
    toToken, 
    setFromToken, 
    setToToken,
    amountIn,
    setAmountIn,
    amountOut,
    setAmountOut
  } = useTokenStore();
  
  const { balance: fromBalance } = useTokenBalance(fromToken);
  const { balance: toBalance } = useTokenBalance(toToken);
  const { executeSwap } = useSwap();
  const [isSwapping, setIsSwapping] = useState(false);

  const handleAmountChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** fromToken.decimals);
    setAmountIn(amount);
    
    // Calculate expected output (mock implementation - in real app use reserves)
    const output = AMMMath.calculateOutputAmount(
      amount,
      1000000n * 10n ** BigInt(fromToken.decimals), // Mock reserveIn
      500000n * 10n ** BigInt(toToken.decimals)  // Mock reserveOut
    );
    setAmountOut(output);
  };

  const handleSwap = async () => {
    setIsSwapping(true);
    try {
      await executeSwap();
      // Success handling (toast notification, etc.)
    } catch (error) {
      console.error("Swap failed:", error);
    } finally {
      setIsSwapping(false);
    }
  };

  const formattedAmountOut = amountOut 
    ? (Number(amountOut) / 10 ** toToken.decimals).toFixed(6)
    : '0.0';

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Swap Tokens</h1>
        
        {/* From Token Input */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">From</span>
            <span className="text-sm text-gray-500">
              Balance: {(Number(fromBalance) / 10 ** fromToken.decimals).toFixed(4)}
            </span>
          </div>
          <TokenInput 
            token={fromToken} 
            onChangeToken={setFromToken} 
            amount={amountIn}
            onAmountChange={handleAmountChange}
          />
        </div>
        
        {/* Swap Direction Arrow */}
        <div className="flex justify-center my-3">
          <div className="bg-gray-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* To Token Input */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">To</span>
            <span className="text-sm text-gray-500">
              Balance: {(Number(toBalance) / 10 ** toToken.decimals).toFixed(4)}
            </span>
          </div>
          <TokenInput 
            token={toToken} 
            onChangeToken={setToToken} 
            amount={amountOut}
            displayValue={formattedAmountOut}
            readOnly
          />
        </div>
        
        {/* Swap Button */}
        <SwapButton 
          onClick={handleSwap} 
          isLoading={isSwapping}
          disabled={!amountIn || amountIn === 0n}
        />
      </div>
      
      {/* Price Information */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Price</span>
          <span className="font-medium">
            1 {fromToken.symbol} = 
            {amountIn && amountOut 
              ? (Number(amountOut) / Number(amountIn)).toFixed(6) 
              : '0.0'} 
            {toToken.symbol}
          </span>
        </div>
      </div>
    </div>
  );
}