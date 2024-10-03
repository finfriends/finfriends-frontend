import styled from '@emotion/styled';
import { Color } from '@/styles/color';
import { Typography } from '@/styles/fonts';
import { scheduleTable } from '@/data/table-data';
import { ScheduleTableType } from '@/types/data';
import { secondsToMinutes } from '@/lib/handleTimeForm';

type PropsType = {
  tableType: 'time' | 'breath';
};

export const ScheduleTable = ({ tableType }: PropsType) => {
  const tableTitle: string[] =
    tableType === 'time'
      ? ['순서', '준비 호흡', '숨 참기']
      : ['순서', '준비 호흡 (6초)', '숨 참기'];

  return (
    <S.Table>
      <S.TableHeader>
        {tableTitle.map((item: string) => (
          <span key={item}>{item}</span>
        ))}
      </S.TableHeader>
      <S.TableBody>
        {scheduleTable.map((item: ScheduleTableType) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>
              {tableType === 'time'
                ? secondsToMinutes(item.ready_breath)
                : `${item.ready_breath_count}회`}
            </span>
            <span>{secondsToMinutes(item.static)}</span>
          </li>
        ))}
      </S.TableBody>
    </S.Table>
  );
};

namespace S {
  export const Table = styled.div`
    padding: 24px 20px 12px 20px;
    border-radius: 24px;
    background: ${Color.BackgroundDarkBox};
    backdrop-filter: blur(4px);
    color: ${Color.White};
  `;
  export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-bottom: 12px;
    ${Typography.B3Regular};
    span:nth-of-type(1) {
      width: 60px;
    }
    span:nth-of-type(2) {
      width: 100px;
    }
    span:nth-of-type(3) {
      width: 100px;
    }
  `;
  export const TableBody = styled.ul`
    text-align: center;
    ${Typography.B1Regular};
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid ${Color.BackgroundDarkBox};
      &:last-child {
        border-bottom: none;
      }
      span:nth-of-type(1) {
        width: 60px;
      }
      span:nth-of-type(2) {
        width: 100px;
      }
      span:nth-of-type(3) {
        width: 100px;
      }
    }
  `;
}
