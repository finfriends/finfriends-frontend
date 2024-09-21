import { IconProps } from '@/types/icon';

export const LeftArrowIcon = ({ size = 26, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M16.25 5.41675L8.66663 13.0001L16.25 20.5834"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
