import React from 'react';
import styled from '@emotion/styled';
import { TrainingProgressBox } from '@/components/training/timebased/TrainingProgressBox';
import { useUserConfigQuery } from '@/queries/useUserConfigQueries';

export const TimeBasedTimer = () => {
  const { data: userConfig } = useUserConfigQuery();

  if (!userConfig) return null;

  return (
    <S.Container>
      <TrainingProgressBox
        elapsedMs={100}
        totalRounds={userConfig.timeBasedTotalRounds}
        currentRound={1}
        remainingMs={100}
      />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  `;
}
