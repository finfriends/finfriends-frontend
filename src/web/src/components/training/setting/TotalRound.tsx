import React from 'react';
import RadioBox from '@/components/common/RadioBox';
import {
  useUserConfigMutation,
  useUserConfigQuery,
} from '@/queries/useUserConfigQueries';
import { queryClient } from '@/app/providers';
import { QueryKey } from '@/queries/queries';
import { TotalRoundOption, TrainingType } from '@/constants/training';
import styled from '@emotion/styled';

export const TotalRound = ({ type }: { type: TrainingType }) => {
  const { data: userConfig } = useUserConfigQuery();
  const { mutate } = useUserConfigMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QueryKey.GetConfig(),
      });
    },
  });

  if (!userConfig) {
    return null;
  }

  const handleRoundChange = (newRound: number) => {
    let updatedConfig;

    switch (type) {
      case TrainingType.TimeBased:
        updatedConfig = {
          ...userConfig,
          timeBasedTotalRounds: newRound,
        };
        break;

      case TrainingType.BreathBased:
        updatedConfig = {
          ...userConfig,
          breathBasedTotalRounds: newRound,
        };
        break;

      default:
        return;
    }

    mutate(updatedConfig);
  };

  // 선택된 라운드 필드 동적 접근
  const selectedRounds =
    type === TrainingType.TimeBased
      ? userConfig.timeBasedTotalRounds
      : userConfig.breathBasedTotalRounds;

  return (
    <div>
      {TotalRoundOption.map((option) => (
        <S.RadioButtonWrapper key={option.value}>
          <RadioBox
            onClick={() => handleRoundChange(option.value)}
            isChecked={selectedRounds === option.value}
            label={option.label}
          />
        </S.RadioButtonWrapper>
      ))}
    </div>
  );
};

namespace S {
  export const RadioButtonWrapper = styled.div`
    padding: 12px 24px;
  `;
}
