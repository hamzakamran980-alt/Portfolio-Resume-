
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    leadership: leadershipRef,
    skills: skillsRef,
    contact: contactRef,
  };

  type SectionKey = keyof typeof sectionRefs;

  const scrollToSection = (sectionKey: SectionKey) => {
    sectionRefs[sectionKey].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1C1C1C] text-gray-200 font-sans">
      <Header scrollToSection={scrollToSection} />
      <main className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero scrollToSection={scrollToSection} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Leadership ref={leadershipRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
