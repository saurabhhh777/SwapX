export interface Token {
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    logo: string;
    chainId: number;
  }
  
  export const tokens: Token[] = [
    // Ethereum Mainnet
    {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      symbol: "WETH",
      name: "Wrapped Ether",
      decimals: 18,
      logo: "/tokens/weth.png",
      chainId: 1
    },
    {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      logo: "/tokens/usdc.png",
      chainId: 1
    },
    
    // Polygon
    {
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      symbol: "WMATIC",
      name: "Wrapped Matic",
      decimals: 18,
      logo: "/tokens/wmatic.png",
      chainId: 137
    },
    {
      address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      symbol: "USDC",
      name: "USD Coin (PoS)",
      decimals: 6,
      logo: "/tokens/usdc.png",
      chainId: 137
    },
    
    // Testnets
    {
      address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      symbol: "WETH",
      name: "Wrapped Ether",
      decimals: 18,
      logo: "/tokens/weth.png",
      chainId: 5
    },
    {
      address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
      symbol: "USDC",
      name: "USD Coin",
      decimals: 6,
      logo: "/tokens/usdc.png",
      chainId: 5
    },
    {
      address: "0xSwapXTokenAddress",
      symbol: "SWAPX",
      name: "SwapX Token",
      decimals: 18,
      logo: "/tokens/swapx.png",
      chainId: 1
    }
  ];
  
  export const getNativeToken = (chainId: number): Token => {
    return tokens.find(t => 
      (chainId === 1 && t.symbol === "WETH") ||
      (chainId === 137 && t.symbol === "WMATIC") ||
      (chainId === 5 && t.symbol === "WETH")
    )!;
  };
  
  export const getTokensForChain = (chainId: number): Token[] => {
    return tokens.filter(token => token.chainId === chainId);
  };