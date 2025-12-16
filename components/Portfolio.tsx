import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', '2D CAD', '3D Modeling', 'Graphic Design'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Portfolio</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Featured Projects</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};