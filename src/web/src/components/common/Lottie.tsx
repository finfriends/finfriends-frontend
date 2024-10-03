import React, { useRef, useEffect, HTMLAttributes } from 'react';
import Lottie, { AnimationConfigWithData } from 'lottie-web';
import { LottieAnimationData } from '@/types/lottie';

interface LottieComponentProps extends HTMLAttributes<HTMLDivElement> {
  animationData: LottieAnimationData;
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  ...restProps
}) => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (animationContainer.current) {
      const animationOptions: AnimationConfigWithData = {
        container: animationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
      const animation = Lottie.loadAnimation(animationOptions);

      return () => {
        animation.destroy();
      };
    }
  }, [animationData]);

  return <div ref={animationContainer} {...restProps} />;
};

export default LottieComponent;
