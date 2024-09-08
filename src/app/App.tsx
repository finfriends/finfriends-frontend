/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import styled from '@emotion/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebViewCont} from './components/WebViewCont.tsx';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <S.WebViewContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebViewCont />
    </S.WebViewContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace S {
  export const WebViewContainer = styled.SafeAreaView`
    flex: 1;
    height: 100%;
    width: 100%;
  `;
}

export default App;
