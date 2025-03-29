'use client';

import React, { createContext, useContext } from 'react';

// Create context
const DataContext = createContext();

// Sample portfolio data - you would replace this with your actual projects
const projects = [
  {
    id: 1,
    title: "In Progress: CNC Router",
    category: "Manufacture",
    description: "Designing and assembling a CNC Router from scratch.",
    fullDescription: "Working with a small design team towards creating a fully functional CNC router from scratch.",
    images: ["CNC_Top.png", "CNC_Front.png", "CNC_Extrusions.jpg"],
    videos: [],
    documents: [],
    cadFiles: []
  },
  {
    id: 2,
    title: "2023 FIRST Robotics Competition (Charged Up)",
    category: "Robotics",
    description: "Designed and manufactured the gripper mechanism for the 2023 FIRST Robotics Competition robot.",
    fullDescription: "Leading a small design team, I worked on the development of the gripper mechanism for the 2023 FIRST Robotics Competition robot. Our design features an aluminum frame, an imbedded color sensor for detecting the game piece type, a combination of compliant wheels and compliant stars for fast intake, a constant-force spring for passive gripping, a driving motor to increase gripping compression, and a seated camera for driver alignment and control.",
    images: ["VERMILION_Front.jpg", "VERMILION.png"],
    videos: ["VERMILION_Gripper_Test.mov", "VERMILION_Drive_Test.MOV"],
    documents: ["GRT_2023_Technical_Binder.pdf", "GRT_2023_Impact_Booklet.pdf"],
    // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {
    id: 3,
    title: "2022 FIRST Robotics Competition (Rapid React)",
    category: "Robotics",
    description: "Designed an manufactured the indexing mechanism for the 2022 FIRST Robotics Competition robot.",
    fullDescription: "Leading a small design team, I worked on the development of the indexing mechanism for the 2022 First Robotics Competition Robot. Our design features an aluminum frame, color sensors to detect the index location of game pieces, custom roughtop rollers, polycarbonate walls, and callibrated compression for consistent vertical feeding.",
    images: ["DAEDALUS_2.jpg", "DAEDALUS_3.jpg", "DAEDALUS_4.jpg", "DAEDALUS_6.jpg", "DAEDALUS_1.jpg", "DAEDALUS_5.jpg", "DAEDALUS_Full_Robot_CAD.png","DAEDALUS_Internals_CAD.png"],
    videos: ["DAEDALUS_Index.MOV"],
    documents: [],
    // cadFiles: ["GRT_2022_Full_Robot_Assembly.step", "GRT_2022_Internals_Assembly.step"]
  },
  {
    id: 4,
    title: "Senior Floats",
    category: "Wood Working",
    description: "Designed, manufactured, and assembled a wood replica of the Apollo 11 Lunar Lander Module for Homecoming. ",
    fullDescription: "I worked with the Gunn 2023 Senior Class to design, manufacture, and assemble a wood replica of the Apollo 11 Lunar Lander Module for our annual Homecoming Competition. ",
    images: ["FLOATS_Bottom.jpg", "FLOATS_Top.jpg", "FLOATS_Cool.jpg", "FLOATS_CAD.png", "FLOATS_CAD_COMP.png",  "FLOATS_Salute.jpg"],
    videos: ["FLOATS_Hatch.mp4", "FLOATS_Smoke.mp4"],
    documents: [],
    cadFiles: []
  }, 
  {
    id: 5,
    title: "Machine Shop Training (Milling Machine)",
    category: "Manufacture",
    description: "Designed and implemented a milling machine training program for members of the Gunn Robotics Team.",
    fullDescription: "Over the 2022-2023 academic year, I acted as Mill Lead for the Gunn Robotics Team. I personally designed and instructed a mill operation curriculum, teaching team members how to operate the machine safely and efficiently, supervising and advising use. I also designed \"replication parts\" assignments for students to exercise these manufacturing skills.",
    images: ["GRT-2023-Rep-Part(Rookie).jpeg", "GRT-2023-Rep-Part(Vet).jpeg"],
    videos: [],
    documents: ["MILL_Curriculum.pdf", "MILL_Homework_Packet(Blank).pdf", "MILL_Homework_Packet(Key).pdf", "MILL_In_Class_Handout(Blank).pdf", "MILL_In_Class_Handout(Key).pdf"],
    cadFiles: []
  },
  {
    id: 6,
    title: "Trumpet Project",
    category: "Robotics",
    description: "Manufactured a trumpet-playing prosthesis.",
    fullDescription: "I manufactured and assembled the final iteration of the trumpet-playing prosthesis, finalized by the previous design team.",
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
    "Currently studying at Foothill College"
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

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ projects, aboutContent }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}