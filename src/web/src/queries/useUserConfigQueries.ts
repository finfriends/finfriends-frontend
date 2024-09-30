import { useQuery } from '@tanstack/react-query';
import { getConfigs } from '@/api/configApi';
import { QueryKey } from '@/queries/queries';

export const useUserConfigQuery = () =>
  useQuery({
    queryKey: QueryKey.GetConfig(),
    queryFn: () => getConfigs(),
    retry: false,
  });
