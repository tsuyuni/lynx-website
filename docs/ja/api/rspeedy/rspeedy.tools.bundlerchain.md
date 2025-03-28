<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@lynx-js/rspeedy](./rspeedy.md) &gt; [Tools](./rspeedy.tools.md) &gt; [bundlerChain](./rspeedy.tools.bundlerchain.md)

## Tools.bundlerChain property

The [Tools.bundlerChain](./rspeedy.tools.bundlerchain.md) changes the options of [Rspack](https://www.rspack.dev) using [rspack-chain](https://github.com/rspack-contrib/rspack-chain)<!-- -->.

**Signature:**

```typescript
bundlerChain?: ToolsConfig['bundlerChain'] | undefined;
```

## Example

```js
import { defineConfig } from '@lynx-js/rspeedy';

export default defineConfig({
  tools: {
    bundlerChain(chain) {
      chain.resolve.fullySpecified(true);
    },
  },
});
```

See [rspack-chain](https://github.com/rspack-contrib/rspack-chain) for details.
