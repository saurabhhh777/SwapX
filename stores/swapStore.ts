import { create } from 'zustand';

interface SwapState {
  amountIn: bigint | null;
  amountOut: bigint | null;
  slippage: number; // in percent (0.5 = 0.5%)
  txHash: string | null;
  isSwapping: boolean;
  swapError: string | null;
  setAmountIn: (amount: bigint) => void;
  setAmountOut: (amount: bigint) => void;
  setSlippage: (slippage: number) => void;
  startSwap: () => void;
  completeSwap: (txHash: string) => void;
  failSwap: (error: string) => void;
  resetSwap: () => void;
}

const initialState = {
  amountIn: null,
  amountOut: null,
  slippage: 0.5,
  txHash: null,
  isSwapping: false,
  swapError: null
};

export const useSwapStore = create<SwapState>((set) => ({
  ...initialState,
  
  setAmountIn: (amount) => set({ amountIn: amount }),
  setAmountOut: (amount) => set({ amountOut: amount }),
  setSlippage: (slippage) => set({ slippage }),
  
  startSwap: () => set({ 
    isSwapping: true,
    swapError: null,
    txHash: null
  }),
  
  completeSwap: (txHash) => set({ 
    isSwapping: false,
    txHash
  }),
  
  failSwap: (error) => set({ 
    isSwapping: false,
    swapError: error
  }),
  
  resetSwap: () => set(initialState)
}));