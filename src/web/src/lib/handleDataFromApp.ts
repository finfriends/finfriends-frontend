import { ReceiveDataType } from '@finfriends-frontend/common/types/message';

export const handleDataFromApp = (
  message: string,
  MessageType: string
): string | number | object | undefined => {
  const { type, data }: ReceiveDataType = JSON.parse(message);

  if (type === MessageType) {
    return data;
  }

  return undefined;
};
