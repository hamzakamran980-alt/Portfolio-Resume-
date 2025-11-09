import React, { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">About Me</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6 text-center">
        <p>
          My interest in finance began during the COVID-19 pandemic, when I started independently trading stocks. What began as curiosity soon evolved into a disciplined commitment driven by research, analysis, and a desire to understand how financial systems operate. This experience inspired me to explore the broader world of capital markets, risk management, and financial strategy.
        </p>
        <p>
          Today, I bring that same curiosity and drive to every opportunity I pursue. Whether through internships, student leadership, or academic projects, I'm focused on solving real-world problems, delivering value through analytical thinking, and growing into a professional who makes an impact in the financial sector.
        </p>
      </div>
    </section>
  );
});

export default About;