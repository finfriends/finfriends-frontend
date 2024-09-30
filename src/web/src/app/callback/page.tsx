'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCreateUserMutation } from '@/queries/useAuthQueries';
import { AuthProvider } from '@/constants/auth';
import { LoadingIcon } from '@/icon/LoadingIcon';

function CallbackComponent() {
  const params = useSearchParams();
  const code = params.get('code');
  const router = useRouter(); // router 객체 생성
  const { mutate } = useCreateUserMutation({
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      router.push('/training');
    },
    onError: () => router.push('/login'),
  });

  useEffect(() => {
    if (code) {
      mutate({ code: String(code), authProvider: AuthProvider.KAKAO });
    }
  }, [code, mutate]);

  return null;
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingIcon />}>
      <CallbackComponent />
    </Suspense>
  );
}
