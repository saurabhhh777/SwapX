"use client";

import { useEffect, useRef, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import type { Connector } from 'wagmi';

export default function WalletConnectButton() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <button className="bg-border text-foreground px-4 py-2 rounded-lg animate-pulse">
        Loading...
      </button>
    );
  }

  if (isConnected) {
    return (
      <button 
        onClick={() => disconnect()}
        className="bg-foreground text-background px-4 py-2 rounded-lg"
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </button>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-foreground text-background px-4 py-2 rounded-lg"
      >
        Connect Wallet
      </button>
      {open && (
        <div className="absolute bg-card border border-border rounded-xl mt-2 w-56 right-0 shadow-xl z-50">
          {connectors.length === 0 && (
            <div className="px-4 py-3 text-muted">No wallets found</div>
          )}
          {connectors.map((connector: Connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-background rounded-xl first:rounded-t-xl last:rounded-b-xl"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}