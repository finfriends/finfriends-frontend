import {Platform} from 'react-native';
import {MessageType} from '@finfriends-frontend/common/constants/messageType.ts';
import {ReceiveDataType} from '@finfriends-frontend/common/types/message.ts';

export function handleDataFromWeb(message: string) {
  const {type, data}: ReceiveDataType = JSON.parse(message);
  const os: string = Platform.OS;
  const version: string | number = Platform.Version;
  let sendData: string | undefined;
  console.log(type, data);
  switch (type) {
    case MessageType.DeviceOS:
      sendData = JSON.stringify({
        type: MessageType.DeviceOS,
        data: os,
      });
      return sendData;
    case MessageType.DeviceVersion:
      sendData = JSON.stringify({
        type: MessageType.DeviceVersion,
        data: version,
      });
      return sendData;
    default:
      break;
  }
}
