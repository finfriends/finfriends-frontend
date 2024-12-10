import { IconProps } from '@/types/icon';
import { Color } from '@/styles/color';

export const RightArrowIcon = ({
  size = 24,
  color = Color.ButtonSecond,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 19L23 12L16 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
