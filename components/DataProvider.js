'use client';

import React, { createContext, useContext } from 'react';

// Create context
const DataContext = createContext();

// Sample portfolio data - you would replace this with your actual projects
const projects = [
  {  
  id: 0,
  title: "TAFLab",
  category: "Research",
  description: "Characterized micro-wind generators and developed a testing framework for evaluating their efficiency.",
  fullDescription: "During the Fall 2025 semester, I served as an Undergraduate Researcher at the TAFLab under the supervision of Reza Alem and Arsh Khan. My research focused on the characterization of micro-wind generators, specifically establishing a testing framework to evaluate the efficiency of small-scale turbine generators. I conducted a comparative analysis of different motor topologies, including NEMA 17 and NEMA 23 stepper motors, to determine their viability for power generation. To isolate performance from wind variability, I utilized a high-torque drill to simulate consistent input speeds while measuring outputs. I designed and fabricated a custom rectification circuit to convert AC motor output into stable DC power, employing full-bridge rectifiers and smoothing capacitors. To capture data, I developed a Python-based Data Acquisition (DAQ) pipeline that interfaced with an Arduino microcontroller and an INA219 power sensor via I2C. Through rigorous sensor validation, I discovered a 53.097% inaccuracy in voltage readings due to signal noise, which led me to pivot to a current-squared power calculation (P = I^2R) using a known resistive load to ensure data fidelity. My findings highlighted the critical role of impedance matching in maximizing power yield, with the NEMA 23 motor showing a peak output of ~1500mW. I concluded the semester by developing a 3-phase bridge rectifier to expand this framework to Brushless DC (BLDC) motors.",
  skills: ["Arduino", "Circuit Design", "I2C","Python", "Matplotlib"],
  images: ["TAFLab_Callibration.jpg", "TAFLab_Circuit.jpg", "TAFLab_Power_Encoder.png", "TAFLab_Write_Data.png", "TAFLab_Graphs.png"],
  // videos: ["UR10_Demo.mp4"],
  documents: ["TAFLab_Final_Report.pdf"],
  // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {  
  id: 1,
  title: "Jornada Group",
  category: "Research",
  description: "Investigated quasi-1D (q1D) structures as potential surrogates for 2D structures in training and validating machine-learned interatomic potentials (MLIPs).",
  fullDescription: "During the summer of 2025, I served as an Undergraduate Researcher at Stanford University within the Jornada Group, under the guidance of PI Felipe H. da Jornada and mentors Johnathan Georgaras and Akash Ramdas. My research focused on investigating quasi-1D (q1D) structures as potential surrogates for 2D structures in the training and validation of machine-learned interatomic potentials (MLIPs). Specifically, I analyzed transition metal dichalcogenide bilayer configurations—including MoS2/WSe2 heterobilayers and MoS2 homobilayers across various twist angles. Utilizing the Pymoire package, I generated 48 distinct q1D and 2D structures across a range of 0 to 60 degrees. I then performed structural relaxations using trained MLIPs and visualized the resulting atomic trajectories with Ovito. To evaluate the fidelity of the q1D surrogates, I employed Python libraries (ASE, NumPy, SciPy) to conduct Voronoi and disregistry analyses, comparing positional reconstruction and Mean Displacement Error (MDE) between the q1D and 2D models. My findings indicated that significant structural reconstruction primarily occurs at twist angles near 0, 30, and 60, and that MDE remains consistent post-relaxation, with higher accuracy (lower MDE) observed near the 0 and 60 marks. I concluded this experience by presenting these findings to the full laboratory group.",
  skills: ["Python", "NumPy", "SciPy", "Matplotlib", "ASE", "Ovito", "LAMMPS"],
  //For images add pictures of Jornada/Disregistry Analysis/analyze.py
  images: ["Q1D_2D.png", "Q1D_1D.png", "Q1D_Pymoire_Code.png", "Q1D_Voronoi_Code.png", "Q1D_JPlots.png", "Q1D_APlots.png", "Q1D_AGraphs.png"],
  videos: ["Q1D_Relaxation.mp4", "Q1D_Relaxation_Side.mp4"],
  documents: ["Q1D_Study.pdf", "Q1D_Structures.pdf"],
  // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {  
  id: 2,
  title: "UR10e Simulation Project",
  category: "Robotics/Simulation",
  description: "Created a model simulation for the UR10e robotic arm (6-axis industrial robotic arm) using Simulink.",
  fullDescription: "I built a simulator for the UR10e (6-axis industrial robotic arm) using the Simscape multibody addon in Simulink. I imported an assembly from SolidWorks, assigning mates and creating input connections between joints and ports to control each individual rotational axis. I connected a GameCube controller to the signal inputs using the VR Controller Input for interactive input. To verify the position and velocity outputs, I used my knowledge in dynamics to track the position and velocity of the end effector based on each joint position and velocity.",
  skills: ["MATLAB", "Simulink", "Simscape", "SolidWorks", "Dynamics"],
  images: ["UR10_Solidworks_Assembly.png", "UR10_Specs.jpg", "UR10_Math.jpg", "UR10_All_Blocks.png", "UR10_Button_Blocks.png", "UR10_Stick_Blocks.png", "UR10_Comp_Blocks.png", "UR10_Simscape_Assembly.png", "UR10_Calibration_Script.png", "UR10_Math_Model_Script.png"],
  videos: ["UR10_Demo.mp4"],
  // documents: ["GRT_2023_Technical_Binder.pdf", "GRT_2023_Impact_Booklet.pdf"],
  // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {
    id: 3,
    title: "CNC Router",
    category: "Design/Manufacture",
    description: "Designed a CNC Router from scratch.",
    fullDescription: "Worked with a design team of 10+ members towards designing a fully functional CNC router from scratch, capable of milling wood and aluminum over a 59\"x40\"x4\" work area. We assembled the mechanical design in CAD software (Onshape), and are working toward confirming electronics and full assembly.",
    skills: ["CAD (Onshape)", "Project Leadership"], 
    images: ["CNC_Top.png", "CNC_Front.png", "CNC_Extrusions.jpg"],
    videos: [],
    documents: [],
    cadFiles: []
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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