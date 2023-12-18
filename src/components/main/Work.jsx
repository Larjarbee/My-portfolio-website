import { Typography } from '@mui/material';
import React from 'react';
import Reveal from '../../common/Reveal';

const Work = () => {
  return (
    <section id='work' className='my-28 space-y-10'>
      <div className='space-y-2'>
        <Reveal>
          <div className='py-1 px-3 bg-lightPurple w-[100px] text-center rounded-2xl'>
            <Typography className='text-Purple'>💼 Work</Typography>
          </div>
        </Reveal>
        <Reveal>
          <Typography variant='h5' fontWeight={900} className='uppercase'>
            Work Experience
          </Typography>
        </Reveal>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 '>
        {EXPERIENCES.map((exp, index) => (
          <Reveal>
            <div
              key={index}
              className='p-5 space-y-10 rounded-xl border border-lightPurple'
            >
              {/* <div className='effects rounded-xl'>
              <img src={exp.img} alt='img' className='effect' />
            </div> */}

              <div>
                <div className='flex justify-between items-center'>
                  <Typography variant='h5' fontWeight={900}>
                    {exp.title}
                  </Typography>
                  <Typography variant='body2'>{exp.duration}</Typography>
                </div>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;

const EXPERIENCES = [
  {
    title: 'GoCaby Technology Limited.',
    desc: 'A reliable, convenient and affordable ride-hailing and delivery company in Abuja.',
    duration: 'Nov. 2023 - Present',
    // img: goCaby,
    worksDone: [
      'Enhanced functionality and appearance of website and repaired functionality issues.',
      'Translate customer requirements into technical site concepts for bidding and initial planning purposes.',
      'Designed user interface to meet client specifications.',
      'Designed highly engaging interactive user interfaces that complied with modern web standard.',
    ],
  },
  {
    title: 'Wuri Technologies Inc.',
    desc: 'A multi currency wallet system that allows you send and receive money globally.',
    duration: 'Dec. 2022 - Sept. 2023',
    // img: wuri,
    worksDone: [
      'Worked with the design team to develop a beautiful, usable and resilient responsive web app.',
      'Designed and updated layouts to meet usability and performance requirements.',
      'Built the front-end of applications through appealing visual design.',
    ],
  },
  {
    title: 'Softwrk.',
    desc: 'A premier platform for freelance talent and project opportunities, fostering innovation and collaboration in the digital workspace.',
    duration: 'Nov. 2022 - Present',
    // img: softwrk,
    worksDone: [
      'Colaborate with some developers to designed user interface to meet client specifications.',
      'Translate client needs into technical site concepts to facilitate bidding and initial planning stages.',
      'Created captivating and interactive user interfaces that adhered to contemporary web standards.',
    ],
  },

  // {
  //   title: 'Oya Riyders.',
  //   desc: 'An dependable, user-friendly, and cost-effective ride-hailing and delivery service.',
  //   duration: 'June 2022 - Sept. 2022',
  //   // img: oya,
  //   worksDone: [
  //     'Worked on the landing page',
  //     'Designed user interface to meet client specifications.',
  //   ],
  // },
];
