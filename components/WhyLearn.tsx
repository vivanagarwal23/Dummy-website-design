import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { WHY_LEARN_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const WhyLearn: React.FC = () => {
  return (
    <section id="why-learn" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Why Learn AutoCAD?</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Invest in Skills That Pay Off</h3>
          <p className="text-slate-600">
            AutoCAD is the global standard for drafting. Whether you are an engineer, architect, or designer, mastering these tools significantly boosts your employability and salary potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Annual Salary Potential (USD)</h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WHY_LEARN_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                  />
                  <Bar dataKey="salary" radius={[0, 4, 4, 0]} barSize={32}>
                    {WHY_LEARN_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">*Based on industry averages for mid-level professionals.</p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AutoCAD 2D: The Foundation</h4>
              <ul className="space-y-3">
                {[
                  "Essential for creating accurate floor plans and blueprints.",
                  "Global industry standard for construction and manufacturing.",
                  "Requirement for 90% of entry-level engineering jobs."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">AutoCAD 3D: The Upgrade</h4>
              <ul className="space-y-3">
                {[
                  "Visualize complex structures before they are built.",
                  "Create realistic client presentations and walkthroughs.",
                  "Higher billing rates for 3D modeling services."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};