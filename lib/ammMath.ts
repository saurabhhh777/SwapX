export class AMMMath {
    static calculateOutputAmount(
      inputAmount: bigint,
      inputReserve: bigint,
      outputReserve: bigint
    ): bigint {
      if (inputReserve === 0n || outputReserve === 0n) return 0n;
      
      const numerator = inputAmount * outputReserve;
      const denominator = inputReserve + inputAmount;
      return numerator / denominator;
    }
  
    static calculateLiquidityTokens(
      amountA: bigint,
      reserveA: bigint,
      totalSupply: bigint
    ): bigint {
      if (reserveA === 0n) return amountA;
      return (amountA * totalSupply) / reserveA;
    }
  }