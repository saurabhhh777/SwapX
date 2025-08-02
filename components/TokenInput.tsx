'use client';

import TokenSelector from './TokenSelector';
import { Token } from '@/constants/tokens';

interface TokenInputProps {
  token: Token;
  onChangeToken: (token: Token) => void;
  label?: string;
  amount?: bigint;
  displayValue?: string;
  readOnly?: boolean;
  onAmountChange?: (value: string) => void;
  theme?: 'light' | 'dark';
}

export default function TokenInput({ 
  token, 
  onChangeToken, 
  label,
  amount,
  displayValue,
  readOnly = false,
  onAmountChange,
  theme = 'light'
}: TokenInputProps) {
  const value = displayValue ?? (amount ? (Number(amount) / 10 ** token.decimals).toString() : '');
  
  return (
    <div className={`border rounded-lg p-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <div className="flex">
        <input
          type="number"
          placeholder="0.0"
          value={value}
          onChange={(e) => onAmountChange?.(e.target.value)}
          readOnly={readOnly}
          className={`flex-1 p-2 text-xl border-none focus:outline-none ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}
        />
        <TokenSelector selectedToken={token} onSelect={onChangeToken} />
      </div>
    </div>
  );
}