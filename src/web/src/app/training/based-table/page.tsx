'use client';

import styled from '@emotion/styled';
import { useRouter, useSearchParams } from 'next/navigation';
import { Color } from '@/styles/color';
import BackButton from '@/components/common/BackButton';
import { Typography } from '@/styles/fonts';
import { ScheduleTable } from '@/components/based-table/ ScheduleTable';
import { TimeIcon } from '@/icon/TimeIcon';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import { useEffect } from 'react';

export default function BasedTablePage() {
  const router = useRouter();
  const params = useSearchParams();
  const tableType: 'time' | 'breath' = params.get('type') as 'time' | 'breath';

  const handleClickHere = () => {
    // url 수정 예정
    router.push('/training');
  };

  useEffect(() => {
    if (tableType !== 'time' && tableType !== 'breath') {
      router.push('/training');
    }
  }, []);

  return (
    <S.Wrapper>
      <S.TitleWrap>
        <BackButton />
        <S.Title>
          {tableType === 'time' ? '시간' : '호흡'}
          &nbsp;기반 테이블
        </S.Title>
      </S.TitleWrap>
      <S.TableWrapper>
        <ScheduleTable tableType={tableType} />
      </S.TableWrapper>
      <S.Description>
        <TimeIcon />
        &nbsp;총 n분 동안 훈련 진행
      </S.Description>
      {tableType === 'time' ? (
        <S.Description>스태틱 최고 기록에 따라 시간이 지정돼요</S.Description>
      ) : (
        <S.Description>
          준비호흡 시간은 설정 또는&nbsp;<u onClick={handleClickHere}>여기</u>서
          바꿀 수 있어요
        </S.Description>
      )}
      <S.ButtonWrapper>
        <Button
          theme={ButtonTheme.Primary}
          label={
            tableType === 'time'
              ? '시간 기반 테이블 훈련 시작'
              : '호흡 기반 테이블 훈련 시작'
          }
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    padding: 0 24px 34px 24px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
  `;
  export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0 8px;
    position: relative;
  `;
  export const Title = styled.h2`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${Color.White};
    ${Typography.H4Medium};
  `;
  export const TableWrapper = styled.div`
    margin: 24px 0 20px;
  `;
  export const Description = styled.p`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Color.White};
    ${Typography.B3Regular};
  `;
  export const ButtonWrapper = styled.div`
    margin-top: auto;
  `;
}
