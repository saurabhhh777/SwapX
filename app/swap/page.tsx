'use client';

import TokenInput from '@/components/TokenInput';
import SwapButton from '@/components/SwapButton';
import { useTokenStore } from '@/stores/tokenStore';
import { useSwapStore } from '@/stores/swapStore';
import { useSwap } from '@/hooks/useSwap';
import { useState } from 'react';
import { ChevronsDown } from 'lucide-react';
import { formatTokenAmount } from '@/lib/formatters';

export default function SwapPage() {
  const { fromToken, toToken, setFromToken, setToToken } = useTokenStore();
  const { isSwapping, startSwap, completeSwap, failSwap } = useSwapStore();
  const { executeSwap } = useSwap();
  const [amountIn, setAmountIn] = useState<bigint>(0n);
  const [amountOut, setAmountOut] = useState<bigint>(0n);
  const [amountInText, setAmountInText] = useState<string>('');

  const parseToUnits = (value: string, decimals: number): bigint => {
    if (!value) return 0n;
    const normalized = value.replace(/[^0-9.]/g, '');
    if (normalized === '' || normalized === '.') return 0n;
    const [intPart, fracPartRaw = ''] = normalized.split('.');
    const decimalsBig = 10n ** BigInt(decimals);
    const fracPart = fracPartRaw.slice(0, decimals).padEnd(decimals, '0');
    const intUnits = BigInt(intPart || '0') * decimalsBig;
    const fracUnits = BigInt(fracPart || '0');
    return intUnits + fracUnits;
  };

  const handleAmountChange = (value: string) => {
    setAmountInText(value);
    const amount = parseToUnits(value, fromToken.decimals);
    setAmountIn(amount);
    
    // Calculate expected output (mock implementation)
    const output = amount > 0n ? (amount * 95n) / 100n : 0n; // 5% slippage
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

    const tempText = amountInText;
    setAmountInText(formattedAmountOut);
    // formattedAmountIn will update after states; this keeps a usable string
  };

  const formattedAmountIn = amountIn ? formatTokenAmount(amountIn, fromToken.decimals, 6) : '0.0';
  const formattedAmountOut = amountOut ? formatTokenAmount(amountOut, toToken.decimals, 6) : '0.0';
  const price = amountIn && amountOut ? Number(amountOut) / Number(amountIn) : 0;
  const rateLine = `1 ${toToken.symbol} = ${price !== 0 ? (1 / price).toFixed(6) : '0.000000'} ${fromToken.symbol}`;
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto py-12 px-4">
        {/* Segmented tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center bg-card border border-border rounded-full shadow-sm overflow-hidden">
            <button className="px-4 py-1 text-sm font-medium bg-foreground text-background">Swap</button>
            <button className="px-4 py-1 text-sm text-muted hover:text-foreground">Send</button>
            <button className="px-4 py-1 text-sm text-muted hover:text-foreground">Buy</button>
          </div>
        </div>

        {/* Card container */}
        <div className="bg-card border border-border rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6">
            {/* Sell */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted">Sell</span>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>Max</span>
                </div>
              </div>
              <TokenInput 
                token={fromToken} 
                onChangeToken={setFromToken} 
                amount={amountIn}
                displayValue={amountInText}
                onAmountChange={handleAmountChange}
                theme="light"
                size="large"
                className="rounded-2xl border-border bg-card"
              />
            </div>

            {/* Divider with switch */}
            <div className="relative my-2">
              <div className="w-full h-px bg-border" />
              <button
                onClick={swapTokens}
                className="absolute left-1/2 -translate-x-1/2 -top-4 bg-card border border-border shadow-sm p-2 rounded-full hover:bg-background"
              >
                <ChevronsDown className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {/* Buy */}
            <div className="mt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted">Buy</span>
                <span className="text-xs text-muted">Balance: {formatTokenAmount(500000000000000000n, toToken.decimals, 4)}</span>
              </div>
              <TokenInput 
                token={toToken} 
                onChangeToken={setToToken} 
                amount={amountOut}
                displayValue={formattedAmountOut}
                readOnly
                theme="light"
                size="large"
                className="rounded-2xl border-border bg-card"
              />
            </div>

            {/* Button */}
            <div className="mt-6">
              <SwapButton 
                onClick={handleSwap}
                isLoading={isSwapping}
                disabled={!amountIn || amountIn === 0n}
                theme="blackPill"
              />
            </div>
          </div>
        </div>

        {/* Bottom rate line */}
        <div className="text-center text-xs text-muted mt-3">
          {rateLine}
        </div>
      </div>
    </div>
  );
}