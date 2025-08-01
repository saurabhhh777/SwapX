'use client';

import TokenInput from '@/components/TokenInput';
import SwapButton from '@/components/SwapButton';
import { useTokenStore } from '@/stores/tokenStore';
import { useSwapStore } from '@/stores/swapStore';
import { useSwap } from '@/hooks/useSwap';
import { useState } from 'react';

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

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Swap Tokens</h1>
      <TokenInput 
        token={fromToken} 
        onChangeToken={setFromToken} 
        label="From"
        amount={amountIn}
        onAmountChange={handleAmountChange}
      />
      <div className="my-2 text-center">↓</div>
      <TokenInput 
        token={toToken} 
        onChangeToken={setToToken} 
        label="To"
        amount={amountOut}
        displayValue={amountOut ? (Number(amountOut) / 10 ** toToken.decimals).toFixed(6) : '0.0'}
        readOnly
      />
      <SwapButton 
        onClick={handleSwap}
        isLoading={isSwapping}
        disabled={!amountIn || amountIn === 0n}
      />
    </div>
  );
}