import { ImageWithFallback } from "@/components";

// Component
export default function ImageViewer({
  src,
  fallback,
  alt,
  fill = true,
  sizes,
  quality,
  className = "",
  style,
}) {
  return (
    // modal content for image viewer
    <div className={`modal-content-viewer ${className}`.trim()}>
      {/* Figure is used to display the image */}
      <figure className="modal-content-viewer__frame">
        {/* Image With Fallback */}
        <ImageWithFallback
          src={src}
          fallback={fallback}
          className="modal-content-viewer__media modal-content-viewer__media--image"
          alt={alt || "Enlarged image preview"}
          fill={fill}
          sizes={sizes}
          quality={quality}
          onContextMenu={(e) => e.preventDefault()}
          style={{ ...style }}
        />
        {/* Figure caption */}
        <figcaption className="sr-only">
          {alt || "Enlarged image preview"}
        </figcaption>
      </figure>
    </div>
  );
}
