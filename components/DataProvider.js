'use client';

import React, { createContext, useContext } from 'react';

// Create context
const DataContext = createContext();

// Sample portfolio data - you would replace this with your actual projects
const projects = [
    {
    id: 10,
    title: "In Progress: Formula Electric at Berkeley",
    category: "Automotive",
    description: "Design, manufacture, testing, and validation for the High-voltage cooling system for Formula Electric car.",
    fullDescription: "As a member of the Formula SAE team, I led the design and validation of a motor and inverter cooling system to mitigate critical high-voltage powertrain overheating. I initially developed a transient thermal model in Python utilizing the effectiveness-NTU method to simulate heat transfer and predict system behavior.  To physicalize and validate these models, I engineered a dedicated test bench, meticulously sourcing necessary fluid instrumentation including flow, pressure, and temperature sensors. For the vehicle's physical packaging, I integrated complex fluid fittings and tubing conversions within SolidWorks, modeling the complete cooling assemblies and fluid routing lines. Furthermore, I modeled mounting tabs and welding jigs to optimize component placement and ensure precise clearance around critical powertrain subsystems. To maximize heat rejection, I designed and manufactured a custom 1/16\" aluminum radiator fan shroud, which successfully increased airflow through the heat exchanger by 42%.  Finally, I developed custom Python software for thermistor calibration and Logarithmic Mean Temperature Difference (LMTD) analysis, automating our thermal performance tracking and ensuring high sensor fidelity throughout our testing phases.",
    images: ["FEB_CAD1.png", "FEB_CAD2.png", "FEB_CAD3.png", "FEB_CAD4.png", "FEB_CAD5.png", "FEB_Jig2.jpg", "FEB_Shroud_parts.jpg", "FEB_Circuit.jpg", "FEB_Temp.png", "FEB_FinalCFM.png", "FEB_Rainbow.png", "FEB_Split.png", "FEB_Test.png"],
    videos: [],
  },
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
  fullDescription: "For a class project, I developed a 6-DOF robotic arm simulator of a UR10e industrial robot using MATLAB Simulink and Simscape Multibody. I imported a SolidWorks assembly of the arm into the simulation environment, defining physical mates and configuring port connections to actuate each individual rotational axis. To evaluate the system's motion, I applied rigid body dynamics to derive forward kinematic models, analytically calculating the position and velocity of the end effector.  I then validated these analytical models by comparing my mathematical outputs directly against real-time spatial telemetry generated by Simscape. For interactive operation, I interfaced a GameCube controller using the Simulink VR Controller Input block. To ensure smooth and reliable control, I programmed custom deadzone filtering scripts to stabilize the analog inputs and accurately map them to joint-velocity commands.",
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
    fullDescription: "Working within a 10-member design team, I engineered a custom large-format CNC router from scratch, specifically designed to mill wood and aluminum. Using Onshape, I developed the mechanical architecture, constructing a rigid gantry-style frame utilizing structural aluminum extrusions and custom joining plates. I designed the multi-axis motion system using heavy-duty linear guide rails and lead screw actuation, achieving a 59\" x 40\" x 4\" active precision work volume. I dimensioned the overarching frame to accommodate standard 4' x 8' sheet goods and integrated a sacrificial wood spoilboard featuring a systematic grid of mounting holes for versatile workholding. We are currently finalizing the mechanical CAD, validating the corresponding electronics stack, and preparing for physical assembly and machine commissioning.",
    skills: ["CAD (Onshape)", "Project Leadership"], 
    images: ["CNC_Top.png", "CNC_Front.png"],
    videos: [],
    documents: [],
    cadFiles: []
  },
  {
    id: 4,
    title: "FIRST Robotics Competition (Charged Up)",
    category: "Robotics",
    description: "Designed and manufactured the gripper mechanism for the FIRST Robotics Competition robot.",
    fullDescription: "Leading a 10-member mechanical design team for the FIRST Robotics Competition, I engineered a versatile, small-profile roller intake gripper for our robot, Vermilion. Designed to rapidly acquire varying geometries and compressibilities—specifically rigid cones and soft cubes —the mechanism features an aluminum frame optimized for weight reduction through extensive pocketing and slotting. The intake architecture utilizes driven compliant wheels and compliant star rollers to aggressively funnel game pieces , while fixed back wheels provide grip stability. To optimize power efficiency and eliminate continuous motor stall during piece retention, I performed torque and clamping-force calculations to specify a 15-pound constant-force spring for the passive clamping system. Finally, I integrated an embedded color sensor for autonomous game piece detection  alongside a seated camera to facilitate precise driver alignment.",
    skills: ["CAD (Onshape)", "Mill Operation", "Lathe Operation", "Hand Tools", "Prototyping", "Design", "Manufacture", "Assembly", "Project Leadership", "Robotics"],
    images: ["VERMILION_Front.jpg", "VERMILION.png"],
    videos: ["VERMILION_Gripper_Test.mov", "VERMILION_Drive_Test.MOV"],
    documents: ["GRT_Vermilion_Technical_Binder.pdf", "GRT_Vermilion_Impact_Booklet.pdf"],
    // cadFiles: ["GRT_2023_Full_Robot_Assembly.step", "GRT_2023_Gripper_Assembly.step"]
  },
  {
    id: 5,
    title: "FIRST Robotics Competition (Rapid React)",
    category: "Robotics",
    description: "Designed and manufactured the indexing mechanism for the FIRST Robotics Competition robot.",
    fullDescription: "For the FIRST Robotics Competition robot, Daedalus, I led a 10-member design team in developing an asynchronous indexing subsystem to route and vertically feed spherical game pieces into a turret-style launcher. I designed the mechanical architecture using a rigid aluminum frame and low-friction polycarbonate walls, establishing a gravity-funnel intersection to efficiently transition game pieces from the wider intake. To maximize system throughput and feed consistency, I engineered custom roughtop rollers and iteratively calibrated the mechanical compression applied to the spheres. Furthermore, I developed a mechatronic tracking pipeline by integrating infrared and color sensors to detect the index location of incoming pieces. This sensor array interfaced with asynchronously and independently controlled rollers, allowing the subsystem to accurately differentiate, track, and isolate individual game pieces to ensure a jam-free feed sequence.",
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
    fullDescription: "Directing the Gunn Senior Class build team, I managed the structural design, fabrication, and assembly of a large-scale Apollo 11 Lunar Lander module for an annual engineering and design competition. Operating under strict budgetary constraints, I applied practical Design for Manufacturability (DFM) principles to translate complex aerospace geometries into feasible, structurally rigid wooden sub-assemblies. I oversaw the end-to-end manufacturing process, optimizing the structural architecture to ensure high load-bearing rigidity, stability, and aesthetic accuracy despite relying exclusively on limited manual hand tools and constrained material stock.",
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
    fullDescription: "Serving as the Mill Lead for the Gunn Robotics Team, I developed and implemented a comprehensive manual mill operation curriculum to train team members in precision machining and shop safety. Leveraging custom-authored instructional materials—including detailed curriculum guides, in-class handouts, and homework packets—I taught foundational manufacturing principles such as tooling selection, feed-and-speed calculations, and efficient machine operation. To translate these theoretical concepts into practical capabilities, I designed \"replication part\" assignments that required students to interpret engineering drawings and independently execute precise machining operations to specified tolerances. Beyond curriculum design, I directly supervised and advised students during hands-on fabrication, ensuring strict adherence to safety protocols while cultivating the team's overarching capabilities in Design for Manufacturability (DFM) and hands-on production.",
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
    fullDescription: "As part of a community outreach initiative with the Gunn Robotics Team, I managed the fabrication and mechanical assembly of a custom, team-designed trumpet-playing prosthesis. Applying my hands-on background in managing and troubleshooting FDM 3D printers, I executed the additive manufacturing of the core mechanism, optimizing print parameters to ensure the dimensional accuracy and structural integrity of the complex printed components. Following fabrication, I led the physical assembly of the device, meticulously fitting the 3D-printed linkages and hardware to ensure smooth, repeatable actuation of the trumpet valves. This required precise mechanical integration and tolerance management to deliver a highly functional, reliable assistive device tailored to the user's specific ergonomic requirements.",
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
