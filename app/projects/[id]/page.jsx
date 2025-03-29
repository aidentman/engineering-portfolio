'use client';

import React from 'react'; 
import { useParams } from 'next/navigation';  // ✅ Dynamic routing
import { useData } from '@/components/DataProvider';
import Link from 'next/link';

export default function ProjectPage() {
  const { id } = useParams();
  const { projects } = useData();

  // Convert ID to number (since params are string by default)
  const project = projects.find(p => p.id === Number(id));

  // Handle invalid ID
  if (!project) {
    return (
      <div className="text-center py-16">
        <h2 className="text-5xl font-bold text-red-700">Project Not Found</h2>
        <Link href="/projects" className="mt-4 text-red-700 font-medium hover:text-red-800 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{project.title}</h2>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-4">
            <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
            <p className="text-gray-700 mt-3">{project.fullDescription}</p>
          </div>

          {/* Project Images */}
          {project.images?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Project Images</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, index) => (
                  <div key={index} className="rounded overflow-hidden">
                    <img 
                      src={`/images/${img}`} 
                      alt={`${project.title} - image ${index + 1}`} 
                      className="w-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Videos */}
          {project.videos?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Project Videos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.videos.map((video, index) => (
                  <div key={index} className="rounded overflow-hidden">
                    <video
                      src={`/videos/${video}`}
                      className="w-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Documents */}
          {project.documents?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Documentation</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.documents.map((doc, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <span>
                      <a href={`/docs/${doc}`} target="_blank" rel="noopener noreferrer">
                        Open {doc.replace(".pdf", "").replaceAll("_", " ")}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAD Files */}
          {project.cadFiles?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">CAD Files</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.cadFiles.map((cad, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>
                      <a href={`/docs/${cad}`} download>
                        Download {cad.replace(".step", "").replaceAll("_", " ")}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back Button */}
      <Link href="/projects" className="mt-4 text-red-700 font-medium hover:text-red-800 inline-block">
        ← Back to Projects
      </Link>
    </div>
  );
}
