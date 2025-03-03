/**
 * This is a compatibility layer for the old available badge API.
 * @deprecated
 * @see ./api-badge/index.ts
 */

import { Deprecated } from '@lynx';
import { PlatformBadge } from '../api-badge/PlatformBadge';
import { VersionBadge } from '../api-badge/VersionBadge';

/** @deprecated */
export default function AvailableBadge(props: AvailableBadgeProps) {
  switch (props.type) {
    case 'version':
      return <VersionBadgeShim {...(props.data as VersionBadgeProps)} />;
    case 'platform':
      return <PlatformBadgeShim {...(props.data as PlatformBadgeProps)} />;
    default:
      return <div>Invalid type</div>;
  }
}

function VersionBadgeShim(props: VersionBadgeProps) {
  const isDeprecated = props.support === 'deprecated';
  if (isDeprecated) {
    return <Deprecated since={props.version} />;
  }

  return <VersionBadge>{props.version}</VersionBadge>;
}

function PlatformBadgeShim(props: PlatformBadgeProps) {
  // @ts-ignore
  return <PlatformBadge platform={props.platform} />;
}

type VersionBadgeProps = {
  version: string;
  support: 'support' | 'deprecated';
};

type PlatformBadgeProps = {
  platform: string;
  support: 'support';
};

// 定义 AvailableBadge 的属性类型
/** @deprecated */
export type AvailableBadgeProps = {
  type: 'platform' | 'version';
  data: PlatformBadgeProps | VersionBadgeProps;
};
