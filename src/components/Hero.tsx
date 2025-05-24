
import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  
  const titles = ['Full Stack Developer', 'Data Scientist', 'Mobile Developer'];
  const currentTitle = titles[currentTitleIndex];
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(currentTitle.slice(0, index));
      index++;
      if (index > currentTitle.length) {
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setText('');
          index = 0;
        }, 2000);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [currentTitle]);

  const handleDownloadCV = () => {
    console.log('Downloading CV...');
  };

  const handlePhotoClick = () => {
    setIsPhotoClicked(!isPhotoClicked);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content - Text first on mobile, left side on desktop */}
        <div className="text-center lg:text-left order-1 lg:order-1">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
              Hi, I'm <span className="gradient-text">Kabiraj</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl mb-6 lg:mb-8 h-12 lg:h-16 flex items-center justify-center lg:justify-start">
              <span className="border-r-2 border-cyan-400 animate-pulse pr-2">
                {text}
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I create stunning digital experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 active:scale-95 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                <span className="relative text-white">Hire Me Now</span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="group relative overflow-hidden bg-transparent border-2 border-cyan-400 px-6 lg:px-8 py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 active:scale-95 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative flex items-center justify-center gap-2 text-white group-hover:text-cyan-100 transition-colors">
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card - Below text on mobile, right side on desktop */}
        <div className="flex flex-col items-center lg:items-end order-2 lg:order-2">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 w-full max-w-sm lg:max-w-none">
            <div className="relative group mb-4 lg:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div 
                className={`relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-all duration-500 cursor-pointer mx-auto ${
                  isPhotoClicked ? 'scale-110' : 'scale-100'
                }`}
                onClick={handlePhotoClick}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Kabiraj - Full Stack Developer"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPhotoClicked ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-cyan-500/10 group-hover:from-black/10 transition-all duration-500"></div>
              </div>
              
              <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm animate-bounce opacity-80">
                JS
              </div>
              <div className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}>
                ⚛
              </div>
            </div>

            {/* Developer Info Card */}
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                Kabiraj Rana
              </h3>
              <p className="text-lg lg:text-xl text-cyan-400 mb-2">
                Full Stack Developer
              </p>
              <p className="text-base lg:text-lg text-gray-300">
                5+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-4 lg:left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-4 lg:right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
