'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { useRouter } from 'next/navigation';
import { ButtonTheme } from '@/constants/button';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { PreviewTable } from '@/components/training/timebased/PreviewTable';

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
        <S.Title>시간 기반 테이블</S.Title>
      </S.Header>
      <S.Content>
        <PreviewTable />
        <Link href="/training/time-based/training">
          <Button
            theme={ButtonTheme.Primary}
            label="시간 기반 테이블 훈련 시작"
          />
        </Link>
      </S.Content>
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
    gap: 8px;
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

  export const Content = styled.div`
    padding: 24px 24px 0 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  `;
}
