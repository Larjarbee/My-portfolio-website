import React from 'react';
import About from './About';
import Contact from './Contact';
import './Main.css';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Main = ({ theme }) => {
  return (
    <main id={theme} className='main'>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
