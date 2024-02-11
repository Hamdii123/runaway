import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <div>
    <footer className="footer">
     
      <div className="footer-overlay"></div> 

      <div className="footer-column">
        <h2>RUNAWAY</h2>
        <p>Descrition oescription of the site goeescriptiescription of the site goes here...escription of the site goes here...on of the site goes here...s here....escription of the site goes here...</p>
        <div className='social-media'>
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-linkedin-box-line"></i>
        </div>
      </div>
      <div className="footer-column">
        <h3>Contact Info</h3>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
        <br/>
        <hr/>
        <p>© 2024 RUNAWAY. Alll Rights Reserved.</p>
           
      </div>
      
      <div className="footer-column" style={{ textAlign: 'center' }}>
        <h3>Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
     

        </ul>
        </div>
    </footer>
   </div>
   
  );
};

export default Footer;
