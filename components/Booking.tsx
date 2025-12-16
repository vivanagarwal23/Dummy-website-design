import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { submitBooking } from '../services/api';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    course: 'Beginner 2D CAD',
    date: '',
    time: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitBooking(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', course: 'Beginner 2D CAD', date: '', time: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="booking" className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          
          <div className="p-12 bg-blue-600 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Start Your Journey Today</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Book a free consultation or enroll in a course directly. We will review your request and confirm your slot via email within 24 hours.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Flexible Timings</p>
                    <p className="text-sm text-blue-100">Weekends & Evenings available</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-500">
              <p className="text-sm text-blue-200">Need help deciding?</p>
              <p className="font-semibold text-lg hover:text-blue-100 transition-colors cursor-pointer">Call: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="p-10 lg:p-12">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Booking Received!</h4>
                <p className="text-slate-600 mb-8">We have sent a confirmation email to you. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Book Appointment</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      required type="text" name="name" value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-blue-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-blue-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input 
                      required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-blue-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Interested Course</label>
                    <div className="relative">
                      <select 
                        name="course" value={formData.course} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none hover:border-blue-400"
                      >
                        <option>Beginner 2D CAD</option>
                        <option>Advanced 3D Modeling</option>
                        <option>Complete Mastery (2D + 3D)</option>
                        <option>Graphic Design</option>
                        <option>Consultation</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                    <input 
                      required type="date" name="date" value={formData.date} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                    <div className="relative">
                      <select 
                        name="time" value={formData.time} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none hover:border-blue-400"
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (1PM - 5PM)</option>
                        <option value="evening">Evening (6PM - 9PM)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all hover:border-blue-400"
                    placeholder="Tell me about your current skill level or specific goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};