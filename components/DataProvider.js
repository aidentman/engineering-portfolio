'use client';

import React, { createContext, useContext } from 'react';

// Create context
const DataContext = createContext();

// Sample portfolio data - you would replace this with your actual projects
const projects = [
  {  
  id: 0,
  title: "UR10e Simulation Project",
  category: "Robotics",
  description: "Created a model simulation for the UR10e robotic arm (6-axis industrial robotic arm) using Simulink.",
  fullDescription: "I built a simulator for the UR10e (6-axis industrial robotic arm) using the Simscape multibody addon in Simulink. I imported an assembly from SolidWorks, assigning mates and creating input connections between joints and ports to control each individual rotational axis. I connected a GameCube controller to the signal inputs using the VR Controller Input for interactive input. To verify the position and velocity outputs, I used my knowledge in dynamics to track the position and velocity of the end effector based on each joint position and velocity.",
  skills: ["MATLAB", "Simulink", "Simscape", "SolidWorks", "Dynamics"],
  images: ["UR10_Solidworks_Assembly.png", "UR10_Specs.jpg", "UR10_Math.jpg", "UR10_All_Blocks.png", "UR10_Button_Blocks.png", "UR10_Stick_Blocks.png", "UR10_Comp_Blocks.png", "UR10_Simscape_Assembly.png", "UR10_Calibration_Script.png", "UR10_Math_Model_Script.png"],
  videos: ["UR10_Demo.mp4"],
  // documents: ["GRT_2023_Technical_Binder.pdf", "GRT_2023_Impact_Booklet.pdf"],
  // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {
    id: 1,
    title: "CNC Router",
    category: "Manufacture",
    description: "Designed a CNC Router from scratch.",
    fullDescription: "Worked with a design team of 10+ members towards designing a fully functional CNC router from scratch, capable of milling wood and aluminum over a 59\"x40\"x4\" work area. We assembled the mechanical design in CAD software (Onshape), and are working toward confirming electronics and full assembly.",
    skills: ["CAD (Onshape)", "Project Leadership"], 
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
    fullDescription: "Leading a design team of 10+ members, I worked on the development of the gripper mechanism for the 2023 FIRST Robotics Competition robot. Our design features an aluminum frame, an imbedded color sensor for detecting the game piece type, a combination of compliant wheels and compliant stars for fast intake, a constant-force spring for passive gripping, a driving motor to increase gripping compression, and a seated camera for driver alignment and control.",
    skills: ["CAD (Onshape)", "Mill Operation", "Lathe Operation", "Hand Tools", "Prototyping", "Design", "Manufacture", "Assembly", "Project Leadership", "Robotics"],
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
    fullDescription: "Leading a design team of 10+ members, I worked on the development of the indexing mechanism for the 2022 First Robotics Competition Robot. Our design features an aluminum frame, color sensors to detect the index location of game pieces, custom roughtop rollers, polycarbonate walls, and callibrated compression for consistent vertical feeding.",
    skills: ["CAD (Onshape)", "Mill Operation", "Lathe Operation", "Hand Tools", "Prototyping", "Design", "Manufacture", "Assembly", "Project Leadership", "Robotics"],
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
    skills: ["CAD (Onshape)", "Hand Tools", "Wood Working", "Manufacture", "Large-scale Assembly"],
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
    skills: ["Mill Operation", "Curriculum Design", "Teaching/Training", "Manufacture"],
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
    fullDescription: "As part of an outreach project with the Gunn Robotics team, I executed the 3D printing and assembly of a team-designed trumpet-playing prosthesis",
    skills: ["3D Printing", "Soldering", "Manufacture", "Assembly", "Robotics"],
    images: ["TRUMPET_Side.png"],
    videos: [],
    documents: ["Trumpet_Mechanism_Guide.pdf"],
    cadFiles: []
  }
];

// About me content
const aboutContent = {
  name: "Aiden Man",
  title: "Mechanical Engineer",
  bio: "I am currently an undergraduate mechanical engineering student UC Berkeley, with extensive experience in CAD design and hands-on fabrication. I have demonstrated leadership in managing engineering projects and teams, with particular strength in design, fabrication, prototype development, and robotics. My career interests lie in robotics, manufacture, and materials.",
  education: [
    "B.S. in Mechanical Engineering, UC Berkeley (Expected Graduation: 2027)"
  ],
  skills: [
    "Onshape (CAD)", "Solidworks (CAD/FEA)", "Fusion 360 (CAD)", "Autodesk Inventor (CAD)", "Ansys (FEA/CFD)",
    "C++", "Python", "MATLAB", 
    "Hand Tools", "Manual Mill", "Manual Lathe", "3D Printing", "Soldering",
    "Organizing/Leading Group Projects", "Prototyping", "Mechanical Design", "Fabrication", "Assembly"
    
    // "ASE (Python Library)", "Ovito", "LAMMPS", "Numpy", "Scipy.spatial", "matplotlib", "DFT"
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