<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@lynx-js/rspeedy](./rspeedy.md) &gt; [ChunkSplitBySize](./rspeedy.chunksplitbysize.md) &gt; [minSize](./rspeedy.chunksplitbysize.minsize.md)

## ChunkSplitBySize.minSize property

The minimum size of a chunk, unit in bytes. Defaults to `10000`<!-- -->.

**Signature:**

```typescript
minSize?: number | undefined;
```

## Example

```js
import { defineConfig } from '@lynx-js/rspeedy';

export default defineConfig({
  performance: {
    chunkSplit: {
      strategy: 'split-by-size',
      minSize: 20000,
    },
  },
});
```
