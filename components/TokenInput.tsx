'use client';

import TokenSelector from './TokenSelector';
import { Token } from '@/constants/tokens';

interface TokenInputProps {
  token: Token;
  onChangeToken: (token: Token) => void;
  label?: string;
  displayValue?: string;
  readOnly?: boolean;
  onAmountChange?: (value: string) => void;
  theme?: 'light' | 'dark';
  size?: 'default' | 'large';
  className?: string;
  excludeToken?: Token; // Token to exclude from selection
}

export default function TokenInput({ 
  token, 
  onChangeToken, 
  label,
  displayValue,
  readOnly = false,
  onAmountChange,
  theme = 'light',
  size = 'default',
  className = '',
  excludeToken
}: TokenInputProps) {
  const value = displayValue ?? '';
  const isDark = theme === 'dark';
  const containerClasses = `${isDark ? 'bg-gray-800 border-gray-700' : 'bg-card border-border'} border rounded-2xl p-4 ${className}`;
  const inputTextSize = size === 'large' ? 'text-4xl md:text-5xl font-semibold' : 'text-xl';

  return (
    <div className={containerClasses}>
      {label && <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-muted'}`}>{label}</label>}
      <div className="flex items-center gap-3">
        <input
          type="number"
          placeholder="0.0"
          value={value}
          onChange={(e) => onAmountChange?.(e.target.value)}
          readOnly={readOnly}
          className={`flex-1 p-0 bg-transparent border-none focus:outline-none ${inputTextSize} ${isDark ? 'text-white placeholder-gray-500' : 'text-foreground placeholder-muted'}`}
        />
        <TokenSelector 
          selectedToken={token} 
          onSelect={onChangeToken} 
          excludeToken={excludeToken}
        />
      </div>
    </div>
  );
}