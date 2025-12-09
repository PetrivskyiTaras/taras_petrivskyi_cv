'use client';

import { type FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/core/globals.css';

import { SettingsProvider } from '@/core/settings/SettingsContext';

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  const [queryClientRef] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <SettingsProvider>
      <QueryClientProvider client={queryClientRef}>
        { children }
      </QueryClientProvider>
    </SettingsProvider>
  );
};

export default Providers;
