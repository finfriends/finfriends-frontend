'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { usePathname, useRouter } from 'next/navigation';
import { TotalRound } from '@/components/training/setting/TotalRound';
import { TrainingType } from '@/constants/training';

export default function TablePage() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const type = segments[segments.length - 1] as TrainingType;

  const handleBackClick = () => {
    router.back();
  };

  if (!type) {
    return null;
  }
  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={handleBackClick}>
          <LeftArrowIcon />
        </button>
        <S.Title>총 라운드 설정</S.Title>
      </S.Header>
      <S.DescBox>
        정확하고 안전한 트레이닝을 위해,
        <br /> 기본 값을 추천드려요
      </S.DescBox>
      <TotalRound type={type} />
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
