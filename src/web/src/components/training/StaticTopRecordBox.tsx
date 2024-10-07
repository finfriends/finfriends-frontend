import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useGetHighestStaticRecordQuery } from '@/queries/useTrainingQueries';
import { useUserInfo } from '@/contexts/UserInfoContext';

export const StaticTopRecordBox = () => {
  const { userConfig } = useUserInfo();
  const { data: highestStaticRecordData, isError } =
    useGetHighestStaticRecordQuery(userConfig?.userId || 0);

  const formatTime = (timeString: string) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return `${minutes}분 ${seconds}초`;
  };

  return (
    <S.Wrapper>
      <S.RecordBox>
        <div>스테틱 최고 기록</div>
        {isError ? (
          <div>기록 설정하러 가기</div>
        ) : (
          <div>
            {highestStaticRecordData &&
              `🔥 ${formatTime(highestStaticRecordData.record)}`}
          </div>
        )}
      </S.RecordBox>
      <S.Button>관리</S.Button>
    </S.Wrapper>
  );
};

namespace S {
  export const Wrapper = styled.div`
    background-color: ${Color.BackgroundDarkBox};
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
  `;

  export const RecordBox = styled.div`
    color: ${Color.White};
    display: flex;
    flex-direction: column;
    gap: 4px;

    > div:first-child {
      ${Typography.B3Regular};
    }

    > div:last-child {
      ${Typography.H4Medium};
    }
  `;

  export const Button = styled.div`
    padding: 6px 12px;
    ${Typography.B2Medium};
    background: ${Color.ButtonSecond};
    color: ${Color.Text700};
    border: 0;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
  `;
}
