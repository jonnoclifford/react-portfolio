import React from 'react';

function About() {
  return (
    // <div>
    //   <h2>Contact Me</h2>
    //   <p>hello@jonnoclifford.com</p>
    // </div>
    <section id="about" class="bg-light">
    <div class="container about">
      <div class="row align-items-center">
        <div class="col-lg-6 spacing">
          <img src="./images/jc-profile.jpg" alt="" class="img-fluid img-hero"></img>
        </div>
        <div class="col-lg-6 spacing">
          <h2 class="display-4">Hi, I'm Jonathan.</h2>
          <p class="lead">I'm an Australian-raised, London-based Photographer & Videographer working across commercial, documentary, and portrait photography.</p>
          <p class="lead">Commissions, publications and collaborations include The New York Times, The British Journal of Photography, House & Garden, The U.S State Department, Woods Bagot, Nicola Harding, Pro:Direct Sport, and many other brands, restaurants, and designers, both nationally and abroad.</p>
          <p class="lead">I'm also very passionate about sharing my photographic experience and have taught as a lecturer and in private workshops for several universities, academies and studios.</p>

          <a href="#contact" class="btn btn-dark p-2">Get in touch!</a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;
