export default function DisclaimerPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="border-b border-gray-700 p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Disclaimer</h1>
              <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. General Disclaimer</h2>
                <p className="text-gray-300">
                  The information provided on SwapX is for general informational purposes only. 
                  While we strive to keep the information up to date and correct, we make no 
                  representations or warranties of any kind, express or implied, about the 
                  completeness, accuracy, reliability, suitability, or availability of the 
                  information, products, services, or related graphics contained on the platform.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Cryptocurrency and DeFi Risks</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-red-400">Market Volatility</h3>
                    <p className="text-gray-300">
                      Cryptocurrency markets are highly volatile and unpredictable. The value of 
                      digital assets can fluctuate dramatically in short periods. You should be 
                      prepared to lose some or all of your investment.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-red-400">Smart Contract Risks</h3>
                    <p className="text-gray-300">
                      DeFi protocols rely on smart contracts that may contain bugs or vulnerabilities. 
                      While we conduct security audits, there is no guarantee that our smart contracts 
                      are completely secure or free from exploits.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-red-400">Impermanent Loss</h3>
                    <p className="text-gray-300">
                      Providing liquidity to pools carries the risk of impermanent loss. When the 
                      price ratio of the tokens in a pool changes, you may receive fewer tokens 
                      than you initially deposited.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-red-400">Slippage and Price Impact</h3>
                    <p className="text-gray-300">
                      Large trades may experience significant slippage, resulting in worse execution 
                      prices than expected. This is especially true for less liquid tokens.
                    </p>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. No Financial Advice</h2>
                <div className="bg-gray-800/50 border border-yellow-500/30 p-4 rounded-lg">
                  <p className="text-yellow-400">
                    The information on this platform does not constitute financial advice, investment 
                    advice, trading advice, or any other sort of advice. You should not treat any 
                    of the platform&apos;s content as such. We recommend consulting with a qualified 
                    financial advisor before making any investment decisions.
                  </p>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Regulatory Considerations</h2>
                <p className="text-gray-300">
                  Cryptocurrency and DeFi regulations vary by jurisdiction and are rapidly evolving. 
                  It is your responsibility to understand and comply with applicable laws and 
                  regulations in your jurisdiction. We do not guarantee compliance with any 
                  specific regulatory requirements.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Technical Risks</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-orange-400">Network Issues</h3>
                    <p className="text-gray-300">
                      Blockchain networks may experience congestion, delays, or outages that could 
                      affect transaction processing times and costs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-orange-400">Wallet Security</h3>
                    <p className="text-gray-300">
                      You are responsible for the security of your private keys and wallet. 
                      We cannot recover lost or stolen private keys.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-orange-400">Frontend Risks</h3>
                    <p className="text-gray-300">
                      While we strive to provide a secure interface, frontend applications can be 
                      vulnerable to various attacks. Always verify transactions before confirming.
                    </p>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
                <div className="bg-gray-800/50 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-red-400">
                    In no event shall SwapX, its developers, contributors, or affiliates be liable 
                    for any direct, indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of profits, data, or use, arising out of or 
                    in connection with the use of our platform.
                  </p>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Third-Party Services</h2>
                <p className="text-gray-300">
                  Our platform may integrate with third-party services, including wallet providers, 
                  blockchain networks, and other DeFi protocols. We are not responsible for the 
                  availability, accuracy, or security of these third-party services.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">8. No Guarantees</h2>
                <p className="text-gray-300 mb-4">
                  We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>The platform will be available at all times</li>
                  <li>Transactions will execute at expected prices</li>
                  <li>Smart contracts are completely secure</li>
                  <li>Liquidity pools will maintain their value</li>
                  <li>Regulatory compliance in all jurisdictions</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">9. User Responsibility</h2>
                <p className="text-gray-300 mb-4">
                  By using our platform, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>You understand the risks involved in DeFi trading</li>
                  <li>You are responsible for your own investment decisions</li>
                  <li>You will not hold us liable for any losses</li>
                  <li>You will comply with applicable laws and regulations</li>
                  <li>You will maintain the security of your wallet and private keys</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">10. Updates to Disclaimer</h2>
                <p className="text-gray-300">
                  We may update this disclaimer from time to time. We will notify you of any material 
                  changes by posting the updated disclaimer on this page and updating the &ldquo;Last Updated&rdquo; date.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this disclaimer, please contact us at:
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