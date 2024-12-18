'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useRouter } from 'next/navigation';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { KakaoIcon } from '@/icon/KakaoIcon';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { formatDateToYYYYMMDD } from '@/utils/dateFormatter';
import Link from 'next/link';

export default function TablePage() {
  const router = useRouter();
  const { userInfo } = useUserInfo();

  const handleBackClick = () => {
    router.back();
  };

  if (!userInfo) return null;

  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={handleBackClick}>
          <LeftArrowIcon />
        </button>
        <S.Title>회원 정보</S.Title>
      </S.Header>
      <S.ContentWrapper>
        <S.AccountBox>
          <KakaoIcon />
          <S.EmailText>{userInfo.email}</S.EmailText>
          <S.CreatedAtText>
            {formatDateToYYYYMMDD(userInfo.createdAt)}
          </S.CreatedAtText>
        </S.AccountBox>
        <Link href="/training">
          <S.DeletionText>회원 탈퇴하기</S.DeletionText>
        </Link>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding-bottom: 34px;
    box-sizing: border-box;
    flex-direction: column;
    background: ${Color.BackgroundDarkBox};
  `;

  export const Header = styled.div`
    padding: 12px 20px 8px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  `;

  export const Title = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${Typography.H4Medium};
    color: ${Color.White};
  `;

  export const ContentWrapper = styled.div`
    height: 100%;
    padding: 52px 0 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const AccountBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  export const EmailText = styled.div`
    padding-top: 28px;
    ${Typography.B1Medium};
    color: ${Color.White};
  `;

  export const CreatedAtText = styled.div`
    ${Typography.B3Regular};
    color: ${Color.LineBasic};
  `;

  export const DeletionText = styled.div`
    ${Typography.B3UnderLine};
    color: ${Color.WhiteGrey};
    text-align: center;
  `;
}
