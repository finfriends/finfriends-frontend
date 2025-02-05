'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import MainBg from '@/assets/images/bg_main.png';

export const ImageBackgroundLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <S.OuterWrapper>
      <S.Background />
      <S.Content>{children}</S.Content>
    </S.OuterWrapper>
  );
};

namespace S {
  export const OuterWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `;

  export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${MainBg.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  `;

  export const Content = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
  `;
}
