const CracoAlias = require("craco-alias");
const CracoEsbuildPlugin = require("craco-esbuild");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

function getCracoPlugins() {
  const cracoPlugins = [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
    {
      plugin: CracoEsbuildPlugin,
    },
  ];

  return cracoPlugins;
}

function getWebpackPlugins() {
  const webpackPlugins = [
    new MonacoWebpackPlugin({
      languages: [
        "cpp",
        "csharp",
        "go",
        "java",
        "javascript",
        "julia",
        "kotlin",
        "python",
        "rust",
        "scala",
        "swift",
        "typescript",
      ],
    }),
  ];
  return webpackPlugins;
}

module.exports = {
  webpack: {
    plugins: {
      add: getWebpackPlugins(),
    },
  },
  plugins: getCracoPlugins(),
  eslint: {
    enable: true,
  },
};
