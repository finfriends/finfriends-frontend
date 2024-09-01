'use client';

import { KakaoLoginIcon } from '@/icon/KakaoLoginIcon';
import styled from '@emotion/styled';

export const KakaoLoginButton = () => {
  const requestUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`;
  return (
    <a href={requestUrl}>
      <S.KakaoLoginButton>
        <KakaoLoginIcon />
        카카오톡으로 시작하기
      </S.KakaoLoginButton>
    </a>
  );
};

namespace S {
  export const KakaoLoginButton = styled.div`
    border-radius: 12px;
    background-color: #ffde00;
    display: flex;
    gap: 12px;
    justify-content: center;
    padding: 16px 0;
    align-items: center;
  `;
}
