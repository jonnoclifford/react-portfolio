import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Home />
        <ProjectGallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;
