'use client';

import TokenInput from '@/components/TokenInput';
import { SwapButton } from '@/components/SwapButton';
import { useTokenStore } from '@/stores/tokenStore';
import { formatTokenAmount } from '@/lib/formatters';
import { ChevronsDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSolanaSwap } from '@/hooks/useSolanaSwap';
import { useSwap } from '@/hooks/useSwap';

export default function SwapPage() {
  const { fromToken, toToken, setFromToken, setToToken, amountIn, setAmountIn, amountOut, setAmountOut } = useTokenStore();
  const [amountInText, setAmountInText] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  // Use appropriate swap hooks
  const { getQuote: getSolanaQuote } = useSolanaSwap();
  const { executeSwap: executeEthSwap } = useSwap();

  // Debug logging
  useEffect(() => {
    console.log('Current tokens:', { fromToken, toToken });
  }, [fromToken, toToken]);

  const handleFromTokenChange = (token: any) => {
    console.log('From token changed to:', token);
    setFromToken(token);
  };

  const handleToTokenChange = (token: any) => {
    console.log('To token changed to:', token);
    setToToken(token);
  };

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

  // Calculate swap output when input changes
  const calculateSwapOutput = async (inputAmount: bigint) => {
    if (!inputAmount || inputAmount === 0n || !fromToken || !toToken) {
      setAmountOut(0n);
      return;
    }

    // Check if tokens are on the same chain
    if (fromToken.chain !== toToken.chain) {
      // Cross-chain swap - show warning or disable
      setAmountOut(0n);
      return;
    }

    setIsCalculating(true);
    try {
      if (fromToken.chain === 'solana') {
        // Use Solana quote
        const amount = Number(inputAmount) / Math.pow(10, fromToken.decimals);
        const quote = await getSolanaQuote();
        if (quote && quote.outAmount) {
          setAmountOut(BigInt(quote.outAmount));
        } else {
          // Fallback calculation
          const output = (inputAmount * 95n) / 100n; // 5% slippage
          setAmountOut(output);
        }
      } else {
        // Ethereum/Polygon - use simple calculation for now
        const output = (inputAmount * 95n) / 100n; // 5% slippage
        setAmountOut(output);
      }
    } catch (error) {
      console.error('Error calculating swap output:', error);
      // Fallback calculation
      const output = (inputAmount * 95n) / 100n;
      setAmountOut(output);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleAmountChange = (value: string) => {
    setAmountInText(value);
    const amount = parseToUnits(value, fromToken.decimals);
    setAmountIn(amount);
    
    // Calculate output asynchronously
    calculateSwapOutput(amount);
  };

  const swapTokens = () => {
    // Swap tokens
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    
    // Also swap amounts
    const tempAmount = amountIn;
    setAmountIn(amountOut);
    setAmountOut(tempAmount);

    const tempText = amountInText;
    setAmountInText(formattedAmountOut);
  };

  // Recalculate when tokens change
  useEffect(() => {
    if (amountIn && amountIn > 0n) {
      calculateSwapOutput(amountIn);
    }
  }, [fromToken, toToken]);

  const formattedAmountIn = amountIn ? formatTokenAmount(amountIn, fromToken.decimals, 6) : '0.0';
  const formattedAmountOut = amountOut ? formatTokenAmount(amountOut, toToken.decimals, 6) : '0.0';
  const price = amountIn && amountOut ? Number(amountOut) / Number(amountIn) : 0;
  const rateLine = `1 ${toToken.symbol} = ${price !== 0 ? (1 / price).toFixed(6) : '0.000000'} ${fromToken.symbol}`;

  // Check if swap is valid
  const isValidSwap = fromToken && toToken && 
                     fromToken.address !== toToken.address && 
                     fromToken.chain === toToken.chain &&
                     amountIn && amountIn > 0n;
  
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
                onChangeToken={handleFromTokenChange} 
                amount={amountIn || 0n}
                displayValue={amountInText}
                onAmountChange={handleAmountChange}
                theme="light"
                size="large"
                className="rounded-2xl border-border bg-card"
                excludeToken={toToken}
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
                onChangeToken={handleToTokenChange} 
                amount={amountOut || 0n}
                displayValue={formattedAmountOut}
                readOnly
                theme="light"
                size="large"
                className="rounded-2xl border-border bg-card"
                excludeToken={fromToken}
              />
            </div>

            {/* Chain validation warning */}
            {fromToken && toToken && fromToken.chain !== toToken.chain && (
              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-sm text-yellow-600">
                  ⚠️ Cross-chain swaps are not supported yet. Please select tokens from the same chain.
                </p>
              </div>
            )}

            {/* Button */}
            <div className="mt-6">
              <SwapButton theme="blackPill" />
            </div>
          </div>
        </div>

        {/* Bottom rate line */}
        <div className="text-center text-xs text-muted mt-3">
          {isCalculating ? 'Calculating...' : rateLine}
        </div>

        {/* Debug info - remove in production */}
        <div className="mt-8 p-4 bg-card border border-border rounded-lg">
          <h3 className="text-sm font-medium text-foreground mb-2">Debug Info:</h3>
          <div className="text-xs text-muted space-y-1">
            <div>From Token: {fromToken?.symbol} ({fromToken?.chain})</div>
            <div>To Token: {toToken?.symbol} ({toToken?.chain})</div>
            <div>Amount In: {amountIn?.toString() || '0'}</div>
            <div>Amount Out: {amountOut?.toString() || '0'}</div>
            <div>Valid Swap: {isValidSwap ? 'Yes' : 'No'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}