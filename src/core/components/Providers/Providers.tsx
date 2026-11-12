'use client';

import { type FC } from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@/core/globals.css';

import theme, { COLOR_MODE_STORAGE_KEY } from '@/core/theme/theme';

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme} defaultMode="system" modeStorageKey={COLOR_MODE_STORAGE_KEY}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  </StyledEngineProvider>
);

export default Providers;
