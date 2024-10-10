import { GetStaticRecordsRequest } from '@/types/trainingApiType';

export const QueryKey = {
  Config: ['GetConfig'],
  GetConfig: () => [QueryKey.Config],

  HighestStaticRecord: ['HighestStaticRecord'],
  GetHighestStaticRecord: () => [QueryKey.HighestStaticRecord],

  StaticRecord: ['StaticRecord'],
  GetStaticRecords: (params: GetStaticRecordsRequest) => [
    ...QueryKey.StaticRecord,
    params,
  ],
};
