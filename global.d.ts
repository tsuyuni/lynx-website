declare module '@theme' {
  export const PackageManagerTabs: any;
}

declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react';
  const Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
