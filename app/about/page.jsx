'use client';

import React from 'react';
import { useData } from '@/components/DataProvider';

export default function AboutPage() {
  const { aboutContent } = useData();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="md:flex">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-red-300">
            <img 
              src="/images/pfp.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{aboutContent.name}</h2>
          <h3 className="text-xl text-red-700 mb-4">{aboutContent.title}</h3>
          <p className="text-gray-700 mb-6">{aboutContent.bio}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Education</h4>
            <ul className="list-disc pl-5 text-gray-700">
              {aboutContent.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Skills & Experience</h4>
            <div className="flex flex-wrap gap-2">
              {aboutContent.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}