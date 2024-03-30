import React, { useState } from 'react';
import './MobileNav.css';
import MyImage from '/home/rguktongole/first-app/src/img/naga.png'; // Make sure to import the correct image

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${isOpen ? 'mobile-menu active' : 'mobile-menu'}`}>
        <div className='mobile-menu-container'>
          <img className='logo' src={MyImage} alt=""/>
          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>Skills</a>
            </li>
            <li>
              <a className='menu-item'>Work experience</a>
            </li>
            <li>
              <a className='menu-item'>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
