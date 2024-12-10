import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { RightArrowIcon } from '@/icon/RightArrowIcon';
import ToggleButton from '@/components/common/ToggleButton';
import { formatSecondsToMinutesAndSeconds } from '@/utils/numberFormatter';
import {
  useUserConfigMutation,
  useUserConfigQuery,
} from '@/queries/useUserConfigQueries';
import { queryClient } from '@/app/providers';
import { QueryKey } from '@/queries/queries';
import Link from 'next/link';
import { TrainingType } from '@/constants/training';

export const Setting = () => {
  const { data: userConfig } = useUserConfigQuery();
  const { mutate } = useUserConfigMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QueryKey.GetConfig(),
      });
    },
  });

  if (!userConfig) {
    return null;
  }

  const handleToggleChange = (field: string, value: boolean) => {
    mutate({
      ...userConfig,
      [field]: value,
    });
  };

  return (
    <S.Wrapper>
      <S.Title>통합 설정</S.Title>
      <S.Item>
        오디오 카운트 다운
        <ToggleButton
          name="hasAudioCountdown"
          isActive={userConfig.hasAudioCountdown}
          onChange={handleToggleChange}
        />
      </S.Item>
      <S.Item>
        스테틱 최고 기록
        <S.StaticRecordButton>
          {userConfig.highestStaticRecord
            ? formatSecondsToMinutesAndSeconds(
                userConfig.highestStaticRecord.record,
                'text'
              )
            : '기록 설정하러 가기'}
          <RightArrowIcon />
        </S.StaticRecordButton>
      </S.Item>
      <S.Divider />
      <S.Title>시간 기반 테이블</S.Title>
      <S.Item>
        총 라운드 설정
        <Link href={`/training/setting/total-round/${TrainingType.TimeBased}`}>
          <S.ItemActionButton>
            {userConfig.timeBasedTotalRounds}
            <RightArrowIcon />
          </S.ItemActionButton>
        </Link>
      </S.Item>
      <S.Item>
        첫 번째 준비 호흡 생략
        <ToggleButton
          name="skipTimeBasedPreparatoryBreath"
          isActive={userConfig.skipTimeBasedPreparatoryBreath}
          onChange={handleToggleChange}
        />
      </S.Item>
      <S.Divider />
      <S.Title>호흡 기반 테이블</S.Title>
      <S.Item>
        총 라운드 설정
        <Link
          href={`/training/setting/total-round/${TrainingType.BreathBased}`}
        >
          <S.ItemActionButton>
            {userConfig.breathBasedTotalRounds}
            <RightArrowIcon />
          </S.ItemActionButton>
        </Link>
      </S.Item>
      <S.Item>
        준비 호흡 초 설정
        <Link href="/training/setting/preparatory-duration">
          <S.ItemActionButton>
            {userConfig.preparatoryBreathDuration}
            <RightArrowIcon />
          </S.ItemActionButton>
        </Link>
      </S.Item>
      <S.Item>
        첫 번째 준비 호흡 생략
        <ToggleButton
          name="skipBreathBasedPreparatoryBreath"
          isActive={userConfig.skipBreathBasedPreparatoryBreath}
          onChange={handleToggleChange}
        />
      </S.Item>
      <S.Divider />
      <S.Item>
        회원 정보
        <RightArrowIcon />
      </S.Item>
    </S.Wrapper>
  );
};

namespace S {
  export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;

  export const Title = styled.div`
    ${Typography.H4Medium};
    color: ${Color.White};
    padding: 12px 24px 4px 24px;
  `;

  export const Item = styled.div`
    ${Typography.B1Regular};
    color: ${Color.White};
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
  `;

  export const ItemActionButton = styled.div`
    ${Typography.B1Medium};
    color: ${Color.White};
    display: flex;
    align-items: center;
  `;

  export const StaticRecordButton = styled.div`
    ${Typography.B1Medium};
    color: ${Color.Etc};
    display: flex;
    align-items: center;
  `;

  export const Divider = styled.div`
    height: 12px;
    background: ${Color.BackgroundDarkBox};
  `;
}
