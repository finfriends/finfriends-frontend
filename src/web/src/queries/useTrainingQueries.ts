import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '@/queries/queries';
import { getHighestStaticRecord } from '@/api/trainingApi';

export const useGetHighestStaticRecordQuery = (userId: number) =>
  useQuery({
    queryKey: QueryKey.GetHighestStaticRecord(),
    enabled: !!userId,
    queryFn: () => getHighestStaticRecord({ userId }),
    retry: false,
  });
