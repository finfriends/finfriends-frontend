'use client';

import { KakaoLoginIcon } from '@/icon/KakaoLoginIcon';
import styled from '@emotion/styled';
import { Typography } from '@/styles/fonts';
import { Color } from '@/styles/color';

export const KakaoLoginButton = () => {
  const requestUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
  return (
    <S.LoginContainer>
      <a href={requestUrl}>
        <S.KakaoLoginButton>
          <KakaoLoginIcon />
          카카오톡으로 시작하기
        </S.KakaoLoginButton>
      </a>
      <S.PolicyText>
        가입을 진행할 경우, 서비스 약관 및 개인정보 처리방침에 동의한 것으로
        간주합니다.
      </S.PolicyText>
    </S.LoginContainer>
  );
};

namespace S {
  export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Color.MainBlue3};
  `;

  export const KakaoLoginButton = styled.div`
    border-radius: 12px;
    background-color: #ffde00;
    display: flex;
    gap: 12px;
    justify-content: center;
    padding: 16px 0;
    align-items: center;
    ${Typography.B1Medium}
  `;

  export const PolicyText = styled.p`
    ${Typography.B4Regular}
    color: ${Color.BackgroundBasic}
  `;
}
