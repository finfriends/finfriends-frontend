// 분'초"로 형식 변경
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}'${formattedSeconds}"`;
};
