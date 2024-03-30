import React, { useState } from 'react';
import './Navbar.css';
import MyImg from '/home/rguktongole/first-app/src/img/naga.png';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src={MyImg} alt="image here" width={100} height={100}/>
          <ul className={menuOpen ? 'menu-open' : ''}>
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
            <li>
              <button className='contact-btn' onClick={() => {}}>Hire Me</button>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
