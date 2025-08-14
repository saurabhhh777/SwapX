"use client";
import { Button } from '@/components/ui/button';
import { useSwap } from '@/hooks/useSwap';
import { useSolanaSwap } from '@/hooks/useSolanaSwap';
import { useTokenStore } from '@/stores/tokenStore';
import { useState } from 'react';

interface SwapButtonProps {
  theme?: 'default' | 'blackPill';
  className?: string;
}

export function SwapButton({ theme = 'default', className }: SwapButtonProps) {
  const { fromToken, toToken, amountIn } = useTokenStore();
  const [isLoading, setIsLoading] = useState(false);
  
  // Use appropriate swap hook based on token chain
  const { executeSwap: executeEthSwap } = useSwap();
  const { getQuote } = useSolanaSwap();

  const handleSwap = async () => {
    if (!fromToken || !toToken || !amountIn) return;

    setIsLoading(true);
    try {
      // Determine which chain we're swapping on
      if (fromToken.chain === 'solana' || toToken.chain === 'solana') {
        // Solana swap
        // Note: You'll need to integrate with a Solana wallet here
        // For now, we'll just get a quote
        await getQuote();
        console.log('Solana swap quote obtained');
      } else {
        // Ethereum/Polygon swap
        await executeEthSwap();
      }
    } catch (error) {
      console.error('Swap failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = !fromToken || !toToken || !amountIn || isLoading;

  const baseClasses = 'w-full font-poppins font-semibold transition-all duration-200';
  
  const themeClasses = {
    default: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    blackPill: 'bg-black hover:bg-gray-900 text-white rounded-full'
  };

  return (
    <Button
      onClick={handleSwap}
      disabled={isDisabled}
      className={`${baseClasses} ${themeClasses[theme]} ${className || ''}`}
    >
      {isLoading ? 'Swapping...' : 'Swap'}
    </Button>
  );
}

