import Link from "next/link";
import { ImageWithFallback } from "@/components";

export default function Logo({
  src,
  fallback,
  withLink = true,
  href = "/",
  ariaLabel,
  linkClassName,
  logoClassName,
  alt,
  width,
  height,
  fill = false,
  priority = true,
  quality = 100,
}) {
  const logoImage = (
    <ImageWithFallback
      src={src}
      fallback={fallback}
      className={logoClassName}
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
