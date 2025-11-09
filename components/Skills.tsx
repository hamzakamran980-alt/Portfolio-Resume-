
import React, { forwardRef } from 'react';
import { skills, courses } from '../constants';

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Skills & Coursework</h2>
      <div className="w-20 h-1 bg-[#AFAC87] mx-auto mb-12"></div>
      
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              {skill.name}
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold text-white mt-16 mb-6 text-center">Relevant Coursework</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-300">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#2a2a2a] p-4 rounded-md">
              <span className="font-bold text-[#AFAC87]">{course.id}:</span> {course.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
