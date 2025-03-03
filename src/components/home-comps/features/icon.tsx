import React from 'react';
import AndroidIcon from '@assets/home/home-icon-android.svg?react';
import WebIcon from '@assets/home/home-icon-web.svg?react';
import IosIcon from '@assets/home/home-icon-apple.svg?react';
import styles from './index.module.less';

const IconIOS = () => {
  return <IosIcon className={styles['ios-icon']} />;
};

const IconAndroid = () => {
  return <AndroidIcon />;
};

const IconWeb = () => {
  return <WebIcon />;
};

export { IconIOS, IconAndroid, IconWeb };
