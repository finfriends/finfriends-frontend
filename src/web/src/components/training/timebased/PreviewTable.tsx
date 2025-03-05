import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import {
  calculateTotalTimeBasedTraining,
  timeBasedTrainingPreview,
} from '@/utils/trainingPreview';
import { Typography } from '@/styles/fonts';
import { useUserConfigQuery } from '@/queries/useUserConfigQueries';
import { ClockIcon } from '@/icon/ClockIcon';

export const PreviewTable = () => {
  const { data: userConfig } = useUserConfigQuery();

  if (!userConfig) {
    return null;
  }

  const previewData = timeBasedTrainingPreview(
    userConfig.timeBasedTotalRounds,
    userConfig.highestStaticRecord.record
  );

  const totalTime = calculateTotalTimeBasedTraining(
    userConfig.timeBasedTotalRounds,
    userConfig.highestStaticRecord.record
  );

  return (
    <S.Wrapper>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <S.TableHeader>
              <th>순서</th>
              <th>준비 호흡</th>
              <th>숨 참기</th>
            </S.TableHeader>
          </thead>
          <tbody>
            {previewData.map((item, index) => (
              <S.TableRow
                key={item.round}
                isLast={index === previewData.length - 1}
              >
                <td>{item.round}</td>
                <td>{item.prepBreath}</td>
                <td>{item.breathHold}</td>
              </S.TableRow>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
      <S.DescBox>
        <S.Desc>
          <ClockIcon /> 총 {Math.ceil(totalTime / 60)}분 동안 훈련 진행
        </S.Desc>
        <S.Desc>스태틱 최고 기록에 따라 시간이 지정돼요</S.Desc>
      </S.DescBox>
    </S.Wrapper>
  );
};

namespace S {
  export const TableWrapper = styled.div`
    border-radius: 24px;
    padding: 24px 20px;
    background-color: ${Color.BackgroundDarkBox};
    backdrop-filter: blur(4px);
  `;

  export const Table = styled.table`
    width: 100%;
    color: ${Color.White};
    text-align: center;
    border-collapse: collapse;
  `;

  export const TableRow = styled.tr<{ isLast: boolean }>`
    border-bottom: ${(props) =>
      props.isLast ? 'none' : `1px solid ${Color.BackgroundDarkBox}`};
    ${Typography.B1Regular};

    > td {
      padding: 12px 0;
    }
  `;

  export const TableHeader = styled.tr`
    ${Typography.B3Regular};

    > th {
      padding-bottom: 12px;
    }
  `;

  export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  export const Desc = styled.div`
    display: flex;
    gap: 4px;
    color: ${Color.White};
    ${Typography.B3Regular};
    text-align: center;
  `;

  export const DescBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
}
