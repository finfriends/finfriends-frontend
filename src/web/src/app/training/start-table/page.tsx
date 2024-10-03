'use client';

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter, useSearchParams } from 'next/navigation';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import BackButton from '@/components/common/BackButton';
import { Timer } from '@/components/common/Timer';
import { TimerStopIcon } from '@/icon/TimerStopIcon';
import { TimerPauseIcon } from '@/icon/TimerPauseIcon';
import { TimerStartIcon } from '@/icon/TimerStartIcon';

export default function StartTablePage() {
  const router = useRouter();
  const params = useSearchParams();
  const tableType: 'time' | 'breath' = params.get('type') as 'time' | 'breath';
  const tableTitle: string[] = ['경과 시간', '순서', '남은 시간'];
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleClickStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleClickPause = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const handleClickStop = () => {
    setIsRunning(false);
    // alert 추가 예정
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
        <S.TableHeader>
          {tableTitle.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </S.TableHeader>
        <S.TableBody>
          <span>0:00</span>
          <span>
            1 <i>/ 8</i>
          </span>
          <span>0:00</span>
        </S.TableBody>
      </S.TableWrapper>
      <S.TimeCont>
        <Timer
          initialTime={10}
          title="준비 호흡"
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          isPaused={isPaused}
        />
        <S.ButtonWrapper>
          <S.TimerButton onClick={handleClickStop}>
            <TimerStopIcon />
          </S.TimerButton>
          {isRunning ? (
            <S.TimerButton onClick={handleClickPause}>
              <TimerPauseIcon />
            </S.TimerButton>
          ) : (
            <S.TimerButton onClick={handleClickStart}>
              <TimerStartIcon />
            </S.TimerButton>
          )}
        </S.ButtonWrapper>
      </S.TimeCont>
      <S.Description>
        앱 화면을 유지해 주세요!
        <br />
        이탈시, 1분 후에 자동 종료되며 기록에 남지 않아요
      </S.Description>
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
    margin-top: 24px;
    padding: 16px 20px;
    border-radius: 24px;
    background: ${Color.BackgroundDarkBox};
    backdrop-filter: blur(4px);
    color: ${Color.White};
  `;
  export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 4px;
    ${Typography.B3Regular};
    span {
      width: 52px;
    }
  `;
  export const TableBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    ${Typography.H4Medium};
    span {
      width: 52px;
      i {
        color: ${Color.Text500};
      }
    }
  `;
  export const TimeCont = styled.div`
    margin: 100px 0 40px;
  `;
  export const ButtonWrapper = styled.div`
    width: 225px;
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  export const TimerButton = styled.button`
    width: 68px;
    height: 68px;
    border-radius: 100px;
    background: ${Color.BackgroundDarkBox};
    color: ${Color.White};
  `;
  export const Description = styled.p`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Color.White};
    ${Typography.B3Regular};
  `;
}
