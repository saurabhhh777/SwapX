import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, BookOpen, BarChart, Lock, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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
              <Button className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Trading
              </Button>
            </Link>
            <Link href="https://github.com/saurabhhh777/swapxcontract" target="_blank">
              <Button variant="outline" className="text-lg px-8 py-6 border-border text-foreground bg-card hover:bg-background">
                <Github className="mr-2 h-5 w-5" /> View GitHub 
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-1 inline-block">
              <div className="bg-background p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted">You pay</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 mr-2"></div>
                    <span>ETH</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold mb-6">1.25</div>
                
                <div className="flex justify-center my-4">
                  <div className="bg-border p-2 rounded-full">
                    <RefreshCw className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <span className="text-muted">You receive</span>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500 mr-2"></div>
                    <span>SWAPX</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold mt-2 text-purple-400">420.69</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SwapX</h2>
          <p className="text-xl text-muted">
            A next-generation DEX built on decentralized principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/80 backdrop-blur-sm border border-border hover:border-blue-500 transition-all duration-300">
            <CardHeader>
              <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <RefreshCw className="text-blue-400" />
              </div>
              <CardTitle>Token Swaps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Trade any ERC-20 token instantly with minimal slippage and competitive fees.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm border border-border hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <div className="bg-purple-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="text-purple-400" />
              </div>
              <CardTitle>Liquidity Pools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Provide liquidity to pools and earn trading fees proportional to your contribution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm border border-border hover:border-green-500 transition-all duration-300">
            <CardHeader>
              <div className="bg-green-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lock className="text-green-400" />
              </div>
              <CardTitle>Non-Custodial</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Maintain full control of your assets. No deposits, no middlemen, no surprises.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-background border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">$42M+</div>
              <div className="text-muted mt-2">Total Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">120K+</div>
              <div className="text-muted mt-2">Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">2.5K+</div>
              <div className="text-muted mt-2">Liquidity Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">0.3%</div>
              <div className="text-muted mt-2">Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-sm border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full"></div>
                <span className="text-xl font-bold">SwapX</span>
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
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="/swap" className="text-muted hover:text-foreground transition-colors">Swap</a></li>
                <li><a href="/liquidity" className="text-muted hover:text-foreground transition-colors">Liquidity</a></li>
                <li><a href="/dashboard" className="text-muted hover:text-foreground transition-colors">Analytics</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-3">
                <li><a href="https://x.com/askbunnyyy" className="text-muted hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Telegram</a></li>
                <li><a href="#" className="text-muted hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-muted mb-4">
                Get the latest updates and news
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-card border border-border rounded-l-lg px-4 py-2 w-full focus:outline-none"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-l-none rounded-r-lg">
                  Go
                </Button>
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