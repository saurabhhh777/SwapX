// Format a number to a readable string
export function formatNumber(
  value: number | bigint, 
  decimals: number = 4,
  minDecimals: number = 0
): string {
  let numValue: number;
  
  if (typeof value === 'bigint') {
    numValue = Number(value);
  } else {
    numValue = value;
  }

  return numValue.toLocaleString(undefined, {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: decimals
  });
}

// Format token amount with decimals
export function formatTokenAmount(
  amount: bigint, 
  decimals: number,
  displayDecimals: number = 4
): string {
  if (!amount || amount === 0n) return "0";
  
  const divisor = 10n ** BigInt(decimals);
  const whole = amount / divisor;
  const fractional = amount % divisor;
  
  if (fractional === 0n) {
    return whole.toString();
  }
  
  // Convert fractional part to string with leading zeros
  const fractionalStr = fractional.toString().padStart(decimals, '0');
  
  // Trim trailing zeros
  let fractionalTrimmed = fractionalStr;
  while (fractionalTrimmed.endsWith('0') && fractionalTrimmed.length > displayDecimals) {
    fractionalTrimmed = fractionalTrimmed.slice(0, -1);
  }
  
  return `${whole.toString()}.${fractionalTrimmed}`;
}

// Shorten an Ethereum address
export function shortenAddress(address: string, chars = 4): string {
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}

// Format USD values
export function formatUSD(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}