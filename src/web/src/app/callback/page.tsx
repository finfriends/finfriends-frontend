'use client';

import { useSearchParams } from 'next/navigation';
import { useCreateUserMutation } from '@/queries/useAuthQueries';
import { useEffect } from 'react';
import { AuthProvider } from '@/constants/auth';

export default function Home() {
  const params = useSearchParams();
  const code = params.get('code');
  const { mutate } = useCreateUserMutation({
    onSuccess: () => {
      console.log(`success`);
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    },
  });

  useEffect(() => {
    if (code) {
      mutate({ code: String(code), authProvider: AuthProvider.KAKAO });
    }
  }, [code, mutate]);

  return;
}
