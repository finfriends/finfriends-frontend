import React from 'react';
import styled from '@emotion/styled';
import { CheckedRadioIcon } from '@/icon/CheckedRadioIcon';
import { UncheckedRadioIcon } from '@/icon/UncheckedRadioIcon';
import { DisabledRadioIcon } from '@/icon/DisabledRadioIcon';
import { Typography } from '@/styles/fonts';
import { Color } from '@/styles/color';

const RadioBox = ({
  onClick,
  isChecked,
  label,
  color,
  isDisabled,
}: {
  onClick: () => void;
  isChecked: boolean;
  label: string;
  color?: string;
  isDisabled?: boolean;
}) => {
  return (
    <S.Wrapper onClick={isDisabled ? undefined : onClick}>
      {!isDisabled && isChecked && <CheckedRadioIcon />}
      {!isDisabled && !isChecked && <UncheckedRadioIcon />}
      {isDisabled && <DisabledRadioIcon />}
      <S.label color={color}>{label}</S.label>
    </S.Wrapper>
  );
};

export default RadioBox;

namespace S {
  export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
  `;

  export const label = styled.div<{ color?: string }>`
    ${Typography.B1Regular};
    color: ${({ color }) => color || Color.Text000};
  `;
}
