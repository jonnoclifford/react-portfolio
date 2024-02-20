import React from 'react';

function Home() {
  return (
    // <div>
    //   <h2>Jonathan Clifford</h2>
    //   <h3>Photographer & Designer</h3>
    //   <p>This is the home page content.</p>
    // </div>
    <div class="container hero">
    <div class="row">
      <div class="col-lg-6 custom-col">
        <ul class="list-inline">

          <li class="list-inline-item">
            <a href="#"><i class="fas fa-envelope-open-text border border-dark rounded-circle p-2"></i></a>
          </li>

          <li class="list-inline-item">
            <a href="#"><i class="fab fa-instagram border border-dark rounded-circle p-2"></i></a>
          </li>

          <li class="list-inline-item">
            <a href="#"><i class="fab fa-github border border-dark rounded-circle p-2"></i></a>
          </li>

          <li class="list-inline-item">
            <a href="#"><i class="fab fa-linkedin border border-dark rounded-circle p-2"></i></a>
          </li>

        </ul>

        <h1 class="display-3">Photographer & Designer</h1>
        <p class="lead">London, UK based photographer & designer, working across a variety of industries, both locally and abroad.</p>

        <div class="d-flex">
          <a href="#portfolio" class="btn btn-outline-dark mr-3 p-2">My Portfolio</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
