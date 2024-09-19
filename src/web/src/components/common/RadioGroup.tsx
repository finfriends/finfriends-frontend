import React, { useCallback } from 'react';
import RadioBox from '@/components/common/RadioBox';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';

export type RadioGroupProp<T = string> = {
  key: T;
  label: string;
  isDisabled?: boolean;
};

export interface RadioGroupProps<T extends RadioGroupProp> {
  optionList: T[];
  activeOption: T;
  onChange: (option: T) => void;
  textColor?: string;
  gap?: number;
}

export const RadioGroup = <T extends RadioGroupProp>({
  optionList,
  activeOption,
  onChange,
  textColor,
  gap,
}: RadioGroupProps<T>) => {
  const handleRadioBoxClick = useCallback(
    (tab: T) => {
      onChange(tab);
    },
    [onChange]
  );

  return (
    <S.Wrapper gap={gap} color={textColor}>
      {optionList.map((option: T) => (
        <RadioBox
          isDisabled={option.isDisabled}
          onClick={() => handleRadioBoxClick(option)}
          key={option.key}
          isChecked={option.key === activeOption.key}
          label={option.label}
        />
      ))}
    </S.Wrapper>
  );
};

export default RadioGroup;

namespace S {
  export const Wrapper = styled.div<{ gap?: number; color?: string }>`
    display: flex;
    flex-direction: column;
    color: ${({ color }) => color || Color.Text000};
    gap: ${({ gap }) => (gap ? `${gap}px` : '20px')};
  `;
}
