import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className='skill-info-card'>
        {skills.map((item, index) => ( // Corrected syntax for map function
          <React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.skill}</p>
              <p className='percentage'>{item.percentage}</p>
            </div>
            <div className='skill-progress-bg'>
              <div className='skill-progress' style={{ width: item.percentage }} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SkillsInfoCard; // Added missing semicolon and corrected export syntax