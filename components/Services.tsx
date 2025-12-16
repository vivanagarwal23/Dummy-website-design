import React from 'react';
import { SERVICES } from '../constants';
import { Box, PenTool, Ruler, Layout, Monitor, Layers } from 'lucide-react';

const icons: Record<string, React.ElementType> = {
  Ruler,
  Box,
  PenTool,
  Layout,
  Monitor,
  Layers
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Skills & Services</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">What You Will Learn</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = icons[service.icon] || Layers;
            return (
              <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};