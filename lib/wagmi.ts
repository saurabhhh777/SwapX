import { createConfig, http } from 'wagmi'
import { mainnet, polygon } from 'viem/chains' 


export const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_MAINNET_RPC_URL),
    [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC_URL),
  },
})