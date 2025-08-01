'use client';
import { useAccount, useWriteContract } from 'wagmi';
import { swapXRouterABI } from '@/constants/abis';
import { SWAPX_ROUTER_ADDRESS } from '@/constants/addresses';
import { useTokenStore } from '@/stores/tokenStore';
import { AMMMath } from '@/lib/ammMath';

export function useLiquidity() {
  const { address } = useAccount();
  const { fromToken: tokenA, toToken: tokenB, amountIn: amountA, amountOut: amountB } = useTokenStore();
  const { writeContractAsync } = useWriteContract();

  const addLiquidity = async () => {
    if (!address || !amountA || !amountB) return;
    
    // Calculate min amounts with slippage tolerance
    const minAmountA = amountA * 95n / 100n; // 5% slippage
    const minAmountB = amountB * 95n / 100n;
    
    try {
      const hash = await writeContractAsync({
        address: SWAPX_ROUTER_ADDRESS as `0x${string}`,
        abi: swapXRouterABI,
        functionName: 'addLiquidity',
        args: [
          tokenA.address as `0x${string}`,
          tokenB.address as `0x${string}`,
          amountA,
          amountB,
          minAmountA,
          minAmountB,
          address,
          BigInt(Math.floor(Date.now() / 1000) + 600) // 10 minutes
        ]
      });
      
      return hash;
    } catch (error) {
      console.error('Add liquidity failed:', error);
      throw error;
    }
  };

  const removeLiquidity = async (liquidityAmount: bigint) => {
    if (!address || !liquidityAmount || liquidityAmount === 0n) return;
    
    try {
      const hash = await writeContractAsync({
        address: SWAPX_ROUTER_ADDRESS as `0x${string}`,
        abi: swapXRouterABI,
        functionName: 'removeLiquidity',
        args: [
          tokenA.address as `0x${string}`,
          tokenB.address as `0x${string}`,
          liquidityAmount,
          0n, // minAmountA
          0n, // minAmountB
          address,
          BigInt(Math.floor(Date.now() / 1000) + 600)
        ]
      });
      
      return hash;
    } catch (error) {
      console.error('Remove liquidity failed:', error);
      throw error;
    }
  };

  const getLiquidityAmounts = async () => {
    // In a real app, this would fetch pool reserves from contract
    return {
      reserveA: 1000000n * 10n ** BigInt(tokenA.decimals),
      reserveB: 500000n * 10n ** BigInt(tokenB.decimals),
      totalSupply: 1000000n * 10n ** 18n
    };
  };

  const calculateLiquidityTokens = (
    amountA: bigint, 
    reserveA: bigint, 
    totalSupply: bigint
  ): bigint => {
    if (reserveA === 0n) return amountA;
    return amountA * totalSupply / reserveA;
  };

  return {
    addLiquidity,
    removeLiquidity,
    getLiquidityAmounts,
    calculateLiquidityTokens
  };
}