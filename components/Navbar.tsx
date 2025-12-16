import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      // The scroll-pt-24 in html handles the offset, but we can also be explicit here if needed.
      // Since we added scroll-pt-24, scrollIntoView works perfectly.
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Learn', href: '#why-learn' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className={`text-2xl font-bold tracking-tighter hover:scale-105 transition-transform duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
        >
          CAD<span className="text-blue-500">Master</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative group text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={(e) => handleLinkClick(e, '#booking')}
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 lg:hidden transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-lg font-medium text-slate-700 py-3 border-b border-slate-50 hover:text-blue-600 hover:pl-2 transition-all"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#booking" 
          onClick={(e) => handleLinkClick(e, '#booking')} 
          className="mt-4 w-full py-4 bg-blue-600 text-white font-bold rounded-lg text-center shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};