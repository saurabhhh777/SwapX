export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Cookie Policy</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Use Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800">Essential Cookies</h3>
                <p className="mb-2">These cookies are necessary for the website to function properly. They include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Authentication and security cookies</li>
                  <li>Session management cookies</li>
                  <li>Wallet connection cookies</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800">Analytics Cookies</h3>
                <p className="mb-2">These cookies help us understand how visitors interact with our website:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Page views and navigation patterns</li>
                  <li>Feature usage statistics</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-gray-800">Preference Cookies</h3>
                <p className="mb-2">These cookies remember your settings and preferences:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Theme preferences (light/dark mode)</li>
                  <li>Language settings</li>
                  <li>Default token selections</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that also place cookies on your device:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics providers:</strong> To understand website usage</li>
              <li><strong>Wallet providers:</strong> To enable blockchain interactions</li>
              <li><strong>Security services:</strong> To protect against fraud and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser settings: Most browsers allow you to block or delete cookies</li>
              <li>Browser extensions: Use privacy-focused extensions to manage cookies</li>
              <li>Our settings: Use our cookie preferences panel (if available)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website, 
              particularly wallet connections and trading features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cookie Retention</h2>
            <p className="mb-4">
              We retain cookies for different periods depending on their purpose:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Retained for up to 2 years</li>
              <li><strong>Essential cookies:</strong> Retained as long as necessary for functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any material 
              changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> privacy@swapx.com</p>
              <p className="mb-2"><strong>GitHub:</strong> github.com/saurabhhh777/swapxcontract</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
