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
      "As Team Principal, Arnav leads Vulcan GP with strategic vision and an unwavering passion for motorsport. He brought the team together from scratch and has been the core link between operations, engineering, and management. His ability to manage both people and problems under pressure was critical in our successful run at the South India Regionals. With a background in leadership and team-building, Arnav ensures the team stays on track—literally and figuratively.",
    achievements: [
      "Led Vulcan GP to 1st place at South India Regionals 2025",
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
    image: "/Sanjaay.jpg",
    description:
      "As Head of Tech, Sanjaay brings engineering depth and programming experience to Vulcan GP. Joining right after the regional championship, he has been responsible for upgrading the team’s digital and analytical capabilities—from building the official website to running internal simulations and tools. With a keen understanding of both visual design and backend logic, he ensures our tech systems stay efficient and competition-ready.",
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
    image: "/Agastya.jpg",
    description:
      "Agastya is the team’s go-to expert for car design and CAD modeling. His deep interest in physics and hands-on work ethic make him a crucial part of the engineering pipeline. As the main designer for our cars, he translated group concepts into a tangible, high-performance model. He continues to iterate and innovate, constantly testing new shapes, materials, and configurations to push our car’s performance forward.",
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
    role: "Head of Marketing & Manufacturing Engineer",
    image: "/Arahant.jpg", // Replace with actual image path
    description:
      "Arahant leads Vulcan GP’s marketing efforts while also playing a key role in manufacturing. Originally the Manufacturing Engineer, he took on the additional role of Marketing Head shortly after the F1 in Schools South India Regionals. Constantly coordinating between Enterprise and Engineering, Arahant enjoys the creative process of producing high-quality outreach materials while maintaining absolute precision throughout the car’s design, manufacturing, and assembly stages.",
    achievements: [
      "Selected to represent India at the Asian & Oceanic Optimist Sailing Championship",
      "Silver medalist in Volleyball at ISSO Nationals 2025",
      "Elected House Captain for two consecutive years in Student Council",
    ],
    specialties: [
      "Precision Manufacturing Techniques",
      "Technical Communication",
      "Storyboard Creation and Implementation",
      "Computer Fluid Dynamics",
      "Vendor Coordination",
    ],
  },
  {
    name: "Adityesh Chandrayan",
    role: "Technical Director",
    image: "/Adityesh.jpg", // Replace with actual image path
    description:
      "As Technical Director, Adityesh oversees and documents all engineering and enterprise decisions and activities. His sharp problem-solving and strategizing skills help the team overcome logistical and operational challenges. His academic excellence and leadership experience give him a unique ability to connect big-picture tactics with on-ground execution. His expertise in financial planning and mathematics is crucial for making informed decisions and tracking incoming and outgoing monetary flows.",
    achievements: [
      "Elected Head Boy of the Student Council for two consecutive years",
      "Awarded Distinction and School Champion Medal in the Euclid Math Contest",
      "Finalist in the Economics World Cup",
    ],
    specialties: [
      "Financial Planning and Budget Management",
      "Documentation and Recording",
      "Negotiation and Sponsor Acquisition",
      "Vendor Coordination",
      "Strategic Planning",
    ],
  },
  {
    name: "Aadya Pochampally",
    role: "Graphic Designer",
    image: "/Aadhya.jpg", // Replace with actual image path
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
