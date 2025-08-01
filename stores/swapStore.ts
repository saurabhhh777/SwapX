"use client";

import { create } from 'zustand';

interface SwapState {
  slippage: number;
  isSwapping: boolean;
  txHash: string | null;
  swapError: string | null;
  setSlippage: (slippage: number) => void;
  startSwap: () => void;
  completeSwap: (txHash: string) => void;
  failSwap: (error: string) => void;
  resetSwap: () => void;
}

export const useSwapStore = create<SwapState>((set) => ({
  slippage: 0.5,
  isSwapping: false,
  txHash: null,
  swapError: null,
  setSlippage: (slippage) => set({ slippage }),
  startSwap: () => set({ isSwapping: true, swapError: null, txHash: null }),
  completeSwap: (txHash) => set({ isSwapping: false, txHash }),
  failSwap: (error) => set({ isSwapping: false, swapError: error }),
  resetSwap: () => set({ isSwapping: false, txHash: null, swapError: null }),
}));