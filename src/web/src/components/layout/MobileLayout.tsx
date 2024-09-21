'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
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
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      width: 375px;
    }
  `;
}
