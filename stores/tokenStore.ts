import { create } from 'zustand';
import { tokens, Token } from '@/constants/tokens';

interface TokenState {
  fromToken: Token;
  toToken: Token;
  amountIn: bigint;
  amountOut: bigint;
  setFromToken: (token: Token) => void;
  setToToken: (token: Token) => void;
  setAmountIn: (amount: bigint) => void;
  setAmountOut: (amount: bigint) => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  fromToken: tokens[0],
  toToken: tokens[1],
  amountIn: 0n,
  amountOut: 0n,
  setFromToken: (token) => set({ fromToken: token }),
  setToToken: (token) => set({ toToken: token }),
  setAmountIn: (amount) => set({ amountIn: amount }),
  setAmountOut: (amount) => set({ amountOut: amount }),
}));