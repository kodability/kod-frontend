# Kodability

## Requirements

- node.js v14 +

## Build

```bash
# Start dev server
$ yarn start

# Production build
$ yarn build

# Serve production build
$ yarn serve
```

## Known Issues

- Storybook cannot find stories.
- Cannot exclude `Missing return type on function  @typescript-eslint/explicit-module-boundary-types` eslint warnings only.
  - Disable `@typescript-eslint/explicit-module-boundary-types` rule for now.
  - See [Explicit module boundary types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md).
- `findDOMNode is deprecated in React's StrictMode` warning in dev server
  - See [React 17 support](https://github.com/react-component/resize-observer/issues/49)