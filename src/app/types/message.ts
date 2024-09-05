import {NativeSyntheticEvent} from 'react-native';

export type WebViewEventType = NativeSyntheticEvent<{
  data: string;
}>;
