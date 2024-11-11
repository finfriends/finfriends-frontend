'use client';

import Providers from '@/app/providers';
import { pretendard } from '@/styles/fonts';
import '@/styles/reset.css';
import '@/styles/globals.css';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Toaster } from '@/components/ui/toaster';

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
          <S.Wrapper>
            <S.Container>{children}</S.Container>
          </S.Wrapper>
        </Providers>
      </body>
    </html>
  );
}

namespace S {
  export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      background: ${Color.BackgroundDarkBox};
    }
  `;

  export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      width: 375px;
    }
  `;
}
