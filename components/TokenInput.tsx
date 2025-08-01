import TokenSelector from './TokenSelector';

interface TokenInputProps {
  token: any;
  onChangeToken: (token: any) => void;
  label?: string;
  amount?: bigint;
  onAmountChange?: (value: string) => void;
  displayValue?: string;
  readOnly?: boolean;
}

export default function TokenInput({ 
  token, 
  onChangeToken, 
  label,
  amount,
  onAmountChange,
  displayValue,
  readOnly = false
}: TokenInputProps) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="flex">
        <input
          type="number"
          placeholder="0.0"
          value={displayValue || (amount ? (Number(amount) / 10 ** token.decimals).toString() : '')}
          onChange={(e) => onAmountChange?.(e.target.value)}
          readOnly={readOnly}
          className="flex-1 p-2 text-xl border-none focus:outline-none"
        />
        <TokenSelector selectedToken={token} onSelect={onChangeToken} />
      </div>
    </div>
  );
}