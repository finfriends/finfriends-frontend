import React, { ReactNode, useCallback, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { DeleteIcon } from '@/icon/DeleteIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';

interface SwipeableRowProps {
  children: ReactNode[];
  recordId: number;
  onDelete: (recordId: number) => void;
}

export const SwipeableRow: React.FC<SwipeableRowProps> = ({
  children,
  recordId,
  onDelete,
}) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSwiped(true),
    onSwipedRight: () => setIsSwiped(false),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteButton = useCallback(
    (id: number) => {
      closeModal();
      onDelete(id);
    },
    [onDelete]
  );
  return (
    <S.SwipeableContainer {...handlers}>
      <S.TableRow isSwiped={isSwiped}>{children}</S.TableRow>
      {isSwiped && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <S.DeleteButton>
              <DeleteIcon />
            </S.DeleteButton>
          </DialogTrigger>
          <DialogContent className="w-[314px]">
            <DialogTitle>기록을 삭제할까요?</DialogTitle>
            <DialogDescription>삭제 후에는 되돌릴 수 없어요.</DialogDescription>
            <DialogFooter>
              <Button
                theme={ButtonTheme.Secondary}
                label="아니오"
                onClick={closeModal}
              />
              <Button
                theme={ButtonTheme.Primary}
                label="네"
                onClick={() => handleDeleteButton(recordId)}
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </S.SwipeableContainer>
  );
};

// Styled components
namespace S {
  export const SwipeableContainer = styled.div`
    position: relative;
  `;

  export const TableRow = styled.div<{ isSwiped: boolean }>`
    position: relative;
    color: ${Color.White};
    display: flex;
    padding: 16px 24px;
    ${Typography.B1Regular};
    transition: transform 0.3s ease;
    text-align: center;
    transform: ${({ isSwiped }) =>
      isSwiped ? 'translateX(-80px)' : 'translateX(0)'};
  `;

  export const DeleteButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 56px;
    background-color: ${Color.Red};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
}
