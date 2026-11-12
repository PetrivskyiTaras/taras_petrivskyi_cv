import { type Components, type Theme } from '@mui/material';

const MuiPaper: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root: {
      borderRadius: '4px',
      // Soft shadow + hairline border: separates cards from the page without visual heaviness.
      boxShadow: '0 1px 3px rgba(16, 24, 40, 0.08), 0 6px 16px rgba(16, 24, 40, 0.06)',
      border: '1px solid var(--mui-palette-divider)',
      '&.MuiPaper-root': {
        backgroundColor: 'var(--mui-palette-background-paper)',
        // Disable MUI's dark-mode elevation overlay so cards keep the exact palette color.
        backgroundImage: 'none',
      },
      '@media print': {
        boxShadow: 'none',
      },
    },
  },
  defaultProps: {
    elevation: 2,
  },
};

export default MuiPaper;
