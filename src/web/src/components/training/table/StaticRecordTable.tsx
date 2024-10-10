import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import {
  useDeleteStaticRecordMutation,
  useGetStaticRecordsQuery,
} from '@/queries/useTrainingQueries';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { formatDateToYYMMDD } from '@/utils/dateFormatter';
import { SwipeableRow } from '@/components/training/table/SwipeableRow';

export const StaticRecordTable = () => {
  const { userConfig } = useUserInfo();
  const { data, refetch } = useGetStaticRecordsQuery({
    userId: userConfig?.userId || 0,
    limit: 100,
  });

  const { mutateAsync: deleteRecord } = useDeleteStaticRecordMutation();

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
        <div style={{ width: '20%' }}>순위</div>
        <div style={{ width: '40%' }}>기록</div>
        <div style={{ width: '40%' }}>날짜</div>
      </S.TableHeader>
      {data?.result.map((record, index) => (
        <SwipeableRow
          key={record.id}
          recordId={record.id}
          onDelete={handeClickDelete}
        >
          <div style={{ width: '20%' }}>{index + 1}</div>
          <div style={{ width: '40%' }}>{record.record}</div>
          <div style={{ width: '40%' }}>
            {formatDateToYYMMDD(record.createdAt)}
          </div>
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
}
