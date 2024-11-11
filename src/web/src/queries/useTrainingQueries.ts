import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { QueryKey } from '@/queries/queries';
import {
  deleteBreathBasedRecord,
  deleteStaticRecord,
  deleteTimeBasedRecord,
  getBreathBasedRecords,
  getHighestStaticRecord,
  getStaticRecords,
  getTimeBasedRecords,
} from '@/api/trainingApi';
import { GetRecordsRequest } from '@/types/trainingApiType';
import { AxiosError } from 'axios';

export const useGetHighestStaticRecordQuery = (userId: number) =>
  useQuery({
    queryKey: QueryKey.GetHighestStaticRecord(),
    enabled: !!userId,
    queryFn: () => getHighestStaticRecord({ userId }),
    retry: false,
  });

export const useGetStaticRecordsQuery = (params: GetRecordsRequest) =>
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

export const useGetBreathBasedQuery = (params: GetRecordsRequest) =>
  useQuery({
    queryKey: QueryKey.GetBreathBasedRecords(params),
    enabled: !!params.userId,
    queryFn: () => getBreathBasedRecords(params),
    retry: false,
  });

export const useDeleteBreathBasedMutation = (
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
      deleteBreathBasedRecord(param.recordId),
  });

export const useGetTimeBasedQuery = (params: GetRecordsRequest) =>
  useQuery({
    queryKey: QueryKey.GetTimeBasedRecords(params),
    enabled: !!params.userId,
    queryFn: () => getTimeBasedRecords(params),
    retry: false,
  });

export const useDeleteTimeBasedMutation = (
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
      deleteTimeBasedRecord(param.recordId),
  });
