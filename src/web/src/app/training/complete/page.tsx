'use client';

import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useRouter, useSearchParams } from 'next/navigation';
import { CloseIcon } from '@/icon/CloseIcon';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import CompleteLottie from '../../../../public/images/complete.json';

export default function CompletePage() {
  const router = useRouter();
  const params = useSearchParams();
  const tableType: 'time' | 'breath' = params.get('type') as 'time' | 'breath';
  const Lottie = dynamic(() => import('../../../components/common/Lottie'), {
    ssr: false,
  });

  const handleClickTraining = () => {
    router.push(
      `/training/based-table?type=${tableType === 'time' ? 'breath' : 'time'}`
    );
  };

  return (
    <S.Wrapper>
      <S.TitleWrap>
        <div onClick={() => router.push('/training')}>
          <CloseIcon color={Color.White} />
        </div>
        <S.Title>
          {tableType === 'time' ? '시간' : '호흡'}
          &nbsp;기반 테이블
        </S.Title>
      </S.TitleWrap>
      <S.LottieWrap>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <Lottie animationData={CompleteLottie} />
      </S.LottieWrap>
      <S.MainText>훈련을 완료했어요!</S.MainText>
      <S.SubText>
        오늘 더 깊은 바다를 향해 조금 더 나아갔어요
        <br />
        내일도 참여해봐요
      </S.SubText>
      <S.ButtonWrapper>
        <Button
          theme={ButtonTheme.Primary}
          label={
            tableType === 'time'
              ? '호흡 기반 테이블 훈련 하러 가기'
              : '시간 기반 테이블 훈련 하러 가기'
          }
          onClick={handleClickTraining}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    padding: 0 24px 34px 24px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
  `;
  export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0 8px;
    position: relative;
  `;
  export const Title = styled.h2`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Color.White};
    ${Typography.H4Medium};
  `;
  export const LottieWrap = styled.div`
    margin: 115px auto 33px;
    width: 203px;
  `;
  export const MainText = styled.p`
    text-align: center;
    color: ${Color.White};
    ${Typography.H1Medium};
  `;
  export const SubText = styled.p`
    margin-top: 20px;
    text-align: center;
    color: ${Color.White};
    ${Typography.B1Regular};
  `;
  export const ButtonWrapper = styled.div`
    margin-top: auto;
  `;
}
