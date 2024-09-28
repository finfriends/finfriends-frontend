'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import MainBg from '@/assets/images/bg_main.png';

export const ImageBackgroundLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

namespace S {
  export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${MainBg.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;
}
