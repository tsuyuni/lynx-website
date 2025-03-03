import { ReactNode } from 'react';
import styles from './write-once-run-all-platform.module.less';
import { useFixDark } from '@site/theme/hooks/use-fix-dark';

export const WriteOnceRunAllPlatform = () => {
  const isDark = useFixDark();
  return (
    <div className={styles['write-once-run-all-platform-container']}>
      <LeftLine></LeftLine>
      <ContainerWithHexagonBackground
        color={isDark ? '#FFFFFF1A' : 'transparent'}
        className={styles['outer-hexagon']}
      >
        <ContainerWithHexagonBackground
          color={isDark ? '#FFFFFF1A' : '#1111130A'}
          className={styles['inner-hexagon']}
        >
          <div className={styles['lynx-logo']}></div>
        </ContainerWithHexagonBackground>
      </ContainerWithHexagonBackground>
      <RightPlatforms></RightPlatforms>
    </div>
  );
};

/// ----- right ----- ///

const RightPlatforms = () => {
  return (
    <div className={styles['right-container']}>
      <div>
        <div
          className={
            styles['right-side-base'] + ' ' + styles['right-upper-animation']
          }
        ></div>
        <RightlineGoesUp></RightlineGoesUp>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80px',
        }}
      >
        <AnimationLine className={styles['right-line']} />
      </div>
      <div>
        <div
          className={
            styles['right-side-base'] + ' ' + styles['right-down-animation']
          }
        ></div>
        <RightlineGoesDown></RightlineGoesDown>
      </div>
    </div>
  );
};

const RightlineGoesUp = () => {
  const isDark = useFixDark();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="153"
      height="48"
      viewBox="0 0 153 48"
      fill="none"
    >
      <path
        id="rightLineUp"
        d="M151.645 1.53027L96.9051 33.1959C81.6857 42 64.4141 46.6357 46.8318 46.6357H0.896946"
        stroke={isDark ? '#FFFFFF' : '#111113'}
        stroke-opacity="0.08"
        stroke-width="1.5"
      />
    </svg>
  );
};

const RightlineGoesDown = () => {
  const isDark = useFixDark();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="153"
      height="48"
      viewBox="0 0 153 48"
      fill="none"
    >
      <path
        id="rightLineDown"
        d="M151.645 46.7686L96.9051 15.1029C81.6857 6.29883 64.4141 1.66309 46.8318 1.66309H0.896946"
        stroke={isDark ? '#FFFFFF' : '#111113'}
        stroke-opacity="0.08"
        stroke-width="1.5"
      />
    </svg>
  );
};

///-----left------///

const LeftLine = () => {
  return <AnimationLine className={styles['left-line']} />;
};

///----- center -----///
/// the two same center hexagon

const ContainerWithHexagonBackground = (props: {
  color?: string;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={
        styles['container-with-hexagon-background'] + ' ' + props.className
      }
    >
      <div className={styles['hexagon-as-bg']}>
        <HexagonSVG color={props.color ?? 'transparent'} />
      </div>
      {props.children}
    </div>
  );
};

const HexagonSVG = (props: { color: string; children?: ReactNode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 170 188"
      fill="none"
    >
      <path
        d="M97.3728 4.15852C89.7925 -0.217983 80.4531 -0.217983 72.8728 4.15852L13.6449 38.3538C6.0646 42.7303 1.39493 50.8184 1.39493 59.5714V127.962C1.39493 136.715 6.0646 144.803 13.6449 149.179L72.8728 183.375C80.4531 187.751 89.7925 187.751 97.3728 183.375L156.601 149.179C164.181 144.803 168.851 136.715 168.851 127.962V59.5714C168.851 50.8184 164.181 42.7303 156.601 38.3538L97.3728 4.15852Z"
        fill={props.color}
        fill-opacity="0.6"
        stroke="url(#paint0_linear_2002_13582)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2002_13582"
          x1="27.4883"
          y1="5.50123"
          x2="201.311"
          y2="169.623"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#111113" stop-opacity="0.12" />
          <stop offset="1" stop-color="#111113" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/// ---- shared ---- ///

const AnimationLine = (props: { className: string }) => {
  return (
    <div className={styles['animation-line-background']}>
      <div className={props.className + ' ' + styles['animation-line-dot']} />
    </div>
  );
};
