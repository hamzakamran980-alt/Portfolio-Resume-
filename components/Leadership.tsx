import React, { forwardRef } from 'react';

const Leadership = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="leadership" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Leadership & Projects</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#AFAC87]">Vice President</h3>
          <p className="text-lg font-semibold text-white">Formula One Club UMass</p>
          <p className="text-sm text-gray-400 mt-1">May 2024 - Present • Amherst, MA</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
            <li>Lead strategic planning, operations, and outreach initiatives for the university's Formula One Club.</li>
            <li>Drove a sixfold increase in event attendance and sustained club growth through targeted marketing and member engagement strategies.</li>
          </ul>
        </div>
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#AFAC87]">Co-Founder & Financial Manager</h3>
          <p className="text-lg font-semibold text-white">Mask Banto</p>
          <p className="text-sm text-gray-400 mt-1">January 2021 - October 2021 • Karachi, Pakistan</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
            <li>Co-founded and ran a charity organization that raised funds for the restoration of Hindu Minority temples in Pakistan.</li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Leadership;