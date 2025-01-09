interface TimePickerProps {
  value: string[];
  handleTimeScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  selectedTime: string;
}

export const TimePickerContent = ({
  value,
  handleTimeScroll,
  selectedTime,
}: TimePickerProps) => {
  return (
    <div className="h-[180px] relative w-[40px] mx-[10px]">
      <div
        className="h-full overflow-auto scrollbar-hide snap-y snap-mandatory overscroll-contain py-[70px]"
        onScroll={handleTimeScroll}
      >
        {value.map((t) => (
          <div
            key={t}
            className={`h-[40px] flex items-center justify-center snap-center
        ${selectedTime === t ? 'text-ButtonSecond' : 'text-Disabled'}`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};
