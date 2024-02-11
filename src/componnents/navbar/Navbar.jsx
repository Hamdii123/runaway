import React, { useState, useEffect } from 'react';
import logo from './5B591644-8B1C-4CAF-9B08-C236DA17CE75-removebg-preview.png'; // Importez votre logo
import './navbar.css'
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 600);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${visible ? 'visible' : 'hidden'}`}>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
