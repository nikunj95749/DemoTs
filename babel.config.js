const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder
const extensions = ['.ts', '.tsx','.android.js', '.ios.js', '.js','.jsx', '.json', '.native'];


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [['module-resolver', { alias, extensions }], 'react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
