import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: 'UI/UX', level: 95 },
  { name: 'Website Design', level: 85 },
  { name: 'App Design', level: 90 },
  { name: 'Graphic Design', level: 92 },
];

const SkillsSlider = () => {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState(skillsData.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    skillsData.forEach((skill, index) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedValues((prev) => {
            const updated = [...prev];
            if (updated[index] < skill.level) {
              updated[index] += 1;
            } else {
              clearInterval(interval);
            }
            return updated;
          });
        }, 10);
      }, index * 300); // Delay each animation by 300ms
    });
  }, [inView]);
  return (
    <div className="skills-container space-y-2" ref={ref}>
      {skillsData.map((skill, index) => (
        <div className="skill " key={index}>
          <label className="label text-sm font-[500]">{skill.name}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={animatedValues[index]}
            style={{ ['--value' as string]: `${animatedValues[index]}%` }}
            readOnly
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsSlider;
