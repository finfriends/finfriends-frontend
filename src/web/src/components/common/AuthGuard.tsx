import { useEffect } from 'react';
import { LoadingIcon } from '@/icon/LoadingIcon';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { useUserInfoQuery } from '@/queries/useUserQueries';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { error, isLoading, data: userInfoData } = useUserInfoQuery();
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

    if (userInfoData && !error) {
      setUserConfig(userInfoData);
    }
  }, [error, isLoading, router, userInfoData, setUserConfig]);

  if (isLoading) {
    return <LoadingIcon />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default AuthGuard;
