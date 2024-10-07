import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { TabTheme } from '@/constants/Tab';
import { Color } from '@/styles/color';

type TabProps<T = string> = { key: T; label: string };

interface TabsProps<T extends TabProps> {
  tabTheme: TabTheme;
  tabList: T[];
  activeTab: T;
  onClick: (tab: T) => void;
}

export const Tab = <T extends TabProps>({
  tabTheme,
  tabList,
  activeTab,
  onClick,
}: TabsProps<T>) => {
  const handleTabClick = useCallback(
    (tab: T) => {
      onClick(tab);
    },
    [onClick]
  );

  return (
    <S.Wrapper>
      {tabList.map((tab) => (
        <S.TabList
          key={tab.key}
          theme={tabTheme}
          isActive={tab.key === activeTab.key}
          onClick={() => handleTabClick(tab)}
        >
          {tab.label}
        </S.TabList>
      ))}
    </S.Wrapper>
  );
};

namespace S {
  export const Wrapper = styled.div`
    width: 100%;
    display: flex;
  `;

  export const TabList = styled.div<{ isActive?: boolean; theme: TabTheme }>`
    flex: 1;
    padding: 2px 0 12px 0;
    text-align: center;
    ${(props) => {
      switch (props.theme) {
        case TabTheme.Dark:
          return `
          color: ${props.isActive ? Color.Text000 : Color.Text500};
          border-bottom: 2px solid ${props.isActive ? Color.White : Color.BackgroundDarkBox};
          `;
        case TabTheme.Light:
          return `
            color: ${props.isActive ? Color.Text800 : Color.Disabled};
            border-bottom: 2px solid ${props.isActive ? Color.IconAbled : Color.LineBasic};
            `;
        default:
          return '';
      }
    }}
  `;
}
