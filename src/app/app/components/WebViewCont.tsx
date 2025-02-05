import {useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import {WebView} from 'react-native-webview';
import getEnvVars from 'env';

export default function WebViewCont () {
  const { webViewUrl } = getEnvVars();
  const webUrl: string = webViewUrl || '';
  const webviewRef = useRef<WebView | null>(null);

  return (<View style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }}>
     <WebView
        ref={webviewRef}
        source={{uri: webUrl}}
        pullToRefreshEnabled={false}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={false}
        sharedCookiesEnabled={true}
        originWhitelist={['https://*', 'http://*']}
        overScrollMode={'never'}
        style={styles.webview}
        contentInsetAdjustmentBehavior="never"
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
