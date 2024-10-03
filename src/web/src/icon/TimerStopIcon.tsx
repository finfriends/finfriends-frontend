import { IconProps } from '@/types/icon';

export const TimerStopIcon = ({ size = 33 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M6.30388 10.171C7.17254 7.29069 8.73072 6.37507 12.4339 5.69944C15.1084 5.21151 17.8917 5.21151 20.5661 5.69944C24.2694 6.37507 25.8275 7.29069 26.6962 10.171C27.3235 12.2511 27.3235 19.7492 26.6962 21.8293C25.8275 24.7096 24.2694 25.6253 20.5661 26.3009C17.8917 26.7888 15.1084 26.7888 12.434 26.3009C8.73072 25.6253 7.17254 24.7096 6.30388 21.8293C5.67654 19.7492 5.67654 12.2511 6.30388 10.171Z"
        fill="white"
      />
    </svg>
  );
};