import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

export const WebViewCont = () => {
  const webviewRef = useRef<WebView | null>(null);
  // adb reverse tcp:3000 tcp:3000
  const webUrl: string = 'http://localhost:3000';
  return (
    <View style={styles.container}>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
