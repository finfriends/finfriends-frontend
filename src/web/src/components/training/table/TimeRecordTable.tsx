import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useUserInfo } from '@/contexts/UserInfoContext';
import {
  useDeleteTimeBasedMutation,
  useGetTimeBasedQuery,
} from '@/queries/useTrainingQueries';
import { SwipeableRow } from '@/components/training/table/SwipeableRow';
import { formatDateToYYMMDD } from '@/utils/dateFormatter';
import { formatSecondsToMinutesAndSeconds } from '@/utils/numberFormatter';

export const TimeRecordTable = () => {
  const { userConfig } = useUserInfo();
  const { data, refetch } = useGetTimeBasedQuery({
    userId: userConfig?.userId || 0,
    limit: 100,
  });

  const { mutateAsync: deleteRecord } = useDeleteTimeBasedMutation();

  const handeClickDelete = useCallback(
    (recordId: number) => {
      deleteRecord({ recordId }).then(() => {
        refetch();
      });
    },
    [deleteRecord, refetch]
  );

  return (
    <div>
      <S.TableHeader>
        <S.TableItem>스테틱 기준</S.TableItem>
        <S.TableItem>총 라운드</S.TableItem>
        <S.TableItem>총 시간</S.TableItem>
        <S.TableItem>날짜</S.TableItem>
      </S.TableHeader>
      {data?.result.map((record) => (
        <SwipeableRow
          key={record.id}
          recordId={record.id}
          onDelete={handeClickDelete}
        >
          <S.TableItem>
            {formatSecondsToMinutesAndSeconds(record.staticRecord)}
          </S.TableItem>
          <S.TableItem>{record.totalRounds}</S.TableItem>
          <S.TableItem>
            {formatSecondsToMinutesAndSeconds(record.totalSetTime)}
          </S.TableItem>
          <S.TableItem>{formatDateToYYMMDD(record.createdAt)}</S.TableItem>
        </SwipeableRow>
      ))}
    </div>
  );
};

namespace S {
  export const TableHeader = styled.div`
    color: ${Color.White};
    display: flex;
    padding: 16px 24px;
    ${Typography.B3Regular};
    text-align: center;
  `;

  export const TableItem = styled.div`
    width: 25%;
  `;
}
