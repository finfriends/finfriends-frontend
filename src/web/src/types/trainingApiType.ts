export type GetHighestStaticRecordResponse = {
  record: string;
};

export type GetUserTrainingConfigResponse = {
  userId: number;
  hasAudioCountdown: boolean;
  timeBasedTotalRounds: number;
  skipTimeBasedPreparatoryBreath: boolean;
  breathBasedTotalRounds: number;
  skipBreathBasedPreparatoryBreath: boolean;
  preparatoryBreathDuration: number;
};
