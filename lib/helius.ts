import { Connection, PublicKey, VersionedTransaction } from '@solana/web3.js';

// Helius RPC endpoint
const HELIUS_RPC_URL = process.env.NEXT_PUBLIC_HELIUS_RPC_URL || 'https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY';

// Jupiter API for token swaps
const JUPITER_API_URL = 'https://quote-api.jup.ag/v6';

export class HeliusSwapService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection(HELIUS_RPC_URL, 'confirmed');
  }

  // Get token quote from Jupiter
  async getQuote(
    inputMint: string,
    outputMint: string,
    amount: number,
    slippageBps: number = 50 // 0.5% default slippage
  ) {
    try {
      const response = await fetch(`${JUPITER_API_URL}/quote`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputMint,
          outputMint,
          amount: amount.toString(),
          slippageBps,
          onlyDirectRoutes: false,
          asLegacyTransaction: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get quote');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting quote:', error);
      throw error;
    }
  }

  // Get swap transaction
  async getSwapTransaction(quoteResponse: Record<string, unknown>) {
    try {
      const response = await fetch(`${JUPITER_API_URL}/swap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quoteResponse,
          userPublicKey: quoteResponse.userPublicKey,
          wrapUnwrapSOL: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get swap transaction');
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting swap transaction:', error);
      throw error;
    }
  }

  // Execute swap transaction
  async executeSwap(
    swapTransaction: Record<string, unknown>,
    wallet: { signTransaction: (transaction: VersionedTransaction) => Promise<VersionedTransaction> } // Phantom or other Solana wallet
  ) {
    try {
      // Deserialize the transaction
      const transaction = VersionedTransaction.deserialize(
        Buffer.from(swapTransaction.swapTransaction as string, 'base64')
      );

      // Sign and send the transaction
      const signedTx = await wallet.signTransaction(transaction);
      const signature = await this.connection.sendRawTransaction(signedTx.serialize());

      // Wait for confirmation
      const confirmation = await this.connection.confirmTransaction(signature, 'confirmed');
      
      return {
        signature,
        confirmation,
      };
    } catch (error) {
      console.error('Error executing swap:', error);
      throw error;
    }
  }

  // Get token balance
  async getTokenBalance(
    walletAddress: string,
    tokenMint: string
  ) {
    try {
      const publicKey = new PublicKey(walletAddress);
      const mint = new PublicKey(tokenMint);

      const tokenAccounts = await this.connection.getParsedTokenAccountsByOwner(
        publicKey,
        { mint }
      );

      if (tokenAccounts.value.length === 0) {
        return 0;
      }

      return tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount;
    } catch (error) {
      console.error('Error getting token balance:', error);
      return 0;
    }
  }

  // Get SOL balance
  async getSolBalance(walletAddress: string) {
    try {
      const publicKey = new PublicKey(walletAddress);
      const balance = await this.connection.getBalance(publicKey);
      return balance / 1e9; // Convert lamports to SOL
    } catch (error) {
      console.error('Error getting SOL balance:', error);
      return 0;
    }
  }
}

// Export singleton instance
export const heliusSwapService = new HeliusSwapService(); 