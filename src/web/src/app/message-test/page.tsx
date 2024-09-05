'use client';

import { useEffect, useState } from 'react';
import { postNativeMessage } from '@/lib/postNativeMessage';
import { handleDataFromApp } from '@/lib/handleDataFromApp';
import { MessageType } from '@finfriends-frontend/common/constants/messageType';

export default function MessageTestPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [os, setOs] = useState<string>('');
  const [version, setVersion] = useState<number>(0);

  const getMessageListener = (e: MessageEvent) => {
    const getOs = handleDataFromApp(e.data, MessageType.DeviceOS);
    const getVersion = handleDataFromApp(e.data, MessageType.DeviceVersion);
    if (typeof getOs === 'string') setOs(getOs);
    if (typeof getVersion === 'number') setVersion(getVersion);
  };
  const handlePostMessage = async () => {
    setIsOpen(true);
    await postNativeMessage(
      JSON.stringify({ type: MessageType.DeviceOS, data: '' }),
      true
    );
    await postNativeMessage(
      JSON.stringify({ type: MessageType.DeviceVersion, data: '' }),
      true
    );
  };

  useEffect(() => {
    document.addEventListener('message', getMessageListener as EventListener);
    window.addEventListener('message', getMessageListener);

    return () => {
      document.removeEventListener(
        'message',
        getMessageListener as EventListener
      );
      window.removeEventListener('message', getMessageListener);
    };
  }, []);
  return (
    <div>
      <button onClick={handlePostMessage}>정보 보기</button>
      <div></div>

      {isOpen && (
        <>
          <p>Device: {os}</p>
          <p>Version: {version}</p>
        </>
      )}
    </div>
  );
}
