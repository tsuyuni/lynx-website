import React from 'react';
import styles from './index.module.less';
import cls from 'classnames';
import case0src from '@assets/home/home-s-case-0.webp';
import case1src from '@assets/home/home-s-case-1.webp';
import case2src from '@assets/home/home-s-case-2.webp';

type CaseKey = 'case-0' | 'case-1' | 'case-2';

export const MobileShow = ({ preview }: { preview: CaseKey }) => {
  const caseList = {
    'case-0': case0src,
    'case-1': case1src,
    'case-2': case2src,
  };

  return (
    <div className={styles['mobile-show-frame']}>
      <div className={cls(styles['preview'])}>
        <img src={caseList[preview]} />
      </div>
    </div>
  );
};
