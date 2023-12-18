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
import Reveal from '../../common/Reveal';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id='skills' className='my-28 space-y-10'>
      <Reveal>
        <div className='py-1 px-3 bg-lightPurple mx-auto w-[100px] text-center rounded-2xl'>
          <Typography className='text-Purple'>👨🏽‍💻 Skills</Typography>
        </div>
      </Reveal>

      <Reveal>
        <div className='flex flex-wrap items-center p-5 justify-center gap-10'>
          {images.map((image, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <img src={image} alt='icon' width={50} />
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;

const images = [
  html,
  css,
  javascript,
  typescript,
  react,
  tailwind,
  nextjs,
  github,
  gitlab,
];
