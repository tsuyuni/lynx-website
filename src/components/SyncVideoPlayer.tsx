import type { CSSProperties, SyntheticEvent } from 'react';
import { type FC, useEffect, useRef, useState } from 'react';

interface SyncVideoPlayerProps {
  videos: {
    src: string;
    title?: string;
  }[];
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  style?: CSSProperties;
  playbackRate?: number;
}

export const SyncVideoPlayer: FC<SyncVideoPlayerProps> = ({
  videos,
  autoPlay = true,
  muted = true,
  controls = true,
  loop = true,
  style = {},
  playbackRate = 1,
}) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handleVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) {
      videoRefs.current[index] = el;
      el.playbackRate = playbackRate;
    }
  };

  const syncVideos = (targetTime?: number) => {
    const videos = videoRefs.current.filter(Boolean);
    if (videos.length === 0) return;

    const mainVideo = videos[0];
    const time =
      typeof targetTime === 'number' ? targetTime : mainVideo.currentTime;

    for (const [index, video] of videos.entries()) {
      if (index === 0) continue;
      if (Math.abs(video.currentTime - time) > 0.1) {
        video.currentTime = time;
      }
    }
  };

  const togglePlayPause = () => {
    const videos = videoRefs.current.filter(Boolean);
    if (videos.length === 0) return;

    if (isPlaying) {
      for (const video of videos) {
        video.pause();
      }
    } else {
      Promise.all(videos.map((video) => video.play())).catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const newTime = (event.target as HTMLVideoElement).currentTime;
    setCurrentTime(newTime);
    syncVideos(newTime);
  };

  return (
    <div
      style={{
        display: 'table',
        margin: '36px 0',
        width: '100%',
        tableLayout: 'fixed',
        ...style,
      }}
    >
      <div style={{ display: 'table-row' }}>
        {videos.map((video, index) => (
          <div
            key={video.src}
            style={{
              display: 'table-cell',
              verticalAlign: 'top',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '40vw',
                margin: '0 auto',
              }}
            >
              <video
                ref={(el) => handleVideoRef(el, index)}
                src={video.src}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '50vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
                autoPlay={autoPlay}
                muted={index === 0 ? muted : true}
                controls={controls}
                loop={loop}
                playsInline
                onPlay={() => !isPlaying && setIsPlaying(true)}
                onPause={() => isPlaying && setIsPlaying(false)}
                onTimeUpdate={index === 0 ? handleTimeUpdate : undefined}
              />
            </div>
            {video.title && (
              <div
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'center',
                }}
              >
                {video.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
