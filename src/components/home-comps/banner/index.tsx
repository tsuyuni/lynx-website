import { cn } from '@site/src/lib/utils';
import cls from 'classnames';
import React from 'react';
import { useLang } from 'rspress/runtime';
import { Button } from 'rspress/theme';
import { DotPattern } from './DotPattern';
import styles from './index.module.less';

const desc = {
  zh: '开始用 ',
  en: 'Start building with ',
  ja: '',
};

const btnText = {
  zh: '快速开始',
  en: 'Quick Start',
  ja: 'クイックスタート',
};

const tailText = {
  zh: ' 构建',
  en: '',
  ja: ' で開発を始める',
};

export const Banner: React.FC = () => {
  const lang = useLang() as 'en' | 'zh' | 'ja';

  return (
    <div className={styles['banner-frame']}>
      <p className={cls(styles['banner-title'], lang === 'zh' && styles.zh)}>
        {desc[lang]}
        <span className={styles['lynx-text']}>Lynx</span>
        {tailText[lang]}
      </p>
      <Button text={btnText[lang]} href={`guide/start/quick-start.html`} />
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(450px_200px_ellipse_at_center,white,transparent)]',
        )}
      />
    </div>
  );
};
