import { useAccount, useWriteContract } from 'wagmi';
import { swapXRouterABI } from '@/constants/abis';
import { SWAPX_ROUTER_ADDRESS } from '@/constants/addresses';
import { useTokenStore } from '@/stores/tokenStore';

export function useSwap() {
  const { address } = useAccount();
  const { fromToken, toToken, amountIn } = useTokenStore();
  const { writeContractAsync } = useWriteContract();

  const executeSwap = async () => {
    if (!address || !amountIn) return;
    
    try {
      const hash = await writeContractAsync({
        address: SWAPX_ROUTER_ADDRESS as `0x${string}`,
        abi: swapXRouterABI,
        functionName: 'swapExactTokensForTokens',
        args: [
          amountIn,
          amountIn * 95n / 100n, // 5% slippage
          [fromToken.address as `0x${string}`, toToken.address as `0x${string}`],
          address,
          BigInt(Math.floor(Date.now() / 1000) + 600) // 10 minutes
        ]
      });
      
      return hash;
    } catch (error) {
      console.error('Swap failed:', error);
      throw error;
    }
  };

  return { executeSwap };
}