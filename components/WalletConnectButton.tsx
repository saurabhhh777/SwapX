"use client";

import { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import type { Connector } from 'wagmi';

export default function WalletConnectButton() {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="bg-gray-300 text-white px-4 py-2 rounded-lg animate-pulse">
        Loading...
      </button>
    );
  }

  if (isConnected) {
    return (
      <button 
        onClick={() => disconnect()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </button>
    );
  }

  return (
    <div className="relative group">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Connect Wallet
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-1 w-48 right-0">
        {connectors.map((connector: Connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  );
}