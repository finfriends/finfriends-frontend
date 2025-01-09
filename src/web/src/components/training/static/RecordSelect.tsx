import React, { useState } from 'react';
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

export const RecordSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<number>(0);

  const { mutate } = useCreateStaticRecordMutation();
  return (
    <Select onOpenChange={setIsOpen} open>
      <SelectTrigger
        icon={<BottomArrowIcon />}
        className={`w-full h-fit bg-BackgroundDarkBox B1Regular text-LineSecond rounded-lg px-5 py-4 border-[1.5px] border-solid border-BackgroundDarkBox ${isOpen && 'border-MainBlue3'}`}
      >
        <SelectValue placeholder="기록 직접 입력하기" />
      </SelectTrigger>
      <SelectContent className="flex bg-BackgroundDarkBox border-[1.5px] border-solid border-MainBlue3">
        <TimeSelectContent setSelectedRecord={setSelectedRecord} />
        <Button
          theme={ButtonTheme.Outline}
          onClick={() => mutate({ record: selectedRecord })}
          label="확인"
        />
      </SelectContent>
    </Select>
  );
};

// 스타일 정의
export namespace S {}
