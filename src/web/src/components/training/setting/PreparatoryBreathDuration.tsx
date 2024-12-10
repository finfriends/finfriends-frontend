import React from 'react';
import RadioBox from '@/components/common/RadioBox';
import {
  useUserConfigMutation,
  useUserConfigQuery,
} from '@/queries/useUserConfigQueries';
import { queryClient } from '@/app/providers';
import { QueryKey } from '@/queries/queries';
import styled from '@emotion/styled';
import { PreparatoryDurationOption } from '@/constants/training';

export const PreparatoryBreathDuration = () => {
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

  const handleDurationChange = (newDuration: number) => {
    mutate({ ...userConfig, preparatoryBreathDuration: newDuration });
  };

  return (
    <div>
      {PreparatoryDurationOption.map((option) => (
        <S.RadioButtonWrapper key={option.value}>
          <RadioBox
            onClick={() => handleDurationChange(option.value)}
            isChecked={userConfig.preparatoryBreathDuration === option.value}
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
