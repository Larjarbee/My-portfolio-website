import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import Button from '../UI/Button';
import auth from '../img/auth.PNG';
import expense from '../img/expense.PNG';
import calc from '../img/calc.PNG';
import fashon from '../img/fashon.PNG';
import expenses from '../img/expenses.PNG';
import cate from '../img/cate.PNG';
import Capture from '../img/Capture.JPG';
import Captures from '../img/Captures.JPG';

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='portfolio' id='portfolio'>
      <h3 data-aos='zoom-in' className='h3'>
        PORTFOLIO
      </h3>
      <div className='grid'>
        <div data-aos='fade-up-right' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={fashon} alt='img' />
          </div>
          <h4>Online Clothing Store (e-Commerce)</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://chic-concha-bb4522.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/e-commerce-project'>CODE</a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-left' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={Captures} alt='img' />
          </div>
          <h4>Movie App (Fetching data from MovieDB)</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://splendid-monstera-9dc476.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/Movie-app'>CODE</a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-right' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={Capture} alt='img' />
          </div>
          <h4>Easybank Landing Page (Frontend Mentor)</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://tangerine-salamander-3458f4.netlify.app/'>
                DEMO
              </a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/Landing-Page'>CODE</a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-left' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={expenses} alt='img' />
          </div>
          <h4>Expence Tracker App</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://zingy-youtiao-f1aaf8.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/Expense-Tracker-Project'>
                CODE
              </a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-right' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={auth} alt='img' />
          </div>
          <h4>User Auth (using firebase as backend)</h4>
          <p>
            Built with:<i> HTML, CSS, React & Firebase</i>
          </p>
          <p>
            <Button>
              <a href='https://jovial-cuchufli-257caf.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/User-Auth'>CODE</a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-left' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={cate} alt='img' />
          </div>
          <h4>W3School Web Template</h4>
          <p>
            Built with:<i> HTML & CSS</i>
          </p>
          <p>
            <Button>
              <a href='https://lee-catering.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/web-practice'>CODE</a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-right' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={expense} alt='img' />
          </div>
          <h4>Expence Tracker App</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://gentle-elf-d87e92.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/Expense-Tracker-App'>
                CODE
              </a>
            </Button>
          </p>
        </div>
        <div data-aos='fade-up-left' className='grid-items'>
          <div className='effects'>
            <img className='effect' src={calc} alt='img' />
          </div>
          <h4>Calculator App</h4>
          <p>
            Built with:<i> HTML, CSS & React</i>
          </p>
          <p>
            <Button>
              <a href='https://benevolent-lollipop-dc5aa3.netlify.app/'>DEMO</a>
            </Button>
            <Button>
              <a href='https://github.com/Larjarbee/Calculator-App'>CODE</a>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
