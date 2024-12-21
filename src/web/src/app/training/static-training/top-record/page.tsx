'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useRouter } from 'next/navigation';
import { CloseIcon } from '@/icon/CloseIcon';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import clap from 'assets/images/lottie/clap.json';
import Lottie from 'react-lottie-player';

export default function TopRecordPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={handleBackClick}>
          <CloseIcon color={Color.White} />
        </button>
      </S.Header>
      <S.ContentWrapper>
        <div>
          <Lottie animationData={clap} play />
          <S.TopRecordTitle>최고 기록을 달성했어요!</S.TopRecordTitle>
          <S.TopRecordDesc>
            돌고래와 노는 시간이 더 길어졌어요!
            <br />
            다음 기록 도전을 기다릴게요
          </S.TopRecordDesc>
        </div>
        <Button theme={ButtonTheme.Primary} label="테이블 훈련하러 가기" />
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

  export const ContentWrapper = styled.div`
    padding: 0 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const TopRecordTitle = styled.div`
    ${Typography.H1Medium};
    color: ${Color.White};
    margin-top: 24px;
    text-align: center;
  `;

  export const TopRecordDesc = styled.div`
    ${Typography.B1Regular};
    color: ${Color.White};
    margin-top: 20px;
    text-align: center;
  `;
}
