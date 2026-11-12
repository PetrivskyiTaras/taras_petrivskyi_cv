import { createTheme } from '@mui/material/styles';

import components from './components';

export const COLOR_MODE_STORAGE_KEY = 'theme';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  // Palette tuned for readability: one calm blue accent (matches the CV's navy),
  // a muted green for dates, soft off-white/near-black text and distinct page vs card surfaces.
  // All text/background pairs meet WCAG AA (most AAA).
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1d5fa6', light: '#5b8fd0', dark: '#164a82', contrastText: '#ffffff' },
        success: { main: '#2c7a57' },
        text: { primary: '#1b2430', secondary: '#475263' },
        background: { default: '#eef1f5', paper: '#ffffff' },
        divider: '#dde3ea',
      },
    },
    dark: {
      palette: {
        primary: { main: '#8cb8f2', light: '#b3d0f7', dark: '#5f93d6', contrastText: '#0f1722' },
        success: { main: '#7cc6a1' },
        text: { primary: '#e4e8ee', secondary: '#a9b3c1' },
        background: { default: '#14171c', paper: '#1e222a' },
        divider: 'rgba(255, 255, 255, 0.09)',
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
  },
  components,
});

export default theme;
