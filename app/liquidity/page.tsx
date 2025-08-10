'use client';

import { AddLiquidityForm, RemoveLiquidityForm } from '@/components/LiquidityForms';
import { useState } from 'react';
import { Coins, Plus, Minus } from 'lucide-react';

export default function LiquidityPage() {
  const [activeTab, setActiveTab] = useState('add');
  
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Coins className="mr-3 text-yellow-400" />
            Liquidity Pools
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Provide liquidity to trading pairs and earn fees from swaps. Manage your existing liquidity positions.
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden mb-8">
          <div className="flex border-b border-border">
            <button
              className={`flex-1 py-4 font-medium ${
                activeTab === 'add'
                  ? 'text-foreground border-b-2 border-green-500'
                  : 'text-muted hover:text-foreground'
              }`}
              onClick={() => setActiveTab('add')}
            >
              <div className="flex items-center justify-center">
                <Plus className="mr-2" /> Add Liquidity
              </div>
            </button>
            <button
              className={`flex-1 py-4 font-medium ${
                activeTab === 'remove'
                  ? 'text-foreground border-b-2 border-red-500'
                  : 'text-muted hover:text-foreground'
              }`}
              onClick={() => setActiveTab('remove')}
            >
              <div className="flex items-center justify-center">
                <Minus className="mr-2" /> Remove Liquidity
              </div>
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'add' ? <AddLiquidityForm /> : <RemoveLiquidityForm />}
          </div>
        </div>
        
        {/* Pool Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PoolCard 
            token1="ETH" 
            token2="SWAPX" 
            poolId="#12" 
            liquidity="$4,231.42" 
            share="1.2%" 
            fees="0.023 ETH"
            color1="blue"
            color2="purple"
          />
          
          <PoolCard 
            token1="USDC" 
            token2="ETH" 
            poolId="#8" 
            liquidity="$2,156.78" 
            share="0.8%" 
            fees="12.45 USDC"
            color1="green"
            color2="blue"
          />
          
          <PoolCard 
            token1="SWAPX" 
            token2="MATIC" 
            poolId="#15" 
            liquidity="$1,543.21" 
            share="0.5%" 
            fees="42.69 SWAPX"
            color1="yellow"
            color2="purple"
          />
        </div>
      </div>
    </div>
  );
}

function PoolCard({ token1, token2, poolId, liquidity, share, fees, color1, color2 }: {
  token1: string;
  token2: string;
  poolId: string;
  liquidity: string;
  share: string;
  fees: string;
  color1: string;
  color2: string;
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500'
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
      <div className="flex items-center mb-4">
        <div className={`${colorMap[color1]} w-10 h-10 rounded-full mr-3`}></div>
        <div className={`${colorMap[color2]} w-10 h-10 rounded-full -ml-3`}></div>
        <div>
          <h3 className="font-bold">{token1}/{token2}</h3>
          <p className="text-sm text-muted">Pool {poolId}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm py-2">
        <span className="text-muted">Your Liquidity</span>
        <span>{liquidity}</span>
      </div>
      <div className="flex justify-between text-sm py-2">
        <span className="text-muted">Pool Share</span>
        <span>{share}</span>
      </div>
      <div className="flex justify-between text-sm py-2">
        <span className="text-muted">Earned Fees</span>
        <span>{fees}</span>
      </div>
    </div>
  );
}