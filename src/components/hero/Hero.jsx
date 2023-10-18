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
import { motion } from 'framer-motion';

function Hero() {
  return (
    <>
      <div className='grid grid-cols-1 gap-16 my-20 items-center md:grid-cols-3 md:my-28 md:gap-0'>
        <div className=' space-y-3'>
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className='py-1 px-3 bg-lightPurple w-32 text-center rounded-2xl'
          >
            <Typography className='text-Purple'>👋🏽 Hi, I`m</Typography>
          </motion.div>
          <motion.div
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant='h2' fontWeight={900}>
              Osunlaja Abiodun
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Typography variant='body2' fontWeight={100}>
              Frontend Developer
            </Typography>
          </motion.div>

          <div className='flex gap-2'>
            <motion.a
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ delay: 2 }}
              href='https://www.linkedin.com/in/osunlaja-abiodun-b90891192/'
            >
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={img}
                alt='img'
                width={20}
                height={20}
              />
            </motion.a>
            <motion.a
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ delay: 2.25 }}
              href='https://twitter.com/Larjar_BEE'
            >
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={img1}
                alt='img'
                width={20}
                height={20}
              />
            </motion.a>
            <motion.a
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ delay: 2.5 }}
              href='https://github.com/Larjarbee'
            >
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={img2}
                alt='img'
                width={20}
                height={20}
              />
            </motion.a>
            <motion.a
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ delay: 2.75 }}
              href='https://gitlab.com/osunlajajamiu97'
            >
              <motion.img
                whileHover={{ scale: 1.3 }}
                src={img3}
                alt='img'
                width={20}
                height={20}
              />
            </motion.a>
          </div>
        </div>
        <div>
          <motion.img
            animate={{
              scale: [1, 1.05, 1.05, 1, 1],
              rotate: [0, 0, 360],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            src={img4}
            alt='img'
            width={300}
            className=' rounded-full opacity-80 mx-auto -hue-rotate-60 ...'
          />
        </div>
        <div className='gap-5 flex flex-row items-center md:flex-col md:items-end'>
          <motion.button
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.2 }}
            className='flex items-center text-lighterPurple'
          >
            <a href={pdf} download>
              Download My CV{' '}
              <span className='pl-2'>
                {' '}
                <FileDownloadIcon />
              </span>
            </a>
          </motion.button>

          <motion.button
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            whileHover={{ scale: 1.2 }}
            className='flex items-center text-lighterPurple py-3 px-2 border border-lighterPurple w-1/2 rounded-2xl'
          >
            <a href='https://api.whatsapp.com/send?phone=2347013826816&text=hello'>
              <span className='pr-2'>
                <WhatsAppIcon />
              </span>{' '}
              Start Conversation
            </a>
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default Hero;
