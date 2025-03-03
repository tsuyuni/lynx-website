import type { PlatformName } from '@lynx-js/lynx-compat-data';
import { cn } from '../../lib/utils';
import { mapPlatformNameToIconName } from '../api-table/compat-table/headers';
import { PlatformIconProps } from './types';

const toPlatformName = (platform: string): PlatformName => {
  switch (platform) {
    case 'ios':
    case 'ios-simulator':
    case 'macos':
    case 'macos-arm64':
    case 'macos-intel':
      return 'ios';
    case 'android':
      return 'android';
    case 'web':
      return 'web_lynx';
    default:
      return 'web_lynx';
  }
};

/**
 * Component for rendering platform icons
 */
export const PlatformIcon = ({
  platforms = [],
  className,
}: PlatformIconProps) => {
  if (!platforms.length) return null;

  return (
    <div className={cn('sh-flex sh-items-center sh-gap-2', className)}>
      {platforms.map((platform) => (
        <div
          key={platform}
          className={`icon icon-${mapPlatformNameToIconName(toPlatformName(platform))} sh-bg-current sh-h-8 sh-w-8`}
        />
      ))}
    </div>
  );
};
