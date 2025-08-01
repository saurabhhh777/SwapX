"use client";

import { create } from 'zustand';
import { tokens, Token } from '@/constants/tokens';

interface TokenState {
  fromToken: Token;
  toToken: Token;
  amountIn: bigint | null;
  amountOut: bigint | null;
  setFromToken: (token: Token) => void;
  setToToken: (token: Token) => void;
  setAmountIn: (amount: bigint | null) => void;
  setAmountOut: (amount: bigint | null) => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  fromToken: tokens[0],
  toToken: tokens[1],
  amountIn: null,
  amountOut: null,
  setFromToken: (token) => set({ fromToken: token }),
  setToToken: (token) => set({ toToken: token }),
  setAmountIn: (amount) => set({ amountIn: amount }),
  setAmountOut: (amount) => set({ amountOut: amount }),
}));