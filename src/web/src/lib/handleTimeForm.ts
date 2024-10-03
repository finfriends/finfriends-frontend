export const secondsToMinutes = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${minutes}:${formattedSeconds}`;
};

export const minutesToSeconds = (time: string) => {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
};
