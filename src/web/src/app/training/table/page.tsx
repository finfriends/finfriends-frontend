'use client';

import Container from '@/components/layout/Container';
import NavHeader from '@/components/layout/NavHeader';

export default function TablePage() {
  return (
    <Container training={true}>
      <NavHeader action={'back'} color={'white'} title={'시간 기반 테이블'} />
    </Container>
  );
}
