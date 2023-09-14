import { IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { scrollToSection } from '../../common/stroll';

function Navbar({ setMode }) {
  const theme = useTheme();
  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));

  const [showToggle, setShowToggle] = useState(false);

  return (
    <>
      <nav
        id='home'
        className='w-11/12 mx-auto flex items-center rounded-lg justify-between'
      >
        <div className=''>
          <Typography variant='h4' fontWeight={900}>
            O.A
          </Typography>
        </div>

        <div className='hidden items-center space-x-10 md:flex'>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('home')}
            >
              Home
            </p>
          </Typography>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('about')}
            >
              About
            </p>
          </Typography>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </p>
          </Typography>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </p>
          </Typography>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('work')}
            >
              Work
            </p>
          </Typography>
          <Typography fontWeight={200}>
            <p
              className='px-2 hover:cursor-pointer hover:font-medium'
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </p>
          </Typography>
          <IconButton
            className='px-2 hover:cursor-pointer hover:font-medium'
            onClick={toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </div>

        <div className='flex items-center gap-5 md:hidden'>
          <IconButton
            className='px-2 hover:cursor-pointer hover:font-medium'
            onClick={toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>

          <IconButton color='inherit'>
            <MenuIcon
              className='hover:cursor-pointer hover:font-medium'
              onClick={() => setShowToggle(!showToggle)}
            />
          </IconButton>
        </div>
      </nav>
      {showToggle && (
        <>
          <aside className='animation fixed z-20 text-center top-20 right-5 bg-White h-full w-2/3 p-5 ease-in-out duration-300'>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('home');
                  setShowToggle(false);
                }}
              >
                Home
              </p>
            </Typography>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('about');
                  setShowToggle(false);
                }}
              >
                About
              </p>
            </Typography>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('skills');
                  setShowToggle(false);
                }}
              >
                Skills
              </p>
            </Typography>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('portfolio');
                  setShowToggle(false);
                }}
              >
                Portfolio
              </p>
            </Typography>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('work');
                  setShowToggle(false);
                }}
              >
                Work
              </p>
            </Typography>
            <Typography fontWeight={200} className='p-2'>
              <p
                className='hover:cursor-pointer hover:font-medium'
                onClick={() => {
                  scrollToSection('contact');
                  setShowToggle(false);
                }}
              >
                Contact
              </p>
            </Typography>
          </aside>

          <div
            onClick={() => setShowToggle(false)}
            className='fixed animation rounded-xl top-20 z-10 w-2/3 h-1/3 right-5 bg-white'
          />
        </>
      )}
    </>
  );
}

export default Navbar;
