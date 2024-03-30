import React, { useState } from 'react'; // Import useState from 'react'
import "./Skills.css";
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from '../../utils/data';
import SkillsInfoCard from './SkillCard/SkillsInfoCard/SkillsInfoCard';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]); // Correct typo in useState

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title} // Correct typo and comparison
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard
            heading={selectedSkill.title} // Correct typo
            skills={selectedSkill.skills} // Correct typo
          />
        </div>
      </div>
    </section>
  );
};

export default Skills; // Don't forget to export the component
