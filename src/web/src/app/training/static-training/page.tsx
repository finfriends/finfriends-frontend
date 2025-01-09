'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { useRouter } from 'next/navigation';
import { RecordSelect } from '@/components/training/static/RecordSelect';
import { ClockIcon } from '@/icon/ClockIcon';

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
        <S.Title>스테틱 기록</S.Title>
      </S.Header>
      <S.Content>
        <S.ManualRecordTitle>
          <ClockIcon />
          <div>기록 직접 입력</div>
        </S.ManualRecordTitle>
        <RecordSelect />
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
    padding: 24px;
  `;

  export const ManualRecordTitle = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding-bottom: 12px;
    color: ${Color.ButtonSecond};
    ${Typography.B2Medium};
  `;
}
