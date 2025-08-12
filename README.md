# SwapX - Multi-Chain DEX

A modern decentralized exchange supporting Ethereum, Polygon, and Solana with a clean, responsive UI.

## Features

- **Multi-Chain Support**: Swap tokens on Ethereum, Polygon, and Solana
- **Modern UI**: Clean, responsive design with dark/light mode
- **Real-time Quotes**: Get live swap quotes using Jupiter API for Solana
- **Wallet Integration**: Support for MetaMask (Ethereum/Polygon) and Phantom (Solana)
- **Token Management**: Comprehensive token lists for all supported chains

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom semantic color palette
- **State Management**: Zustand with persistence
- **Blockchain**: 
  - Ethereum/Polygon: wagmi, viem
  - Solana: @solana/web3.js, @solana/spl-token
- **APIs**: 
  - Helius RPC for Solana
  - Jupiter API for Solana swaps
- **UI Components**: Shadcn/ui, Lucide React icons
- **Fonts**: Poppins (headings), Jost (body text)

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/swapx.git
   cd swapx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file with the following variables:
   ```env
   # Helius API Configuration
   NEXT_PUBLIC_HELIUS_RPC_URL=https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY
   
   # Ethereum/Polygon RPC URLs
   NEXT_PUBLIC_MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   ```

4. **Get API Keys**
   - **Helius**: Sign up at [helius.xyz](https://helius.xyz) for Solana RPC
   - **Alchemy**: Sign up at [alchemy.com](https://alchemy.com) for Ethereum/Polygon RPC

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Solana Integration

The app uses Helius RPC and Jupiter API for Solana token swaps:

### Helius Service (`lib/helius.ts`)
- RPC connection to Solana network
- Token balance queries
- Transaction execution

### Jupiter Integration
- Real-time swap quotes
- Optimal routing across DEXs
- Transaction building and execution

### Usage Example
```typescript
import { heliusSwapService } from '@/lib/helius';

// Get a quote
const quote = await heliusSwapService.getQuote(
  'So11111111111111111111111111111111111111112', // SOL
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
  1000000000, // 1 SOL (in lamports)
  50 // 0.5% slippage
);

// Execute swap
const result = await heliusSwapService.executeSwap(swapTx, wallet);
```

## Project Structure

```
swapx/
├── app/                    # Next.js app router pages
├── components/             # React components
│   ├── ui/                # Shadcn/ui components
│   └── ...                # Custom components
├── constants/             # Token lists, ABIs, addresses
├── hooks/                 # Custom React hooks
│   ├── useSwap.ts         # Ethereum/Polygon swaps
│   └── useSolanaSwap.ts   # Solana swaps
├── lib/                   # Utilities and services
│   ├── helius.ts          # Helius API service
│   ├── wagmi.ts           # Ethereum configuration
│   └── ...                # Other utilities
├── stores/                # Zustand state stores
└── public/                # Static assets
```

## Supported Tokens

### Ethereum/Polygon
- ETH/MATIC (native)
- USDC
- SWAPX (custom token)

### Solana
- SOL (native)
- USDC
- USDT
- RAY (Raydium)
- SRM (Serum)
- ORCA

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
