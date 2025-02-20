import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { TimerCircle } from '@/icon/TimerCircle';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { DisabledTimerStopIcon } from '@/icon/DisabledTimerStopIcon';
import { TimerStartIcon } from '@/icon/TimerStartIcon';
import { TimerStopIcon } from '@/icon/TimerStopIcon';
import { DisabledTimerStartIcon } from '@/icon/DisabledTimerStartIcon';
import { TrainingProgressBox } from '@/components/training/timebased/TrainingProgressBox';
import { formatSecondsToMinutesAndSeconds } from '@/utils/numberFormatter';

export const TimeBasedTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [staticRecordTime, setStaticRecordTime] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const updateTimer = useCallback(() => {
    if (startTimeRef.current) {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setStaticRecordTime(elapsed);
    }
  }, []);

  const handleStart = useCallback(() => {
    if (isRunning) return;

    startTimeRef.current = Date.now();
    setIsRunning(true);
    timerRef.current = setInterval(updateTimer, 1000);
  }, [isRunning, updateTimer]);

  const handleStop = useCallback(async () => {
    console.log('stop');
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <S.Container>
      <TrainingProgressBox
        elapsedMs={staticRecordTime}
        totalRounds={staticRecordTime}
        currentRound={staticRecordTime}
        remainingMs={staticRecordTime}
      />
      <S.CircleWrapper>
        <TimerCircle color={isRunning ? Color.Etc : undefined} />
        <S.TimerBox>
          <S.TimerDesc>새로운 기록 시작</S.TimerDesc>
          <S.Timer>
            {formatSecondsToMinutesAndSeconds(staticRecordTime * 1000, 'mm:ss')}
          </S.Timer>
        </S.TimerBox>
      </S.CircleWrapper>
      <S.ButtonWrapper>
        {isRunning ? (
          <button type="button" onClick={handleStop}>
            <TimerStopIcon />
          </button>
        ) : (
          <DisabledTimerStopIcon />
        )}
        {isRunning ? (
          <DisabledTimerStartIcon />
        ) : (
          <button type="button" onClick={handleStart}>
            <TimerStartIcon />
          </button>
        )}
      </S.ButtonWrapper>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  `;

  export const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;
  `;

  export const CircleWrapper = styled.div`
    position: relative;
    display: inline-block;
  `;

  export const TimerBox = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${Typography.H3Regular};
    color: ${Color.White};
  `;

  export const TimerDesc = styled.div`
    ${Typography.H3Regular};
    color: ${Color.White};
  `;

  export const Timer = styled.div`
    color: ${Color.Etc};
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
}
