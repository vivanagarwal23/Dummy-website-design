import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">CAD<span className="text-blue-500">Master</span></h2>
            <p className="text-slate-400 mb-8 max-w-sm">
              Empowering the next generation of architects and designers with professional skills, industry knowledge, and practical expertise.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#booking" className="hover:text-blue-400 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>tuition@cadmaster.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Design District, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 CADMaster Pro Tuition. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};