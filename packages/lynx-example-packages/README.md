# Lynx Example Packages

This package is used to generate data for Lynx examples in the docs. Please update the [lynx-examples](https://github.com/lynx-family/lynx-examples/tree/main/examples) and publish a new version to npm to generate the example data.

## Update or Add Example

1. Update `package.json` to add necessary dependencies.
2. Run `pnpm install` in the root directory.

## Generate Example Data

The script [scripts/lynx-example.js](./../../scripts/lynx-example.js) generates example data for the Lynx project.

```bash
node scripts/lynx-example.js
```

Example data will be generated in the `docs/public/lynx-examples` directory. For instance, the `@lynx-example/animation` package will be created in the `docs/public/lynx-examples/animation` directory, and an `example-data.json` file will be generated within that directory.

### Example JSON Structure

The generated `example-data.json` will have the following structure:

```json
{
  "name": "view",
  "files": [
    "dist/main.lynx.bundle",
    "src/App.tsx",
    "src/index.tsx",
    "src/rspeedy-env.d.ts",
    "lynx.config.ts",
    "package.json",
    "README.md"
  ],
  "templateFiles": [
    {
      "name": "main",
      "file": "dist/main.lynx.bundle"
    }
  ],
  "previewImage": "preview-image.png"
}
```

### Fields Description

- **`name`**: The name of the example package.
- **`files`**: The files included in the example package, used for the file tree component.
- **`templateFiles`**: The .lynx.bundle|.web.bundle files within the example package.
- **`previewImage`**: The preview image for the example package, which should match the pattern `/^preview-image\.(png|jpg|jpeg|webp|gif)$/`.

## Use Example Data in Documentation

Refer to [Go](./../../src/components/go/Go.tsx) for usage of the example data in documentation.
