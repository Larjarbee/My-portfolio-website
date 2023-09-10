import { grey } from '@mui/material/colors';
import { darkPurple } from '../common/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...darkPurple,
      ...(mode === 'dark' && {
        main: darkPurple.main,
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: darkPurple.main,
        // paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});
