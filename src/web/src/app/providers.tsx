'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { GuestRoute } from '@/constants/routes';
import { UserInfoProvider } from '@/contexts/UserInfoContext';

export const queryClient = new QueryClient();
const AuthGuard = dynamic(() => import('@/components/common/AuthGuard'), {
  ssr: false,
});

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isProtectedRoute = !GuestRoute.includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <UserInfoProvider>
        {isProtectedRoute ? <AuthGuard>{children}</AuthGuard> : children}
      </UserInfoProvider>
    </QueryClientProvider>
  );
}
