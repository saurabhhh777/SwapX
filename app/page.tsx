import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, BookOpen, BarChart, Lock, RefreshCw, ShieldCheck, Zap, Globe, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 relative">
        {/* Subtle grid behind hero */}
        <div className="grid-pattern" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-poppins">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">
              Decentralized Trading
            </span>
            <br />Powered by DeFi
          </h1>
          
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            SwapX is a decentralized exchange (DEX) on Ethereum-compatible blockchains. 
            Swap tokens, provide liquidity, and earn fees — all without intermediaries.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="/swap">
              <Button className="text-lg px-8 py-6 font-poppins">Start Trading</Button>
            </Link>
            <Link href="https://github.com/saurabhhh777/swapxcontract" target="_blank">
              <Button variant="outline" className="text-lg px-8 py-6 font-poppins">
                <Github className="mr-2 h-5 w-5" /> View GitHub 
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            {/* Keep soft glow within palette bounds */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md h-64 bg-foreground/5 blur-3xl rounded-full"></div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-1 inline-block">
              <div className="bg-background p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted">You pay</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-foreground mr-2"></div>
                    <span className="text-foreground">ETH</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold mb-6 text-foreground">1.25</div>
                
                <div className="flex justify-center my-4">
                  <div className="bg-border p-2 rounded-full">
                    <RefreshCw className="h-5 w-5 text-foreground/70" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <span className="text-muted">You receive</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-muted mr-2"></div>
                    <span className="text-foreground">SWAPX</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold mt-2 text-foreground">420.69</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Key Features & Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-poppins">Key Features & Benefits</h2>
          <p className="text-muted">Everything you need to trade, provide liquidity, and stay in control.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <RefreshCw className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Instant Swaps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Execute trades quickly with predictable pricing and minimal slippage.</p>
            </CardContent>
          </Card>

          {/* 2 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <BarChart className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Yield from Liquidity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Provide liquidity and earn fees from every trade in the pool.</p>
            </CardContent>
          </Card>

          {/* 3 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <Lock className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Self‑Custody</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Your keys, your crypto. No deposits or centralized risk.</p>
            </CardContent>
          </Card>

          {/* 4 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <ShieldCheck className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Secure by Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Battle‑tested architecture with transparent, auditable contracts.</p>
            </CardContent>
          </Card>

          {/* 5 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <Zap className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Low Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Optimized routing and on‑chain efficiency to keep costs down.</p>
            </CardContent>
          </Card>

          {/* 6 */}
          <Card className="bg-card/80 border-border transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-border">
                <Globe className="text-foreground" />
              </div>
              <CardTitle className="font-poppins">Multi‑Chain Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">Built to scale across EVM networks with the same interface.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-background border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground font-poppins">$42M+</div>
              <div className="text-muted mt-2">Total Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground font-poppins">120K+</div>
              <div className="text-muted mt-2">Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground font-poppins">2.5K+</div>
              <div className="text-muted mt-2">Liquidity Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground font-poppins">0.3%</div>
              <div className="text-muted mt-2">Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Reinforcement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center bg-card/60 border border-border rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">Ready to start trading?</h3>
          <p className="text-muted mb-6">Connect your wallet and make your first swap in seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/swap">
              <Button className="px-8 py-6 font-poppins secondary" variant="secondary">Start Trading</Button>
            </Link>
            <Link href="/liquidity">
              <Button className="px-8 py-6 font-poppins" variant="outline">Provide Liquidity</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-sm border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-foreground"></div>
                <span className="text-xl font-bold font-poppins">SwapX</span>
              </div>
              <p className="text-muted mb-4">
                Decentralized exchange protocol for the decentralized future.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/saurabhhh777/SwapX" className="text-muted hover:text-foreground transition-colors">
                  <Github />
                </a>
                <a href="#" className="text-muted hover:text-foreground transition-colors">
                  <BookOpen />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-poppins">Products</h3>
              <ul className="space-y-3">
                <li><a href="/swap" className="text-muted hover:text-foreground transition-colors">Swap</a></li>
                <li><a href="/liquidity" className="text-muted hover:text-foreground transition-colors">Liquidity</a></li>
                <li><a href="/dashboard" className="text-muted hover:text-foreground transition-colors">Analytics</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-poppins">Community</h3>
              <ul className="space-y-3">
                <li><a href="https://x.com/askbunnyyy" className="text-muted hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Telegram</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-poppins">Subscribe</h3>
              <p className="text-muted mb-4">
                Get the latest updates and news
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-card border border-border rounded-l-lg px-4 py-2 w-full focus:outline-none"
                />
                <Button className="rounded-l-none rounded-r-lg font-poppins">Go</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SwapX Protocol. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/legal/terms" className="text-muted hover:text-foreground text-sm transition-colors">Terms</a>
              <a href="/legal/privacy" className="text-muted hover:text-foreground text-sm transition-colors">Privacy</a>
              <a href="/legal/cookies" className="text-muted hover:text-foreground text-sm transition-colors">Cookies</a>
              <a href="/legal/disclaimer" className="text-muted hover:text-foreground text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}