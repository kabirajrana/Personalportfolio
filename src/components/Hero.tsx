
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Content - Text first on mobile, left side on desktop */}
        <div className="text-center lg:text-left order-1 lg:order-1">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4 lg:mb-6">
              Hi, I'm <span className="gradient-text">Kabiraj</span>
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-4xl mb-6 lg:mb-8 h-10 lg:h-16 flex items-center justify-center lg:justify-start">
              <span className="border-r-2 border-cyan-400 animate-pulse pr-2">
                {text}
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-300 mb-6 lg:mb-12 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I create stunning digital experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            
            {/* Mobile Photo - Only visible on mobile between text and buttons */}
            <div className="flex lg:hidden justify-center mb-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 w-full max-w-xs">
                <div className="relative group mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div 
                    className={`relative w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-all duration-500 cursor-pointer mx-auto ${
                      isPhotoClicked ? 'scale-110' : 'scale-100'
                    }`}
                    onClick={handlePhotoClick}
                  >
                    <img 
                      src="/lovable-uploads/4a36839f-6742-479f-afd7-e731b2779932.png"
                      alt="Kabiraj - Full Stack Developer"
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isPhotoClicked ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-cyan-500/10 group-hover:from-black/10 transition-all duration-500"></div>
                  </div>
                  
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce opacity-80">
                    JS
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}>
                    ⚛
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold gradient-text mb-1">
                    Kabiraj Rana
                  </h3>
                  <p className="text-sm text-cyan-400 mb-1">
                    Full Stack Developer
                  </p>
                  <p className="text-xs text-gray-300">
                    5+ Years of Experience
                  </p>
                </div>
              </div>
            </div>
            
            {/* Updated mobile buttons with better alignment */}
            <div className="flex flex-row gap-3 justify-center lg:justify-start items-center">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 active:scale-95 flex-1 sm:flex-initial sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg max-w-[140px] sm:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                <span className="relative text-white">Hire Me Now</span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="group relative overflow-hidden bg-transparent border-2 border-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/30 active:scale-95 flex-1 sm:flex-initial sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4 lg:text-lg max-w-[140px] sm:max-w-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative flex items-center justify-center gap-1 sm:gap-2 text-white group-hover:text-cyan-100 transition-colors">
                  <Download size={14} className="group-hover:animate-bounce" />
                  <span className="hidden xs:inline">Download</span> CV
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex flex-col items-center lg:items-end order-2 lg:order-2">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="relative group mb-4 lg:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div 
                className={`relative w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-600 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-all duration-500 cursor-pointer mx-auto ${
                  isPhotoClicked ? 'scale-110' : 'scale-100'
                }`}
                onClick={handlePhotoClick}
              >
                <img 
                  src="/lovable-uploads/4a36839f-6742-479f-afd7-e731b2779932.png"
                  alt="Kabiraj - Full Stack Developer"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPhotoClicked ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-cyan-500/10 group-hover:from-black/10 transition-all duration-500"></div>
              </div>
              
              <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-1 sm:-right-2 lg:-right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-xs lg:text-sm animate-bounce opacity-80">
                JS
              </div>
              <div className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -left-1 sm:-left-2 lg:-left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-xs lg:text-sm animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}>
                ⚛
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                Kabiraj Rana
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-cyan-400 mb-1 sm:mb-2">
                Full Stack Developer
              </p>
              <p className="text-xs sm:text-sm lg:text-lg text-gray-300">
                5+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-2 sm:left-4 lg:left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-2 sm:right-4 lg:right-10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
        <div className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20"></div>
      </div>

      {/* Enhanced scroll indicator with better visibility */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-60"></div>
          <ArrowDown className="relative text-cyan-400 bg-black/50 backdrop-blur-sm rounded-full p-2 border-2 border-cyan-400/50" size={40} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
