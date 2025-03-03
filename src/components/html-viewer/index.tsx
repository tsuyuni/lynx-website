import React, { useEffect } from 'react';
import { useLocation } from 'rspress/runtime';
import styles from './index.module.less';

const doUpdataParentHash = (event: MessageEvent) => {
  try {
    const data = JSON.parse(event.data);

    if (data.src === 'living-spec') {
      window.history.replaceState({}, '', data.hash);
    }
  } catch (postError) {
    //
  }
};

const HtmlViewer = ({ path }: { path: string }) => {
  const location = useLocation();

  useEffect(() => {
    const rootContainer = document.querySelector('#root');

    if (rootContainer) {
      rootContainer.classList.add('html-viewer-root');

      window.addEventListener('message', doUpdataParentHash);
    }

    return () => {
      if (rootContainer) {
        rootContainer.classList.remove('html-viewer-root');

        window.removeEventListener('message', doUpdataParentHash);
      }
    };
  }, []);

  return (
    <div className={styles['html-viewer-frame']}>
      <iframe
        src={`${path}?ts=${Date.now()}${location.hash}`}
        className={styles['iframe-frame']}
      />
    </div>
  );
};

export { HtmlViewer };
