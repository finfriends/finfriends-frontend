'use client';

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import MainBg from '@/assets/images/bg_main.png';

const Container = ({
  children,
  training = false,
}: {
  children: ReactNode;
  training?: boolean;
}) => {
  return (
    <S.Wrapper>
      <S.Container training={training}>{children}</S.Container>
    </S.Wrapper>
  );
};

export default Container;

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
  export const Container = styled.div<{ training: boolean }>`
    width: 100vw;
    height: 100vh;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: ${({ training }) =>
      training ? `url(${MainBg.src})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      width: 375px;
    }
  `;
}
