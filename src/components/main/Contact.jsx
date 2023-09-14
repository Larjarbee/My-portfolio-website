import React from 'react';
import { IconButton, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NorthIcon from '@mui/icons-material/North';
import { scrollToSection } from '../../common/stroll';

function Contact() {
  return (
    <section id='contact' className='space-y-10'>
      <div className='py-1 px-3 bg-lightPurple mx-auto w-[125px] text-center rounded-2xl'>
        <Typography className='text-Purple'>📬 Contact</Typography>
      </div>

      <div className='flex justify-center gap-5 w-full md:hidden'>
        <IconButton
          href='https://api.whatsapp.com/send?phone=2347013826816&text=hello'
          sx={{ color: '#7B4AE2' }}
          size='large'
        >
          <WhatsAppIcon />
        </IconButton>

        <IconButton
          href='mailto:osunlajajamiu97@gmail.com'
          sx={{ color: '#7B4AE2' }}
          size='large'
        >
          <EmailIcon />
        </IconButton>
      </div>
      <div className='hidden flex-wrap justify-center gap-5 w-full mx-auto md:w-[40%] md:flex'>
        <button className='flex items-center text-lighterPurple py-3 px-5 border border-lighterPurple rounded-2xl w-1/2'>
          <a href='https://api.whatsapp.com/send?phone=2347013826816&text=hello'>
            <span className='pr-2'>
              <WhatsAppIcon />
            </span>{' '}
            Start Conversation
          </a>
        </button>

        <button className='flex items-center text-lighterPurple py-3 px-10 border border-lighterPurple rounded-2xl w-1/2'>
          <a href='mailto:osunlajajamiu97@gmail.com'>
            <span className='pr-2'>
              <EmailIcon />
            </span>{' '}
            Send E-mail
          </a>
        </button>
      </div>
      <div className='text-center pt-10 text-Purple'>
        <IconButton
          onClick={() => scrollToSection('home')}
          sx={{ color: '#7B4AE2' }}
        >
          <NorthIcon />
        </IconButton>
        <Typography variant='body2'>Scroll to top</Typography>
      </div>
    </section>
  );
}

export default Contact;
