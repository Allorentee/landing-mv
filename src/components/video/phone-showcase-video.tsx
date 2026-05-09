"use client";

import clsx from "clsx";
import Video from "./video";

/** Phone chrome matched across hero, menu-types desktop & mobile carousel. */
export const phoneShowcaseFrameClass =
  "relative shrink-0 overflow-hidden rounded-[30px] border-[6px] border-gray-300 bg-black shadow-lg aspect-[9/19.5]";

/** Strips default Video bezel and fills the inner frame without double borders. */
export const phoneShowcaseVideoClass =
  "absolute! inset-0 m-0! box-border! aspect-auto! size-full max-h-none max-w-none min-h-full! min-w-0! rounded-none border-0 object-contain shadow-none!";

type PhoneShowcaseVideoProps = {
  src: string;
  poster?: string;
  wrapperClassName?: string;
  className?: string;
};

export function PhoneShowcaseVideo({
  src,
  poster,
  wrapperClassName,
  className,
}: PhoneShowcaseVideoProps) {
  return (
    <div className={clsx(phoneShowcaseFrameClass, wrapperClassName)}>
      <Video
        src={src}
        poster={poster}
        className={clsx(phoneShowcaseVideoClass, className)}
      />
    </div>
  );
}
