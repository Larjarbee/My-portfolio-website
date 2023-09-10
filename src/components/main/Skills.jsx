import { Typography } from '@mui/material';
import React from 'react';
import react from '../../assets/images/react.png';
import html from '../../assets/images/html5.png';
import css from '../../assets/images/neon.png';
import github from '../../assets/images/github 2.png';
import gitlab from '../../assets/images/gitlab 2.png';
import javascript from '../../assets/images/java-script.png';
import nextjs from '../../assets/images/Nextjs.png';
import typescript from '../../assets/images/typescript.png';
import tailwind from '../../assets/images/tailwind-css.png';

const Skills = () => {
  return (
    <section id='skills' className='my-28 space-y-10'>
      <div className='py-1 px-3 bg-lightPurple mx-auto w-[90px] rounded-2xl'>
        <Typography className='text-Purple'>👨🏽‍💻 Skills</Typography>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-10'>
        <img src={html} alt='icon' width={50} />
        <img src={css} alt='icon' width={50} />
        <img src={javascript} alt='icon' width={50} />
        <img src={typescript} alt='icon' width={50} />
        <img src={react} alt='icon' width={50} />
        <img src={tailwind} alt='icon' width={50} />
        <img src={nextjs} alt='icon' width={50} />
        <img src={github} alt='icon' width={50} />
        <img src={gitlab} alt='icon' width={50} />
      </div>
    </section>
  );
};

export default Skills;
