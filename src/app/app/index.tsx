import { Button, View, Alert } from 'react-native';
import {KakaoOAuthToken, login, KakaoProfile, getProfile} from '@react-native-seoul/kakao-login';

export default function Index() {
  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    showAlert(JSON.stringify(token));
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();

    showAlert(JSON.stringify(profile));
  };

  const showAlert = (token:string) =>
    Alert.alert(
      'Alert Title',
      token,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <View>
      <Button
        onPress={signInWithKakao}
        title="LogIn"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={getKakaoProfile}
        title="get Profile"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    // <WebViewCont />
  );
}
