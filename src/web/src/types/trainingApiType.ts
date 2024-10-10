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

export type GetTimeBasedRecordsResponse = {
  result: TimeBasedRecordResult[];
  nextUrl: string;
};

export type TimeBasedRecordResult = {
  createdAt: string;
  id: number;
  userId: number;
  standard: number;
  totalRounds: number;
  record: string;
};

export type GetBreathBasedRecordsResponse = {
  result: BreathBasedRecordResult[];
  nextUrl: string;
};

export type BreathBasedRecordResult = {
  createdAt: string;
  id: number;
  userId: number;
  breathBased: number;
  totalRounds: number;
  record: string;
};
