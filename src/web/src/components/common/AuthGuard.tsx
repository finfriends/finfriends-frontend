import { useEffect } from 'react';
import { LoadingIcon } from '@/icon/LoadingIcon';
import { useUserConfigQuery } from '@/queries/useUserConfigQueries';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUserInfo } from '@/contexts/UserInfoContext';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { error, isLoading, data: userConfigData } = useUserConfigQuery();
  const { setUserConfig } = useUserInfo();
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

    if (userConfigData && !error) {
      setUserConfig(userConfigData);
    }
  }, [error, isLoading, router, userConfigData, setUserConfig]);

  if (isLoading) {
    return <LoadingIcon />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AuthGuard;
