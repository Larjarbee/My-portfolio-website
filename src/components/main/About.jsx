import React from 'react';
import img from '../../assets/images/pic1.png';
import { ReactComponent as Img1 } from '../../assets/svgs/CodeIcon.svg';
import { ReactComponent as Img2 } from '../../assets/svgs/DesignIcon.svg';
import { ReactComponent as Img3 } from '../../assets/svgs/ProjectsIcon.svg';
import { Typography } from '@mui/material';

function About() {
  return (
    <section id='about' className='space-y-28'>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-3'>
        <div className='text-center p-5 space-y-5 rounded-xl border border-lightPurple'>
          <Img2 className='mx-auto' />

          <Typography
            variant='h6'
            fontWeight={900}
            className='py-1 text-Purple rounded-2xl'
          >
            Clean and Modern Design
          </Typography>

          <Typography variant='body2' fontWeight={100}>
            I take pride in crafting visually appealing and user-friendly
            websites that leave a lasting impression on visitors.
          </Typography>
        </div>
        <div className='text-center p-5 space-y-5 rounded-xl border border-lightPurple'>
          <Img1 className='mx-auto' />
          <Typography
            variant='h6'
            fontWeight={900}
            className='py-1 text-Purple rounded-2xl'
          >
            Problem Solving
          </Typography>
          <Typography variant='body2' fontWeight={100}>
            I tackle complex challenges with creativity and resourcefulness,
            finding innovative solutions to meet project requirements.
          </Typography>
        </div>
        <div className='text-center p-5 space-y-5 rounded-xl border border-lightPurple'>
          <Img3 className='mx-auto' />
          <Typography
            variant='h6'
            fontWeight={900}
            className='py-1 text-Purple rounded-2xl'
          >
            Performance Optimization
          </Typography>
          <Typography variant='body2' fontWeight={100}>
            I optimize websites for speed and performance, resulting in faster
            load times and improved search engine rankings.
          </Typography>
        </div>
      </div>
      <div className='grid gap-10 grid-cols-1 items-center md:grid-cols-2'>
        <div className='h-[500px] overflow-hidden rounded-xl'>
          <img
            src={img}
            alt='img'
            className='opacity-80 mx-auto -hue-rotate-60 ...'
          />
        </div>
        <div className=' space-y-10'>
          <div className=' space-y-2'>
            <div className='py-1 px-3 bg-lightPurple w-[115px] rounded-2xl'>
              <Typography className='text-Purple'>🤔 About Me</Typography>
            </div>
            <Typography>
              I am a Front End Web Developer with a deep understanding of the
              latest technology trends. I specialize in creating clean and
              visually appealing website designs. My expertise includes handling
              complex HTML, CSS, and React coding to develop and enhance web
              applications that align with the organization's requirements. I am
              known for my attention to detail and enjoy collaborating with
              others to clearly define project expectations and deliver
              exceptional results for the frontend.
            </Typography>
          </div>

          <div className=' space-y-2'>
            <div className='py-1 px-3 bg-lightPurple w-[120px] rounded-2xl'>
              <Typography className='text-Purple'>📚 Education</Typography>
            </div>
            <div>
              <Typography>The Polytechnic, Ibadan (HND)</Typography>
              <Typography variant='body2' fontWeight={100}>
                Department Of Computer Engineering Technology.
              </Typography>
              <Typography variant='body2' fontWeight={100}>
                Duration: 2016 - 2023
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
