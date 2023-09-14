import { Typography } from '@mui/material';
import React from 'react';
import { DATA } from './portfolioData';

const Portfolio = () => {
  return (
    <section id='portfolio' className='space-y-5'>
      <div>
        <div className='py-1 mb-3 px-3 bg-lightPurple w-[120px] text-center rounded-2xl'>
          <Typography className='text-Purple'>🔗 Portfolio</Typography>
        </div>
        <Typography variant='h5' fontWeight={900} className='uppercase'>
          Works and projects
        </Typography>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>
        {DATA.map((data, index) => (
          <div
            key={index}
            className='p-5 space-y-5 rounded-xl border border-lightPurple'
          >
            <Typography variant='body1' fontWeight={900}>
              {data.title}
            </Typography>

            <div className='flex flex-wrap gap-x-3'>
              {data.stacks.map((stack, index) => (
                <div
                  key={index}
                  className='py-[2px] mb-3 px-2 bg-lightPurple rounded-2xl'
                >
                  <Typography variant='body2' className='text-Purple'>
                    {stack}
                  </Typography>
                </div>
              ))}
            </div>

            <div className='effects rounded-xl'>
              <img src={data.img} alt='img' className='effect' />
            </div>

            <div className='flex gap-2 items-center'>
              {data.demoLink ? (
                <button className='py-2 px-5 text-sm text-Purple rounded-xl bg-lightPurple'>
                  <a href={data.demoLink}>Demo</a>
                </button>
              ) : (
                <p className='text-Purple'>Coming soon</p>
              )}
              {data.gitLink ? (
                <button className='py-2 px-5 text-sm text-Purple rounded-xl bg-lightPurple'>
                  <a href={data.gitLink}>Code</a>
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
