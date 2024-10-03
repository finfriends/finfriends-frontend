import React from 'react';

type TimerCircleProps = {
  initialTime: number;
  elapsedTime: number;
};

export const TimerCircle = ({ initialTime, elapsedTime }: TimerCircleProps) => {
  const radius = 130;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (elapsedTime / initialTime) * circumference;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="269"
      height="269"
      viewBox="0 0 269 269"
      fill="none"
      style={{ transform: 'rotate(90deg)' }}
    >
      <g filter="url(#filter0_b_3548_3610)">
        <path
          d="M11.9991 91.2978C21.2286 51.9509 51.951 21.2286 91.2978 11.9991C119.714 5.33364 149.286 5.33364 177.702 11.9991C217.049 21.2286 247.771 51.951 257.001 91.2978C263.666 119.714 263.666 149.286 257.001 177.702C247.771 217.049 217.049 247.771 177.702 257.001C149.286 263.666 119.714 263.666 91.2978 257.001C51.951 247.771 21.2286 217.049 11.9991 177.702C5.33363 149.286 5.33363 119.714 11.9991 91.2978Z"
          fill="white"
          fillOpacity="0.12"
        />
        <path
          d="M11.9991 91.2978C21.2286 51.9509 51.951 21.2286 91.2978 11.9991C119.714 5.33364 149.286 5.33364 177.702 11.9991C217.049 21.2286 247.771 51.951 257.001 91.2978C263.666 119.714 263.666 149.286 257.001 177.702C247.771 217.049 217.049 247.771 177.702 257.001C149.286 263.666 119.714 263.666 91.2978 257.001C51.951 247.771 21.2286 217.049 11.9991 177.702C5.33363 149.286 5.33363 119.714 11.9991 91.2978Z"
          stroke="#23506C"
          strokeWidth="14"
        />
      </g>
      <path
        d="M11.9991 91.2978C21.2286 51.9509 51.951 21.2286 91.2978 11.9991C119.714 5.33364 149.286 5.33364 177.702 11.9991C217.049 21.2286 247.771 51.951 257.001 91.2978C263.666 119.714 263.666 149.286 257.001 177.702C247.771 217.049 217.049 247.771 177.702 257.001C149.286 263.666 119.714 263.666 91.2978 257.001C51.951 247.771 21.2286 217.049 11.9991 177.702C5.33363 149.286 5.33363 119.714 11.9991 91.2978Z"
        stroke="white"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1s linear' }}
      />
      <defs>
        <filter
          id="filter0_b_3548_2801"
          x="-8"
          y="-8"
          width="285"
          height="285"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_3548_2801"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_3548_2801"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
