import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { getTokensForChain } from '@/constants/tokens';
import { useTokenStore } from '@/stores/tokenStore';

export function useWallet() {
  const { address, isConnected, chainId } = useAccount();
  const { connectors, connect, error: connectError } = useConnect();
  const { disconnect } = useDisconnect();
  const { setFromToken, setToToken } = useTokenStore();

  // When chain changes, update tokens
  if (chainId) {
    const chainTokens = getTokensForChain(chainId);
    if (chainTokens.length > 0) {
      // Update token store with new chain tokens
      setFromToken(chainTokens[0]);
      setToToken(chainTokens[1] || chainTokens[0]);
    }
  }

  return {
    address,
    chainId,
    isConnected,
    connectors,
    connect,
    disconnect,
    connectError
  };
}