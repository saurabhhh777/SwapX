'use client';

import { useState } from 'react';
import TokenInput from './TokenInput';
import { useTokenStore } from '@/stores/tokenStore';
import { useLiquidity } from '@/hooks/useLiquidity';

export function AddLiquidityForm() {
  const { fromToken: tokenA, toToken: tokenB, setFromToken, setToToken } = useTokenStore();
  const { addLiquidity } = useLiquidity();
  const [amountA, setAmountA] = useState<bigint>(0n);
  const [amountB, setAmountB] = useState<bigint>(0n);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountAChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** tokenA.decimals);
    setAmountA(amount);
  };

  const handleAmountBChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** tokenB.decimals);
    setAmountB(amount);
  };

  const handleAddLiquidity = async () => {
    if (!amountA || !amountB) return;
    
    setIsLoading(true);
    try {
      await addLiquidity();
      // Success handling
    } catch (error) {
      console.error('Add liquidity failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Add Liquidity</h2>
      
      <div className="space-y-4">
        <TokenInput 
          token={tokenA} 
          onChangeToken={setFromToken} 
          label="Token A"
          amount={amountA}
          onAmountChange={handleAmountAChange}
        />
        
        <TokenInput 
          token={tokenB} 
          onChangeToken={setToToken} 
          label="Token B"
          amount={amountB}
          onAmountChange={handleAmountBChange}
        />
        
        <button
          onClick={handleAddLiquidity}
          disabled={!amountA || !amountB || isLoading}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold disabled:bg-gray-400"
        >
          {isLoading ? 'Adding Liquidity...' : 'Add Liquidity'}
        </button>
      </div>
    </div>
  );
}

export function RemoveLiquidityForm() {
  const { fromToken: tokenA, toToken: tokenB } = useTokenStore();
  const { removeLiquidity } = useLiquidity();
  const [liquidityAmount, setLiquidityAmount] = useState<bigint>(0n);
  const [isLoading, setIsLoading] = useState(false);

  const handleLiquidityChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** 18); // LP tokens have 18 decimals
    setLiquidityAmount(amount);
  };

  const handleRemoveLiquidity = async () => {
    if (!liquidityAmount) return;
    
    setIsLoading(true);
    try {
      await removeLiquidity(liquidityAmount);
      // Success handling
    } catch (error) {
      console.error('Remove liquidity failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Remove Liquidity</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LP Tokens
          </label>
          <input
            type="number"
            placeholder="0.0"
            value={liquidityAmount ? (Number(liquidityAmount) / 10 ** 18).toString() : ''}
            onChange={(e) => handleLiquidityChange(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div className="text-sm text-gray-600">
          <p>You will receive:</p>
          <p>{tokenA.symbol}: ~{liquidityAmount ? (Number(liquidityAmount) / 10 ** 18 * 0.5).toFixed(4) : '0.0'}</p>
          <p>{tokenB.symbol}: ~{liquidityAmount ? (Number(liquidityAmount) / 10 ** 18 * 0.5).toFixed(4) : '0.0'}</p>
        </div>
        
        <button
          onClick={handleRemoveLiquidity}
          disabled={!liquidityAmount || isLoading}
          className="w-full bg-red-500 text-white py-3 px-4 rounded-xl font-semibold disabled:bg-gray-400"
        >
          {isLoading ? 'Removing Liquidity...' : 'Remove Liquidity'}
        </button>
      </div>
    </div>
  );
} 