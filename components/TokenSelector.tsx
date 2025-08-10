'use client';
import { useState } from 'react';
import Image from 'next/image';
import { tokens, Token } from '@/constants/tokens';
import { ChevronDown } from 'lucide-react';

interface TokenSelectorProps {
  selectedToken: Token;
  onSelect: (token: Token) => void;
  className?: string;
}

export default function TokenSelector({ selectedToken, onSelect, className = '' }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button 
        className="flex items-center gap-2 px-3 py-2 bg-background/50 border border-border rounded-full hover:bg-background transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={selectedToken.logo} alt={selectedToken.symbol} className="w-5 h-5" width={20} height={20} />
        <span className="text-sm font-medium text-foreground">{selectedToken.symbol}</span>
        <ChevronDown className="h-4 w-4 opacity-70 text-foreground" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden">
          {tokens.map(token => (
            <button
              key={token.address}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-background transition-colors text-left"
              onClick={() => {
                onSelect(token);
                setIsOpen(false);
              }}
            >
              <Image src={token.logo} alt={token.symbol} className="w-5 h-5" width={20} height={20} />
              <span className="text-sm text-foreground">{token.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}