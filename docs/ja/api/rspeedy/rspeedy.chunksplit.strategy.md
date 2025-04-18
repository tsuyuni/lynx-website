<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@lynx-js/rspeedy](./rspeedy.md) &gt; [ChunkSplit](./rspeedy.chunksplit.md) &gt; [strategy](./rspeedy.chunksplit.strategy.md)

## ChunkSplit.strategy property

The ChunkSplitting strategy.

**Signature:**

```typescript
strategy?: 'all-in-one' | 'split-by-module' | 'split-by-experience' | 'single-vendor' | undefined;
```

## Remarks

- `split-by-experience`<!-- -->(default): an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size.

- `split-by-module`<!-- -->: split by NPM package granularity, each NPM package corresponds to a chunk.

- `split-by-size`<!-- -->: automatically split according to module size.

- `all-in-one`<!-- -->: bundle all codes into one chunk.

- `single-vendor`<!-- -->: bundle all NPM packages into a single chunk.

- `custom`<!-- -->: custom chunk splitting strategy.

## Example 1

- Use `all-in-one` to put all modules in one chunk.

```js
import { defineConfig } from '@lynx-js/rspeedy';

export default defineConfig({
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
});
```

## Example 2

- Use `single-vendor` to put all third-party dependencies in one chunk. And source code in another chunk.

```js
import { defineConfig } from '@lynx-js/rspeedy';

export default defineConfig({
  performance: {
    chunkSplit: {
      strategy: 'single-vendor',
    },
  },
});
```
