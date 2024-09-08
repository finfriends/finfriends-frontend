import { ReceiveDataType } from '@finfriends-frontend/common/types/message';

export function handleDataFromApp(
  message: string,
  MessageType: string
): string | number | object | undefined {
  const { type, data }: ReceiveDataType = JSON.parse(message);
  console.log(type, data);
  if (type === MessageType) {
    return data;
  }
}
