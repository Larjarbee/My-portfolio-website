import { Typography } from '@mui/material';
import React from 'react';

const Work = () => {
  return (
    <section id='work' className='my-28 space-y-10'>
      <div className='space-y-2'>
        <div className='py-1 px-3 bg-lightPurple mx-auto w-[85px] rounded-2xl'>
          <Typography className='text-Purple'>💼 Work</Typography>
        </div>
        <Typography
          variant='h5'
          fontWeight={900}
          className='uppercase text-center'
        >
          Work Experience
        </Typography>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 '>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className='p-5 space-y-10 rounded-xl border border-lightPurple'
          >
            {/* <div className='effects rounded-xl'>
              <img src={exp.img} alt='img' className='effect' />
            </div> */}

            <div>
              <Typography variant='h5' fontWeight={900}>
                {exp.title}
              </Typography>
              <Typography variant='body1'>{exp.desc}</Typography>
            </div>

            <div className='space-y-5'>
              {exp.worksDone.map((work, index) => (
                <div key={index}>
                  <Typography variant='body2' fontWeight={200}>
                    - {work}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

const EXPERIENCES = [
  {
    title: 'Wuri Technologies Inc.',
    desc: 'A multi currency wallet system that allows you send and receive money globally.',
    // img: wuri,
    worksDone: [
      'Worked with the design team to develop a beautiful, usable and resilient responsive web app.',
      'Designed and updated layouts to meet usability and performance requirements.',
      'Built the front-end of applications through appealing visual design.',
    ],
  },
  {
    title: 'Oya Riyders.',
    desc: 'An dependable, user-friendly, and cost-effective ride-hailing and delivery service.',
    // img: oya,
    worksDone: [
      'Worked on the landing page',
      'Designed user interface to meet client specifications.',
    ],
  },
  {
    title: 'Softwrk.',
    desc: 'A premier platform for freelance talent and project opportunities, fostering innovation and collaboration in the digital workspace.',
    // img: softwrk,
    worksDone: [
      'Colaborate with some developers to designed user interface to meet client specifications.',
      'Translate client needs into technical site concepts to facilitate bidding and initial planning stages.',
      'Created captivating and interactive user interfaces that adhered to contemporary web standards.',
    ],
  },
  {
    title: 'GoCaby Technology Limited.',
    desc: 'A reliable, convenient and affordable ride-hailing and delivery company in Abuja.',
    // img: goCaby,
    worksDone: [
      'Enhanced functionality and appearance of website and repaired functionality issues.',
      'Translate customer requirements into technical site concepts for bidding and initial planning purposes.',
      'Designed user interface to meet client specifications.',
      'Designed highly engaging interactive user interfaces that complied with modern web standard.',
    ],
  },
];
