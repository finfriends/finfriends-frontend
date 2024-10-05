import { IconProps } from '@/types/icon';
import { Color } from '@/styles/color';

export const HistoryIcon = ({ size = 26, color = Color.White }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 7.58337V13L16.25 14.0834"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.63228 16.3037C3.12257 14.1307 3.12257 11.8693 3.63228 9.6963C4.33807 6.68742 6.68742 4.33807 9.6963 3.63228C11.8693 3.12257 14.1307 3.12257 16.3037 3.63228C19.3126 4.33807 21.6619 6.68742 22.3677 9.69629C22.8774 11.8693 22.8774 14.1307 22.3677 16.3037C21.6619 19.3126 19.3126 21.6619 16.3037 22.3677C14.1307 22.8774 11.8693 22.8774 9.6963 22.3677"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1.30429 14.7314L3.84565 16.4433L5.55748 13.9019"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
