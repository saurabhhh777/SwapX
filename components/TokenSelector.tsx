'use client';
import { useState, useEffect, useRef } from 'react';
import { allTokens, Token } from '@/constants/tokens';
import { ChevronDown } from 'lucide-react';

interface TokenSelectorProps {
  selectedToken: Token;
  onSelect: (token: Token) => void;
  className?: string;
  excludeToken?: Token; // Token to exclude from selection (e.g., the other token in the pair)
}

export default function TokenSelector({ selectedToken, onSelect, className = '', excludeToken }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filter tokens based on search term and exclude the other token in the pair
  const filteredTokens = allTokens.filter(token => {
    const matchesSearch = token.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.name.toLowerCase().includes(searchTerm.toLowerCase());
    const notExcluded = !excludeToken || token.address !== excludeToken.address;
    return matchesSearch && notExcluded;
  });

  // Group tokens by chain
  const tokensByChain = filteredTokens.reduce((acc, token) => {
    if (!acc[token.chain]) {
      acc[token.chain] = [];
    }
    acc[token.chain].push(token);
    return acc;
  }, {} as Record<string, Token[]>);

  const chainLabels = {
    ethereum: 'Ethereum',
    polygon: 'Polygon', 
    solana: 'Solana'
  };

  // Simple token display component
  const TokenDisplay = ({ token }: { token: Token }) => (
    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
      <span className="text-xs font-bold text-foreground">{token.symbol[0]}</span>
    </div>
  );

  const handleTokenSelect = (token: Token) => {
    console.log('Token selected:', token);
    onSelect(token);
    setIsOpen(false);
    setSearchTerm('');
  };

  const toggleDropdown = () => {
    console.log('Token selector clicked, isOpen:', !isOpen);
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button 
        className="flex items-center gap-2 px-3 py-2 bg-background/50 border border-border rounded-full hover:bg-background transition-colors"
        onClick={toggleDropdown}
        type="button"
      >
        <TokenDisplay token={selectedToken} />
        <span className="text-sm font-medium text-foreground">{selectedToken.symbol}</span>
        <ChevronDown className={`h-4 w-4 opacity-70 text-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden">
          {/* Search input */}
          <div className="p-3 border-b border-border">
            <input
              type="text"
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
              autoFocus
            />
          </div>

          {/* Token list */}
          <div className="max-h-64 overflow-y-auto">
            {Object.entries(tokensByChain).map(([chain, tokens]) => (
              <div key={chain}>
                {/* Chain header */}
                <div className="px-3 py-2 bg-muted/30 text-xs font-medium text-muted uppercase tracking-wide">
                  {chainLabels[chain as keyof typeof chainLabels]}
                </div>
                
                {/* Tokens in this chain */}
                {tokens.map(token => (
                  <button
                    key={token.address}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-background transition-colors text-left"
                    onClick={() => handleTokenSelect(token)}
                    type="button"
                  >
                    <TokenDisplay token={token} />
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-foreground">{token.symbol}</div>
                      <div className="text-xs text-muted">{token.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            ))}
            
            {filteredTokens.length === 0 && (
              <div className="px-3 py-4 text-center text-sm text-muted">
                No tokens found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}