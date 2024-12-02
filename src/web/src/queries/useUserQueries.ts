import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/queries/queries';
import { getMe } from '@/api/userApi';

export const useUserInfoQuery = () =>
  useQuery({
    queryKey: QueryKey.GetMe(),
    queryFn: () => getMe(),
    retry: false,
  });
