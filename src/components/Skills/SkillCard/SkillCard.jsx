import React from 'react';
import './SkillCard.css'; // Make sure to import the CSS file for styling

const SkillCard = ({ title, iconUrl, width, height, isActive, onClick }) => {
  return (
    <div 
      className={`skill-card ${isActive ? 'active' : ''}`}
      onClick={onClick}>
      <div className='skill-icon'>
        <img src={iconUrl} alt={title} style={{ width: `${width}px`, height: `${height}px` }} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
