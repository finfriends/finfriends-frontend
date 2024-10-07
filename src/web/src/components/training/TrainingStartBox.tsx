import React from 'react';
import { TrainingType } from '@/constants/training';
import { TimeBasedIcon } from '@/icon/TimeBasedIcon';
import { BreathBasedIcon } from '@/icon/BreathBasedIcon';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import { Typography } from '@/styles/fonts';
import Link from 'next/link';

interface TrainingStartBoxProps {
  type: TrainingType.BreathBased | TrainingType.TimeBased;
}

const trainingDetailsMap = {
  TimeBased: {
    icon: <TimeBasedIcon />,
    title: '시간 기반 테이블',
    description: '15초씩 준비 호흡 시간을 줄여가며 훈련해요',
    startLink: '/start-table/time',
  },
  BreathBased: {
    icon: <BreathBasedIcon />,
    title: '호흡 기반 테이블',
    description: '준비 호흡 횟수를 줄여가며 훈련해요',
    startLink: '/start-table/breath',
  },
};

export const TrainingStartBox = ({ type }: TrainingStartBoxProps) => {
  const trainingDetails = trainingDetailsMap[type];

  return (
    <S.Wrapper>
      <S.DetailBox>
        {trainingDetails.icon}
        <S.DescriptionBox>
          <div>{trainingDetails.title}</div>
          <div>{trainingDetails.description}</div>
        </S.DescriptionBox>
      </S.DetailBox>
      <Link href={trainingDetails.startLink}>
        <Button theme={ButtonTheme.Secondary} label="훈련 시작하기" />
      </Link>
    </S.Wrapper>
  );
};

namespace S {
  export const Wrapper = styled.div`
    flex-shrink: 0;
    border-radius: 24px;
    background-color: ${Color.BackgroundDarkBox};
    padding: 20px;
    display: flex;
    width: 240px;
    height: 280px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  `;

  export const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${Color.White};

    > div:first-of-type {
      ${Typography.H4Medium};
    }

    > div:last-of-type {
      ${Typography.B3Regular};
    }
  `;
}
