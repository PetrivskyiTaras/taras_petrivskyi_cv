import { type Components, type Theme } from '@mui/material';

const MuiLink: Components<Theme>['MuiLink'] = {
  styleOverrides: {
    root: {
      textUnderlineOffset: '0.2em',
    },
  },
};

export default MuiLink;
