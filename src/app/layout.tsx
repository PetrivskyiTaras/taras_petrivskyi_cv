import { type Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';

import Providers from '@/core/components/Providers';
import { COLOR_MODE_STORAGE_KEY } from '@/core/theme/theme';

// Re-generate the static page daily so "till now" durations stay current.
export const revalidate = 86400;

// Self-hosted variable font (one file for all weights), swapped in without blocking text render.
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const TITLE = 'Taras Petrivskyi – Senior Full-Stack Software Engineer | Technical Lead';
const DESCRIPTION = 'Full-Stack Engineer & Tech Lead, 11+ years building production web apps with TypeScript, React, Next.js, Node.js and PostgreSQL. Founder of FamilyBudget.pro.';

// Absolute base for share-preview URLs: Vercel provides the production domain at build time.
const PRODUCTION_HOST = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const SITE_URL = PRODUCTION_HOST ? `https://${ PRODUCTION_HOST }` : 'http://localhost:3000';

export const metadata: Metadata = {
  // eslint-disable-next-line compat/compat -- runs on the server at build time, not in browsers
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Taras Petrivskyi' }],
  // Used when the link is shared (LinkedIn, Slack, Telegram, etc.).
  // The preview image itself comes from src/app/opengraph-image.tsx.
  openGraph: {
    type: 'profile',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    firstName: 'Taras',
    lastName: 'Petrivskyi',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="system" modeStorageKey={COLOR_MODE_STORAGE_KEY} />
        <main>
          <AppRouterCacheProvider options={{ key: 'css', prepend: true, enableCssLayer: true }}>
            <Providers>
              { children }
            </Providers>
          </AppRouterCacheProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
