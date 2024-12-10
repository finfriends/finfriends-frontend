'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { useRouter } from 'next/navigation';
import { PreparatoryBreathDuration } from '@/components/training/setting/PreparatoryBreathDuration';

export default function TablePage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={handleBackClick}>
          <LeftArrowIcon />
        </button>
        <S.Title>준비 호흡 초 설정</S.Title>
      </S.Header>
      <S.DescBox>들숨과 날숨을 합한 초 수를 선택해요</S.DescBox>
      <PreparatoryBreathDuration />
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

  export const DescBox = styled.div`
    padding: 20px 24px;
    color: ${Color.Text000};
    ${Typography.B1Regular};
  `;
}
