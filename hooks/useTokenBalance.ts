import { useAccount, useBalance } from 'wagmi';
import { Token } from '@/constants/tokens';

export function useTokenBalance(token: Token) {
  const { address } = useAccount();
  
  const { data, refetch } = useBalance({
    address,
    token: token.address === '0xETH' ? undefined : (token.address as `0x${string}`)
  });

  return {
    balance: data?.value ?? 0n,
    formatted: data?.formatted ?? '0.0',
    refetch
  };
}