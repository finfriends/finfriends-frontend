'use client';

import { useEffect, useState } from 'react';
import { TimePickerContent } from '@/components/training/static/TimePickerContent';

export const TimeSelectContent = ({
  setSelectedRecord,
}: {
  setSelectedRecord: (record: number) => void;
}) => {
  const [selectedMin, setSelectedMin] = useState('0');
  const [selectedSec, setSelectedSec] = useState('00');

  const minutes = [...Array(60)].map((_, i) => i.toString().padStart(1, '0'));
  const seconds = [...Array(60)].map((_, i) => i.toString().padStart(2, '0'));

  const handleHourScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / 40);
    setSelectedMin(minutes[index] || '00'); //
  };

  const handleMinuteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollTop / 40);
    setSelectedSec(seconds[index] || '00');
  };

  useEffect(() => {
    const hoursInMillis = parseInt(selectedMin, 10) * 60 * 1000;
    const minutesInMillis = parseInt(selectedSec, 10) * 1000;
    setSelectedRecord(hoursInMillis + minutesInMillis);
  }, [selectedMin, selectedSec, setSelectedRecord]);

  return (
    <div>
      <section className="w-full h-[190px] flex items-center justify-center">
        <div className="flex justify-center items-center">
          <TimePickerContent
            value={minutes}
            handleTimeScroll={handleHourScroll}
            selectedTime={selectedMin}
          />
          <TimePickerContent
            value={seconds}
            handleTimeScroll={handleMinuteScroll}
            selectedTime={selectedSec}
          />
        </div>
        <div
          className="mx-[30px] absolute inset-x-0 top-[98px] transform -translate-y-1/2 h-10 border border-blue-500 rounded-[7px] pointer-events-none"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)' }}
        />
      </section>
    </div>
  );
};
