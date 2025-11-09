
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  scrollToSection: (section: 'about' | 'experience' | 'leadership' | 'skills' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div
            className="text-2xl font-bold text-[#AFAC87] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            HK
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section as any)}
                className="text-gray-300 hover:text-[#AFAC87] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#AFAC87] focus:ring-offset-2 focus:ring-offset-[#1C1C1C] rounded-sm"
              >
                {link.name}
              </button>
            ))}
            <a
              href="./assets/Hamza_Kamran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#AFAC87] text-[#1C1C1C] font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#AFAC87]"
            >
              Download Résumé
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[#AFAC87] focus:outline-none focus:ring-2 focus:ring-[#AFAC87] rounded-sm p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.section as any);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-[#AFAC87] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#AFAC87] rounded-sm p-1"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="./assets/Hamza_Kamran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 bg-[#AFAC87] text-[#1C1C1C] font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#AFAC87]"
              >
                Download Résumé
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
