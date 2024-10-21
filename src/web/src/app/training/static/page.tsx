'use client';

import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { LeftArrowIcon } from '@/icon/LeftArrowIcon';
import { RecordTable } from '@/components/training/table/RecordTable';
import { useRouter } from 'next/navigation';
import RecentIcon from '@/icon/RecentIcon';
import ArrowDownIcon from '@/icon/ArrowDownIcon';
import { TimePicker } from '@/components/training/static/TimePicker';
import { useState } from 'react';

export default function TablePage() {
  const router = useRouter();
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleBackClick = () => {
    router.back();
  };
  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={handleBackClick}>
          <LeftArrowIcon />
        </button>
        <S.Title>스테틱 기록</S.Title>
      </S.Header>
      <S.BodyWrapper>
        <InfoStyle.InfoTextWrapperWithIcon>
          <RecentIcon />
          <InfoStyle.InfoText>기록 직접 입력</InfoStyle.InfoText>
        </InfoStyle.InfoTextWrapperWithIcon>
        <InfoStyle.InputToggleButton
          showTimePicker={showTimePicker}
          onClick={() => setShowTimePicker((prev) => !prev)}
        >
          <InfoStyle.InputToggleButtonTitle>
            기록 직접 입력하기
          </InfoStyle.InputToggleButtonTitle>
          {showTimePicker ? (
            <InfoStyle.InputToggleConfirmText>
              확인
            </InfoStyle.InputToggleConfirmText>
          ) : (
            <ArrowDownIcon />
          )}
        </InfoStyle.InputToggleButton>
        {showTimePicker && <TimePicker />}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    padding-bottom: 34px;
    box-sizing: border-box;
    flex-direction: column;
  `;

  export const Header = styled.div`
    padding: 12px 20px 8px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  `;

  export const BodyWrapper = styled.div`
    padding: 20px 24px;
  `;

  export const Title = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${Typography.H4Medium};
    color: ${Color.White};
  `;
}

namespace InfoStyle {
  export const InfoTextWrapperWithIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  export const InfoText = styled.span`
    ${Typography.B2Medium};
    color: ${Color.White};
  `;

  export const InputToggleButton = styled.button<{ showTimePicker: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    background-color: ${Color.BackgroundDarkBox};
    padding: 16px 20px;
    border-radius: 8px;
    width: 100%;
    border: ${(props) =>
      props.showTimePicker ? `1.5px solid ${Color.MainBlue3}` : 'none'};
  `;

  export const InputToggleButtonTitle = styled.span`
    ${Typography.B1Regular};
    color: ${Color.LineSecond};
  `;

  export const InputToggleConfirmText = styled.span`
    ${Typography.B2Medium};
    color: ${Color.White};
  `;

  export const TimeSelectOptionBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;
}
