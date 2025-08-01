import { useState } from 'react';
import { tokens, Token } from '@/constants/tokens';

interface TokenSelectorProps {
  selectedToken: Token;
  onSelect: (token: Token) => void;
}

export default function TokenSelector({ selectedToken, onSelect }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedToken.logo} alt={selectedToken.symbol} className="w-6 h-6" />
        <span>{selectedToken.symbol}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          {tokens.map(token => (
            <div
              key={token.address}
              className="flex items-center p-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                onSelect(token);
                setIsOpen(false);
              }}
            >
              <img src={token.logo} alt={token.symbol} className="w-6 h-6 mr-2" />
              <span>{token.symbol}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}