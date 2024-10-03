import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { Color } from '@/styles/color';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <S.BackButtonWrapper onClick={() => router.back()}>
      <LeftArrowIcon color={Color.White} />
    </S.BackButtonWrapper>
  );
};

export default BackButton;

namespace S {
  export const BackButtonWrapper = styled.button`
    width: 26px;
    height: 26px;
    display: block;
  `;
}
