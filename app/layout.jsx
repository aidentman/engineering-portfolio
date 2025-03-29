import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';
import { DataProvider } from '@/components/DataProvider';  //Import DataProvider

export const metadata = {
  title: 'Aiden Man - Mechanical Engineer',
  description: 'Mechanical Engineering portfolio showcasing various engineering projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col">
        {/* Wrap the entire app in the DataProvider */}
        <DataProvider>  
          <Navigation />
          <main className="container mx-auto py-8 px-4 flex-grow">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
