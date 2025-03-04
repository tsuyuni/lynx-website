export const isSupportWebExplorer = () => {
  return (
    CSS.supports('width:1rex') &&
    CSS.supports('transition-behavior:allow-discrete') &&
    CSS.supports('content-visibility: auto')
  );
};
