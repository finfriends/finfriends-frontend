import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { QueryKey } from '@/queries/queries';
import {
  deleteStaticRecord,
  getHighestStaticRecord,
  getStaticRecords,
} from '@/api/trainingApi';
import { GetStaticRecordsRequest } from '@/types/trainingApiType';
import { AxiosError } from 'axios';

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

export const useDeleteStaticRecordMutation = (
  options?: UseMutationOptions<
    unknown,
    AxiosError,
    { recordId: number },
    unknown
  >
) =>
  useMutation({
    ...options,
    mutationFn: (param: { recordId: number }) =>
      deleteStaticRecord(param.recordId),
  });
