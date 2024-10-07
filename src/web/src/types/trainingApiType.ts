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

export type GetStaticRecordsRequest = {
  userId: number;
  cursor?: number;
  limit?: number;
};

export type GetStaticRecordsResponse = {
  result: StaticRecordResult[];
  nextUrl: string;
};

export type StaticRecordResult = {
  createdAt: string;
  id: number;
  userId: number;
  record: string;
};
