import { faApple, faAndroid, faChrome } from '@fortawesome/free-brands-svg-icons';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  platforms: {
    text: string;
    icons: any[];
  };
  tags: string[];
  link: string;
  slug: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    title: "Mobile Recharge & Support Platform",
    subtitle: "1 Million+ Users",
    description: "Complete mobile recharge and customer support solution with real-time transaction processing.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faAndroid]
    },
    tags: ["Mobile", "Payments", "Support"],
    link: "/projects/mobile-recharge",
    slug: "mobile-recharge",
    category: "Mobile Apps"
  },
  {
    title: "Meddy App",
    subtitle: "HEALTHCARE SOLUTION",
    description: "Comprehensive healthcare app facilitating communication and managing medical data.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Multi-Platform",
      icons: [faAndroid, faChrome]
    },
    tags: ["Healthcare", "Appointments", "Chat"],
    link: "/projects/meddy-app",
    slug: "meddy-app",
    category: "Mobile Apps"
  },
  {
    title: "DevFlow",
    subtitle: "DEVELOPER TOOLKIT",
    description: "A suite of powerful development tools to streamline your coding workflow and boost productivity.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Multi-Platform",
      icons: [faChrome]
    },
    tags: ["Development", "Tools", "Productivity"],
    link: "/projects/devflow",
    slug: "devflow",
    category: "Web Apps"
  },
  {
    title: "EduTech Platform",
    subtitle: "LEARNING MANAGEMENT",
    description: "Modern learning management system with interactive courses, live sessions, and progress tracking.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faChrome]
    },
    tags: ["Education", "E-Learning", "Tech"],
    link: "/projects/edutech",
    slug: "edutech",
    category: "Web Apps"
  },
  {
    title: "AI Analytics Hub",
    subtitle: "DATA INTELLIGENCE",
    description: "Advanced analytics platform using AI to transform business data into actionable insights.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Web Only",
      icons: [faChrome]
    },
    tags: ["Analytics", "AI", "Business"],
    link: "/projects/ai-analytics",
    slug: "ai-analytics",
    category: "AI Apps"
  },
  {
    title: "Smart IoT Platform",
    subtitle: "IOT SOLUTION",
    description: "Comprehensive IoT platform for managing and monitoring connected devices in real-time.",
    images: [
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png",
      "https://i.imgur.com/zmLULuM.png"
    ],
    platforms: {
      text: "Multi-Platform",
      icons: [faApple, faAndroid, faChrome]
    },
    tags: ["IoT", "Real-time", "Monitoring"],
    link: "/projects/smart-iot",
    slug: "smart-iot",
    category: "AI Apps"
  }
];
