const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // To modify Antd theme
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#ccac55",
      "@heading-color": "@primary-color",
      "@font-size-base": "16px",
      "@layout-header-background": "#181c1f",
      "@card-head-background": "@layout-header-background",
      "@layout-footer-background": "@layout-header-background",
    },
  })(config, env);
  return config;
};
