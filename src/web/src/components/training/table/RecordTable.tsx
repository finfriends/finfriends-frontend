import React, { useState } from 'react';
import { Tab } from '@/components/common/Tab';
import { TabTheme } from '@/constants/Tab';
import { TrainingType } from '@/constants/training';
import styled from '@emotion/styled';
import { TimeRecordTable } from '@/components/training/table/TimeRecordTable';
import { BreathRecordTable } from '@/components/training/table/BreathRecordTable';
import { StaticRecordTable } from '@/components/training/table/StaticRecordTable';

export const RecordTable = () => {
  const TabList: { key: TrainingType; label: string }[] = [
    { key: TrainingType.Static, label: '스테틱' },
    { key: TrainingType.TimeBased, label: '시간 기반' },
    { key: TrainingType.BreathBased, label: '호흡 기반' },
  ];

  const [currentTab, setCurrentTab] = useState(TabList[0]);
  const renderContent = () => {
    switch (currentTab.key) {
      case TrainingType.Static:
        return <StaticRecordTable />;
      case TrainingType.TimeBased:
        return <TimeRecordTable />;
      case TrainingType.BreathBased:
        return <BreathRecordTable />;
      default:
        return null;
    }
  };

  return (
    <div>
      <S.TabWrapper>
        <Tab
          tabTheme={TabTheme.Dark}
          tabList={TabList}
          activeTab={currentTab}
          onClick={setCurrentTab}
        />
      </S.TabWrapper>
      {renderContent()}
    </div>
  );
};

namespace S {
  export const TabWrapper = styled.div`
    padding-top: 8px;
  `;
}
