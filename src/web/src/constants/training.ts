export const enum TrainingType {
  TimeBased = 'TimeBased',
  BreathBased = 'BreathBased',
  Static = 'Static',
}

export const TotalRoundOption = [
  { label: '3 라운드', value: 3 },
  { label: '4 라운드', value: 4 },
  { label: '6 라운드', value: 6 },
  { label: '8 라운드 (기본값)', value: 8 },
];

export const PreparatoryDurationOption = [
  { label: '3 (들숨 1초+ 날숨 2초)', value: 3 },
  { label: '6 (들숨 2초+ 날숨 4초)', value: 6 },
  { label: '9 (들숨 3초+ 날숨 6초 - 기본 값)', value: 9 },
  { label: '12 (들숨 4초+ 날숨 8초)', value: 12 },
  { label: '15 (들숨 5초+ 날숨 10초)', value: 15 },
];
