"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageWithFallback({
  src,
  fallback,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality,
  placeholder = "empty",
  blurDataURL,
  style,
  onContextMenu,
  ...rest
}) {
  const [primaryFailed, setPrimaryFailed] = useState(false);

  useEffect(() => {
    setPrimaryFailed(false);
  }, [src, fallback]);

  const activeSrc = primaryFailed ? fallback : src;

  const handleError = () => {
    if (!primaryFailed) {
      setPrimaryFailed(true);
      return;
    }
  };

  const imageProps = fill
    ? {
        fill: true,
        sizes: sizes || "100vw",
      }
    : {
        width,
        height,
      };

  return (
    <Image
      src={activeSrc}
      alt={alt}
      className={className}
      priority={priority}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onError={handleError}
      style={style}
      onContextMenu={onContextMenu}
      {...imageProps}
      {...rest}
    />
  );
}
