"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRightLeft, Coins, Menu, X, BarChart, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useThemeStore } from "@/stores/themeStore";

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
  const { theme, toggleTheme } = useThemeStore();

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background font-poppins font-bold text-sm">SX</span>
            </div>
            <span className="text-xl font-semibold font-poppins">
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
                  ? "bg-background text-foreground border border-border"
                  : "text-muted hover:text-foreground hover:bg-background"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.icon}
              <span className="font-poppins">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Wallet Connect + Theme + Mobile Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="hidden md:inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-card hover:bg-background"
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <WalletConnectButton />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted hover:text-foreground focus:outline-none"
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
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border">
          <div className="px-4 py-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted font-poppins">Theme</span>
              <button
                aria-label="Toggle theme"
                onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-card hover:bg-background"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 text-sm font-medium transition-colors px-3 py-3 rounded-lg",
                  pathname === link.href
                    ? "bg-background text-foreground border border-border"
                    : "text-muted hover:text-foreground hover:bg-background"
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.icon}
                <span className="font-poppins">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}