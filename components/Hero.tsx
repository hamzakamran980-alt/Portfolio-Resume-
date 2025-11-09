
import React from 'react';
import { MailIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  scrollToSection: (section: 'experience') => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
        Hamza Kamran
      </h1>
      <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-[#AFAC87]">
        BBA Finance & BS Managerial Economics
      </h2>
      <p className="mt-1 text-lg text-gray-400">
        University of Massachusetts Amherst, Isenberg School of Management | May 2026
      </p>
      <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
        Aspiring finance and economics professional with a passion for financial modeling, investment research, and data-driven decision-making. Leveraging a strong foundation in quantitative analysis and a keen interest in AI-driven financial tools to deliver impactful results.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:hkamran@umass.edu"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#AFAC87] text-[#1C1C1C] font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#AFAC87]"
        >
          <MailIcon />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/hamzakamran-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <button
          onClick={() => scrollToSection('experience')}
          className="px-6 py-3 border-2 border-gray-500 text-gray-300 font-semibold rounded-md hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
        >
          View Experience
        </button>
      </div>
    </section>
  );
};

export default Hero;
