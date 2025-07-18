export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  achievements?: string[];
  specialties?: string[];
}

export const teamData: TeamMember[] = [
  {
    name: "Arnav Kaul",
    role: "Team Principal",
    image: "/placeholder-team.jpg", // Replace with actual image path
    description:
      "As Team Principal, Arnav leads VulcanGP with strategic vision and operational excellence. With a deep understanding of both technical and business aspects of motorsport, he coordinates between all departments to ensure our team operates at peak performance. His leadership has been instrumental in our regional championship victory.",
    achievements: [
      "Led team to 2024 STEM Racing Regionals victory",
      "Implemented strategic partnerships with key sponsors",
      "Coordinated successful international competition entries",
    ],
    specialties: [
      "Strategic Planning",
      "Team Leadership",
      "Project Management",
      "Sponsor Relations",
    ],
  },
  {
    name: "Sanjaay Rajkumar",
    role: "Head of Technology",
    image: "/Sanjaay.jpg",
    description:
      "Sanjaay spearheads all technological innovations at VulcanGP. From advanced telemetry systems to cutting-edge simulation software, he ensures our car leverages the latest technology for competitive advantage. His expertise in both hardware and software integration has revolutionized our development process.",
    achievements: [
      "Developed custom telemetry and data acquisition system",
      "Implemented advanced simulation workflows",
      "Created innovative manufacturing processes",
    ],
    specialties: [
      "Software Development",
      "Data Analysis",
      "Telemetry Systems",
      "CAD/CAM",
      "3D Printing",
    ],
  },
  {
    name: "Agastya Nadella",
    role: "Design Engineer",
    image: "/Agastya.jpeg",
    description:
      "Agastya brings creative engineering solutions to life through innovative design and meticulous analysis. His work on aerodynamics and chassis optimization has significantly improved our car's performance. He combines theoretical knowledge with practical engineering to push the boundaries of what's possible.",
    achievements: [
      "Designed award-winning aerodynamic package",
      "Optimized chassis for weight and strength",
      "Developed innovative suspension geometry",
    ],
    specialties: [
      "Aerodynamics",
      "Chassis Design",
      "FEA Analysis",
      "CAD Modeling",
      "Performance Optimization",
    ],
  },
  {
    name: "Arahant Veerareddy",
    role: "Manufacturing Engineer",
    image: "/placeholder-team.jpg", // Replace with actual image path
    description:
      "Arahant transforms our digital designs into physical reality through precision manufacturing and quality control. His expertise in advanced manufacturing techniques ensures every component meets our exacting standards. He's the bridge between concept and competition-ready hardware.",
    achievements: [
      "Established precision manufacturing workflows",
      "Implemented quality control systems",
      "Reduced manufacturing time by 40%",
    ],
    specialties: [
      "CNC Machining",
      "3D Printing",
      "Quality Control",
      "Manufacturing Processes",
      "Materials Science",
    ],
  },
  {
    name: "Adityesh Chandrayan",
    role: "Technical Director",
    image: "/placeholder-team.jpg", // Replace with actual image path
    description:
      "Adityesh oversees all technical aspects of our racing program, from initial concept to track performance. His comprehensive understanding of vehicle dynamics and racing regulations ensures our innovations remain competitive and compliant. He's our technical conscience and strategic advisor.",
    achievements: [
      "Ensured 100% regulatory compliance across all competitions",
      "Developed technical standards and procedures",
      "Coordinated successful vehicle homologation",
    ],
    specialties: [
      "Vehicle Dynamics",
      "Regulations Compliance",
      "Technical Strategy",
      "Performance Analysis",
      "Testing Protocols",
    ],
  },
  {
    name: "Aadya Pochampally",
    role: "Graphic Designer",
    image: "/placeholder-team.jpg", // Replace with actual image path
    description:
      "Aadya creates the visual identity that represents VulcanGP's innovative spirit. From livery design to marketing materials, she ensures our brand reflects our technical excellence and racing passion. Her designs have become synonymous with our championship-winning performance.",
    achievements: [
      "Created award-winning livery design",
      "Developed comprehensive brand identity",
      "Designed marketing materials for major sponsors",
    ],
    specialties: [
      "Graphic Design",
      "Brand Identity",
      "Livery Design",
      "Marketing Materials",
      "Digital Art",
    ],
  },
];
