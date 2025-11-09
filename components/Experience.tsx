
import React, { useState, useMemo, forwardRef } from 'react';
import { experiences } from '../constants';
import { Experience, ExperienceCategory } from '../types';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-1">
    <h3 className="text-xl font-bold text-[#AFAC87]">{experience.role}</h3>
    <p className="text-lg font-semibold text-white">{experience.company}</p>
    <p className="text-sm text-gray-400 mt-1">{experience.period} • {experience.location}</p>
    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
      {experience.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [filter, setFilter] = useState<'All' | ExperienceCategory>('All');

  const filteredExperiences = useMemo(() => {
    if (filter === 'All') {
      return experiences;
    }
    return experiences.filter(exp => exp.category.includes(filter));
  }, [filter]);
  
  const categories = ['All', ...Object.values(ExperienceCategory)];

  return (
    <section ref={ref} id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Experience</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-12"></div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat as 'All' | ExperienceCategory)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1C1C1C] ${
              filter === cat
                ? 'bg-[#AFAC87] text-[#1C1C1C] focus:ring-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-[#AFAC87]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        {filteredExperiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
});

export default ExperienceSection;
