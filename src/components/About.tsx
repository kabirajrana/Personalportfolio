
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counters
          const animate = (start: number, end: number, setter: (val: number) => void) => {
            let current = start;
            const increment = end / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setter(end);
                clearInterval(timer);
              } else {
                setter(Math.floor(current));
              }
            }, 20);
          };

          animate(0, 50, (val) => setCounters(prev => ({ ...prev, projects: val })));
          animate(0, 25, (val) => setCounters(prev => ({ ...prev, clients: val })));
          animate(0, 5, (val) => setCounters(prev => ({ ...prev, experience: val })));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience creating 
              digital solutions that matter. I specialize in modern web technologies and 
              have a keen eye for design and user experience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or mentoring aspiring developers. I believe in 
              writing clean, maintainable code and creating products that users love.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue">{counters.projects}+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple">{counters.clients}+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-pink">{counters.experience}+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">My Journey</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-neon-blue pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-blue rounded-full"></div>
                  <h4 className="font-semibold text-white">Senior Full Stack Developer</h4>
                  <p className="text-gray-400">2021 - Present</p>
                  <p className="text-sm text-gray-300 mt-2">Leading development teams and architecting scalable solutions</p>
                </div>
                <div className="border-l-2 border-neon-purple pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-purple rounded-full"></div>
                  <h4 className="font-semibold text-white">Full Stack Developer</h4>
                  <p className="text-gray-400">2019 - 2021</p>
                  <p className="text-sm text-gray-300 mt-2">Built and maintained web applications for various clients</p>
                </div>
                <div className="border-l-2 border-neon-pink pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-neon-pink rounded-full"></div>
                  <h4 className="font-semibold text-white">Frontend Developer</h4>
                  <p className="text-gray-400">2018 - 2019</p>
                  <p className="text-sm text-gray-300 mt-2">Started my journey in web development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
