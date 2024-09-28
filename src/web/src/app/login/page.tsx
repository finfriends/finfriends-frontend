'use client';

import { KakaoLoginButton } from '@/components/login/KakaoLoginButton';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';

export default function LoginPage() {
  return (
    <S.Wrapper>
      <S.Title>FINFRIENDS</S.Title>
      <KakaoLoginButton />
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 0 24px 34px 24px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const Title = styled.div`
    color: ${Color.White};
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 2px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
}
