// Mainnet
const MAINNET_ROUTER = "0x1234567890abcdef1234567890abcdef12345678";
const MAINNET_FACTORY = "0xabcdef1234567890abcdef1234567890abcdef12";

// Testnet
const TESTNET_ROUTER = "0x0987654321fedcba0987654321fedcba09876543";
const TESTNET_FACTORY = "0xba9876543210fedcba0987654321fedcba098765";

// Current chain configuration
export const SWAPX_ROUTER_ADDRESS = 
  process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true" 
    ? TESTNET_ROUTER 
    : MAINNET_ROUTER;

export const SWAPX_FACTORY_ADDRESS = 
  process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true" 
    ? TESTNET_FACTORY 
    : MAINNET_FACTORY;

export const SWAPX_TOKEN_ADDRESS = {
  1: "0xSwapXMainnetTokenAddress",
  5: "0xSwapXGoerliTokenAddress",
  137: "0xSwapXPolygonTokenAddress",
  80001: "0xSwapXMumbaiTokenAddress"
};