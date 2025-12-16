import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">Course Plans</h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">Invest in Your Future</h3>
          <p className="text-slate-400">
            Choose a learning path that suits your schedule and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-blue-600 shadow-2xl scale-105 z-10 hover:shadow-blue-500/30' 
                  : 'bg-slate-800 border border-slate-700 hover:bg-slate-750 hover:border-slate-600'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase shadow-sm">
                  Best Value
                </div>
              )}
              
              <div className="mb-6">
                <h4 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-100'}`}>{plan.name}</h4>
                <p className={`text-sm ${plan.isPopular ? 'text-blue-100' : 'text-slate-400'}`}>{plan.recommendedFor}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.isPopular ? 'text-blue-200' : 'text-slate-500'}`}>/ course</span>
                <div className="mt-2 text-sm opacity-80">
                  <span className="block">{plan.duration}</span>
                  <span className="block">{plan.mode} Mode</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-blue-200' : 'text-blue-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#booking"
                onClick={scrollToBooking}
                className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg active:scale-95 active:shadow-none ${
                  plan.isPopular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-black/20' 
                    : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/20 hover:shadow-blue-600/30'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};