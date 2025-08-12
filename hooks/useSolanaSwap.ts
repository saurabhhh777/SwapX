'use client';
import { useState, useCallback } from 'react';
import { heliusSwapService } from '@/lib/helius';
import { useTokenStore } from '@/stores/tokenStore';

export function useSolanaSwap() {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const { fromToken, toToken, amountIn } = useTokenStore();

  // Get quote for swap
  const getQuote = useCallback(async () => {
    if (!amountIn || !fromToken || !toToken) return;

    try {
      setIsLoading(true);
      
      // Convert amount to proper format (assuming amountIn is in smallest unit)
      const amount = Number(amountIn) / Math.pow(10, fromToken.decimals);
      
      const quoteResponse = await heliusSwapService.getQuote(
        fromToken.address, // input mint
        toToken.address,   // output mint
        amount,
        50 // 0.5% slippage
      );

      setQuote(quoteResponse);
      return quoteResponse;
    } catch (error) {
      console.error('Error getting quote:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [amountIn, fromToken, toToken]);

  // Execute swap
  const executeSwap = useCallback(async (wallet: any) => {
    if (!quote || !wallet) {
      throw new Error('No quote or wallet available');
    }

    try {
      setIsLoading(true);

      // Get swap transaction
      const swapTransaction = await heliusSwapService.getSwapTransaction(quote);

      // Execute the swap
      const result = await heliusSwapService.executeSwap(swapTransaction, wallet);

      return result.signature;
    } catch (error) {
      console.error('Swap failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [quote]);

  // Get token balance
  const getTokenBalance = useCallback(async (walletAddress: string, tokenMint: string) => {
    try {
      return await heliusSwapService.getTokenBalance(walletAddress, tokenMint);
    } catch (error) {
      console.error('Error getting token balance:', error);
      return 0;
    }
  }, []);

  // Get SOL balance
  const getSolBalance = useCallback(async (walletAddress: string) => {
    try {
      return await heliusSwapService.getSolBalance(walletAddress);
    } catch (error) {
      console.error('Error getting SOL balance:', error);
      return 0;
    }
  }, []);

  return {
    getQuote,
    executeSwap,
    getTokenBalance,
    getSolBalance,
    quote,
    isLoading,
  };
} 