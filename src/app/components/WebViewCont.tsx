import {useEffect, useRef} from 'react';
import DeviceInfo from 'react-native-device-info';
// eslint-disable-next-line react-native/split-platform-components
import {Alert, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from '@emotion/native';
import {handleDataFromWeb} from '../libs/handleDataFromWeb.ts';
import {WebViewEventType} from '../types/message.ts';
import Config from 'react-native-config';
import messaging from '@react-native-firebase/messaging';

export const WebViewCont = () => {
  const webUrl: string = Config.RN_APP_WEB_VIEW_URL || '';
  const webviewRef = useRef<WebView | null>(null);
  const fetchDataFromWeb = (e: WebViewEventType) => {
    const data = handleDataFromWeb(e.nativeEvent.data);

    if (webviewRef.current && data) {
      console.log(data);
      webviewRef.current.postMessage(data);
    }
  };

  // 알림 권한 요청 및 FCM 토큰 발급
  async function requestNotificationPermission() {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: '알림 권한 요청',
          message: '앱에서 알림을 보내기 위해 권한이 필요합니다.',
          buttonPositive: '허용',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('알림 권한 허용됨');
        await getFcmTokenAndSendToWebView();
      } else {
        console.log('알림 권한 거부됨');
      }
    } else {
      await getFcmTokenAndSendToWebView(); // Android 13 이하나 iOS의 경우
    }
  }

  // FCM 토큰 발급 및 WebView로 전달
  async function getFcmTokenAndSendToWebView() {
    try {
      const fcmToken = await messaging().getToken();
      console.log('FCM Token:', fcmToken);
      console.log('Device id:', DeviceInfo.getDeviceId());
      console.log('Device type:', Platform.OS);

      if (webviewRef.current) {
        webviewRef.current.postMessage(
          JSON.stringify({
            type: 'FCM_TOKEN',
            token: fcmToken,
          }),
        );
      }
    } catch (error) {
      console.error('FCM 토큰 발급 실패:', error);
    }
  }

  // 초기화: 권한 요청 및 토큰 발급
  useEffect(() => {
    requestNotificationPermission();

    messaging().onTokenRefresh(newToken => {
      console.log('토큰 갱신됨:', newToken);
    });

    // 알림 수신 리스너 설정
    // WebView로 알림 내용을 전송
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // 앱이 포그라운드일 때 알림을 표시
      Alert.alert(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage.notification),
      );
    });
    return unsubscribe;
  }, []);

  return (
    <S.WebViewContainer>
      <WebView
        ref={webviewRef}
        source={{uri: webUrl}}
        pullToRefreshEnabled={true}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        originWhitelist={['https://*', 'http://*']}
        overScrollMode={'never'}
        style={styles.webview}
        onMessage={fetchDataFromWeb}
      />
    </S.WebViewContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace S {
  export const WebViewContainer = styled.View`
    flex: 1;
  `;
}
const styles = StyleSheet.create({
  webview: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
