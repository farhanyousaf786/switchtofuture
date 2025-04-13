interface ProjectDetail {
  id: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  technologies: string[];
  results: string[];
  testimonials: {
    text: string;
    author: string;
    position: string;
  }[];
  gallery: string[];
  timeline: {
    date: string;
    milestone: string;
  }[];
  team: {
    name: string;
    role: string;
    contribution: string;
  }[];
}

export const projectDetailsData: { [key: string]: ProjectDetail } = {
  "mobile-recharge": {
    id: "mobile-recharge",
    overview: "A comprehensive mobile recharge and support platform serving over 1 million users worldwide. The platform handles real-time transactions, multi-currency support, and provides 24/7 customer assistance through AI-powered chatbots.",
    challenges: [
      "Handling concurrent transactions at scale",
      "Implementing secure payment processing across multiple providers",
      "Managing real-time balance updates and notifications",
      "Supporting multiple languages and currencies",
      "Ensuring 99.99% uptime for critical services"
    ],
    solutions: [
      "Implemented distributed transaction processing with Redis and PostgreSQL",
      "Integrated multiple payment gateways with failover support",
      "Built real-time notification system using WebSockets",
      "Developed scalable microservices architecture",
      "Implemented automated failover and load balancing"
    ],
    features: [
      "Instant mobile recharge for 500+ operators",
      "Multi-currency support with real-time exchange rates",
      "AI-powered customer support chatbot",
      "Automated transaction reconciliation",
      "Real-time transaction status tracking",
      "Customizable alerts and notifications",
      "Detailed analytics and reporting"
    ],
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Stripe",
      "Socket.io"
    ],
    results: [
      "Processed over $50M in transactions",
      "Reduced transaction failure rate by 99%",
      "Improved customer support response time by 80%",
      "Achieved 99.99% uptime",
      "Expanded to 50+ countries"
    ],
    testimonials: [
      {
        text: "This platform revolutionized how we handle mobile recharges. The real-time tracking and automated reconciliation saved us countless hours.",
        author: "Sarah Chen",
        position: "Operations Director, TeleGlobal"
      },
      {
        text: "The multi-currency support and instant processing made international recharges seamless. A game-changer for our business.",
        author: "Michael Rodriguez",
        position: "CEO, FastCharge Inc"
      },
      {
        text: "Exceptional platform with rock-solid reliability. The support team's response time is impressive.",
        author: "Raj Patel",
        position: "Technical Lead, MobiPay"
      }
    ],
    gallery: [
      "https://i.imgur.com/1234567.png",
      "https://i.imgur.com/2345678.png",
      "https://i.imgur.com/3456789.png",
      "https://i.imgur.com/4567890.png"
    ],
    timeline: [
      {
        date: "2023 Q4",
        milestone: "Launched AI-powered customer support"
      },
      {
        date: "2023 Q3",
        milestone: "Expanded to 20 new countries"
      },
      {
        date: "2023 Q2",
        milestone: "Implemented real-time transaction tracking"
      },
      {
        date: "2023 Q1",
        milestone: "Released multi-currency support"
      }
    ],
    team: [
      {
        name: "Alex Thompson",
        role: "Lead Developer",
        contribution: "Architecture and backend development"
      },
      {
        name: "Lisa Wong",
        role: "Mobile Developer",
        contribution: "iOS and Android app development"
      },
      {
        name: "David Kim",
        role: "DevOps Engineer",
        contribution: "Infrastructure and deployment"
      }
    ]
  },
  "meddy-app": {
    id: "meddy-app",
    overview: "A comprehensive healthcare platform that connects patients with healthcare providers, manages medical records, and facilitates telemedicine consultations. The app streamlines healthcare delivery while ensuring data privacy and security.",
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Managing real-time video consultations",
      "Integrating with existing healthcare systems",
      "Handling complex appointment scheduling",
      "Maintaining patient data privacy"
    ],
    solutions: [
      "Implemented end-to-end encryption for all data",
      "Built custom WebRTC solution for video calls",
      "Developed HL7 integration framework",
      "Created AI-powered scheduling algorithm",
      "Used blockchain for audit trails"
    ],
    features: [
      "Secure video consultations",
      "Electronic health records",
      "Automated appointment scheduling",
      "E-prescriptions",
      "Lab result tracking",
      "Medical history timeline",
      "Insurance verification"
    ],
    technologies: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "TensorFlow",
      "AWS",
      "Hyperledger",
      "Firebase"
    ],
    results: [
      "Connected 10,000+ healthcare providers",
      "Facilitated 100,000+ consultations",
      "Reduced wait times by 60%",
      "Improved patient satisfaction by 85%",
      "Decreased no-show rates by 40%"
    ],
    testimonials: [
      {
        text: "Meddy App transformed our practice. The scheduling system alone saved us countless hours and improved patient satisfaction.",
        author: "Dr. Emily Johnson",
        position: "Chief of Medicine, Central Hospital"
      },
      {
        text: "The telemedicine features are seamless. Our patients love the convenience and security.",
        author: "Dr. James Wilson",
        position: "Telemedicine Director"
      }
    ],
    gallery: [
      "https://i.imgur.com/meddy1.png",
      "https://i.imgur.com/meddy2.png",
      "https://i.imgur.com/meddy3.png"
    ],
    timeline: [
      {
        date: "2023 Q4",
        milestone: "Launched blockchain-based audit system"
      },
      {
        date: "2023 Q3",
        milestone: "Added insurance verification feature"
      },
      {
        date: "2023 Q2",
        milestone: "Implemented telemedicine platform"
      }
    ],
    team: [
      {
        name: "Sarah Lee",
        role: "Product Manager",
        contribution: "Product strategy and roadmap"
      },
      {
        name: "Mike Chen",
        role: "Security Specialist",
        contribution: "HIPAA compliance and security"
      }
    ]
  }
  // Add more projects here...
};
