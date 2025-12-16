import { Service, PricingPlan, PortfolioItem } from './types';

export const TEACHER_INFO = {
  name: "Alex Morgan",
  title: "Senior AutoCAD Instructor & Graphic Designer",
  experience: "12+ Years",
  email: "tuition@cadmaster.com",
  phone: "+1 (555) 123-4567",
  bio: "I bridge the gap between technical drafting and creative design. With over a decade of experience in architectural firms and freelance design, I teach students not just software commands, but industry-standard workflows that get you hired.",
  philosophy: "My teaching philosophy is 'Project-First'. We don't just learn tools; we build real-world blueprints, 3D models, and design assets from day one."
};

export const WHY_LEARN_DATA = [
  { name: 'Junior Admin', salary: 35000, color: '#94a3b8' },
  { name: 'CAD Drafter (2D)', salary: 52000, color: '#38bdf8' },
  { name: '3D Modeler', salary: 75000, color: '#0ea5e9' },
  { name: 'BIM Specialist', salary: 95000, color: '#0284c7' },
];

export const SERVICES: Service[] = [
  {
    id: '2d-drafting',
    title: 'AutoCAD 2D Drafting',
    description: 'Master the foundation of engineering and architectural drawing.',
    icon: 'Ruler',
    features: ['Technical Drawings', 'Floor Plans', 'Elevations & Sections', 'Plotting & Printing Standards']
  },
  {
    id: '3d-modeling',
    title: 'AutoCAD 3D Modeling',
    description: 'Visualize ideas in three dimensions for stunning presentations.',
    icon: 'Box',
    features: ['3D Solid Modeling', 'Rendering Basics', 'Walkthroughs', 'Material Application']
  },
  {
    id: 'graphic-design',
    title: 'Design & Branding',
    description: 'Creative graphic design skills to complement technical ability.',
    icon: 'PenTool',
    features: ['Visual Communication', 'Layout Design', 'Portfolio Building', 'Software Synergy']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'beginner',
    name: 'Beginner 2D CAD',
    price: '$299',
    duration: '4 Weeks (12 Hours)',
    mode: 'Online',
    recommendedFor: 'Students & Beginners',
    features: ['Interface Basics', 'Drawing Commands', 'Editing Tools', 'Final Floor Plan Project']
  },
  {
    id: 'mastery',
    name: 'Complete Mastery (2D + 3D)',
    price: '$599',
    duration: '8 Weeks (24 Hours)',
    mode: 'Hybrid',
    recommendedFor: 'Career Switchers',
    isPopular: true,
    features: ['Everything in 2D', '3D Modeling Advanced', 'Rendering Techniques', 'Portfolio Review', 'Certificate of Completion']
  },
  {
    id: '1on1',
    name: '1-to-1 Personalized',
    price: '$80/hr',
    duration: 'Flexible',
    mode: 'Online',
    recommendedFor: 'Professionals Upskilling',
    features: ['Custom Curriculum', 'Project Troubleshooting', 'Flexible Scheduling', 'Direct Mentorship']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Modern Residential Floor Plan',
    category: '2D CAD',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    description: 'Complete architectural drawing set for a 2-story residence.'
  },
  {
    id: 'p2',
    title: 'Mechanical Engine Assembly',
    category: '3D Modeling',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    description: 'High-precision 3D model of an internal combustion engine part.'
  },
  {
    id: 'p3',
    title: 'Minimalist Brand Identity',
    category: 'Graphic Design',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    description: 'Logo and stationery design for a boutique architecture firm.'
  },
  {
    id: 'p4',
    title: 'Commercial Complex Layout',
    category: '2D CAD',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    description: 'Large scale layout planning for a shopping complex.'
  }
];
