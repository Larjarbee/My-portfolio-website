import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';
import html from '../img/html.gif';
import css from '../img/Css3.gif';
import javascript from '../img/Javascript.gif';
import react from '../img/React.gif';
import git from '../img/Git.gif';
import github from '../img/Github.gif';
import firebase from '../img/Firebase.gif';
import office from '../img/office.gif';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='skills' id='skills'>
      <h3 data-aos='zoom-in' className='h3'>
        SKILLS
      </h3>
      <div data-aos='fade-up' className='grid'>
        <div>
          <img src={html} alt='img' />
          <p>HTML</p>
        </div>
        <div>
          <img src={css} alt='img' />
          <p>CSS</p>
        </div>
        <div>
          <img src={javascript} alt='img' />
          <p>JAVASCRIPT</p>
        </div>
        <div>
          <img src={react} alt='img' />
          <p>REACT</p>
        </div>
        <div>
          <img src={git} alt='img' />
          <p>GIT</p>
        </div>
        <div>
          <img src={github} alt='img' />
          <p>GITHUB</p>
        </div>
        <div>
          <img src={firebase} alt='img' />
          <p>FIREBASE</p>
        </div>
        <div>
          <img src={office} alt='img' />
          <p>OFFICE</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
