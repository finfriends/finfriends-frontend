import { Color } from '@/styles/color';
import styled from '@emotion/styled';

export const TimePicker = () => {
  return <S.Wrapper>time picker</S.Wrapper>;
};

namespace S {
  export const Wrapper = styled.div`
    padding: 8px 20px;
    height: 164px;
    border-radius: 8px;
    margin-top: 4px;
    color: ${Color.White};
    background-color: ${Color.BackgroundDarkBox};
    border: 1.5px solid ${Color.MainBlue3};
  `;
}
