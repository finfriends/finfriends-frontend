'use client';

import styled from '@emotion/styled';
import { SettingIcon } from '@/icon/SettingIcon';
import { HistoryIcon } from '@/icon/HistoryIcon';
import { Typography } from '@/styles/fonts';
import { Color } from '@/styles/color';
import Link from 'next/link';
import { StaticTopRecordBox } from '@/components/training/StaticTopRecordBox';
import { TrainingStartBox } from '@/components/training/TrainingStartBox';
import { TrainingType } from '@/constants/training';

const Page = () => {
  return (
    <div>
      <S.Header>
        <Link href="/training/setting">
          <SettingIcon />
        </Link>
        <Link href="/training/table">
          <HistoryIcon />
        </Link>
      </S.Header>
      <S.Wrapper>
        <S.Title>
          <div>CO2 TABLE</div>
          <div>스테틱 최고기록에 따라 숨참기 시간이 지정돼요</div>
        </S.Title>
        <StaticTopRecordBox />
      </S.Wrapper>
      <S.TrainingStartBoxContainer>
        <TrainingStartBox type={TrainingType.TimeBased} />
        <TrainingStartBox type={TrainingType.BreathBased} />
      </S.TrainingStartBoxContainer>
      <Link href="/training/info">
        <S.StyledAnchor>똑똑하게 훈련하기</S.StyledAnchor>
      </Link>
    </div>
  );
};

export default Page;

namespace S {
  export const Header = styled.div`
    padding: 12px 20px;
    display: flex;
    justify-content: end;
    gap: 16px;
  `;

  export const Wrapper = styled.div`
    display: flex;
    padding: 0 24px;
    flex-direction: column;
    gap: 24px;
  `;

  export const Title = styled.div`
    padding: 8px 0;
    color: ${Color.White};
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div:first-of-type {
      ${Typography.H2Medium};
    }

    > div:last-of-type {
      ${Typography.B1Regular};
    }
  `;

  export const TrainingStartBoxContainer = styled.div`
    overflow: hidden;
    padding: 20px 24px 24px 24px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    display: flex;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  export const StyledAnchor = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Color.White};
    text-decoration: underline;
    ${Typography.B3Medium};
  `;
}
