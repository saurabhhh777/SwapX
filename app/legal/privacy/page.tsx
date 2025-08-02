export default function PrivacyPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="border-b border-gray-700 p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                <p className="text-gray-300">
                  SwapX (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, and safeguard your information when you use our decentralized 
                  exchange platform.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-blue-400">Wallet Information</h3>
                    <p className="text-gray-300 mb-3">When you connect your wallet, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Wallet address (public blockchain address)</li>
                      <li>Transaction history (public on blockchain)</li>
                      <li>Token balances (public on blockchain)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-purple-400">Usage Information</h3>
                    <p className="text-gray-300 mb-3">We may collect information about how you use our platform:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Pages visited and features used</li>
                      <li>Transaction types and frequencies</li>
                      <li>Error logs and performance data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-green-400">Technical Information</h3>
                    <p className="text-gray-300 mb-3">We may collect technical data including:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>IP address and location data</li>
                    </ul>
                  </div>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the collected information for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-blue-400">Service Provision:</strong> To provide and maintain our DEX platform</li>
                  <li><strong className="text-blue-400">Transaction Processing:</strong> To execute trades and liquidity operations</li>
                  <li><strong className="text-blue-400">Security:</strong> To protect against fraud and ensure platform security</li>
                  <li><strong className="text-blue-400">Analytics:</strong> To improve our services and user experience</li>
                  <li><strong className="text-blue-400">Compliance:</strong> To meet legal and regulatory requirements</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Blockchain Transparency</h2>
                <p className="text-gray-300 mb-4">
                  As a decentralized exchange, certain information is inherently public on the blockchain:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>All transactions are recorded on the public blockchain</li>
                  <li>Wallet addresses and transaction amounts are publicly visible</li>
                  <li>Smart contract interactions are transparent and verifiable</li>
                  <li>Liquidity pool data is publicly accessible</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Important:</strong> We cannot control or modify blockchain data once it&apos;s recorded.
                  </p>
                </div>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Information Sharing</h2>
                <p className="text-gray-300 mb-4">We do not sell, trade, or rent your personal information. We may share information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-blue-400">Service Providers:</strong> With trusted third-party services that help operate our platform</li>
                  <li><strong className="text-blue-400">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-blue-400">Security:</strong> To prevent fraud and ensure platform security</li>
                  <li><strong className="text-blue-400">Consent:</strong> With your explicit consent</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Monitoring for suspicious activities</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><strong className="text-blue-400">Access:</strong> Request information about data we hold about you</li>
                  <li><strong className="text-blue-400">Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-blue-400">Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-blue-400">Portability:</strong> Request transfer of your data</li>
                  <li><strong className="text-blue-400">Objection:</strong> Object to certain processing activities</li>
                </ul>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">8. Data Retention</h2>
                <p className="text-gray-300">
                  We retain your information for as long as necessary to provide our services and comply 
                  with legal obligations. Blockchain data is permanent and cannot be deleted.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">9. International Transfers</h2>
                <p className="text-gray-300">
                  Our services may be accessed globally. By using our platform, you consent to the 
                  transfer of your information to countries that may have different data protection laws.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">10. Children&apos;s Privacy</h2>
                <p className="text-gray-300">
                  Our platform is not intended for children under 18. We do not knowingly collect 
                  personal information from children under 18.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
                </p>
              </section>
  
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <p className="mb-2 text-gray-300"><strong className="text-blue-400">Email:</strong> privacy@swapx.com</p>
                  <p className="mb-2 text-gray-300"><strong className="text-blue-400">GitHub:</strong> github.com/saurabhhh777/swapxcontract</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }