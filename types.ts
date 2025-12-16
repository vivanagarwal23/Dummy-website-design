export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: '2D CAD' | '3D Modeling' | 'Graphic Design';
  imageUrl: string;
  description: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  date: string;
  time: string;
  message: string;
}