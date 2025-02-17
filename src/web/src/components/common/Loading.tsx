'use client';

import { useIsFetching } from '@tanstack/react-query';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import loading from '@/assets/images/lottie/loading.json';

// Lottie를 SSR에서 실행되지 않도록 동적 import
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export const GlobalLoadingOverlay = () => {
  const isFetching = useIsFetching();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isFetching > 0) {
      timeout = setTimeout(() => setShouldRender(true), 550); // 0.5초 후에 로딩 표시
    } else {
      timeout = setTimeout(() => setShouldRender(false), 300); // 0.3초 후에 숨김
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isFetching]);

  if (!shouldRender) return null;

  return (
    <S.Overlay>
      <Lottie
        animationData={loading}
        style={{ width: '100%', height: '100%' }}
        play
        loop
      />
    </S.Overlay>
  );
};

namespace S {
  export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
}
