"use client";

import Link from "next/link";
import { useThemeAsset } from "@/hooks";
import { ImageWithFallback, IMAGEKIT_MEDIA, LOCAL_MEDIA } from "@/components";

export default function Logo({
  withLink = true,
  href = "/",
  ariaLabel = "Home",
  linkClassName,
  imageClassName,
  alt = "logo",
  width,
  height,
  fill = false,
  priority = true,
  quality = 100,
}) {
  const { pickByTheme } = useThemeAsset({ fallbackTheme: "dark" });

  const logoSrc = pickByTheme(
    IMAGEKIT_MEDIA.header.logoLight,
    IMAGEKIT_MEDIA.header.logoDark
  );
  const logoFallback = pickByTheme(
    LOCAL_MEDIA.header.logoLight,
    LOCAL_MEDIA.header.logoDark
  );

  const logoImage = (
    <ImageWithFallback
      src={logoSrc}
      fallback={logoFallback}
      className={imageClassName}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      quality={quality}
    />
  );

  if (!withLink) return logoImage;

  return (
    <Link href={href} className={linkClassName} aria-label={ariaLabel}>
      {logoImage}
    </Link>
  );
}
