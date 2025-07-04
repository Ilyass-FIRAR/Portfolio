import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold shadow-2xl">
            JP
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          John Portfolio
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
          Full-Stack Developer & UI/UX Enthusiast
        </p>
        
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, functional web experiences that bridge the gap between design and technology. 
          Passionate about creating solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
            <ArrowRight size={20} />
          </button>
          
          <button
            onClick={scrollToContact}
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;