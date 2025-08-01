"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import logo from "@public/favicon.ico"

const WalletConnectButton = dynamic(
  () => import('@/components/WalletConnectButton'),
  { ssr: false }
);

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="SwapX" />
              <span className="ml-2 text-xl font-bold text-gray-900">SwapX</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Swap
              </Link>
              <Link href="/liquidity" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Liquidity
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}