import React, { useMemo } from 'react';
import originListData from './authors.json';
import {
  IconGithubLogo,
  IconGitlabLogo,
  IconTiktokLogo,
  IconUserCircle,
} from '@douyinfe/semi-icons';
import { Avatar, Space } from '@douyinfe/semi-ui';
import { useLang } from 'rspress/runtime';
import styles from './index.module.less';
import IconX from '@assets/x-logo.svg?react';

const brandSpList = {
  github: {
    icon: <IconGithubLogo />,
  },
  x: {
    icon: <IconX className={styles['icon-x']} />,
  },
  tiktok: {
    icon: <IconTiktokLogo />,
  },
  gitlab: {
    icon: <IconGitlabLogo />,
  },
  default: {
    icon: <IconUserCircle />,
  },
} as const;

type BrandKey = keyof typeof brandSpList;

const HoverCard = ({ author }: { author: (typeof originListData)[0] }) => {
  const lang = useLang();

  return (
    <span className={styles['avatar-item']}>
      <Space>
        <Avatar
          className="!sh-pointer-events-none"
          src={author?.image}
          zoom={false}
          onMouseEnter={undefined}
          onClick={undefined}
          onMouseLeave={undefined}
        ></Avatar>
        <div>
          <p className="sh-text-sm sh-font-bold">
            {lang === 'zh' ? author.name_zh : author.name}
          </p>
          <p className="sh-text-xs sh-leading-[1em] sh-mx-0 sh-my-1 text-[color:var(--text-secondary)]">
            {lang === 'zh' ? author.title_zh : author.title}
          </p>
          <div>
            <Space>
              {Object.entries(author.socials).map(([key, value]) => {
                return value?.link ? (
                  <span
                    onClick={() => window.open(value?.link, '_blank')}
                    className="sh-cursor-pointer"
                  >
                    {brandSpList[key as BrandKey]
                      ? brandSpList[key as BrandKey].icon
                      : brandSpList['default'].icon}
                  </span>
                ) : (
                  <>
                    {brandSpList[key as BrandKey]
                      ? brandSpList[key as BrandKey].icon
                      : brandSpList['default'].icon}
                  </>
                );
              })}
            </Space>
          </div>
        </div>
      </Space>
    </span>
  );
};

const BlogAvatar = ({ list }: { list: string[] }) => {
  const filteredAuthors = useMemo(() => {
    return originListData.filter((author) => list.includes(author.id));
  }, [list]);

  if (filteredAuthors.length === 0) {
    return <></>;
  }

  return (
    <div className={styles['blog-avatar-frame']}>
      {filteredAuthors.map((author) => {
        return <HoverCard author={author} key={author.id} />;
      })}
    </div>
  );
};

export { BlogAvatar };
