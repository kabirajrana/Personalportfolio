
import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // Replace with actual CV download logic
    console.log('Downloading CV...');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          {/* Simple dot pattern background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="text-center md:text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Kabiraj</span>
            </h1>
            <h2 className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center md:justify-start">
              <span className="border-r-2 border-cyan-400 animate-pulse pr-2">
                {text}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              I create stunning digital experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Hire Me Now
              </button>
              <button
                onClick={handleDownloadCV}
                className="group relative overflow-hidden bg-transparent border-2 border-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                <span className="relative flex items-center gap-2 text-white group-hover:text-cyan-100 transition-colors">
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Animated Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-glow"></div>
            
            {/* Profile image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-all duration-500 animate-float">
              {/* Placeholder for actual image */}
              <div className="w-full h-full flex items-center justify-center">
                {/* Use a placeholder image or actual photo */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Kabiraj - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-cyan-500/10 group-hover:from-black/10 transition-all duration-500"></div>
              </div>
              
              {/* Floating tech icons around the image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce opacity-80">
                JS
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}>
                ⚛
              </div>
              <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce opacity-80" style={{ animationDelay: '1s' }}>
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
