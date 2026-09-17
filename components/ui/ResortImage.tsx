import Image, { type ImageProps } from "next/image";
export interface ResortImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL" | "priority"> {
  src: string;
  /** Marks the image as the LCP candidate: eager-loads, preloads in <head>,
   * and hints the browser to fetch it first. Use for the hero image only —
   * everything else lazy-loads. Forwards to next/image's current `preload`
   * prop rather than the deprecated `priority` prop. */
  preload?: boolean;
}

export function ResortImage({ src, preload = false, loading, fetchPriority, ...props }: ResortImageProps) {
  return (
    <Image
      src={src}
      preload={preload}
      loading={preload ? "eager" : (loading ?? "lazy")}
      fetchPriority={preload ? "high" : fetchPriority}
      {...props}
    />
  );
}
