import './globals.css';
import ClientNavbar from '@/components/ClientNavbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <ClientNavbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}