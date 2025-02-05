import Providers from '@/app/providers';
import { pretendard } from '@/styles/fonts';
import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/tailwind.css';
import { Toaster } from '@/components/ui/toaster';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finfriends',
  other: {
    viewport:
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Providers>
          <Toaster />
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding:
                  'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
              }}
            >
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
