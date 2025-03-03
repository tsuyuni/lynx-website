import * as path from 'node:path';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import type { RspressPlugin, SidebarGroup } from '@rspress/shared';
import { defineConfig } from 'rspress/config';
import {
  SHARED_DOC_FILES,
  SHARED_SIDEBAR_PATHS,
} from './shared-route-config.js';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  route: {
    exclude: ['lynx-compat-data/**/*'],
  },
  ssg: { strict: true },
  title: 'Lynx',
  description:
    'Empower the web community and invite more to build cross-platform apps',
  icon: '/assets/lynx-dark-logo.svg',
  lang: 'en',
  globalStyles: path.join(__dirname, 'src', 'styles', 'global.css'),
  builderConfig: {
    plugins: [pluginSvgr()],
    source: {
      alias: {
        '@site': path.join(__dirname),
        '@': path.join(__dirname, 'src'),
        '@assets': path.join(__dirname, 'public', 'assets'),
        '@lynx': path.join(__dirname, 'src', 'components'),
      },
      define: {
        'process.env': {
          OSS: '3.2',
          DOC_GIT_BASE_URL: JSON.stringify(
            'https://github.com/lynx-wg/lynx-website/tree/main',
          ),
        },
      },
    },
  },
  logo: {
    light: '/assets/lynx-dark-logo.svg',
    dark: '/assets/lynx-light-logo.svg',
  },
  themeConfig: {
    locales: [
      {
        lang: 'zh',
        title: 'Lynx',
        description: '帮助 Web 构建跨平台应用',
        label: '简体中文',
      },
      {
        lang: 'en',
        title: 'Lynx',
        description:
          'Empower the web community and invite more to build cross-platform apps',
        label: 'English',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/lynx-family/lynx',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/mXk7jqdDXk',
      },
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/lynxjs_org',
      },
    ],
    nav: [],
    sidebar: {},
  },
  plugins: [rspeedyApiPlugin(), sharedSidebarPlugin()],
  markdown: {
    defaultWrapCode: false,
    checkDeadLinks: true,
    highlightLanguages: [
      ['js', 'javascript'],
      ['ts', 'typescript'],
      ['oc', 'objectivec'],
      ['objc', 'objectivec'],
      ['objective-c', 'objectivec'],
      ['md', 'markdown'],
      ['mdx', 'markdown'],
    ],
  },
});

function rspeedyApiPlugin(): RspressPlugin {
  return {
    name: 'rspeedy:api',
    async config(config, utils, isProd) {
      const { pluginAutoNavSidebar } = await import(
        '@rspress/plugin-auto-nav-sidebar'
      );
      const {
        transformRspeedySidebar,
        transformReactRsbuildPluginSidebar,
        transformQrcodeRsbuildPluginSidebar,
      } = await import('./api-reports/index.js');
      config = await pluginAutoNavSidebar().config!(config, utils, isProd);
      config.themeConfig?.locales?.map((locale) => {
        if (locale.sidebar?.['/api']) {
          locale.sidebar!['/api'] =
            locale.sidebar?.['/api'].map((sidebar) => {
              if ('text' in sidebar && sidebar.text === 'lynx.config.js') {
                transformRspeedySidebar(sidebar as SidebarGroup);
              } else if (
                'text' in sidebar &&
                sidebar.text === '@lynx-js/react-rsbuild-plugin'
              ) {
                transformReactRsbuildPluginSidebar(sidebar as SidebarGroup);
              } else if (
                'text' in sidebar &&
                sidebar.text === '@lynx-js/qrcode-rsbuild-plugin'
              ) {
                transformQrcodeRsbuildPluginSidebar(sidebar as SidebarGroup);
              }
              return sidebar;
            }) ?? [];
        } else if (locale.sidebar?.[`/${locale.lang}/api`]) {
          locale.sidebar![`/${locale.lang}/api`] =
            locale.sidebar?.[`/${locale.lang}/api`].map((sidebar) => {
              if ('text' in sidebar && sidebar.text === 'lynx.config.js') {
                transformRspeedySidebar(sidebar as SidebarGroup, locale.lang);
              } else if (
                'text' in sidebar &&
                sidebar.text === '@lynx-js/react-rsbuild-plugin'
              ) {
                transformReactRsbuildPluginSidebar(
                  sidebar as SidebarGroup,
                  locale.lang,
                );
              } else if (
                'text' in sidebar &&
                sidebar.text === '@lynx-js/qrcode-rsbuild-plugin'
              ) {
                transformQrcodeRsbuildPluginSidebar(
                  sidebar as SidebarGroup,
                  locale.lang,
                );
              }
              return sidebar;
            }) ?? [];
        }
        return locale;
      });
      return config;
    },
  };
}

function mapNonGuideSharedSectionsToGuide(
  lang: string,
  routes: string[],
  filenames: string[],
) {
  return routes
    .filter((route) => route !== 'guide')
    .flatMap((route) =>
      filenames.map((filename) => ({
        routePath: `/${lang}/${route}/${filename}`,
        filepath: path.join(__dirname, `docs/${lang}/guide`, `${filename}.mdx`),
      })),
    );
}

function sharedSidebarPlugin(): RspressPlugin {
  return {
    name: 'rspeedy:shared-sidebar',
    addPages(config, isProd) {
      const pages =
        config.themeConfig?.locales?.flatMap(({ lang }) =>
          mapNonGuideSharedSectionsToGuide(
            lang,
            SHARED_SIDEBAR_PATHS,
            SHARED_DOC_FILES,
          ),
        ) || [];

      return pages;
    },
  };
}
