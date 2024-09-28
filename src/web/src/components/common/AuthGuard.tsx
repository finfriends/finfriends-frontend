import { useEffect } from 'react';
import { LoadingIcon } from '@/icon/LoadingIcon';
import { useUserConfigQuery } from '@/queries/useUserConfigQueries';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { error, isLoading } = useUserConfigQuery();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            router.push('/login');
            break;
          default:
            break;
        }
      }
    }
    // v.1.0에서는 메인 페이지가 training이므로 오류가 나지 않은 경우 트레이닝으로 이동
    router.push('/training');
  }, [error, isLoading, router]);

  if (isLoading) {
    return <LoadingIcon />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AuthGuard;
