// 분'초"로 형식 변경
export const formatSecondsToMinutesAndSeconds = (
  ms: number,
  outputType: 'text' | 'symbol' = 'symbol'
): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  switch (outputType) {
    case 'text':
      return `${minutes}분 ${seconds}초`;
    case 'symbol':
      return `${minutes}'${seconds}"`;
    default:
      throw new Error('outputType은 "text" 또는 "symbol"이어야 합니다.');
  }
};
