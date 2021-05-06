const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  // https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
  webpackFinal: (config) => {
    // path alias
    const pathAliases = {
      "@": "../src",
    };
    Object.entries(pathAliases).forEach(([key, value]) => {
      config.resolve.alias[key] = path.resolve(__dirname, value);
    });
    return config;
  },
};
