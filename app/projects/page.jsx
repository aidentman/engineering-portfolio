'use client';

import React from 'react';
import { useData } from '@/components/DataProvider';
import Link from 'next/link';

export default function ProjectsPage() {
  const { projects } = useData();
  
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Projects</h1>

      {/* Project Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
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


              {/* Link to the individual project page */}
              <Link
                href={`/projects/${project.id}`}  // Use dynamic route matching
                className="mt-4 text-red-700 font-medium hover:text-red-800 inline-block"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
