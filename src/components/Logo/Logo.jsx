import Link from "next/link";
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
  const logoImage = (
    <ImageWithFallback
      src={IMAGEKIT_MEDIA.header.logo}
      fallback={LOCAL_MEDIA.header.logo}
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
