import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements simulating Blueprint lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-dashed border-white rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 border border-white opacity-20 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Students for Fall 2024
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AutoCAD 2D & 3D</span> with a Professional
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Bridge the gap between technical drafting and creative design. Learn industry-standard workflows from a senior instructor with 12+ years of experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#booking" 
              onClick={(e) => scrollToSection(e, 'booking')}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 active:scale-95"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#courses" 
              onClick={(e) => scrollToSection(e, 'courses')}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              View Courses
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};