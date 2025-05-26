
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Skills', href: '#skills', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Blog', href: '/blog', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Contact', href: '#contact', type: 'scroll' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (item: any) => {
    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
        window.location.href = `/${item.href}`;
      } else {
        scrollToSection(item.href);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-2xl md:text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Kabiraj
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group font-medium"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group font-medium"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 py-2 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 py-2 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
