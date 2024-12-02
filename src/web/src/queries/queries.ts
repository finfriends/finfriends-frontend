import { GetRecordsRequest } from '@/types/trainingApiType';

export const QueryKey = {
  Me: ['GetMe'],
  GetMe: () => [QueryKey.Me],

  Config: ['GetConfig'],
  GetConfig: () => [QueryKey.Config],

  HighestStaticRecord: ['HighestStaticRecord'],
  GetHighestStaticRecord: () => [QueryKey.HighestStaticRecord],

  StaticRecord: ['StaticRecord'],
  GetStaticRecords: (params: GetRecordsRequest) => [
    ...QueryKey.StaticRecord,
    params,
  ],

  TimeBased: ['TimeBased'],
  GetTimeBasedRecords: (params: GetRecordsRequest) => [
    QueryKey.TimeBased,
    params,
  ],

  BreathBased: ['BreathBased'],
  GetBreathBasedRecords: (params: GetRecordsRequest) => [
    QueryKey.BreathBased,
    params,
  ],
};
