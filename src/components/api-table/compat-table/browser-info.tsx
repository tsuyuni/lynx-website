import type BCD from '@lynx-js/lynx-compat-data';
import React, { useContext } from 'react';

export const BrowserInfoContext = React.createContext<BCD.Platforms | null>(
  null,
);

export function BrowserName({ id }: { id: BCD.PlatformName }) {
  const browserInfo = useContext(BrowserInfoContext);
  if (!browserInfo) {
    throw new Error('Missing browser info');
  }
  return <>{browserInfo[id].name}</>;
}
