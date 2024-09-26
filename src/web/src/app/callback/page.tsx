'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCreateUserMutation } from '@/queries/useAuthQueries';
import { AuthProvider } from '@/constants/auth';

function CallbackComponent() {
  const params = useSearchParams();
  const code = params.get('code');
  const { mutate } = useCreateUserMutation();

  useEffect(() => {
    if (code) {
      mutate({ code: String(code), authProvider: AuthProvider.KAKAO });
    }
  }, [code, mutate]);

  return null;
}

export default function Home() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CallbackComponent />
    </Suspense>
  );
}
