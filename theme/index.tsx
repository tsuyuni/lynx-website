import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, usePageData } from 'rspress/runtime';
import {
  HomeLayout as BaseHomeLayout,
  Layout as BaseLayout,
} from 'rspress/theme';
import './index.scss';

import {
  Banner,
  Features,
  MeteorsBackground,
  ShowCase,
  Footer,
} from '@/components/home-comps';
import { SUBSITES_CONFIG } from '../shared-route-config';
import AfterNavTitle from './AfterNavTitle';
import BeforeSidebar from './BeforeSidebar';
import { useBlogBtnDom } from './hooks/use-blog-btn-dom';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const subsite = SUBSITES_CONFIG.find((s) => pathname.includes(s.value));
    document.documentElement.setAttribute(
      'data-subsite',
      subsite ? subsite.value : 'guide',
    );
  }, [pathname]);

  return (
    <BaseLayout
      afterNavTitle={<AfterNavTitle />}
      beforeSidebar={<BeforeSidebar />}
      bottom={<Footer />}
    />
  );
}

const i18nWords = {
  en: ['Unlock', 'Render', 'Toward', 'Ship'],
  zh: ['迈向', '更快的', '更多平台的', '更多人的'],
  ja: ['更なる', '高速な', '多くの基盤で', 'より多くの人に'],
};

const i18nSuffix = {
  en: ' Native for More',
  zh: '原生体验',
  ja: 'ネイティブ体験を',
};

function HomeLayout() {
  const { pathname } = useLocation();
  const {
    page,
    siteData: { lang: defalutLang },
  } = usePageData();
  const lang = (
    pathname.match(/^\/(en|zh|ja)\//)
      ? pathname.replace(/^\/(.+)\/.*/, '$1')
      : defalutLang
  ) as 'en' | 'zh' | 'ja';
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(`${i18nWords[lang][0]}${i18nSuffix[lang]}`);
  const [delta, setDelta] = useState(200);
  const [isPaused, setIsPaused] = useState(false);

  const routePath = useMemo(
    () => page.routePath.replace(`/${lang}/`, '/'),
    [page],
  );

  useBlogBtnDom(routePath);

  // Update theme based on URL
  useEffect(() => {
    const subsite = SUBSITES_CONFIG.find((s) => pathname.includes(s.value));
    document.documentElement.setAttribute(
      'data-subsite',
      subsite ? subsite.value : 'guide',
    );
  }, [pathname]);

  const updateText = useCallback(() => {
    const h1Ele = document.querySelector('h1');
    const h1Span = document.querySelector('h1 > span');
    if (!h1Ele) return;
    if (!h1Span) return;

    // Add negative margin to h1 span to avoid text wrapping
    h1Ele.style.margin = '0 -100px';

    const words = i18nWords[lang];
    const suffix = i18nSuffix[lang];

    const currentWord = words[currentWordIndex];
    const currentLength = text.replace(suffix, '').length;
    const dynamicText = isDeleting
      ? currentWord.substring(0, currentLength - 1)
      : currentWord.substring(0, currentLength + 1);

    const fullText = `${dynamicText}${suffix}`;
    setText(fullText);

    const dynamicSpan = h1Span.querySelector('.dynamic-text');
    const suffixSpan = h1Span.querySelector('.suffix-text');

    if (!dynamicSpan || !suffixSpan) {
      h1Span.innerHTML = `
        <span class="dynamic-text">${dynamicText}</span><span class="suffix-text">${suffix}</span>
      `;
    } else {
      dynamicSpan.textContent = dynamicText;
      suffixSpan.textContent = suffix;
    }

    if (!isDeleting && dynamicText === currentWord) {
      if (!isPaused) {
        setIsPaused(true);
        setDelta(2000);
      } else {
        setIsPaused(false);
        setIsDeleting(true);
        setDelta(100);
      }
    } else if (isDeleting && dynamicText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setDelta(140);
    }
  }, [currentWordIndex, isDeleting, text, isPaused, lang]);

  // Reset animation when language changes or when returning to home page
  useEffect(() => {
    const isHomePage = routePath === '/';

    if (isHomePage) {
      // Reset all states when returning to home
      setCurrentWordIndex(0);
      setIsDeleting(false);
      setIsPaused(false);
      setDelta(200);
      setText(`${i18nWords[lang][0]}${i18nSuffix[lang]}`);
    }
  }, [lang, page]); // Watch both language and path changes

  useEffect(() => {
    const isHomePage = routePath === '/';

    if (!isHomePage) {
      return;
    }

    const ticker = setInterval(updateText, delta);
    return () => clearInterval(ticker);
  }, [updateText, delta, page]);

  return (
    <>
      <MeteorsBackground gridSize={120} meteorCount={3} />
      <div className="home-layout-container">
        <BaseHomeLayout
          afterHero={
            <>
              <Features src={routePath} />
              {routePath === '/' && <ShowCase />}
              {routePath === '/' && <Banner />}
            </>
          }
        />
      </div>
    </>
  );
}

export { HomeLayout, Layout };

export * from 'rspress/theme';
