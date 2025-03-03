import type { SidebarGroup } from '@rspress/shared';

export async function transformQrcodeRsbuildPluginSidebar(
  sidebar: SidebarGroup,
  locale?: string,
) {
  const { default: RspeedyReport } = await import(
    './qrcode-rsbuild-plugin.json',
    {
      with: { type: 'json' },
    }
  );

  sidebar.items = transformLocales(
    // We make a deep copy here to make sure different locales have different sidebar config
    JSON.parse(JSON.stringify(RspeedyReport)),
    locale,
  );

  return sidebar;
}

export async function transformReactRsbuildPluginSidebar(
  sidebar: SidebarGroup,
  locale?: string,
) {
  const { default: RspeedyReport } = await import(
    './react-rsbuild-plugin.json',
    {
      with: { type: 'json' },
    }
  );

  sidebar.items = transformLocales(
    // We make a deep copy here to make sure different locales have different sidebar config
    JSON.parse(JSON.stringify(RspeedyReport)),
    locale,
  );

  return sidebar;
}

export async function transformRspeedySidebar(
  sidebar: SidebarGroup,
  locale?: string,
) {
  const { default: RspeedyReport } = await import('./rspeedy.json', {
    with: { type: 'json' },
  });

  sidebar.items = transformLocales(
    // We make a deep copy here to make sure different locales have different sidebar config
    JSON.parse(JSON.stringify(RspeedyReport)),
    locale,
  );

  return sidebar;
}

function transformLocales(
  sidebar: SidebarGroup[],
  locale?: string,
): SidebarGroup[] {
  if (!locale) {
    return sidebar;
  }

  return sidebar.map((item) => transformItem(item, locale));
}

function transformItem(sidebar: SidebarGroup, locale: string): SidebarGroup {
  if (sidebar.link) {
    sidebar.link = `${locale}/${sidebar.link}`;
  }
  if (sidebar.items) {
    sidebar.items = sidebar.items.map((item) =>
      transformItem(item as SidebarGroup, locale),
    );
  }
  return sidebar;
}
