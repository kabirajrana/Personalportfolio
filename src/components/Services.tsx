
import React from 'react';
import { Code, Smartphone, Server, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
      price: 'Starting at $2,500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that work seamlessly on iOS and Android',
      features: ['React Native', 'Flutter', 'Native Performance', 'App Store Deployment'],
      price: 'Starting at $3,500'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Scalable APIs and server infrastructure for your applications',
      features: ['Node.js/Python', 'Database Design', 'Cloud Deployment', 'API Integration'],
      price: 'Starting at $2,000'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that convert visitors to customers',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Freelance Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-2xl font-bold gradient-text">{service.price}</span>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Let's discuss your specific requirements and 
              I'll provide a tailored solution that fits your budget and timeline.
            </p>
            <button className="bg-gradient-to-r from-neon-purple to-neon-pink px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
