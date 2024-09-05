const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @types {import('metro-config').MetroConfig}
 */

const config = {
  resolver: {
    // Metro가 특정 경로를 찾을 수 있도록 별칭(alias)을 설정
    extraNodeModules: {
      '@finfriends-frontend/common': path.resolve(__dirname, '../common/src'),
    },
  },
  watchFolders: [
    // Metro가 이 폴더를 감시하도록 설정
    path.resolve(__dirname, '../common/src'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
