export type GetHighestStaticRecordResponse = {
  record: number;
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

export type GetRecordsRequest = {
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
  staticRecord: number;
  totalRounds: number;
  totalSetTime: number;
};

export type GetBreathBasedRecordsResponse = {
  result: BreathBasedRecordResult[];
  nextUrl: string;
};

export type BreathBasedRecordResult = {
  createdAt: string;
  id: number;
  userId: number;
  preparatoryBreathDuration: number;
  totalRounds: number;
  totalSetTime: number;
};
