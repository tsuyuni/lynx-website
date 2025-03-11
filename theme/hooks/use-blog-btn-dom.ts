import { JapaneseYen } from 'lucide-react';
import { useCallback, useEffect, useMemo } from 'react';
import { useLang, useNavigate, usePageData } from 'rspress/runtime';

type ConfigKey = '/' | '/react/' | '/rspeedy/';

const config = {
  '/': {
    text: {
      zh: '阅读 Lynx 的开篇博客',
      en: 'Read the Introductory Blog of Lynx',
      ja: 'Lynx の紹介ブログを読む',
    },
  },
  '/react/': {
    text: {
      zh: 'ReactLynx',
      en: 'ReactLynx',
      ja: 'ReactLynx',
    },
  },
  '/rspeedy/': {
    text: {
      zh: 'Rspeedy',
      en: 'Rspeedy',
      ja: 'Rspeedy',
    },
  },
};

const useBlogBtnDom = (src: string) => {
  const { page } = usePageData();
  const navigate = useNavigate();
  const lang = useLang() as 'en' | 'zh' | 'ja';

  const handleInteraction = useCallback(() => {
    navigate(
      lang === 'en'
        ? '/blog/lynx-unlock-native-for-more'
        : lang === 'zh'
          ? '/zh/blog/lynx-unlock-native-for-more'
          : '/ja/blog/lynx-unlock-native-for-more',
    );
  }, [navigate, lang]);

  const configKey = useMemo(() => {
    return (
      src.startsWith('/react/')
        ? '/react/'
        : src.startsWith('/rspeedy/')
          ? '/rspeedy/'
          : '/'
    ) as ConfigKey;
  }, [src]);

  useEffect(() => {
    if (page.pageType !== 'home') return;

    const h1 = document.querySelector('h1');
    if (!h1) return;

    const targetElement = h1.parentElement;
    if (!targetElement) return;

    const newElement = document.createElement('div');
    newElement.className =
      configKey === '/' ? `blog-btn-frame active-hover` : `blog-btn-frame`;
    newElement.textContent = config[configKey].text[lang];

    targetElement.insertBefore(newElement, targetElement.firstChild);
    h1.style.margin = '0px -100px';

    if (configKey === '/') {
      newElement.addEventListener('click', handleInteraction);
      newElement.addEventListener('touchstart', handleInteraction);
    }

    return () => {
      newElement.removeEventListener('click', handleInteraction);
      newElement.removeEventListener('touchstart', handleInteraction);

      targetElement.removeChild(newElement);
    };
  }, [configKey, lang]);
};

export { useBlogBtnDom };
