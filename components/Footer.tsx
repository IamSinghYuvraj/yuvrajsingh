import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>and lots of coffee</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Back to Top"
            tabIndex={0}
          >
            Yuvraj Singh
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;