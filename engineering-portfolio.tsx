import React, { useState } from 'react';

const EngineeringPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [expandedProject, setExpandedProject] = useState(null);
  
  // Sample portfolio data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Autonomous Drone System",
      category: "Robotics",
      description: "Designed and implemented control systems for an autonomous drone capable of navigating complex environments using computer vision.",
      fullDescription: "This project involved designing and implementing a complete control system for an autonomous drone platform. The system utilizes computer vision algorithms to identify and navigate around obstacles in real-time. I developed custom PID controllers for stabilization and created an efficient path-planning algorithm that reduced navigation time by 35% compared to conventional approaches. The project required extensive knowledge of control theory, embedded systems programming, and 3D spatial reasoning.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      documents: ["Drone System Architecture.pdf", "Control Algorithm Documentation.pdf"],
      cadFiles: ["drone_frame.step", "propeller_assembly.stp"]
    },
    {
      id: 2,
      title: "Solar-Powered Water Purification System",
      category: "Sustainable Engineering",
      description: "Developed a compact solar-powered water purification system for remote locations with limited access to clean water and electricity.",
      fullDescription: "This project addressed the critical need for clean water in remote locations with limited infrastructure. I engineered a compact, solar-powered water purification system that combines filtration, UV sterilization, and a novel energy storage solution. The system can purify up to 50 gallons of water daily while operating entirely off-grid. Key innovations include a custom-designed energy management system that optimizes power usage based on available sunlight and water processing requirements. The final design achieved a 40% reduction in manufacturing cost compared to commercial alternatives while maintaining comparable performance metrics.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      documents: ["Water Purification System Specs.pdf", "Field Test Results.pdf"],
      cadFiles: ["purification_assembly.step", "solar_panel_mount.stp"]
    },
    {
      id: 3,
      title: "Smart Building HVAC Optimization",
      category: "Energy Systems",
      description: "Created a machine learning model to optimize HVAC systems in commercial buildings, reducing energy consumption by 23%.",
      fullDescription: "I developed an intelligent HVAC optimization system for commercial buildings that reduced energy consumption by 23% while maintaining occupant comfort. The system uses a network of IoT sensors to monitor environmental conditions throughout a building in real-time. I created a custom machine learning algorithm that predicts optimal temperature settings based on occupancy patterns, weather forecasts, and historical performance data. The system includes a user-friendly dashboard for facility managers and integrates with existing building management systems through a flexible API. Implementation in a 10-story office building demonstrated annual energy savings of approximately $42,000.",
      images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
      documents: ["HVAC System Architecture.pdf", "Energy Savings Report.pdf"],
      cadFiles: ["sensor_housing.step", "control_panel.stp"]
    }
  ];
  
  // About me content
  const aboutContent = {
    name: "Aiden Man",
    title: "Mechanical Engineer & Systems Designer",
    bio: "I'm a mechanical engineer with 8+ years of experience specializing in sustainable systems design and robotics. My work focuses on creating innovative solutions to complex engineering challenges with an emphasis on energy efficiency and environmental impact.",
    education: [
      "M.S. Mechanical Engineering, Stanford University",
      "B.S. Engineering Physics, UC Berkeley"
    ],
    skills: [
      "Mechanical Design", "CAD/CAM", "Prototyping", 
      "Thermal Analysis", "Fluid Dynamics", "Control Systems",
      "Python", "MATLAB", "SolidWorks", "Fusion 360"
    ],
    contact: {
      email: "aiden@engineer-portfolio.com",
      linkedin: "linkedin.com/in/aidenman"
    }
  };
  
  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedProject(null);
  };
  
  // Handle project expansion
  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-indigo-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Aiden Man</h1>
          <div className="space-x-6">
            <button 
              className={`px-2 py-1 ${activeTab === 'home' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleTabChange('home')}
            >
              Home
            </button>
            <button 
              className={`px-2 py-1 ${activeTab === 'projects' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleTabChange('projects')}
            >
              Projects
            </button>
            <button 
              className={`px-2 py-1 ${activeTab === 'about' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleTabChange('about')}
            >
              About
            </button>
            <button 
              className={`px-2 py-1 ${activeTab === 'contact' ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleTabChange('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Home */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-indigo-700 text-white p-8 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4">Engineering Solutions for Complex Problems</h2>
                  <p className="text-lg mb-6">Welcome to my portfolio showcasing innovative engineering projects across robotics, sustainable systems, and energy optimization.</p>
                  <button 
                    className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition"
                    onClick={() => handleTabChange('projects')}
                  >
                    View My Work
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Featured project" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(0, 3).map(project => (
                <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <button 
                      className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
                      onClick={() => {
                        handleTabChange('projects');
                        setTimeout(() => toggleProject(project.id), 100);
                      }}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Engineering Projects</h2>
            
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    </div>
                    <button 
                      className="bg-indigo-100 text-indigo-800 p-2 rounded hover:bg-indigo-200"
                      onClick={() => toggleProject(project.id)}
                    >
                      {expandedProject === project.id ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mt-3">
                    {expandedProject === project.id ? project.fullDescription : project.description}
                  </p>
                  
                  {expandedProject === project.id && (
                    <div className="mt-6 space-y-6">
                      {/* Project Images */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Project Images</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.images.map((img, index) => (
                            <div key={index} className="rounded overflow-hidden">
                              <img src={img} alt={`${project.title} - image ${index + 1}`} className="w-full h-64 object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Documents */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Documentation</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.documents.map((doc, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded flex items-center">
                              <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                              </svg>
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CAD Files */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">CAD Files</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.cadFiles.map((cad, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded flex items-center">
                              <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                              </svg>
                              <span>{cad}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* About */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="md:flex">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-indigo-200">
                  <img 
                    src="/api/placeholder/150/150" 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800">{aboutContent.name}</h2>
                <h3 className="text-xl text-indigo-600 mb-4">{aboutContent.title}</h3>
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
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutContent.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="flex items-center mb-3 text-gray-700">
                  <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>{aboutContent.contact.email}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span>{aboutContent.contact.linkedin}</span>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Aiden Man</h2>
              <p className="mt-2 text-gray-400">Engineering solutions for complex problems</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Aiden Man. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EngineeringPortfolio;
