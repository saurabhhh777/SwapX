"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRightLeft, Coins, Menu, X, BarChart } from "lucide-react";
import { useState } from "react";

const WalletConnectButton = dynamic(
  () => import("@/components/WalletConnectButton"),
  { ssr: false }
);

const navLinks = [
  { 
    href: "/swap", 
    label: "Swap",
    icon: <ArrowRightLeft className="h-4 w-4" />
  },
  { 
    href: "/liquidity", 
    label: "Liquidity",
    icon: <Coins className="h-4 w-4" />
  },
  { 
    href: "/dashboard", 
    label: "Dashboard",
    icon: <BarChart className="h-4 w-4" />
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SX</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SwapX
            </span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors px-3 py-2 rounded-lg",
                pathname === link.href
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Wallet Connect + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <WalletConnectButton />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 text-sm font-medium transition-colors px-3 py-3 rounded-lg",
                  pathname === link.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}