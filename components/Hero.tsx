import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['Full Stack Developer', 'React Specialist', 'Problem Solver'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const delayBetween = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentTitle.substring(0, typedText.length - 1)
            : currentTitle.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitle, currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-glow">
              Yuvraj Singh
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 h-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-blue-400">|</span>
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Creating beautiful, functional web applications with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl"
            >
              View Projects 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <a
              href="https://github.com/IamSinghYuvraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-singh-80a803201/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:yuvrajsingh6.5.2007@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors duration-300 hover:drop-shadow-glow"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;