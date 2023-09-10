import { Typography } from '@mui/material';
import React from 'react';
import img from '../../assets/images/linkedin.png';
import img1 from '../../assets/images/twitter.png';
import img2 from '../../assets/images/github.png';
import img3 from '../../assets/images/gitlab.png';
import img4 from '../../assets/images/img3.jpg';
import pdf from '../../assets/pdf/Resume.pdf';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Hero() {
  return (
    <div className='grid grid-cols-1 gap-16 my-20 items-center md:grid-cols-3 md:my-28 md:gap-0'>
      <div className=' space-y-3'>
        <div className='py-1 px-3 bg-lightPurple w-24 rounded-2xl'>
          <Typography className='text-Purple'>👋🏽 Hi, I`m</Typography>
        </div>
        <Typography variant='h2' fontWeight={900}>
          Osunlaja Abiodun
        </Typography>
        <Typography variant='body2' fontWeight={100}>
          Frontend Developer
        </Typography>

        <div className='flex gap-2'>
          <a href='https://www.linkedin.com/in/osunlaja-abiodun-b90891192/'>
            <img src={img} alt='img' width={20} height={20} />
          </a>
          <a href='https://twitter.com/Larjar_BEE'>
            <img src={img1} alt='img' width={20} height={20} />
          </a>
          <a href='https://github.com/Larjarbee'>
            <img src={img2} alt='img' width={20} height={20} />
          </a>
          <a href='https://gitlab.com/osunlajajamiu97'>
            <img src={img3} alt='img' width={20} height={20} />
          </a>
        </div>
      </div>
      <div>
        <img
          src={img4}
          alt='img'
          width={300}
          className=' rounded-full opacity-80 mx-auto -hue-rotate-60 ...'
        />
      </div>
      <div className='gap-5 flex flex-row items-center md:flex-col md:items-end'>
        <button className='flex items-center text-lighterPurple'>
          <a href={pdf} download>
            Download My CV{' '}
            <span className='pl-2'>
              {' '}
              <FileDownloadIcon />
            </span>
          </a>
        </button>
        <button className='flex items-center text-lighterPurple py-3 px-2 border border-lighterPurple w-1/2 rounded-2xl'>
          <a href='https://api.whatsapp.com/send?phone=2347013826816&text=hello'>
            <span className='pr-2'>
              <WhatsAppIcon />
            </span>{' '}
            Start Conversation
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
