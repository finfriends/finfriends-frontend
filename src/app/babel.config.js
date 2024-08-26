module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@finfriends-frontend/common': '../common/src',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    ],
  ],
};
