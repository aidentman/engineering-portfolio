'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  
  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-red-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/about" className="px-2 py-1">
            Aiden Man
          </Link>
        </h1>
        <div className="space-x-6">
          <Link 
            href="/" 
            className={`px-2 py-1 ${isActive('/') ? 'border-b-2 border-white' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/projects" 
            className={`px-2 py-1 ${isActive('/projects') ? 'border-b-2 border-white' : ''}`}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className={`px-2 py-1 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`px-2 py-1 ${isActive('/contact') ? 'border-b-2 border-white' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;