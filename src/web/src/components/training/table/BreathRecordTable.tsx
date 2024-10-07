import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';

export const BreathRecordTable = () => {
  return (
    <div>
      <S.TableHeader>
        <div>준비 호흡 시간</div>
        <div>총 라운드</div>
        <div>총 시간</div>
        <div>날짜</div>
      </S.TableHeader>
      <S.TableRow>
        <div>{}</div>
      </S.TableRow>
    </div>
  );
};

namespace S {
  export const TableRow = styled.div`
    color: ${Color.White};
    display: flex;
    padding: 16px 24px;
    ${Typography.B1Regular};

    > div {
      width: 25%;
      text-align: center;
    }
  `;

  export const TableHeader = styled.div`
    color: ${Color.White};
    display: flex;
    padding: 16px 24px;
    ${Typography.B3Regular};

    > div {
      width: 25%;
      text-align: center;
    }
  `;
}
