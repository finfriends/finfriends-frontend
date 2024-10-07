import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/queries/queries';
import { getHighestStaticRecord, getStaticRecords } from '@/api/trainingApi';
import { GetStaticRecordsRequest } from '@/types/trainingApiType';

export const useGetHighestStaticRecordQuery = (userId: number) =>
  useQuery({
    queryKey: QueryKey.GetHighestStaticRecord(),
    enabled: !!userId,
    queryFn: () => getHighestStaticRecord({ userId }),
    retry: false,
  });

export const useGetStaticRecordsQuery = (params: GetStaticRecordsRequest) =>
  useQuery({
    queryKey: QueryKey.GetStaticRecords(params),
    enabled: !!params.userId,
    queryFn: () => getStaticRecords(params),
    retry: false,
  });
