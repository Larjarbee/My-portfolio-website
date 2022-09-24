import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img from '../img/ca.jpg';
import './About.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='about' id='about'>
      <h3 data-aos='zoom-in' className='h3'>
        ABOUT ME
      </h3>
      <div data-aos='flip-left' className='img'>
        <img src={img} alt='img' />
      </div>
      <div className='about-me'>
        <div data-aos='fade-down' className='profile'>
          <h3>PROFILE</h3>
          <p>
            I'm a Front-End Developer and graphic designer that bring in-depth
            knowledge of latest technology trends to produce clean website
            design. Experience in handling complex HTML, CSS and REACT coding,
            design and extensions to meet organization's front-facing internet
            needs. Detail-oriented collaborate with others to define project
            expectations and demand.
          </p>

          <h3>EDUCATION</h3>
          <p>
            The Polytechnic, Ibadan (HND) <br />
            <i>Department Of Computer Engineering</i> <br />
            <i>Duration: 2016 - 2023</i>
          </p>
        </div>
        <div data-aos='fade-up' className='experience'>
          <h3>WORK EXPERIENCE</h3>
          <div>
            Oluwarotimi Institute of Computer Technologies (Intern) <br />
            <i>Duration: 2012 - 2016</i>
          </div>
          <br />
          <div>
            Cr8ive Xpats Academy (Intern) <br />
            <i>Duration: 2019 - 2020</i> <br />
            <ul>
              <li>
                Enhanced functionality and appearance of website and repaired
                functionality issues.
              </li>
              <li>
                Translate customer requirements into technical site concepts for
                bidding and initial planning purposes.
              </li>
              <li>Designed user interface to meet client specifications.</li>
              <li>
                Designed highly engaging interactive user interfaces that
                complied with modern web standard.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
