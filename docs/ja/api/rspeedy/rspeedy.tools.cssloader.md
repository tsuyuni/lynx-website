<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@lynx-js/rspeedy](./rspeedy.md) &gt; [Tools](./rspeedy.tools.md) &gt; [cssLoader](./rspeedy.tools.cssloader.md)

## Tools.cssLoader property

The [CssLoader](./rspeedy.cssloader.md) controls the options of [css-loader](https://github.com/webpack-contrib/css-loader)<!-- -->.

**Signature:**

```typescript
cssLoader?: CssLoader | undefined;
```

## Remarks

The default option is as follow:

```js
const defaultOptions = {
  modules: {
    auto: true,
    namedExport: false,
    exportLocalsConvention: 'camelCase',
    localIdentName: output.cssModules.localIdentName,
  },
  sourceMap: output.sourceMap,
  // importLoaders is `1` when compiling css files, and is `2` when compiling sass/less files
  importLoaders: 1 || 2,
};
```
