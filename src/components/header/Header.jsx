import React, { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [showToggle, setShowToggle] = useState(false);

  const showToggleHandler = () => {
    setShowToggle((prev) => !prev);
  };

  return (
    <header id={theme}>
      <nav data-aos='fade-down' className='navbar' id='home'>
        <h3>O.A</h3>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#skills'>SKILLS</a>
          </li>
          <li>
            <a href='#portfolio'>PORTFOLIO</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
          <li>
            <span>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
            </span>
          </li>
        </ul>
        <span className='toggle' onClick={showToggleHandler}>
          <i class='fa-solid fa-bars'></i>
        </span>
      </nav>

      {showToggle && (
        <aside className='aside'>
          <ul onClick={showToggleHandler}>
            <li>
              <a href='#home'>HOME</a>
            </li>
            <li>
              <a href='#about'>ABOUT</a>
            </li>
            <li>
              <a href='#skills'>SKILLS</a>
            </li>
            <li>
              <a href='#portfolio'>PORTFOLIO</a>
            </li>
            <li>
              <a href='#contact'>CONTACT</a>
            </li>
            <li>
              <span>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
              </span>
            </li>
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Header;
