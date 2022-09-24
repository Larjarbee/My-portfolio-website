import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../img/code.png';
import pdf from '../pdf/resume.pdf';
import Button from '../UI/Button';
import './Summary.css';

const Summary = ({ theme }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section id={theme}>
      <div className='summary'>
        <div data-aos='fade-right' className='summary-text'>
          <p>- Hey, I'm -</p>
          <h1>Osunlaja Abiodun</h1>
          <p>Front-End Web Developer</p>
          <Button>
            <a href={pdf} download>
              Download My CV
            </a>
          </Button>
        </div>
        <div data-aos='fade-up' className='summary-img'>
          <img src={img} alt='img' />
        </div>
        <div data-aos='fade-left' className='summary-social'>
          <ul>
            <li>
              <a href='https://twitter.com/Larjar_BEE'>
                <i class='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/osunlaja-abiodun-b90891192/'>
                <i class='fa-brands fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='https://github.com/Larjarbee'>
                <i class='fa-brands fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Summary;
