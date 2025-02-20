import React from 'react';
import { Color } from '@/styles/color';
import styled from '@emotion/styled';
import { Typography } from '@/styles/fonts';
import { formatSecondsToMinutesAndSeconds } from '@/utils/numberFormatter';

export const TrainingProgressBox = ({
  elapsedMs,
  currentRound,
  totalRounds,
  remainingMs,
}: {
  elapsedMs: number;
  currentRound: number;
  totalRounds: number;
  remainingMs: number;
}) => {
  return (
    <S.Container>
      <S.progressTitleBox>
        <div>경과 시간</div>
        <div>순서</div>
        <div>남은 시간</div>
      </S.progressTitleBox>
      <S.progressDescBox>
        <div>{formatSecondsToMinutesAndSeconds(elapsedMs, 'mm:ss')}</div>
        <S.GrayTextBox>
          {currentRound}
          <p>&nbsp;/ {totalRounds}</p>
        </S.GrayTextBox>
        <div>{formatSecondsToMinutesAndSeconds(remainingMs, 'mm:ss')}</div>
      </S.progressDescBox>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: ${Color.BackgroundDarkBox};
    width: 100%;
    border-radius: 24px;
    padding: 16px 20px;
  `;

  export const progressTitleBox = styled.div`
    color: ${Color.White};
    display: flex;
    justify-content: space-between;
    ${Typography.B3Regular};
  `;

  export const progressDescBox = styled.div`
    color: ${Color.White};
    display: flex;
    justify-content: space-between;
    ${Typography.H4Medium};
  `;

  export const GrayTextBox = styled.div`
    display: flex;
    > p {
      color: ${Color.Text500};
    }
  `;
}
