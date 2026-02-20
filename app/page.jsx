'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/components/DataProvider';

export default function HomePage() {
  const { projects } = useData();
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-red-800 text-white p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Design. Build. Innovate.</h2>
            <p className="text-lg mb-6">Welcome to my portfolio showcasing various engineering projects I worked on.</p>
            <Link 
              href="/projects" 
              className="bg-white text-red-700 px-6 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition"
            >
              View My Work
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src={`/images/${projects.find(p => p.id === 5)?.images[0]}`}
              alt="Featured project" 
              className="w-full h-[300px] object-cover" 
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 4].map(id => {
          const project = projects.find(p => p.id === id);
          if (!project) return null; // safeguard if ID is not found
          return (
            <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={`/images/${project.images[0]}`}
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <Link
                href={`/projects/${project.id}`}  // Use dynamic route matching
                className="mt-4 text-red-700 font-medium hover:text-red-800 inline-block"
              >
                View Details →
              </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}