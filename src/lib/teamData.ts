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
    image: "/Arnav.jpg", // Replace with actual image path
    description:
      "As Team Principal, Arnav leads VulcanGP with strategic vision and an unwavering passion for motorsport. He brought the team together from scratch and has been the core link between operations, engineering, and management. His ability to manage both people and problems under pressure was critical in our successful run at the South India Regionals. With a background in leadership and team-building, Arnav ensures the team stays on track—literally and figuratively.",
    achievements: [
      "Led VulcanGP to 1st place at South India Regionals 2025",
      "Oversaw team operations for Best R&D Award win",
      "Built foundational team structure and strategy",
    ],
    specialties: [
      "Leadership & Coordination",
      "Strategic Planning",
      "Communication",
      "Event Mangagement",
      "Motorsport Knowledge",
    ],
  },
  {
    name: "Sanjaay Rajkumar",
    role: "Head of Technology",
    image: "/Sanjaay.jpeg",
    description:
      "As Head of Tech, Sanjaay brings engineering depth and programming experience to VulcanGP. Joining right after the regional championship, he has been responsible for upgrading the team’s digital and analytical capabilities—from building the official website to running internal simulations and tools. With a keen understanding of both visual design and backend logic, he ensures our tech systems stay efficient and competition-ready.",
    achievements: [
      "Designed and developed team’s official website",
      "Implemented advanced simulation workflows",
      "Created innovative manufacturing processes",
    ],
    specialties: [
      "Programming & Simulation",
      "UI/UX & Web Design",
      "Data Analysis",
      "Physics Applications",
      "Technical Innovation",
    ],
  },
  {
    name: "Agastya Nadella",
    role: "Design Engineer",
    image: "/Agastya.jpeg",
    description:
      "Agastya is the team’s go-to expert for car design and CAD modeling. His deep interest in physics and hands-on work ethic make him a crucial part of the engineering pipeline. As the main designer for our Regionals car, he translated group concepts into a tangible, high-performance model. He continues to iterate and innovate, constantly testing new shapes, materials, and configurations to push our car’s performance forward.",
    achievements: [
      "Poineered design of the Regionals car (3rd fastest in South India)",
      "Contributed to Best R&D Award",
      "Refined aero-package for next-gen development",
    ],
    specialties: [
      "CAD & 3D Modeling",
      "Engineering Design",
      "Aerodynamics",
      "Physics Integration",
      "Rapid Prototyping",
    ],
  },
  {
    name: "Arahant Veerareddy",
    role: "Manufacturing Engineer",
    image: "/Arahant.jpeg", // Replace with actual image path
    description:
      "Arahant ensures that our designs go from screen to track. As Manufacturing Engineer, he manages the process of getting components fabricated, coordinating with external vendors, and making sure every physical element of the car matches our design specs. He plays a key role in the team’s design-for-manufacturing process and helps optimize the build for performance, weight, and durability.",
    achievements: [
      "Managed full car manufacturing cycle for Regionals",
      "Coordinated with CNC vendors and suppliers",
      "Streamlined production under tight deadlines",
    ],
    specialties: [
      "Vendor Coordination",
      "Part Fabrication",
      "Technical Communication",
      "Assembly & QA",
      "Design-to-Production Flow",
    ],
  },
  {
    name: "Adityesh Chandrayan",
    role: "Technical Director",
    image: "/Adityesh.jpeg", // Replace with actual image path
    description:
      "As Technical Director, Adityesh oversees every major engineering decision and ensures our car meets all F1 in Schools regulations. Known for his sharp problem-solving and attention to detail, he guides the team through testing, validation, and troubleshooting. His academic excellence and leadership experience give him a unique ability to connect big-picture strategy with on-ground execution—critical in high-pressure moments during Regionals.",
    achievements: [
      "Oversaw compliance and specs for Regionals car",
      "Led technical documentation for R&D Award",
      "Helped troubleshoot car issues under pressure",
    ],
    specialties: [
      "Engineering Oversight",
      "Technical Documentation",
      "Data-Driven Decision Making",
      "Compliance & Testing",
      "Critical Thinking",
    ],
  },
  {
    name: "Aadya Pochampally",
    role: "Graphic Designer",
    image: "/Aadhya.jpeg", // Replace with actual image path
    description:
      "As Graphic Designer, Aadhya defines VulcanGP’s visual identity across all media. She works on car livery, pit displays, website visuals, and everything in between—ensuring our team stands out in presentation and branding. Her design work blends creativity with clarity, helping judges and audiences engage with our team’s story and spirit.",
    achievements: [
      "Created VulcanGP’s brand identity",
      "Designed car livery and pit visuals",
      "Managed team’s graphic assets across platforms",
    ],
    specialties: [
      "Graphic Design",
      "Visual Branding",
      "Aesthetic Layouts",
      "Design Software (Adobe, Canva, Figma)",
      "Color Theory & Application",
    ],
  },
];
