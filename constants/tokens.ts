export interface Token {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
    logo: string;
    chain: 'ethereum' | 'polygon' | 'solana';
}

// Ethereum/Polygon tokens
export const tokens: Token[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    logo: '/tokens/eth.png',
    chain: 'ethereum'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0xA0b86a33E6441b8C4C8C8C8C8C8C8C8C8C8C8C8',
    decimals: 6,
    logo: '/tokens/usdc.png',
    chain: 'ethereum'
  },
  {
    symbol: 'SWAPX',
    name: 'SwapX Token',
    address: '0x1234567890123456789012345678901234567890',
    decimals: 18,
    logo: '/tokens/swapx.png',
    chain: 'ethereum'
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    address: '0x0000000000000000000000000000000000001010',
    decimals: 18,
    logo: '/tokens/matic.png',
    chain: 'polygon'
  }
];

// Solana tokens
export const solanaTokens: Token[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    address: 'So11111111111111111111111111111111111111112', // Wrapped SOL
    decimals: 9,
    logo: '/tokens/sol.png',
    chain: 'solana'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    decimals: 6,
    logo: '/tokens/usdc.png',
    chain: 'solana'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    decimals: 6,
    logo: '/tokens/usdt.png',
    chain: 'solana'
  },
  {
    symbol: 'RAY',
    name: 'Raydium',
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    decimals: 6,
    logo: '/tokens/ray.png',
    chain: 'solana'
  },
  {
    symbol: 'SRM',
    name: 'Serum',
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    decimals: 6,
    logo: '/tokens/srm.png',
    chain: 'solana'
  },
  {
    symbol: 'ORCA',
    name: 'Orca',
    address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    decimals: 6,
    logo: '/tokens/orca.png',
    chain: 'solana'
  }
];

// Combined tokens array
export const allTokens = [...tokens, ...solanaTokens];

// Default tokens for different chains
export const defaultTokens = {
  ethereum: tokens[0], // ETH
  polygon: tokens[3],  // MATIC
  solana: solanaTokens[0], // SOL
};

export const getNativeToken = (chain: string): Token => {
  return allTokens.find(t => t.chain === chain) || defaultTokens.ethereum;
};
  
  export const getTokensForChain = (chain: string): Token[] => {
    return allTokens.filter(token => token.chain === chain);
  };