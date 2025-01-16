import React, { useCallback, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BottomArrowIcon } from '@/icon/BottomArrowIcon';
import 'styles/tailwind.css';
import { TimeSelectContent } from '@/components/training/static/TimeSelectContent';
import { useCreateStaticRecordMutation } from '@/queries/useTrainingQueries';
import Button from '@/components/common/Button';
import { ButtonTheme } from '@/constants/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const RecordSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { mutate } = useCreateStaticRecordMutation();

  const SelectRecord = useCallback(() => {
    mutate({ record: selectedRecord });
    setIsOpen(false);
  }, [mutate, selectedRecord]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Select onOpenChange={setIsOpen} open={isOpen}>
      <SelectTrigger
        icon={<BottomArrowIcon />}
        className={`w-full h-fit bg-BackgroundDarkBox B1Regular text-LineSecond rounded-lg px-5 py-4 border-[1.5px] border-solid border-BackgroundDarkBox ${isOpen && 'border-MainBlue3'}`}
      >
        <SelectValue placeholder="기록 직접 입력하기" />
      </SelectTrigger>
      <SelectContent className="flex bg-BackgroundDarkBox border-[1.5px] border-solid border-MainBlue3">
        <TimeSelectContent setSelectedRecord={setSelectedRecord} />
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogTrigger asChild>
            <Button
              theme={ButtonTheme.Outline}
              onClick={SelectRecord}
              label="확인"
            />
          </DialogTrigger>
          <DialogContent className="w-[314px]">
            <DialogTitle>기록을 완료했어요</DialogTitle>
            <DialogDescription>
              홈 화면의 우측 상단 기록 버튼을 통해 전체 기록을 확인할 수 있어요
            </DialogDescription>
            <DialogFooter>
              <Button
                theme={ButtonTheme.Primary}
                label="알겠어요"
                onClick={closeModal}
              />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SelectContent>
    </Select>
  );
};

// 스타일 정의
export namespace S {}
