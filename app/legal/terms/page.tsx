export default function TermsPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="border-b border-gray-700 p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Terms of Use</h1>
              <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using SwapX (&ldquo;the Platform&rdquo;), you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  SwapX is a decentralized exchange (DEX) platform that allows users to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Swap ERC-20 tokens on Ethereum-compatible blockchains</li>
                  <li>Provide liquidity to trading pairs</li>
                  <li>Earn fees from trading activities</li>
                  <li>Access DeFi services through smart contracts</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. User Eligibility</h2>
                <p className="text-gray-300 mb-4">
                  To use our platform, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Be at least 18 years old</li>
                  <li>Have the legal capacity to enter into agreements</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not be located in a jurisdiction where our services are prohibited</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Wallet Connection</h2>
                <p className="text-gray-300 mb-4">
                  Our platform requires you to connect a cryptocurrency wallet to access services. 
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Maintaining the security of your private keys</li>
                  <li>Ensuring your wallet is compatible with our platform</li>
                  <li>Verifying all transactions before confirmation</li>
                  <li>Understanding the risks associated with DeFi transactions</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Trading and Liquidity</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-blue-400">Token Swaps</h3>
                    <p className="text-gray-300 mb-3">
                      When swapping tokens, you acknowledge that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Prices may fluctuate between transaction submission and execution</li>
                      <li>Slippage may occur, especially for large trades</li>
                      <li>Transaction fees and gas costs apply</li>
                      <li>All transactions are irreversible once confirmed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-purple-400">Liquidity Provision</h3>
                    <p className="text-gray-300 mb-3">
                      When providing liquidity, you understand:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Risk of impermanent loss</li>
                      <li>Pool fees are distributed proportionally</li>
                      <li>Liquidity can be withdrawn at any time</li>
                      <li>Pool performance depends on market conditions</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Prohibited Activities</h2>
                <p className="text-gray-300 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Use the platform for illegal activities</li>
                  <li>Attempt to manipulate prices or exploit vulnerabilities</li>
                  <li>Interfere with the platform&apos;s operation or security</li>
                  <li>Use automated trading bots without permission</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Intellectual Property</h2>
                <p className="text-gray-300">
                  The platform, including its content, features, and functionality, is owned by SwapX 
                  and is protected by copyright, trademark, and other intellectual property laws. 
                  You may not copy, modify, or distribute our content without permission.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Fees and Charges</h2>
                <p className="text-gray-300 mb-4">
                  Our platform charges fees for various services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-blue-400">Trading fees:</strong> Applied to all token swaps</li>
                  <li><strong className="text-blue-400">Gas fees:</strong> Network transaction costs</li>
                  <li><strong className="text-blue-400">Liquidity fees:</strong> Shared with liquidity providers</li>
                </ul>
                <p className="mt-4 text-gray-400 text-sm">
                  Fee structures may change with notice. All fees are non-refundable.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
                <p className="text-gray-300">
                  SwapX shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including but not limited to loss of profits, data, or use, 
                  arising out of or in connection with the use of our platform.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">10. Indemnification</h2>
                <p className="text-gray-300">
                  You agree to indemnify and hold harmless SwapX, its officers, directors, employees, 
                  and agents from any claims, damages, or expenses arising from your use of the platform 
                  or violation of these terms.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">11. Termination</h2>
                <p className="text-gray-300">
                  We may terminate or suspend your access to the platform at any time, with or without 
                  cause, with or without notice. You may also terminate your use of the platform at any time.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">12. Governing Law</h2>
                <p className="text-gray-300">
                  These terms shall be governed by and construed in accordance with the laws of the 
                  jurisdiction where SwapX operates, without regard to its conflict of law provisions.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">13. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. We will notify users of 
                  material changes by posting the updated terms on this page and updating the 
                  &ldquo;Last Updated&rdquo; date.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">14. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these terms, please contact us at:
                </p>
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <p className="mb-2 text-gray-300"><strong className="text-blue-400">Email:</strong> legal@swapx.com</p>
                  <p className="mb-2 text-gray-300"><strong className="text-blue-400">GitHub:</strong> github.com/saurabhhh777/swapxcontract</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }