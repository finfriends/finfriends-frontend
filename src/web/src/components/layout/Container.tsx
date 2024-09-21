import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
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
  export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 375px;
    }
  `;
}
