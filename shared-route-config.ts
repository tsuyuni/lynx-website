/**
 * Sub-sites and shared docs configuration
 */

import type { SidebarData } from 'rspress/theme';

/**
 * Metadata for each subsites. This is used to
 * - generate the sidebar subsite selector dropdown UI.
 * - define the routes that shares common files.
 */
export type SubsiteConfig = {
  value: string;
  label: string;
  description: string;
  descriptionZh: string;
  home: string;
  url: string;
  logo: {
    light: string;
    dark: string;
  };
};

export const SUBSITES_CONFIG: SubsiteConfig[] = [
  {
    value: 'guide',
    label: 'Lynx',
    description: 'The fundamental of Lynx',
    descriptionZh: 'Lynx 基础',
    home: '/',
    url: '/guide/ui/elements-components',
    logo: {
      light:
        'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/lynx-dark-logo.svg',
      dark: 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/lynx-light-logo.svg',
    },
  },
  {
    value: 'react',
    label: 'ReactLynx',
    description: 'Build Lynx apps with React',
    home: '/react',
    url: '/react/introduction',
    logo: {
      light:
        'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/reactlynx-logo-light.svg',
      dark: 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/reactlynx-logo-dark.svg',
    },
    descriptionZh: '用 React 开发 Lynx 应用',
  },
  {
    value: 'rspeedy',
    label: 'Rspeedy',
    description: 'The Lynx build tool',
    descriptionZh: 'Lynx 构建工具',
    home: '/rspeedy',
    url: '/rspeedy/cli',
    logo: {
      light:
        'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/rspeedy.PNG',
      dark: 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/rspeedy.PNG',
    },
  },
];

/**
 * URL paths that share common documentation files.
 * For example, "start/quick-start" will be accessible at both
 * "guide/start/quick-start" and "react/start/quick-start".
 */
export const SHARED_SIDEBAR_PATHS = SUBSITES_CONFIG.map(
  (config) => config.value,
);

const SHARED_DOC_ROOT = 'start';

// Map of localized titles for shared documentation files
const SHARED_DOC_TITLES = {
  'quick-start': {
    en: 'Quick Start',
    zh: '快速上手',
    ja: 'クイックスタート',
  },
  'integrate-with-existing-apps': {
    en: 'Integrate with Existing Apps',
    zh: '接入现有应用',
    ja: '既存アプリケーションとの統合',
  },
  'tutorial-gallery': {
    en: 'Tutorial: Product Gallery',
    zh: '教程：产品列表',
    ja: 'チュートリアル：製品ギャラリー',
  },
  'tutorial-product-detail': {
    en: 'Tutorial: Product Detail',
    zh: '教程：产品详情',
    ja: 'チュートリアル：製品詳細',
  },
} as const;

/**
 * List of documentation files that are shared between URL paths.
 * Each file exists once but is accessible from multiple paths.
 * For example, "start/quick-start" can be accessed at both:
 * - /guide/start/quick-start
 * - /react/start/quick-start
 */
export const SHARED_DOC_FILES = Object.keys(SHARED_DOC_TITLES).map(
  (filename) => `${SHARED_DOC_ROOT}/${filename}`,
);

/**
 * Gets the current URL path prefix from the pathname.
 * Used to determine which path (guide/react/rspeedy) is currently being viewed.
 *
 * @example
 * getUrlPathPrefix('/guide/start/quick-start', ['guide', 'react']) // Returns '/guide'
 *
 * @param pathname - Current URL pathname
 * @param sharedPaths - Array of URL path prefixes to check against
 * @returns The matching path prefix with leading slash, or empty string if no match
 */
export function getUrlPathPrefix(pathname: string, sharedPaths: string[]) {
  for (const path of sharedPaths) {
    if (pathname.includes(`/${path}`)) {
      return `/${path}`;
    }
  }
  return '';
}

/**
 * Gets language prefix for URLs based on current language.
 * Critical for maintaining proper i18n routing.
 *
 * @param lang - Current language code
 * @returns Language prefix for URLs ('/' for English, '/zh' for Chinese)
 */
export function getLangPrefix(lang: string) {
  // The constant here must match the configured lang in rspress.config.ts.
  return lang === 'ja' ? '' : `/${lang}`;
}

/**
 * Creates sidebar data structure for shared documentation files.
 * Handles both internationalization and dynamic route generation.
 *
 * @param lang - Current language code
 * @param pathname - Current URL pathname
 * @returns Sidebar configuration for shared documentation sections
 */
export const createSharedRouteSidebar = (
  lang: string,
  pathname: string,
): SidebarData => {
  const pathPrefix = getUrlPathPrefix(pathname, SHARED_SIDEBAR_PATHS);
  if (!pathPrefix) return [];

  const fullPrefix = `${getLangPrefix(lang)}${pathPrefix}/${SHARED_DOC_ROOT}`;

  // Generate sidebar items from shared doc titles
  const sidebarItems = Object.entries(SHARED_DOC_TITLES).map(
    ([filename, texts]) => ({
      text: texts[lang as 'en' | 'zh' | 'ja'],
      link: `${fullPrefix}/${filename}`,
    }),
  );

  // Define shared sidebar sections with localized text
  const sharedSections: SidebarData = [
    {
      text: lang === 'zh' ? '开始' : lang === 'en' ? 'Get Started' : 'はじめる',
      items: sidebarItems,
      collapsible: true,
      // Collapse section if not currently viewing pages under shared root
      collapsed: !pathname.includes(`/${SHARED_DOC_ROOT}/`),
    },
    {
      dividerType: 'solid',
    },
  ];

  return sharedSections;
};
