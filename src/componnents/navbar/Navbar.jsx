import React, { useState, useEffect } from 'react';
import './navbar.css'; // Importez le fichier CSS pour le style

const Navbar = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsAffixed(true);
        console.log("OK");
      } else {
        setIsAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    console.log("Clicked menu");
  };

  return (
    <nav className={isAffixed ? "nav affix" : "nav"}>
      <div className="container">
        <div className="logo">
          <a href="#">Your Logo</a>
        </div>
        <div id="mainListDiv" className={isMenuActive ? "main_list show_list" : "main_list"}>
          <ul className="navlinks">
          <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            
          </ul>
        </div>
        <span className={isMenuActive ? "navTrigger active" : "navTrigger"} onClick={toggleMenu}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
