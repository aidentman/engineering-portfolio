'use client';

import React from 'react';
import { useData } from '@/components/DataProvider';
import ContactForm from '@/components/contact-form';

export default function AboutPage() {
  const { aboutContent } = useData();

  return (
    <div className="max-w-2xl mx-auto">
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex items-center mb-3 text-gray-700">
          <svg className="w-6 h-6 text-red-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>
            <a href={`mailto:${aboutContent.contact.email}`} className="hover:text-red-700">
            {aboutContent.contact.email}
            </a>
          </span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <svg className="w-6 h-6 text-red-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          <span>
            <a href={aboutContent.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-red-700">
              LinkedIn Profile
            </a>
          </span>
        </div>
      </div>
      
      <ContactForm />
    </div>
  </div>
);
}