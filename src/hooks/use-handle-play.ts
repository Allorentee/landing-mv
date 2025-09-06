import { useCallback, useEffect, useRef } from "react";

interface useHandlePlayProps {
  productId: string;
  videoPlaying?: string;
}

/**
 *  Hook to play video products
 * @param param0 productId and video that is currently playing
 * @returns
 */
export function useHandlePlay({ productId, videoPlaying }: useHandlePlayProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { current } = videoRef;

  const handlePlay = useCallback(() => {
    if (videoPlaying === productId) {
      current?.play();
    } else {
      current?.pause();
    }
  }, [current, productId, videoPlaying]);

  useEffect(() => {
    handlePlay();
  }, [handlePlay, videoPlaying]);

  return { videoRef };
}
