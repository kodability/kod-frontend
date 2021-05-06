module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // Missing return type on function  @typescript-eslint/explicit-module-boundary-types 경고때문에 일단 비활성화
        // TODO: 위 경고만 제외할 수 있도록 설정 후, warn으로 변경
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
  env: {
    jest: true,
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/*.mdx", "src/ssr"],
};
