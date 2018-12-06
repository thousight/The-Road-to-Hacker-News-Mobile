module.exports = function (api: any) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      'babel-plugin-styled-components'
    ],
    plugins: [
      ['import', { libraryName: 'antd-mobile-rn' }]
    ]
  };
};
