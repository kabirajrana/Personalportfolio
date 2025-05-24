
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-cyan-400 animate-pulse pr-2">
              {text}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create stunning digital experiences with modern technologies. 
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Hire Me Now
            </button>
            <button className="glass px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60">
              View My Work
            </button>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
