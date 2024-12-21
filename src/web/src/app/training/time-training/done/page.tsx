'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useRouter } from 'next/navigation';
import { CloseIcon } from '@/icon/CloseIcon';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import Lottie from 'react-lottie-player';
import complete from '@/assets/images/lottie/complete.json';
import Link from 'next/link';

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
        <S.Title>시간 기반 테이블</S.Title>
      </S.Header>
      <S.Container>
        <S.ContentWrapper>
          <Lottie
            animationData={complete}
            style={{ width: '200px', height: '200px' }}
            play
            loop={false}
          />
          <S.TopRecordTitle>훈련을 완료했어요!</S.TopRecordTitle>
          <S.TopRecordDesc>
            오늘 더 깊은 바다를 향해 조금 더 나아갔어요
            <br />
            내일도 참여해봐요
          </S.TopRecordDesc>
        </S.ContentWrapper>
        <Link href="/training/breath-training/done">
          <Button
            theme={ButtonTheme.Primary}
            label="호흡 기반 테이블 훈련 하러 가기"
          />
        </Link>
      </S.Container>
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

  export const Container = styled.div`
    padding: 0 24px;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
