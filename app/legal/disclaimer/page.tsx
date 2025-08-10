export default function DisclaimerPage() {
    return (
      <div className="min-h-screen bg-background text-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
            <div className="border-b border-border p-6">
              <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
              <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="p-6 md:p-8 text-muted">
              <p>Disclaimer content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }