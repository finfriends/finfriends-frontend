import {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import styled from '@emotion/native';
import {handleDataFromWeb} from '../libs/handleDataFromWeb.ts';
import {WebViewEventType} from '../types/message.ts';
import Config from 'react-native-config';

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
