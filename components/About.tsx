import React from 'react';
import { TEACHER_INFO } from '../constants';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-2xl transform rotate-2"></div>
            <img 
              src="https://picsum.photos/600/700?grayscale" 
              alt="Instructor" 
              className="relative rounded-xl shadow-2xl w-full object-cover h-[500px] lg:h-[600px]"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-4xl font-bold text-blue-600 mb-1">12+</p>
              <p className="text-sm text-slate-600 font-medium">Years of Experience in Architecture & Graphic Design</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">About the Instructor</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">{TEACHER_INFO.name}</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {TEACHER_INFO.bio}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Industry Exposure</h4>
                  <p className="text-slate-600 text-sm">Worked with top architectural firms on residential and commercial projects.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Teaching Philosophy</h4>
                  <p className="text-slate-600 text-sm">{TEACHER_INFO.philosophy}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Certified Professional</h4>
                  <p className="text-slate-600 text-sm">Autodesk Certified Professional with advanced graphic design expertise.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="italic text-slate-700">"My goal is not just to teach you a software, but to give you a career-ready skillset that makes you indispensable in any design firm."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};