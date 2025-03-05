import { formatSecondsToMinutesAndSeconds } from '@/utils/numberFormatter';

export const timeBasedTrainingPreview = (
  round: number,
  staticRecord: number
): { round: number; prepBreath: string; breathHold: string }[] => {
  return Array.from({ length: round }, (_, i) => ({
    round: i + 1,
    prepBreath: formatSecondsToMinutesAndSeconds(
      Math.max(120 - i * 15, 0) * 1000,
      'mm:ss'
    ),
    breathHold: formatSecondsToMinutesAndSeconds(staticRecord / 2, 'mm:ss'),
  }));
};

export const calculateTotalTimeBasedTraining = (
  rounds: number,
  staticRecord: number
): number => {
  const preparationBreathTotal = (rounds / 2) * (2 * 120 + (rounds - 1) * -15);
  const staticHoldTotal = (staticRecord / 1000 / 2) * rounds;

  return Math.round(preparationBreathTotal + staticHoldTotal);
};
