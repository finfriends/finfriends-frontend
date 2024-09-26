import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ButtonTheme } from '@/constants/button';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';

const Button = ({
  theme,
  label,
  isDisabled,
  onClick,
  icon,
}: {
  theme: ButtonTheme;
  label: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <S.StyledButton theme={theme} disabled={isDisabled} onClick={onClick}>
      {icon && icon}
      {label}
    </S.StyledButton>
  );
};

export default Button;

namespace S {
  export const StyledButton = styled.button`
    width: 100%;
    padding: 12px 24px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 8px;
    ${Typography.B1Medium};
    &:disabled {
      background: ${Color.ButtonSecond};
      color: ${Color.Disabled};
      border: 0;
    }
    ${(props) => {
      switch (props.theme) {
        case ButtonTheme.Primary:
          return `
            background: ${Color.MainBlue3};
            color: ${Color.Text000};
            border: 0;
            `;
        case ButtonTheme.Secondary:
          return `
          background: ${Color.ButtonSecond};
          color: ${Color.Text800};
          border: 0;
          `;
        case ButtonTheme.Outline:
          return `
            background: ${Color.White};
            border: 1.5px solid ${Color.LineBasic};
            color: ${Color.Text600};
            `;
        case ButtonTheme.Ghost:
          return `
            background: ${Color.White};
            color: ${Color.Text700};
            border: 0;
            `;
        default:
          return ``;
      }
    }}
  `;
}
