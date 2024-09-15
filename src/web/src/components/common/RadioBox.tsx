import React from 'react';
import styled from '@emotion/styled';
import { CheckedRadioIcon } from '@/icon/CheckedRadioIcon';
import { UncheckedRadioIcon } from '@/icon/UncheckedRadioIcon';
import { DisabledRadioIcon } from '@/icon/DisabledRadioIcon';
import { Typography } from '@/styles/fonts';

const RadioBox = ({
  onClick,
  isChecked,
  label,
  isDisabled,
}: {
  onClick: () => void;
  isChecked: boolean;
  label: string;
  size?: 20 | 24;
  textColor?: string;
  isDisabled?: boolean;
}) => {
  return (
    <S.Wrapper onClick={isDisabled ? undefined : onClick}>
      {!isDisabled && isChecked && <CheckedRadioIcon />}
      {!isDisabled && !isChecked && <UncheckedRadioIcon />}
      {isDisabled && <DisabledRadioIcon />}
      <S.label>{label}</S.label>
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

  export const label = styled.div`
    ${Typography.B1Regular};
  `;
}
