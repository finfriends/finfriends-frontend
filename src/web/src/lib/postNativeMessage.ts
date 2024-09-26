interface ReactNativeWebView {
  postMessage: (message: string) => void;
}

declare global {
  interface Window {
    ReactNativeWebView: ReactNativeWebView;
  }
}

export const postNativeMessage = (
  message: string,
  isAwaitingResponse: boolean
) => {
  return new Promise((resolve, reject) => {
    if (window.ReactNativeWebView) {
      const listener = (event: MessageEvent) => {
        clearTimeout(timer);
        // android
        document.removeEventListener('message', listener as EventListener);
        // ios
        window.removeEventListener('message', listener);
        resolve(JSON.parse(event.data).result);
      };

      window.ReactNativeWebView.postMessage(message);
      const TIMEOUT = 10000;
      const timer = setTimeout(() => {
        // android
        document.removeEventListener('message', listener as EventListener);
        // ios
        window.removeEventListener('message', listener);
        reject(new Error('TIMEOUT'));
      }, TIMEOUT);

      if (isAwaitingResponse) {
        // android
        document.addEventListener('message', listener as EventListener);
        // ios
        window.addEventListener('message', listener);
      } else {
        clearTimeout(timer);
      }
    } else {
      reject(new Error('ReactNativeWebView is not available'));
    }
  });
};
