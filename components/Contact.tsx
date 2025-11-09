
import React, { forwardRef } from 'react';
import { MailIcon, LinkedInIcon } from './Icons';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-8"></div>
      <p className="max-w-xl mx-auto text-lg text-gray-300 mb-8">
        I am actively seeking Summer 2026 internship opportunities in finance, investment banking, and related fields. Feel free to reach out!
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <a
          href="mailto:hkamran@umass.edu"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#AFAC87] text-[#1C1C1C] font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#AFAC87]"
        >
          <MailIcon />
          hkamran@umass.edu
        </a>
        <a
          href="https://www.linkedin.com/in/hamzakamran-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
        >
          <LinkedInIcon />
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
});

export default Contact;
