
import React, { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">About Me</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6 text-center">
        <p>
          My interest in finance was sparked by the dynamic nature of stock trading and has since grown into a disciplined pursuit of understanding complex financial systems. I am focused on solving real-world problems through rigorous analysis, whether modeling EV charger utilization or assessing multi-billion PKR portfolios.
        </p>
        <p>
          I actively explore the integration of AI and large language models to automate financial forecasting and enhance strategic insights. My goal is to combine quantitative skill with strategic thinking to make a meaningful impact in the financial sector.
        </p>
      </div>
    </section>
  );
});

export default About;
