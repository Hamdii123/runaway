import React from 'react';
import Navbar2 from '../componnents/navbar/Navbar2';
import Footer from '../componnents/footer/Footer';
const About = () => {
  return (
    <div>
      <Navbar2/>

      <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">ABOUT US</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      </div>
    </div>
  </section>
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="row">
          <div className="col shadow">
            <h1> sqdqsdsqqdqsdqdqdqdqd</h1>
            <p>This is a modified jumbotron that occupies the entire hot occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizt occupies the entire horizrizontal space of its parent.</p>
          </div>
          <div className="col shadow">
          <iframe width="100%" height="600" frameborder="0" scrolling="no"
           marginheight="0" marginwidth="0" 
           src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bardo,tunis+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default About;
