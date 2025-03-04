'use client';

import React, { useState } from 'react';

const EngineeringPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [expandedProject, setExpandedProject] = useState(null);
  
  // Sample portfolio data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "2023 FIRST Robotics Competion (Charged Up)",
      category: "Robotics",
      description: "Designed and manufactured the gripper mechanism for the 2023 FIRST Robotics Competition robot.",
      fullDescription: "Leading a small design team, I worked on the development of the gripper mechanism for the 2023 FIRST Robotics Competition robot. Our design features an aluminum frame, an imbedded color sensor for detecting the game piece type, combination of compliant wheels and compliant stars for fast intake, a constant-force spring for passive gripping, a driving motor to increase gripping compression, and a seated camera for driver alignment and control.",
      images: ["VERMILION_Front.jpg", "VERMILION.png"],
      videos: ["VERMILION_Gripper_Test.mov", "VERMILION_Drive_Test.MOV"],
      documents: ["GRT_2023_Technical_Binder.pdf", "GRT_2023_Impact_Booklet.pdf"],
      // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
    },
    {
      id: 2,
      title: "2022 FIRST Robotics Competition (Rapid React)",
      category: "Robotics",
      description: "Designed an manufactured the indexing mechanism for the 2022 FIRST Robotics Competition robot.",
      fullDescription: "Leading a small design team, I worked on the development of the indexing mechanism for the 2022 FRC Robot. Our design features an aluminum frame, color sensors to detect the color and location of game pieces, custom roughtop rollers, polycarbonate walls, and well-adjusted compression for consistent vertical feeding into the shooter.",
      images: ["DAEDALUS_Side.jpg", "DAEDALUS_Full_Robot_CAD.png", "DAEDALUS_Internals_CAD.png", "DAEDALUS_Index.jpg"],
      videos: ["DAEDALUS_Index.MOV"],
      documents: [],
      // cadFiles: ["GRT_2022_Full_Robot_Assembly.step", "GRT_2022_Internals_Assembly.step"]
    },
    {
      id: 3,
      title: "Senior Floats",
      category: "Robotics",
      description: "Designed and manufactured the structure of the ",
      fullDescription: "I worked with 2023 senior class to design, manufacture, and assemble a wood replica of the Apollo 11 Lunar Lander Module. ",
      images: ["FLOATS_Bottom.jpg", "FLOATS_Top.jpg", "FLOATS_Cool.jpg", "FLOATS_CAD.png", "FLOATS_CAD_COMP.png",  "FLOATS_Salute.jpg"],
      videos: ["FLOATS_Hatch.mp4", "FLOATS_Smoke.mp4"],
      documents: [],
      cadFiles: []
    }, 
    {
      id: 4,
      title: "Machine Shop Training (Milling Machine)",
      category: "Manufacture",
      description: "Designed and implemented a milling machine training program for members of the Gunn Robotics Team.",
      fullDescription: "Over the 2022-2023 academic year, I acted as Mill Lead for the Gunn Robotics Team. I personally designed and instructed a mill operation curriculum, teaching team members how to operate the machine safely and efficiently, supervising and advising use. I also designed “replication parts” assignments for students to exercise these manufacturing skills.",
      images: ["GRT-2023-Rep-Part(Rookie).jpeg", "GRT-2023-Rep-Part(Vet).jpeg"],
      videos: [],
      documents: ["MILL_Curriculum.pdf", "MILL_Homework_Packet(Blank).pdf", "MILL_Homework_Packet(Key).pdf", "MILL_In_Class_Handout(Blank).pdf", "MILL_In_Class_Handout(Key).pdf"],
      cadFiles: []
    },
    {
      id: 5,
      title: "Trumpet Project",
      category: "Robotics",
      description: "Manufactured a trumpet-playing prosthesis.",
      fullDescription: "I manufactured and assembled the final iteration of the trumpet-playing prosthesis, designed by the previous Gunn Robotics Team.",
      images: [],
      videos: [],
      documents: ["Trumpet_Mechanism_Guide.pdf"],
      cadFiles: []
      }
  ];
  
  // About me content
  const aboutContent = {
    name: "Aiden Man",
    title: "Mechanical Engineer",
    bio: "I'm an undergraduate student studying mechanical engineering at Foothill College. I am particularly interest in robotics, manufacture and materials.",
    education: [
      "B.S. Anywhere That Will Take Me"
    ],
    skills: [
      "Mechanical Design", "CAD", "Prototyping", 
      "Ansys (FEA)", "Organizing/Leading Group Projects", "C++",
      "Python", "MATLAB", "SolidWorks", "Onshape", 
      "Hand Tools", "Manual Mill", "Manual Lathe"
    ],
    contact: {
      email: "aidentman06@gmail.com",
      linkedin: "https://www.linkedin.com/in/aiden-man-48772b291/"
    },
    links: {
      discord:"",
      facebook: "",
      github: "https://github.com/aidentman",
      instagram: "https://www.instagram.com/aidenman_",
      linkedin: "https://www.linkedin.com/in/aiden-man-48772b291/",
      x_twitter: ""
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
      <nav className="bg-red-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
           <button 
              className={`px-2 py-1`}
              onClick={() => handleTabChange('about')}
            >
              Aiden Man
            </button>  
          </h1>
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
                <div className="md:w-1/2 bg-red-700 text-white p-8 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4">Design. Build. Innovate.</h2>
                  <p className="text-lg mb-6">Welcome to my portfolio showcasing various engineering projects I was involved in.</p>
                  <button 
                    className="bg-white text-red-800 px-6 py-2 rounded-lg font-medium w-fit hover:bg-gray-100 transition"
                    onClick={() => handleTabChange('projects')}
                  >
                    View My Work
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={`/images/${projects.find(p => p.id === 1)?.images[0]}`}
                    alt="Featured project" 
                    className="w-full h-[300px] object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(0, 3).map(project => (
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
                    <button 
                      className="mt-4 text-red-700 font-medium hover:text-red-800"
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
                      <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    </div>
                    <button 
                      className="bg-red-100 text-red-700 p-2 rounded hover:bg-red-200"
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
                      {project.images && project.images.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Project Images</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.images.map((img, index) => (
                            <div key={index} className="rounded overflow-hidden">
                              <img src={`/images/${img}`} alt={`${project.title} - image ${index + 1}`} className="w-full  object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                      )}
                      
                      
                      {/* Project Videos */}
                      {project.videos && project.videos.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Project Videos</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.videos.map((video, index) => (
                            <div key={index} className="rounded overflow-hidden">
                                  <video
                                    src={`/videos/${video}`}
                                    alt={`${project.title} - video ${index + 1}`}
                                    className="w-full object-cover"
                                    autoPlay loop muted playsInline
                                  />
                              
                              {/* <img src={img} alt={`${project.title} - image ${index + 1}`} className="w-full  object-cover" /> */}
                            
                            </div>
                          ))}
                        </div>
                      </div>
                      )}

                      {/* Project Documents */}
                      {project.documents && project.documents.length > 0 && (
                      <div>
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
                      {project.cadFiles && project.cadFiles.length > 0 && (
                      <div>
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
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-red-300">
                  <img 
                    src="/images/Profile_Picture.jpg" 
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
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition">
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
              <p className="mt-2 text-gray-400">Design. Build. Innovate.</p>
            </div>
            <div className="flex space-x-6">
            {/* Facebook (Don't Have) */}
              {/* <a href={aboutContent.links.facebook} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a> */}
            {/* Discord (Can't Do a Link) */}
              {/* <a href={aboutContent.links.discord} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
              </svg>
              </a> */}
            {/* X / Twitter (Don't Have) */}
              {/* <a href={aboutContent.links.x_twitter} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
              </a> */}
            {/* LinkedIn */}
              <a href={aboutContent.links.linkedin} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">      
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
            {/* Github */}
              <a href={aboutContent.links.github} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            {/* Instagram */}
              <a href={aboutContent.links.instagram} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
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
