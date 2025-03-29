import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';
import { DataProvider } from '@/components/DataProvider';  //Import DataProvider

export const metadata = {
  title: 'Aiden Man - Engineering Portfolio',
  description: 'This is my engineering portfolio, showcasing various engineering projects I worked on.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/Baymax.ico" type="image/ico" />
      </head>
      
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
