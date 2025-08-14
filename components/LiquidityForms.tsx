'use client';

import { useState } from 'react';
import TokenInput from './TokenInput';
import { useTokenStore } from '@/stores/tokenStore';
import { useLiquidity } from '@/hooks/useLiquidity';
import { Plus, Minus, ChevronsDown } from 'lucide-react';
import { formatTokenAmount } from '@/lib/formatters';

export function AddLiquidityForm() {
  const { fromToken: tokenA, toToken: tokenB, setFromToken, setToToken } = useTokenStore();
  const { addLiquidity } = useLiquidity();
  const [amountA, setAmountA] = useState<bigint>(0n);
  const [amountB, setAmountB] = useState<bigint>(0n);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountAChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** tokenA.decimals);
    setAmountA(amount);
    setAmountB(amount / 2n); // Simplified calculation
  };

  const handleAmountBChange = (value: string) => {
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** tokenB.decimals);
    setAmountB(amount);
    setAmountA(amount * 2n); // Simplified calculation
  };

  const handleAddLiquidity = async () => {
    if (!amountA || !amountB) return;
    
    setIsLoading(true);
    try {
      await addLiquidity();
    } catch (error) {
      console.error('Add liquidity failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold flex items-center font-poppins">
          <Plus className="mr-2 text-foreground" />
          Add Liquidity
        </h2>
        <p className="text-muted text-sm mt-1">
          Provide tokens to the liquidity pool
        </p>
      </div>
      
      <div className="p-6 space-y-6">
        <TokenInputWithBalance 
          token={tokenA} 
          onChangeToken={setFromToken} 
          label="Token A"
          onAmountChange={handleAmountAChange}
          balance={1000000000000000000n}
        />
        
        <div className="relative my-1">
          <div className="w-full h-px bg-border" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-card border border-border shadow-sm p-2 rounded-full">
            <ChevronsDown className="h-5 w-5 text-foreground" />
          </div>
        </div>
        
        <TokenInputWithBalance 
          token={tokenB} 
          onChangeToken={setToToken} 
          label="Token B"
          onAmountChange={handleAmountBChange}
          balance={500000000000000000n}
        />
        
        <PoolInfo 
          share="0.5%" 
          lpTokens={amountA && amountB ? amountA + amountB : 0n}
        />
        
        <button
          onClick={handleAddLiquidity}
          disabled={!amountA || !amountB || isLoading}
          className={`w-full py-4 px-6 rounded-full font-semibold ${
            !amountA || !amountB || isLoading
              ? 'bg-border text-muted cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-900'
          } transition-colors flex items-center justify-center`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Adding Liquidity...
            </>
          ) : (
            'Add Liquidity'
          )}
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
    const amount = value === '' ? 0n : BigInt(Number(value) * 10 ** 18);
    setLiquidityAmount(amount);
  };

  const handleRemoveLiquidity = async () => {
    if (!liquidityAmount) return;
    
    setIsLoading(true);
    try {
      await removeLiquidity(liquidityAmount);
    } catch (error) {
      console.error('Remove liquidity failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const estimatedTokenA = liquidityAmount ? liquidityAmount / 2n : 0n;
  const estimatedTokenB = liquidityAmount ? liquidityAmount / 2n : 0n;

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold flex items-center font-poppins">
          <Minus className="mr-2 text-foreground" />
          Remove Liquidity
        </h2>
        <p className="text-muted text-sm mt-1">
          Withdraw tokens from the liquidity pool
        </p>
      </div>
      
      <div className="p-6 space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground">LP Tokens</span>
            <span className="text-sm text-muted">
              Balance: {formatTokenAmount(1000000000000000000n, 18, 4)}
            </span>
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="0.0"
              value={liquidityAmount ? (Number(liquidityAmount) / 10 ** 18).toString() : ''}
              onChange={(e) => handleLiquidityChange(e.target.value)}
              className="w-full p-4 bg-card border border-border rounded-2xl text-foreground focus:outline-none"
            />
            <div className="absolute right-4 top-4 text-muted">LP</div>
          </div>
        </div>
        
        <div className="relative my-1">
          <div className="w-full h-px bg-border" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-card border border-border shadow-sm p-2 rounded-full">
            <ChevronsDown className="h-5 w-5 text-foreground" />
          </div>
        </div>
        
        <EstimatedReturns 
          tokenA={tokenA} 
          tokenB={tokenB} 
          amountA={estimatedTokenA} 
          amountB={estimatedTokenB} 
        />
        
        <PoolInfo 
          share="1.2%" 
          fees="0.023 ETH"
        />
        
        <button
          onClick={handleRemoveLiquidity}
          disabled={!liquidityAmount || isLoading}
          className={`w-full py-4 px-6 rounded-full font-semibold ${
            !liquidityAmount || isLoading
              ? 'bg-border text-muted cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-900'
          } transition-colors flex items-center justify-center`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Removing Liquidity...
            </>
          ) : (
            'Remove Liquidity'
          )}
        </button>
      </div>
    </div>
  );
}

// Helper Components
import { Token } from '@/constants/tokens';

function TokenInputWithBalance({ token, onChangeToken, label, onAmountChange, balance }: {
  token: Token;
  onChangeToken: (token: Token) => void;
  label: string;
  onAmountChange: (value: string) => void;
  balance: bigint;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted">
          Balance: {formatTokenAmount(balance, token.decimals, 4)}
        </span>
      </div>
      <TokenInput 
        token={token} 
        onChangeToken={onChangeToken} 
        onAmountChange={onAmountChange}
        theme="light"
        size="large"
        className="rounded-2xl border-border bg-card"
      />
    </div>
  );
}

function PoolInfo({ share, lpTokens, fees }: {
  share: string;
  lpTokens?: bigint;
  fees?: string;
}) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
      {lpTokens !== undefined && (
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted">LP Tokens</span>
          <span className="font-medium text-foreground">
            {lpTokens ? formatTokenAmount(lpTokens, 18, 6) : '0.0'}
          </span>
        </div>
      )}
      <div className="flex justify-between text-sm">
        <span className="text-muted">Pool Share</span>
        <span className="font-medium text-foreground">{share}</span>
      </div>
      {fees && (
        <div className="flex justify-between text-sm mt-2">
          <span className="text-muted">Fee Earnings</span>
          <span className="font-medium text-foreground">{fees}</span>
        </div>
      )}
    </div>
  );
}

function EstimatedReturns({ tokenA, tokenB, amountA, amountB }: {
  tokenA: Token;
  tokenB: Token;
  amountA: bigint;
  amountB: bigint;
}) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
      <h3 className="text-sm font-medium text-foreground mb-3">You will receive:</h3>
      
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-2 bg-foreground"></div>
          <span className="text-foreground">{tokenA.symbol}</span>
        </div>
        <span className="font-medium text-foreground">
          {formatTokenAmount(amountA, tokenA.decimals, 6)}
        </span>
      </div>
      
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-2 bg-muted"></div>
          <span className="text-foreground">{tokenB.symbol}</span>
        </div>
        <span className="font-medium text-foreground">
          {formatTokenAmount(amountB, tokenB.decimals, 6)}
        </span>
      </div>
    </div>
  );
}