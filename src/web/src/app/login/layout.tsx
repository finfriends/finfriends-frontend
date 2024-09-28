'use client';

import React, { ReactNode } from 'react';
import { ImageBackgroundLayout } from '@/components/layout/ImageBackgroundLayout';

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ImageBackgroundLayout>{children}</ImageBackgroundLayout>;
}
