import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { useGetStaticRecordsQuery } from '@/queries/useTrainingQueries';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { formatDateToYYMMDD } from '@/utils/dateFormatter';
import { useSwipeable } from 'react-swipeable';

export const StaticRecordTable = () => {
  const { userConfig } = useUserInfo();
  const { data, refetch } = useGetStaticRecordsQuery({
    userId: userConfig?.userId || 0,
    limit: 100,
  });

  const handleDelete = (recordId: number) => {
    console.log(`Record with ID: ${recordId} is deleted.`);
    refetch();
  };

  return (
    <div>
      <S.TableHeader>
        <div>순위</div>
        <div>기록</div>
        <div>날짜</div>
      </S.TableHeader>
      {data?.result.map((record, index) => (
        <S.SwipeableRow
          key={record.id}
          recordId={record.id}
          onDelete={handleDelete}
        >
          <div>{index + 1}</div>
          <div>{record.record}</div>
          <div>{formatDateToYYMMDD(record.createdAt)}</div>
        </S.SwipeableRow>
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

    > div:first-of-type {
      width: 20%;
      text-align: center;
    }
    > div:nth-of-type(2),
    > div:nth-of-type(3) {
      text-align: center;
      width: 40%;
    }
  `;

  export const TableRow = styled.div`
    position: relative;
    color: ${Color.White};
    display: flex;
    padding: 16px 24px;
    ${Typography.B1Regular};
    transition: transform 0.3s ease;

    > div:first-of-type {
      width: 20%;
      text-align: center;
    }
    > div:nth-of-type(2),
    > div:nth-of-type(3) {
      text-align: center;
      width: 40%;
    }
  `;

  export const DeleteButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    background-color: ${Color.Red};
    color: ${Color.White};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  interface SwipeableRowProps {
    children: React.ReactNode;
    recordId: number;
    onDelete: (id: number) => void;
  }

  export const SwipeableRow: React.FC<SwipeableRowProps> = ({
    children,
    recordId,
    onDelete,
  }) => {
    const [isSwiped, setIsSwiped] = useState(false);

    const handlers = useSwipeable({
      onSwipedLeft: () => setIsSwiped(true),
      onSwipedRight: () => setIsSwiped(false),
      preventScrollOnSwipe: true,
      trackMouse: true,
    });

    return (
      <div {...handlers} style={{ position: 'relative' }}>
        <TableRow
          style={{
            transform: isSwiped ? 'translateX(-80px)' : 'translateX(0)',
          }}
        >
          {children}
        </TableRow>
        {isSwiped && (
          <DeleteButton onClick={() => onDelete(recordId)}>삭제</DeleteButton>
        )}
      </div>
    );
  };
}
