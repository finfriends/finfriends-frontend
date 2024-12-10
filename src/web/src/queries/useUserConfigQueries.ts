import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { changeConfigs, getConfigs } from '@/api/configApi';
import { QueryKey } from '@/queries/queries';
import {
  ChangeUserConfigRequest,
  GetUserTrainingConfigResponse,
} from '@/types/trainingApiType';
import { AxiosError } from 'axios';

export const useUserConfigQuery = () =>
  useQuery({
    queryKey: QueryKey.GetConfig(),
    queryFn: () => getConfigs(),
    retry: false,
  });

export const useUserConfigMutation = (
  options?: UseMutationOptions<
    GetUserTrainingConfigResponse,
    AxiosError,
    ChangeUserConfigRequest,
    unknown
  >
) =>
  useMutation({
    ...options,
    mutationFn: (params: ChangeUserConfigRequest) => changeConfigs(params),
  });
