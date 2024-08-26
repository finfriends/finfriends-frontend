// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (func: (...params: any) => void, wait: number) => {
  let timer: NodeJS.Timeout | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...params: any) => {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }

    timer = setTimeout(() => {
      func(...params);
      timer = undefined;
    }, wait);
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = (func: (...params: any) => void, time: number) => {
  let timer: NodeJS.Timeout | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...params: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        func(...params);
        timer = undefined;
      }, time);
    }
  };
};
