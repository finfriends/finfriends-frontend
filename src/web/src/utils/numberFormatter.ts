// 분'초"로 형식 변경
export const formatSecondsToMinutesAndSeconds = (
  ms: number,
  outputType: 'text' | 'symbol' | 'mm:ss' = 'symbol'
): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  switch (outputType) {
    case 'text':
      return `${minutes}분 ${seconds}초`;
    case 'symbol':
      return `${minutes}'${seconds}"`;
    case 'mm:ss':
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    default:
      throw new Error('outputType Error');
  }
};
