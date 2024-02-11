import React from 'react';
import './accordion.css'
import image from "./image1.JPG"

const Accordion = () => {
  return (
    <>
    <div className=' body'>
     
        <ul className="accordion">
          <li>
            <img src={image} alt="Carmen Rios" />
            <div className="content">
              <span>
                <h2>Carmen Rios</h2>
                <p>Frontend</p>
              </span>
            </div>
          </li>
          <li>
            <img src={image} alt="Lisa Scott" />
            <div className="content">
              <span>
                <h2>Lisa Scott</h2>
                <p>Backend</p>
              </span>
            </div>
          </li>
          <li>
            <img src={image} alt="Pavel Dvorak" />
            <div className="content">
              <span>
                <h2>Pavel Dvorak</h2>
                <p>Backend</p>
              </span>
            </div>
          </li>
          <li>
            <img src={image} alt="Kelly Cox" />
            <div className="content">
              <span>
                <h2>Kelly Cox</h2>
                <p>Designer</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Accordion;
