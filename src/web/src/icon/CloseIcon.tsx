import { IconProps } from '@/types/icon';
import { Color } from '@/styles/color';

export const CloseIcon = ({ size = 26, color = Color.White }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.2904 6.12377C21.6809 5.73325 21.6809 5.10009 21.2904 4.70956C20.8999 4.31904 20.2667 4.31904 19.8762 4.70956L13 11.5858L6.12373 4.70956C5.73321 4.31904 5.10004 4.31904 4.70952 4.70956C4.31899 5.10009 4.31899 5.73325 4.70952 6.12378L11.5857 13L4.70952 19.8762C4.319 20.2668 4.319 20.8999 4.70952 21.2904C5.10004 21.681 5.73321 21.681 6.12373 21.2904L13 14.4142L19.8762 21.2904C20.2667 21.681 20.8999 21.681 21.2904 21.2904C21.6809 20.8999 21.6809 20.2668 21.2904 19.8762L14.4142 13L21.2904 6.12377Z"
      fill={color}
    />
  </svg>
);
