<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@lynx-js/rspeedy](./rspeedy.md) &gt; [Server](./rspeedy.server.md) &gt; [headers](./rspeedy.server.headers.md)

## Server.headers property

Adds headers to all responses.

**Signature:**

```typescript
headers?: Record<string, string | string[]> | undefined;
```

## Example

```js
import { defineConfig } from '@lynx-js/rspeedy';
export default defineConfig({
  server: {
    headers: {
      'Access-Control-Allow-Origin': '**',
    },
  },
});
```
