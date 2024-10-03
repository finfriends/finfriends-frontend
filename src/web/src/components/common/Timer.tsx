import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { secondsToMinutes } from '@/lib/handleTimeForm';
import { TimerCircle } from '@/icon/TimerCircle';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';

type PropsType = {
  initialTime: number;
  title: string;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isPaused: boolean;
};

export const Timer = ({
  initialTime,
  title,
  isRunning,
  setIsRunning,
  isPaused,
}: PropsType) => {
  const [time, setTime] = useState(initialTime);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;

    if (isRunning && !isPaused && time > 0) {
      timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
        setElapsedTime((prevElapsed) => prevElapsed + 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timerId);
  }, [isRunning, isPaused, time]);

  return (
    <S.TimerWrapper>
      <S.TimerCont>
        <TimerCircle initialTime={initialTime} elapsedTime={elapsedTime} />
        <S.TimerInner>
          <S.Title>{title}</S.Title>
          <S.TimerSec>{secondsToMinutes(time)}</S.TimerSec>
        </S.TimerInner>
      </S.TimerCont>
    </S.TimerWrapper>
  );
};

namespace S {
  export const TimerWrapper = styled.div``;
  export const TimerCont = styled.div`
    position: relative;
    text-align: center;
  `;
  export const TimerInner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  export const Title = styled.p`
    color: ${Color.White};
    ${Typography.H3Regular};
  `;
  export const TimerSec = styled.p`
    color: ${Color.White};
    ${Typography.TimerSeconds};
  `;
}
