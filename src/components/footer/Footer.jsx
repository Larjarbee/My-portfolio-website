import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer className='bg-lightPurple mt-28 p-5 text-center'>
      <Typography fontWeight={100} color='#7B4AE2'>
        Copyright © Osunlaja Abiodun · {year}
      </Typography>
    </footer>
  );
}

export default Footer;
