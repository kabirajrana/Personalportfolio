
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:kabiraj@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand and description */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold gradient-text">Kabiraj</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Full Stack Developer passionate about creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 glass rounded-lg hover:neon-border transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <div className="group-hover:text-neon-blue transition-colors">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full md:w-auto text-gray-400 hover:text-neon-blue transition-colors text-sm md:text-base"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <p>kabiraj@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available Worldwide</p>
            </div>
            <div className="glass p-3 md:p-4 rounded-lg">
              <p className="text-xs md:text-sm text-gray-300">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © {currentYear} All rights reserved Kabiraj
          </p>
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-right">
            Designed with ❤️ by Kabiraj
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
