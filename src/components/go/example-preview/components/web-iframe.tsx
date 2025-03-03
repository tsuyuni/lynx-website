import { Spin, Typography } from '@douyinfe/semi-ui';
import React, { useEffect, useRef, useState } from 'react';

interface WebIframeProps {
  show: boolean;
  src: string;
}

const previewBaseUrl =
  'https://www.unpkg.com/@lynx-js/web-explorer@0.0.1/index.html';

export const WebIframe = ({ show, src }: WebIframeProps) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (show && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [show, hasBeenVisible]);

  useEffect(() => {
    if (hasBeenVisible) {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current?.addEventListener('load', () => {
          setLoading(false);
          iframeRef.current?.contentWindow?.postMessage(
            {
              method: 'setLynxViewUrl',
              url: `${src}?fullscreen=true`,
            },
            '*',
          );
        });
        iframeRef.current?.addEventListener('error', () => {
          setLoading(false);
          setError(true);
        });
      }
    }
  }, [hasBeenVisible]);

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      style={{ display: show ? 'flex' : 'none' }}
    >
      {hasBeenVisible && (
        <iframe
          src={previewBaseUrl}
          ref={iframeRef}
          className="w-full h-full"
        />
      )}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Spin />
        </div>
      )}
      {error && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Typography.Text
            type="tertiary"
            style={{ padding: '0 12px', textAlign: 'center' }}
          >
            Failed to load the preview, please try again later.
          </Typography.Text>
        </div>
      )}
    </div>
  );
};
