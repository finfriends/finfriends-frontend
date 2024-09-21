'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { CloseIcon } from '@/icon/CloseIcon';

const NavHeader = ({
  title,
  action,
  color,
}: {
  title?: string;
  action: 'back' | 'close';
  color: 'black' | 'white';
}) => {
  const router = useRouter();

  return (
    <S.NavHeaderCont>
      <S.NavButton
        onClick={() => (action === 'back' ? router.back() : undefined)}
      >
        {action === 'back' ? (
          <LeftArrowIcon color={color} />
        ) : (
          <CloseIcon color={color} />
        )}
      </S.NavButton>
      {title && <S.Title color={color}>{title}</S.Title>}
    </S.NavHeaderCont>
  );
};

export default NavHeader;

namespace S {
  export const NavHeaderCont = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    width: 100%;
    position: relative;
  `;

  export const NavButton = styled.button`
    width: 26px;
    height: 26px;
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  export const Title = styled.p<{ color: 'black' | 'white' }>`
    color: ${({ color }) => color};
    text-align: center;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
}
